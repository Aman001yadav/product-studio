// Floyo API calls: upload -> put the image into the workflow JSON -> run -> poll -> download.
import fs from "node:fs/promises";
import path from "node:path";
import { ACTIONS } from "./actions.js";
import { inputOf, pickOutput, prepareWorkflow } from "./workflow.js";

const API = "https://api.floyo.ai";
const CDN = "https://cdn.floyo.ai";
const headers = { Authorization: `Bearer ${process.env.FLOYO_API_KEY}`, Accept: "application/json" };

export const DATA_DIR = path.join(process.cwd(), "data");

async function check(res) {
  if (!res.ok) throw new Error(`Floyo ${res.status}: ${await res.text()}`);
  return res.json();
}

export const MIME = {
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".mp4": "video/mp4", ".mov": "video/quicktime", ".webm": "video/webm", ".mp3": "audio/mpeg",
};

// Upload a local photo or video to Floyo storage; returns its input_path.
async function upload(filePath) {
  const form = new FormData();
  const type = MIME[path.extname(filePath).toLowerCase()];
  form.append("file", new Blob([await fs.readFile(filePath)], { type }), path.basename(filePath));
  form.append("path", "/api/uploads");
  form.append("on_conflict", "rename");
  const data = await check(await fetch(`${CDN}/upload`, { method: "POST", headers, body: form }));
  return data.input_path;
}

// Start a workflow run for an action. Returns the Floyo run id.
export async function startRun(actionId, filePath, opts) {
  const action = ACTIONS[actionId];
  const { prompt: saved } = await check(await fetch(`${API}/workflows/${action.workflow}`, { headers }));
  const inputPath = inputOf(actionId) === "none" ? null : await upload(filePath);
  const workflow = prepareWorkflow(actionId, saved, inputPath, opts);
  const run = await check(
    await fetch(`${API}/runs`, {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({ name: `Product Studio: ${action.title}`, workflow }),
    })
  );
  return run.id;
}

export async function cancelRun(runId) {
  return check(await fetch(`${API}/runs/${runId}/cancel`, { method: "POST", headers }));
}

export async function getRun(runId) {
  return check(await fetch(`${API}/runs/${runId}?expand=outputs.presigned_url`, { headers }));
}

// Save the run's result (image, video or audio) into data/; returns the file name.
export async function downloadResult(run, type = "image") {
  const output = pickOutput(run.outputs, type);
  if (!output) throw new Error(`The workflow finished but returned no ${type}`);
  const name = `${run.id}_${output.file_name}`;
  const res = await fetch(output.presigned_url);
  await fs.writeFile(path.join(DATA_DIR, name), Buffer.from(await res.arrayBuffer()));
  return name;
}
