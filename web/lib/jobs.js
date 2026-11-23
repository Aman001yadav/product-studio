// A job is what the user started with one click. A single option is one Floyo run;
// a combined option (like Lifestyle banner) runs its steps one after another,
// each step using the previous step's result as its input.
import crypto from "node:crypto";
import path from "node:path";
import { ACTIONS } from "./actions.js";
import { DATA_DIR, cancelRun, downloadResult, getRun, startRun } from "./floyo.js";
import { pickOutput, stepsOf } from "./workflow.js";

const jobs = (globalThis.jobs ??= new Map()); // kept on globalThis so dev reloads keep it
const FINAL = ["complete", "failed", "canceled"];
const OUTPUT_WAITS = 8; // polls to wait for a finished run's file to appear (it can lag "complete")

// The user's prompt is for the first step; later steps use their own default prompt.
const optsFor = (job) => (job.step === 0 ? job.opts : { ...job.opts, prompt: undefined });

export async function createJob(actionId, file, opts) {
  const job = { id: crypto.randomUUID().slice(0, 8), steps: stepsOf(actionId), step: 0, opts, results: [], status: "queued", error: null, waits: 0 };
  job.runId = await startRun(job.steps[0], file && path.join(DATA_DIR, file), optsFor(job));
  jobs.set(job.id, job);
  return job.id;
}

// Check the current Floyo run; when it finishes, save its result and start the next step.
// Overlapping calls share one check, so a step is never downloaded or started twice.
export async function advanceJob(id) {
  const job = jobs.get(id);
  if (!job) return null;
  if (!FINAL.includes(job.status)) {
    job.pending ??= check(job).finally(() => { job.pending = null; });
    await job.pending;
  }
  return view(job);
}

async function check(job) {
  try {
    const run = await getRun(job.runId);
    const actionId = job.steps[job.step];
    const type = ACTIONS[actionId].output;
    if (run.status === "complete" && !pickOutput(run.outputs, type) && ++job.waits <= OUTPUT_WAITS) {
      job.status = "running"; // finished, but its file isn't listed yet
    } else if (run.status === "complete") {
      const file = await downloadResult(run, type);
      job.results.push({ actionId, file });
      if (job.step + 1 < job.steps.length) {
        job.step++;
        job.waits = 0;
        job.runId = await startRun(job.steps[job.step], path.join(DATA_DIR, file), optsFor(job));
        job.status = "queued";
      } else {
        job.status = "complete";
      }
    } else if (run.status === "failed" || run.status === "canceled") {
      job.status = run.status;
      job.error = run.error?.message || run.status;
    } else {
      job.status = run.status;
    }
  } catch (err) {
    job.status = "failed";
    job.error = err.message;
  }
}

export async function cancelJob(id) {
  const job = jobs.get(id);
  if (!job || FINAL.includes(job.status)) return;
  job.status = "canceled";
  await cancelRun(job.runId);
}

function view(job) {
  return {
    status: job.status,
    step: job.step + 1,
    total: job.steps.length,
    stepTitle: ACTIONS[job.steps[job.step]].title,
    results: job.results.map(({ actionId, file }) => ({
      actionId, file, title: ACTIONS[actionId].title, type: ACTIONS[actionId].output,
    })),
    error: job.error,
  };
}
