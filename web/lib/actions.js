// The options shown in the UI. Each one runs one Floyo workflow, or several in a row (steps).
//   configure(node, opts)  edits each node of the workflow JSON before the run
//   prepare(workflow)      edits the workflow as a whole
//   input:  "image" (default) | "video" | "none"   what the option works on
//   output: "image" | "video" | "audio"
//   hidden: true           used only as a step of a combined option, not shown as a card
// The uploaded file goes into every LoadImage (photo) or LoadVideo (video) node automatically.
export const ACTIONS = {
  remove_bg: {
    icon: "✂️",
    title: "Remove background",
    description: "A clean cutout of your product on a transparent background.",
    workflow: "workflow_wXGXj1ZqCNmUJrNr", // Qwen Image 2.1 for Background Removal
    output: "image",
    time: "about 1 min",
  },
  scene: {
    icon: "🏞️",
    title: "Place in a scene",
    description: "Put your product in any setting you describe, with realistic light and shadow.",
    workflow: "workflow_kL7E2m92qHEvbGf1", // Seedream 5.5 for Image Editing
    output: "image",
    time: "about 30 sec",
    promptLabel: "Describe the scene",
    defaultPrompt:
      "Place this product on a white marble countertop in a bright modern kitchen, " +
      "soft morning light, professional product photography",
    configure(node, { prompt, width, height }) {
      if (!node.class_type.startsWith("SeedreamV55Edit")) return;
      node.inputs.prompt = prompt;
      if (width && height) {
        const scale = 2048 / Math.max(width, height); // keep the photo's shape
        node.inputs.width = Math.round((width * scale) / 64) * 64;
        node.inputs.height = Math.round((height * scale) / 64) * 64;
      }
    },
  },
  edit: {
    icon: "✏️",
    title: "Edit with prompt",
    description: "Describe any change, like a new color or adding props, and it is applied to the photo.",
    workflow: "workflow_BTbzgFwc4d2zKLG5", // GPT Image 2.6 Flare Edit for Image Editing
    output: "image",
    time: "about 30 sec",
    promptLabel: "Describe the change",
    defaultPrompt: "Change the product's color to deep navy blue and keep everything else the same",
    configure(node, { prompt }) {
      if (node.class_type.startsWith("GPTImage26FlareEdit")) node.inputs.prompt = prompt;
    },
  },
  banner_scene: {
    icon: "🔗",
    title: "Lifestyle banner",
    description: "Two workflows in one click: place the product in a scene, then widen it into a banner.",
    steps: ["scene", "expand"],
    output: "image",
    time: "about 1.5 min",
    promptLabel: "Describe the scene",
    defaultPrompt:
      "Place this product on a wooden table in a cozy cafe, warm afternoon light, " +
      "professional product photography",
  },
  relight: {
    icon: "💡",
    title: "Studio relight",
    description: "Remove harsh light and shadows and relight the photo with soft studio light.",
    workflow: "workflow_AMeijw9yAbo4n7wz", // Qwen Image Edit 2509 · Relight
    output: "image",
    time: "2 to 15 min",
    note: "Slow when the model is not already loaded on Floyo",
  },
  expand: {
    icon: "↔️",
    title: "Expand to banner",
    description: "Widen the photo into a banner, filling the new space to match the scene.",
    workflow: "workflow_AHauAYViHMNLHGy7", // Qwen Image 2.1 for Image Outpainting
    hidden: true, // only used as step 2 of Lifestyle banner
    output: "image",
    time: "about 1 min",
    configure(node) {
      if (node.class_type === "ImagePadKJ") Object.assign(node.inputs, { top: 0, bottom: 0, left: 384, right: 384 });
    },
    // The saved workflow first runs a 12B language model (Gemma 4) to rewrite its own fixed
    // outpaint instruction. Loading it took 5+ minutes when cold; the fixed instruction alone
    // gives the same banner in about 1 minute. Turn the switch to the fixed instruction.
    prepare(workflow) {
      for (const node of Object.values(workflow)) {
        const source = workflow[node.inputs?.on_true?.[0]];
        if (node.class_type === "ComfySwitchNode" && source?.class_type === "TextGenerate") node.inputs.switch = false;
      }
    },
  },
  upscale: {
    icon: "🔍",
    title: "Upscale to 4K",
    description: "Four times the resolution, with sharper detail. Ready for print and large screens.",
    workflow: "workflow_rDA2xaLM8CNbJfcB", // NVIDIA PiD for 4K Image Upscale
    output: "image",
    time: "about 1 to 2 min",
    configure(node) {
      // the saved workflow predates this required setting; bf16 is the default
      if (node.class_type === "PiDPrepare") node.inputs.model_precision ??= "bf16";
    },
  },
  animate: {
    icon: "🎬",
    title: "Animate into a video",
    description: "Turn the photo into a 5-second 1080p video clip with sound.",
    workflow: "workflow_ZdttKqJDv3D9p3Bp", // Kling v4.0 · Image to Video
    output: "video",
    time: "about 9 min",
    note: "Uses about $1.20 of Floyo partner credits per video",
    promptLabel: "Describe the motion",
    defaultPrompt: "Slow cinematic camera orbit around the product, soft light, premium commercial look",
    configure(node, { prompt }) {
      if (!node.class_type.startsWith("KlingV4")) return;
      Object.assign(node.inputs, { prompt, duration: "5", resolution: "1080p" });
    },
  },
  // ---- Video options ----
  video_sound: {
    icon: "🔊",
    title: "Add sound to video",
    description: "Sound effects and background music generated to match what happens in your video.",
    workflow: "workflow_XWWmJ7gHdd2sPmsz", // MMAudio V2: Add Sound Effects to Any Video
    input: "video",
    output: "video",
    time: "about 30 sec",
    note: "Best for clips up to 30 seconds",
    promptLabel: "Describe the sound",
    defaultPrompt: "Soft ambient room sound with gentle, upbeat background music",
    configure(node, { prompt, duration }) {
      if (!node.class_type.startsWith("MMAudioV2")) return;
      // sound as long as the clip (the saved workflow is fixed at 8 seconds)
      const seconds = Math.min(Math.max(Math.ceil(duration || 8), 1), 30);
      Object.assign(node.inputs, { prompt, duration: seconds });
    },
  },
  video_edit: {
    icon: "🪄",
    title: "Edit video with prompt",
    description: "Describe a change, like a new color or background, and it is applied to the whole clip.",
    workflow: "workflow_vp8PGMV6hU5dVacX", // Gemini Omni Flash 1.1 for Video Edit
    input: "video",
    output: "video",
    time: "about 1.5 min",
    note: "Uses about $0.50 of Floyo partner credits; result is 720p",
    promptLabel: "Describe the change",
    defaultPrompt: "Change the product's color to deep navy blue and keep everything else the same",
    configure(node, { prompt }) {
      if (node.class_type.startsWith("GeminiOmniFlash11VideoEdit")) node.inputs.prompt = prompt;
    },
  },
  video_ad: {
    icon: "🔗",
    title: "Polished video ad",
    description: "Two workflows in one click: edit your clip with a prompt, then add matching sound.",
    steps: ["video_edit", "video_sound"],
    input: "video",
    output: "video",
    time: "about 2 min",
    note: "Uses about $0.50 of Floyo partner credits",
    promptLabel: "Describe the change",
    defaultPrompt: "Make the background a warm, cozy cafe and keep the product exactly the same",
  },

  // ---- Needs no photo or video ----
  music: {
    icon: "🎵",
    title: "Background music",
    description: "A 30-second instrumental track for your product video or ad, in the mood you describe.",
    workflow: "workflow_RgRrKXEgjwPomMMU", // ACE-Step 1.5 XL - Text to Music
    input: "none",
    output: "audio",
    time: "about 1 min",
    promptLabel: "Describe the music",
    defaultPrompt: "Upbeat acoustic background music for a product video, warm guitar, light percussion, cozy mood",
    configure(node, { prompt }) {
      if (node.class_type === "TextEncodeAceStepAudio1.5") {
        Object.assign(node.inputs, { tags: `${prompt} (instrumental)`, lyrics: "[Instrumental]", duration: 30 });
      }
      if (node.class_type === "EmptyAceStep1.5LatentAudio") node.inputs.seconds = 30;
    },
    // The saved seed is fixed at 0; a new seed per run gives a new track each time.
    prepare(workflow) {
      const sampler = Object.values(workflow).find((n) => n.class_type === "KSampler");
      const seedNode = workflow[sampler?.inputs.seed?.[0]];
      if (seedNode) seedNode.inputs.value = Math.floor(Math.random() * 2 ** 31);
    },
  },
};
