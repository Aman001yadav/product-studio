// Run: npm test
// Checks each option's workflow edits and the result-file picking against
// the real workflow JSON and real run outputs saved from Floyo (tests/fixtures).
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { ACTIONS } from "../lib/actions.js";
import { inputOf, pickOutput, prepareWorkflow, stepsOf } from "../lib/workflow.js";

const fixture = (name) => JSON.parse(fs.readFileSync(new URL(`./fixtures/${name}.json`, import.meta.url)));
const INPUT = "#inputs/api/uploads/mug.png";
const nodesOf = (wf, type) => Object.values(wf).filter((n) => n.class_type.startsWith(type));

const SINGLE = Object.keys(ACTIONS).filter((id) => ACTIONS[id].workflow);
const COMBOS = Object.keys(ACTIONS).filter((id) => ACTIONS[id].steps);
const WITH_PHOTO = SINGLE.filter((id) => inputOf(id) === "image");

for (const actionId of WITH_PHOTO) {
  test(`${actionId}: every LoadImage node gets the uploaded photo`, () => {
    const saved = fixture(`workflow_${actionId}`);
    const wf = prepareWorkflow(actionId, saved, INPUT);
    const loads = nodesOf(wf, "LoadImage");
    assert.ok(loads.length > 0);
    for (const n of loads) assert.equal(n.inputs.image, INPUT);
    assert.notEqual(nodesOf(saved, "LoadImage")[0].inputs.image, INPUT, "saved workflow is not changed");
  });
}

test("scene: uses the user's prompt and keeps the photo's shape (longest side 2048)", () => {
  const wf = prepareWorkflow("scene", fixture("workflow_scene"), INPUT, {
    prompt: "  on a beach at sunset  ", width: 1600, height: 900,
  });
  const [node] = nodesOf(wf, "SeedreamV55Edit");
  assert.equal(node.inputs.prompt, "on a beach at sunset");
  assert.equal(node.inputs.width, 2048);
  assert.equal(node.inputs.height, 1152); // 900 * 2048/1600, rounded to a multiple of 64
});

test("scene: an empty prompt falls back to the default scene", () => {
  const wf = prepareWorkflow("scene", fixture("workflow_scene"), INPUT, { prompt: "   " });
  assert.equal(nodesOf(wf, "SeedreamV55Edit")[0].inputs.prompt, ACTIONS.scene.defaultPrompt);
});

test("upscale: sets model_precision, which the saved workflow is missing (Floyo rejects the run without it)", () => {
  const saved = fixture("workflow_upscale");
  assert.equal(nodesOf(saved, "PiDPrepare")[0].inputs.model_precision, undefined);
  const wf = prepareWorkflow("upscale", saved, INPUT);
  assert.equal(nodesOf(wf, "PiDPrepare")[0].inputs.model_precision, "bf16");
});

test("expand: pads left and right only, to make a wide banner", () => {
  const wf = prepareWorkflow("expand", fixture("workflow_expand"), INPUT);
  const { top, bottom, left, right } = nodesOf(wf, "ImagePadKJ")[0].inputs;
  assert.deepEqual({ top, bottom, left, right }, { top: 0, bottom: 0, left: 384, right: 384 });
});

test("expand: turns off the slow 12B prompt-enhancer model and uses the fixed instruction", () => {
  const saved = fixture("workflow_expand");
  assert.equal(nodesOf(saved, "ComfySwitchNode")[0].inputs.switch, true, "saved workflow has it on");
  const wf = prepareWorkflow("expand", saved, INPUT);
  const sw = nodesOf(wf, "ComfySwitchNode")[0];
  assert.equal(sw.inputs.switch, false);
  assert.equal(wf[sw.inputs.on_false[0]].class_type, "PrimitiveStringMultiline", "falls back to the fixed text");
});

test("animate: 5-second 1080p clip with the user's motion prompt", () => {
  const wf = prepareWorkflow("animate", fixture("workflow_animate"), INPUT, { prompt: "slow orbit" });
  const node = nodesOf(wf, "KlingV4")[0];
  assert.equal(node.inputs.prompt, "slow orbit");
  assert.equal(node.inputs.duration, "5");
  assert.equal(node.inputs.resolution, "1080p");
});

test("edit: sends the user's instruction to the edit model", () => {
  const wf = prepareWorkflow("edit", fixture("workflow_edit"), INPUT, { prompt: "make it blue" });
  assert.equal(nodesOf(wf, "GPTImage26FlareEdit")[0].inputs.prompt, "make it blue");
});

test("music: a 30-second instrumental track in the mood the user describes, no photo needed", () => {
  const saved = fixture("workflow_music");
  const wf = prepareWorkflow("music", saved, null, { prompt: "calm piano" });
  const [enc] = nodesOf(wf, "TextEncodeAceStepAudio1.5");
  assert.equal(enc.inputs.tags, "calm piano (instrumental)");
  assert.equal(enc.inputs.lyrics, "[Instrumental]");
  assert.equal(enc.inputs.duration, 30);
  assert.equal(nodesOf(wf, "EmptyAceStep1.5LatentAudio")[0].inputs.seconds, 30);
});

