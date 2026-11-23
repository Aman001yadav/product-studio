// Pure functions, no network: easy to test (see tests/workflow.test.mjs).
import { ACTIONS } from "./actions.js";

// The node that loads the uploaded file, and its input field, for each kind of input.
const LOADERS = { image: ["LoadImage", "image"], video: ["LoadVideo", "file"] };

// What an option works on: "image", "video" or "none".
export const inputOf = (actionId) => ACTIONS[actionId].input || "image";

// Put the uploaded file and the action's settings into a Floyo workflow JSON.
// Returns a new object; the input is not changed.
export function prepareWorkflow(actionId, workflow, inputPath, { prompt, width, height, duration } = {}) {
  const action = ACTIONS[actionId];
  if (!action) throw new Error(`Unknown action: ${actionId}`);
  if (!action.workflow) throw new Error(`"${action.title}" runs several workflows; prepare each step`);
  const copy = structuredClone(workflow);
  const opts = { prompt: prompt?.trim() || action.defaultPrompt, width, height, duration };
  const [loader, field] = LOADERS[inputOf(actionId)] || [];
  let loaded = 0;
  for (const node of Object.values(copy)) {
    if (!node?.inputs) continue;
    if (node.class_type === loader) {
      node.inputs[field] = inputPath;
      loaded++;
    }
    action.configure?.(node, opts);
  }
  if (loader && loaded === 0) throw new Error(`Workflow for "${action.title}" has no ${loader} node`);
  action.prepare?.(copy, opts);
  return copy;
}

// Choose the result file from a finished run's outputs: a file of the option's type,
// never a before/after preview, preferring final files over "_temp_" previews.
const TYPES = { image: /^image\//, video: /^video\/|mp4/, audio: /^audio\// };
export function pickOutput(outputs = [], type = "image") {
  const files = outputs.filter((o) => TYPES[type].test(o.mime_type) && !o.file_name.startsWith("comfy.compare"));
  return files.find((o) => !o.file_name.includes("_temp_")) || files[0] || null;
}

// The single-workflow actions a run goes through, in order.
export const stepsOf = (actionId) => ACTIONS[actionId].steps || [actionId];
