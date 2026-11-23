// Run: npm run check:workflows
// Fetches each option's live workflow from Floyo (read-only, no credits) and checks
// it still has the nodes this app edits. Floyo workflows can change after we test them:
// the upscale workflow had already gained a required setting its saved JSON was missing.
import fs from "node:fs";
import { ACTIONS } from "../lib/actions.js";
import { prepareWorkflow } from "../lib/workflow.js";

const key = (process.env.FLOYO_API_KEY ||
  fs.readFileSync(new URL("../.env.local", import.meta.url), "utf8").match(/FLOYO_API_KEY=(.*)/)?.[1] || ""
).trim().replace(/^["']|["']$/g, "");

// The node each option edits (LoadImage / LoadVideo are checked by prepareWorkflow itself)
const needs = {
  scene: "SeedreamV55Edit",
  edit: "GPTImage26FlareEdit",
  expand: "ComfySwitchNode",
  upscale: "PiDPrepare",
  animate: "KlingV4",
  video_sound: "MMAudioV2",
  video_edit: "GeminiOmniFlash11VideoEdit",
  music: "TextEncodeAceStepAudio1.5",
};

let failed = 0;
for (const [id, action] of Object.entries(ACTIONS)) {
  if (!action.workflow) continue; // combined options reuse the single ones checked here
  try {
    const res = await fetch(`https://api.floyo.ai/workflows/${action.workflow}`, {
      headers: { Authorization: `Bearer ${key}`, Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { prompt } = await res.json();
    prepareWorkflow(id, prompt, "#inputs/check.png"); // throws if a photo option has no LoadImage node
    if (needs[id] && !Object.values(prompt).some((n) => n.class_type.startsWith(needs[id]))) {
      throw new Error(`no ${needs[id]} node`);
    }
    console.log(`ok    ${action.title}`);
  } catch (err) {
    failed++;
    console.log(`FAIL  ${action.title}: ${err.message}`);
  }
}
process.exit(failed ? 1 : 0);