test("music: a new seed each run, so the same prompt gives a new track", () => {
  const saved = fixture("workflow_music");
  const seedOf = (wf) => wf[nodesOf(wf, "KSampler")[0].inputs.seed[0]].inputs.value;
  assert.equal(seedOf(saved), 0, "the saved seed is fixed");
  const seeds = new Set([1, 2, 3].map(() => seedOf(prepareWorkflow("music", saved, null))));
  assert.ok(seeds.size > 1 && !seeds.has(0));
});

const VIDEO = "#inputs/api/uploads/mug_clip.mp4";

for (const actionId of SINGLE.filter((id) => inputOf(id) === "video")) {
  test(`${actionId}: every LoadVideo node gets the uploaded video`, () => {
    const wf = prepareWorkflow(actionId, fixture(`workflow_${actionId}`), VIDEO);
    const loads = nodesOf(wf, "LoadVideo");
    assert.ok(loads.length > 0);
    for (const n of loads) assert.equal(n.inputs.file, VIDEO);
  });
}

test("video_sound: sound as long as the clip, rounded up, at most 30 seconds", () => {
  const sound = (duration) => nodesOf(prepareWorkflow("video_sound", fixture("workflow_video_sound"), VIDEO, { prompt: "rain", duration }), "MMAudioV2")[0].inputs;
  assert.equal(sound(5.04).duration, 6);
  assert.equal(sound(90).duration, 30);
  assert.equal(sound(undefined).duration, 8, "unknown length keeps the workflow's 8 seconds");
  assert.equal(sound(5).prompt, "rain");
});

test("video_edit: sends the user's instruction to the video edit model", () => {
  const wf = prepareWorkflow("video_edit", fixture("workflow_video_edit"), VIDEO, { prompt: "make the mug blue" });
  assert.equal(nodesOf(wf, "GeminiOmniFlash11VideoEdit")[0].inputs.prompt, "make the mug blue");
});

test("a photo can't go into a video option's workflow", () => {
  assert.throws(() => prepareWorkflow("video_edit", fixture("workflow_edit"), INPUT), /no LoadVideo/);
});

test("combined options take the input of their first step and give the output of their last", () => {
  for (const id of COMBOS) {
    const steps = stepsOf(id);
    assert.equal(inputOf(id), inputOf(steps[0]), id);
  }
});

test("only Lifestyle banner uses the hidden Expand step", () => {
  assert.equal(ACTIONS.expand.hidden, true);
  assert.ok(stepsOf("banner_scene").includes("expand"));
});

test("an option that needs a photo is rejected if its workflow has no LoadImage node", () => {
  assert.throws(() => prepareWorkflow("edit", fixture("workflow_music"), INPUT), /no LoadImage/);
});

for (const actionId of COMBOS) {
  test(`${actionId}: combines existing single-workflow options`, () => {
    const steps = stepsOf(actionId);
    assert.ok(steps.length >= 2);
    for (const s of steps) assert.ok(ACTIONS[s]?.workflow, `${s} is a single workflow`);
    assert.equal(ACTIONS[actionId].output, ACTIONS[steps.at(-1)].output, "result type is the last step's");
  });
}

test("a combined option can't be sent to Floyo as one workflow", () => {
  assert.throws(() => prepareWorkflow("banner_scene", {}, INPUT), /several workflows/);
});

test("unknown action is rejected", () => {
  assert.throws(() => prepareWorkflow("nope", {}, INPUT), /Unknown action/);
});

// Real outputs from finished Floyo runs
const outputs = fixture("run_outputs");
const expected = {
  remove_bg: "Qwen_image_2.1_00001.png", // skips the two before/after preview files
  scene: "ComfyUI_temp_pmver_00001_.png", // the only output, so a temp file is fine
  relight: "Qwen-Image_00001_.png",
  expand: "ComfyUI_00001.png", // final file, not the _temp_ preview
  upscale: "pid_image_to_image_2kto4k_complete_00001_.png",
  animate: "Floyo_00001_.mp4", // the video (application/mp4), not the .txt log
  video_sound: "ComfyUI_00001_.mp4",
  video_edit: "Floyo_00004_.mp4",
  edit: "ComfyUI_temp_stnlx_00001_.png",
  music: "ace_step1.5_xl_base_00001.mp3", // audio/mpeg
};
for (const [actionId, file] of Object.entries(expected)) {
  test(`${actionId}: picks the right result file from the real run outputs`, () => {
    assert.equal(pickOutput(outputs[actionId], ACTIONS[actionId].output).file_name, file);
  });
}

test("no file of the option's type in the outputs: nothing is picked", () => {
  assert.equal(pickOutput([{ file_name: "log.txt", mime_type: "text/plain" }]), null);
  assert.equal(pickOutput([{ file_name: "a.png", mime_type: "image/png" }], "audio"), null);
});
