import fs from "node:fs";
import path from "node:path";
import { ACTIONS } from "@/lib/actions";
import { DATA_DIR } from "@/lib/floyo";
import { createJob } from "@/lib/jobs";
import { inputOf } from "@/lib/workflow";

// Start a job: { file?, action, prompt?, width?, height?, duration? } -> { jobId }
export async function POST(request) {
  const { file, action, prompt, width, height, duration } = await request.json();
  if (!ACTIONS[action]) return Response.json({ error: "Unknown action" }, { status: 400 });
  const needsFile = inputOf(action) !== "none";
  const name = needsFile && file ? path.basename(file) : null;
  if (needsFile && !(name && fs.existsSync(path.join(DATA_DIR, name)))) {
    return Response.json({ error: `Add a ${inputOf(action) === "video" ? "video" : "photo"} first` }, { status: 404 });
  }
  try {
    return Response.json({ jobId: await createJob(action, name, { prompt, width, height, duration }) });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 502 });
  }
}
