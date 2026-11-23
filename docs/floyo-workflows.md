# Floyo verified workflows (950)

Fetched from GET https://api.floyo.ai/workflows?status=verified on 2026-11-23. Grouped by name and tags; one workflow appears in its first matching group.


## Background removal & cutouts (6)

| ID | Name | What it does |
|---|---|---|
| `workflow_HTnKdvpSrNBdREF6` | BiRefNet for Microscope Auto Segmentation | Drop in a microscope photo and BiRefNet finds the main subject, cuts it out, places it on a clean background, then upscales and sharpens it. Upload an image and hit run. |
| `workflow_BQyh25k63XCxyKdW` | Corridor Key Green Screen Keying for Video | Upload green screen footage and get a clean alpha matte plus composite preview. Corridor Key's neural network handles hair, motion blur, and transparency. |
| `workflow_DnyJgoTSH8m75DWv` | Grok Imagine: Edit Images with a Text Prompt | Edit any image with a text instruction using Grok Imagine. Upload a picture, describe the change, and get a side-by-side comparison back in under a second. |
| `workflow_zUd3D6FjQkHCm4jR` | MatAnyone2 V2V with Auto Segmentation | Remove any subject from video with MatAnyone2. Auto-detects by text, tracks frame by frame, and outputs a green screen, matte, and side-by-side comparison. |
| `workflow_wXGXj1ZqCNmUJrNr` | Qwen Image 2.1 for Background Removal | Upload a photo and Qwen Image 2.1 removes the background, returning a clean PNG cutout with a real transparent alpha channel. No masking, no post-processing. |
| `workflow_LzRbizonTK7Pf7hh` | Qwen Image Layered for Image Deconstruction | Upload one image and Qwen Image Layered pulls it apart into a clean foreground layer and a background layer you can edit, swap, or composite on their own. |

## Virtual try-on (20)

| ID | Name | What it does |
|---|---|---|
| `workflow_Z3SCqzEbvVhGhjkP` | Bria for Virtual Try-On | Upload a person photo and up to three garment images. Bria's FIBO-Edit 1.5 model dresses the person in those clothes, keeping their pose, face, and background intact. |
| `workflow_YHjBw35a546Nr34H` | Character + Outfit → High-End Editorial Shoot |  |
| `workflow_s1ERqyqV8Z32AEmW` | Clothing & Accessories Replacement |  |
| `workflow_UiAWYSZLFetn4WGj` | FireRed Image Edit 1.1 for Virtual Try-On | Upload a person photo and a clothing reference. FireRed Image Edit 1.1 swaps the outfit in 8 steps with a Lightning LoRA, keeping face and pose intact. |
| `workflow_8R9o1b5xZGBZSveh` | FireRed Image Edit 1.1 workflow | An open-source AI image editing model tuned for high-fidelity editing, character consistency, and multi-element composition. Excellent at changing visuals with straightforward prompts that may be used locally in ComfyUI. |
| `workflow_RwT8AFieS8XDk34y` | Flux Outfit Transfer | Virtual Outfit Try-On with Auto Segmentation  Try virtual clothing on any subject using Flux Dev, Ace Plus, and Redux, with automatic segmentation. Great for concept previews, fashion mockups, or character styling.  Key  |
| `workflow_zKZrrD5JEwmVj1BR` | FLUX.2 Klein 4B · Swap Clothes | Swap clothes on any person using FLUX.2 Klein 4B and LanPaint. Upload a person and a garment photo, describe the swap, and hit run. Apache 2.0 open weights. |
| `workflow_tLaDNugszoPYoBA2` | FLUX.2 Klein 9B + Virtual Tryon LoRA | Try a clothes using Flux.2 Klein 9B and tryon LoRA from |
| `workflow_kDkMy1S9RDcHKfV5` | Flux.2 Klein 9B Image Edit for Virtual Try-On | Upload a person photo and a clothing reference. Flux.2 Klein 9B swaps the outfit in 20 steps, keeping face and pose intact. Adjustable steps and CFG strength. |
| `workflow_mEDSci9bJVwiZ6Bv` | Generate Fashion Billboard Using Outfit Image | Upload the outfit image to generate fashion billboard |
| `workflow_Pu52es4cxw2jG393` | Google for Virtual Try-On | Upload a photo of a person and a photo of a clothing item. Google's Virtual Try-On model fits the garment to the body and returns a realistic result. No prompt needed. |
| `workflow_CZ388CMVT4FG8pHo` | GPT Image 2 for Virtual Try-On & Image Editing | Upload a person photo and a clothing reference. GPT Image 2 swaps the outfit via API, keeping face and pose intact. Optional mask for precision edits. |
| `workflow_kcipcJhoaSaEMMxT` | Nano Banana 2 for Virtual Try-On & Image Editing | Upload a person photo and a clothing reference. Nano Banana 2 swaps the outfit via API, keeping face and pose intact. Outputs up to 4K with web search. |
| `workflow_k5ALQLJucjm5MHyE` | Qwen Image 2.1 for Virtual Try-On | Upload a person photo and a clothing reference. Qwen Image 2.1 re-dresses them in the new outfit while keeping their face, pose, and background intact. |
| `workflow_2u7tCUiNT8CBhpFY` | Qwen Image 2.1 Outfit Swap | Upload a photo of a person and a photo of an outfit. Qwen Image 2.1 dresses them in it and keeps their face, body, and pose. Swap the full look or one piece. |
| `workflow_fhq1R3pirAYX9trR` | Seedance 2.0 Virtual Try-On · Reference to Video | Upload a clothing image and a model photo, and Seedance 2.0 generates a 10-second vertical get-ready-with-me video of the model wearing the outfit with spoken dialogue, natural motion, and native audio. |
| `workflow_HxjR1hXN4dLH9hHJ` | Seedance 2.0 — AI Virtual Try-On Fashion Videos | The workflow wears your outfit, moves naturally, talks to camera, and shows the full look — just like a real influencer video. |
| `workflow_pZ8idLS5diKEUd9n` | Seedream V5.0 Pro for Virtual Try-On & Image Edit | Upload a person photo and a clothing reference. Seedream V5.0 Pro swaps the outfit via API, preserving lighting, pose, and face. Supports 10 references. |
| `workflow_675qytPf1m1A1ZTp` | Seedream5_Outfit_Change_i2i | Seedream 5.0を使用した衣装変更用のImage to Imageワークフローです。 This is an Image to Image outfit change workflow using Seedream 5.0. |
| `workflow_8uF79g8ptMoDFEQP` | Seedream5_Outfit_Change_r2i | Seedream 5.0を使用した衣装変更用のReference to Imageワークフローです。人物画像と衣装画像をアップロードするだけで、元の人物の顔・雰囲気・ポーズを保ちながら、衣装画像を参考に服装を変更できます。 This is an Image to Image outfit change workflow using Seedream 5.0. |

## Product & e-commerce (80)

| ID | Name | What it does |
|---|---|---|
| `workflow_VTyTEFoTXd7DCezE` | Adding Sparkles to the Jewelry with Nano Banana 2 | Upload a jewelry photo and Nano Banana 2 adds natural light reflections, specular highlights, and prismatic refractions to every gemstone and diamond. Hit run. |
| `workflow_HF3raeHi8d28bHBG` | Create a Fashion Shoot  - NanoBanana + Kling |  |
| `workflow_9ZTm5eogGEQSt2Do` | 360 Degree Product Video Using Nano Banana Pro |  |
| `workflow_b3JbXjv7Fg1Y64pC` | 3D Products with Logo - Wan2.6 Image to Video |  |
| `workflow_h51UnLiP5FRv637J` | Add Products to AI Influencers + Viral UGC Videos | Create realistic AI influencer videos from product and character reference images using Qwen Image Edit 2511, Flux Kontext Multi-Reference, and LTX-2 Video in ComfyUI. Generate influencer-style images, maintain character |
| `workflow_HiUHzWL9Gjg9BRXp` | AI Beauty Ad Builder (Nano Banana + Kling) | Generate a realistic beauty influencer photo and transform it into a talking promotional video. |
| `workflow_64pkMjRCfUfPcnW2` | AI Beauty Ad Builder · Image to Video | Upload a model photo and a beauty product photo, composite them into a styled beauty image with Nano Banana 2, then animate it into a 10-second talking ad with Kling 2.6 Pro and hit run. |
| `workflow_Y7Fkt3wj49j6e3JW` | AI Influencer Ad Generator (Nano Banana + Wan 2.6) | Build your AI influencer, stage the product moment, and animate the full promo in one workflow. |
| `workflow_VgUY5tNyy64cGwKd` | AI Influencer Ad Generator (Seedream + Wan) | Build your AI influencer, stage the product moment, and animate the full promo in one workflow. |
| `workflow_h3HQMKsuiyjknzpk` | AI Influencer Ad Generator · Image to Video | Upload a person photo and a product photo, composite them into a styled ad image with Seedream 5.0 Lite, then animate it into a 10-second talking ad with Wan 2.6 at 1080p with native audio and lip-sync. |
| `workflow_NSJd1fj6eCpNBMkb` | AI Influencer Ad Generator · Image to Video | Upload a person photo and a product photo, composite them into a styled ad image with Nano Banana Pro, then animate it into a 10-second talking ad with Wan 2.6 and hit run. |
| `workflow_WYTefEhE5Zi4gTKj` | AI Influencer Video Maker (Nano Banana + kling) | Build your AI influencer, stage the product moment, and animate the full promo in one workflow. |
| `workflow_dNdto1KHD5RH1Tjq` | AI Influencer Video Maker (Qwen 2511 + LTX-2) | Build your AI influencer, stage the product moment, and animate the full promo in one workflow. |
| `workflow_GcJbKcpUFCxgah6f` | AI Influencer Video Maker · Image to Video | Upload a person photo and a product photo, and this two-step workflow composites them into a styled influencer image with Qwen Image Edit 2511, then animates it into a 10-second talking video with synchronized audio usin |
| `workflow_ruk5MWgJvEV2dL6U` | AI Influencer Video Maker · Image to Video | Upload a model photo and a product photo, and this two-step workflow composites them into a styled influencer image with Nano Banana Pro, then animates it into a 10-second talking video with Kling 2.6 Pro. |
| `workflow_3KkgedvCEgzoGrgA` | AI Meeting Summary from Video | Upload a meeting recording. Gemini Flash reads names off screen, Whisper transcribes audio, and you get a skimmable recap with who-said-what by name. |
| `workflow_FTWT4UktGpUon2DW` | AI Newsletter Generator with Subject Lines and HTM | Type your topic. Get back a newsletter draft, five subject line options with preview text, and paste-ready responsive HTML you can drop into any email platform. |
| `workflow_vJQ7UnHLgXw3woii` | Change Product Shots with NanoBanana Pro |  |
| `workflow_LeeuARkoNSjAysPQ` | Create Cinematic Poster & Ad from Your Product |  |
| `workflow_HmZL7N7F87h6j6vJ` | Create Magazine Cover & Package Design |  |
| `workflow_r1CSK3cN7GV37yif` | Create Photorealistic Packaging from Dielines |  |
| `workflow_TGeJLaXEyFZNVNKV` | Create Product Demo from Concept to Video | Create a high quality demo for your products using Kling 2.6 Image to Video |
| `workflow_Fn5DWCoz97z4YoAW` | DarkRoom Camera Raw Tools for Image Editing | Camera raw editing inside ComfyUI. White balance, exposure, HSL, clarity, vibrance, sharpening, noise reduction, and skin tone tools with before/after previews. |
| `workflow_czrUEPWaTVUhMcPg` | Flux 2 Klein 4B + Red Zoom LoRA for Image Zoom | Highlight any area of your image in red and Flux 2 Klein 4B zooms into it, generating a full-resolution close-up with new detail. Six steps, fast results. |
| `workflow_5Q7ZrAkoNuvQVojS` | GPT Image 1.5  Text to Image |  |
| `workflow_V9Tg7dwESHL95j6r` | GPT Image 2: Image Editing | Edit images with OpenAI's GPT Image 2. Upload one or two images, write what you want changed, and the model rewrites the scene while keeping details intact. |
| `workflow_ouMeuknMxkiufiri` | Happy Horse 1.0 - Image to Video | Animate a still image with Happy Horse 1.0. Upload a frame, describe the motion you want, get a 5-second clip with stable physics and consistent details. |
| `workflow_FerKpszgJHyC8fVs` | Happy Horse 1.0 - Text to Video | Generate cinematic video with synchronized audio from a text prompt using Alibaba's Happy Horse 1.0. Pick resolution, aspect ratio, and clip length up to 15s. |
| `workflow_22kHDxkUU7oadtkn` | Happy Horse 1.0 Video Editing | Edit any video with Happy Horse 1.0 by uploading up to 5 reference images. Swap backgrounds, change subjects, or shift style. Original motion stays intact. |
| `workflow_Ctu3qLevoDgdkuPB` | Insert Product into Existing Ad |  |
| `workflow_kMP2XuHv53oQocDK` | Insert Products in Ecommerce Ads - NanoBanana Pro |  |
| `workflow_gymGK199fYVCwNQm` | Jewelry Animator and  Sparkle with Seedance 2.0 | Animate jewelry shots with Seedance 2.0 while Nano Banana 2 adds natural sparkle, so the camera orbits the piece and light catches every facet as it turns. |
| `workflow_7qebpiLscCh725BJ` | Jewelry Environment Creator with Nano Banana 2 | Upload three reference images and Nano Banana 2 generates a new jewelry environment that matches their color, lighting, and visual style. Mood board to scene. |
| `workflow_LGnwjQPFV8DEj8Zd` | Jewelry Scene Compositor with Nano Banana 2 | Drop a ring photo and a background into the same workflow. Nano Banana 2 composites the jewelry into the scene seven ways so you can cherry-pick the best take. |
| `workflow_jQ3dWWZmHW1enGNr` | LongCat AudioDiT for Voice Clone | Clone any voice from a short audio sample with LongCat AudioDiT 3.5B. Upload a reference clip, type what you want it to say, and get speech in that voice. |
| `workflow_F9bgGzXm9DREYTDH` | LTX 2.3 + IC-LoRA Cameraman: Image to Video | Animate a still image with LTX 2.3 22B while a Cameraman IC-LoRA copies the camera motion from a reference video. Audio is generated in the same pass. |
| `workflow_Vmn5Hg4ojmUUA8FX` | MiniMax H3 - UGC Product Video | Upload a photo of your model and your product, write a beat-by-beat script, and MiniMax H3 generates a vertical UGC-style video with native audio in one pass. |
| `workflow_nifQ4RtcZXAxkykB` | MiniMax H3 Product Ad · Reference to Video | Upload a product photo and a style reference video, write a prompt describing the ad, and MiniMax H3 generates a cinematic product advertisement with stereo audio. |
| `workflow_QCg6UoEkXCBpbeoG` | Moonvalley Marey - Text to Video | Generate cinematic 5 or 10 second 1080p video clips from a text prompt with Moonvalley Marey, a commercially-safe model trained only on licensed footage. |
| `workflow_QMBE5C9x7aFG5MB7` | Moonvalley Marey Image to Video | Turn an image into cinematic 1080p video with Marey, Moonvalley's video model trained on licensed footage. 5s or 10s clips at 24fps, safe for commercial work. |
| `workflow_spDV81z6JUpYPaxx` | Nano Banana Pro for Multi Grid View of Product Ads | Create grids of different angles for your ecommerce products. |
| `workflow_rDA2xaLM8CNbJfcB` | NVIDIA PiD for 4k Image Upscale | Upload any image and NVIDIA PiD rebuilds it at 4K in four diffusion steps. No tiling, no separate upscale model. Add a caption for guidance, or leave it blank. |
| `workflow_Y3qgGY1TVuAFDd5b` | Orion 4D QR Code Generator from Text or URL | Type a URL or any text and get three scannable codes at once: a standard QR code, an Aztec barcode, and a branded creative QR with your logo in the center. |
| `workflow_x3LKFk4k1LWk6n8U` | PixVerse C1 - Image to Video | Animate a reference image into cinematic video with PixVerse C1. Pick your duration up to 15 seconds, resolution up to 1080p, and optional native audio. |
| `workflow_E6oe8tXyTTY4SXwc` | PixVerse C1 - Text to Video | Generate cinematic video from text with PixVerse C1. Up to 1080p, up to 15 seconds, with optional native audio synchronized in the same generation pass. |
| `workflow_1CRXvPsaXUeHKggC` | Pixverse C1 Reference to Video | Upload up to 7 reference images, tag each one, and generate a video that composes your characters, objects, and backgrounds into one scene with Pixverse C1. |
| `workflow_gG1JFQfVy9npaBjj` | Pixverse C1 Transition | Upload a start image and end image, describe the motion, and Pixverse C1 generates a video transition between them. Set duration, resolution, and audio. |
| `workflow_5Krr1WCs3rNreq9X` | PRISM Commercial Workflow | AI-powered text-to-image workflow for PRISM luxury hair oil commercial. Generates high-quality product shots with cinematic lighting and holographic effects. |
| `workflow_NRbBBco3i5WG7EsU` | Product Placement in Video |  |
| `workflow_F3fQc6qeUf7NPZA8` | Qwen 2511: Composite a Photoshoot For Kids Edu | Drop a person into any background with the lighting you choose, using Qwen Image Edit 2511. Upload three images, hit run, and keep the identity intact. |
| `workflow_Dkf4EHbQ43nP3yCK` | Qwen Image 2.1 - Inpainting | Upload a scene and a reference, name what to replace, and Qwen Image 2.1 fills the spot. |
| `workflow_ZcF7uXE3C5zGXGkW` | Qwen Image 2.1 Logo to Campaign Mockups | Upload one logo and a short brand brief. Qwen 3.5 writes eight campaign prompts. Qwen Image 2.1 generates a full advertising scene for each, with your logo on realistic packaging. |
| `workflow_xK9UgeMEmYQBJg1a` | Qwen Image 2.1 Product to Campaign Images | Upload a product photo and a short brief. Qwen 3.5 writes eight campaign prompts. Qwen Image 2.1 places your product in eight advertising scenes, preserving its packaging and branding. |
| `workflow_WEkZZxytpJwELDTU` | Qwen Image Edit 2509 and Grayscale to Color LoRA |  |
| `workflow_wdCywy9HJizjkE7L` | Qwen Image Edit 2509 · Combine Images | Merge up to three images into one scene with Qwen Image Edit 2509. Upload a subject, add items to place on it, describe the layout, hit run. Apache 2.0. |
| `workflow_mHa1PhDT374CoKzT` | Qwen Image Edit 2511 · Composite | Place a subject into a new scene using Qwen Image Edit 2511 and the Kontext multi-reference method. Upload a subject and a background, describe the edit, run. |
| `workflow_p4m1seiEJrLKNxPj` | Realistic Product or Props Replacement |  |
| `workflow_C2nBfhbABCg6DLhj` | RIFE Frame Interpolation (2x Smooth Motion) | Doubles your video's frame rate with RIFE AI interpolation for buttery-smooth motion. 24→48, 30→60fps. Keeps original resolution, passes audio through, works on any clip. Just load a video and set the output frame rate t |
| `workflow_PFCCAyQszvLj2i9o` | Seedance 2.0 ASMR Unboxing · Reference to Video | Upload a product photo and a hand/style reference, and Seedance 2.0 generates a 10-second vertical ASMR unboxing video with tapping sounds, paper folding, and slow satisfying reveals. |
| `workflow_zyUHSoyoghMCAERb` | Seedance 2.0 for Camera Angle and Motion Control | Take any video and re-shoot it with a new camera move. Seedance 2.0 keeps your scene intact and pulls the camera motion from a reference clip you upload. |
| `workflow_a7sRFTNqxMw8iV2e` | Seedance 2.0 for Jewelry Scene Animator | Animate jewelry from product photos with Seedance 2.0. Upload a start frame and up to 6 reference angles, describe the camera move, and get a 5-second clip. |
| `workflow_xqWszWmBy4BcWWrk` | Seedance 2.0 Product Tutorial · Reference to Video | Upload a product photo and a person photo, write a timed review script, and Seedance 2.0 generates a 15-second vertical product tutorial video with native audio, dialogue, and lip-sync. |
| `workflow_7LnBBzYDNefqhbHi` | Seedance 2.0 · Image to Video | Animate any still into a video clip with Seedance 2.0 by ByteDance. Upload a start image, add an optional end frame, describe the motion, and hit run. |
| `workflow_1hGEHwzANRjSNHe7` | Seedance 2.0 — AI UGC Fashion & Accessory Videos | Create viral UGC-style fashion and accessory videos  from just two photos |
| `workflow_vAH6W3oQ659Lk9Ph` | Seedance 2.0 — Make ASMR Unboxing Videos | Turn your product image and a style reference photo into a cinematic unboxing video. |
| `workflow_yWHJsGhx7mwRfTg3` | Seedance 2.0 — Product Tutorial Videos in Seconds | Turn any product photo into a realistic UGC-style product review and tutorial video. |
| `workflow_aXP5Ju65Fb8drmPc` | Seedance 2.5 Product Tutorial · Reference to Video | Upload a product photo and a presenter photo, describe the tutorial scene, and Seedance 2.5 generates a landscape video with the presenter demonstrating the product, with sound included. |
| `workflow_CPNH2Mpd5g7r64QJ` | Studio Relighting for Composited Products |  |
| `workflow_haWgv9CAcPXcTMrW` | Sulphur 2 - Text to Video | Generate video with synced audio from a text prompt using Sulphur 2, a stylized cinematic finetune built on Lightricks' LTX 2.3 video model. |
| `workflow_RGQiMp6U62Dr36Q5` | The Event Horizon Zimage production ready |  |
| `workflow_g5s9fZLoaN1GQHF9` | Turn a Photo Into a 15-Second Video Ad | Upload a person photo, describe your ad concept, and get a 15-second UGC video back. Add a product image optionally. |
| `workflow_KZr8bmEHoxYh2eVA` | Turn Any Podcast into Blog and Social Content | Drop in a podcast recording. Get back an SEO blog post, a ready-to-post social media package, and a hero image grounded in the actual episode visuals. |
| `workflow_2oNCTXxZpvnbeSnV` | Wan 2.6 Reference to Video |  |
| `workflow_EFAFemTY5sc3yeiH` | Wan 2.7 Multi-Reference Image to Video | Wan 2.7 Multi-Reference Image to Video |
| `workflow_ACVDCHvkgPvCVMSq` | Wan 2.7 Reference to Video with Motion Control | Wan 2.7 Reference to Video with Motion Control |
| `workflow_L2jTcGffFP48Lr95` | Wan 2.7 · Image Editing | Edit any image with Wan 2.7 Unified, Alibaba's thinking-mode model. Upload a picture, describe the change, and preview the result. Thinking mode on by default. |
| `workflow_Ron7VQU3H39nFRM9` | Wan 2.7 · Image to Video With Audio | Generate 1080p video with sound using Wan 2.7, Alibaba's flagship video model with a thinking mode. Upload a start image, describe the action, hit run. |
| `workflow_EDPv81XWWZ4KP43F` | Wan2.2 and Bullet Time LoRA: Transform Static Shots into Product Spins |  |
| `workflow_qCfaLLEB51FMpgKZ` | Z-Image Turbo · Text to Image | Fast Image Generation in Seconds |
| `workflow_uamMzG5nQd1nM789` | Z-Image Turbo: Fast Image Generation For Kids Edu |  |

## Upscaling (54)

| ID | Name | What it does |
|---|---|---|
| `workflow_pFvMYLB9JgH11N1a` | Basic Upscaler Workflow | Using for basic upscale every single image |
| `workflow_s3z35oQ2uMeH9EQj` | Block-wise Image Upscaling with Qwen | Block-wise Image Upscaling with Qwen |
| `workflow_w3eM2HLpcjesiJAe` | Bria for Increase Resolution | Upscale any image to 2x or 4x resolution using Bria Increase Resolution, a dedicated upscaling model trained on licensed data. Upload an image, pick your scale, and hit run. |
| `workflow_tGyrFcXkpPHKBeS4` | Crystal-3K Advanced Workflow | Workflow for |
| `workflow_99qkd8HxmQQPTeLG` | Film Grain + Simple Upscale |  |
| `workflow_N7K3GZiqVyVaBPfL` | FlashVSR for Video Upscale | Upscale your videos |
| `workflow_2SBShe14jF9UXBwR` | Flux Video Upscale | Upscale any video to 2K or 4K with FLUX Video Upscale by Black Forest Labs. Upload a clip, pick your scale factor, and hit run. |
| `workflow_4MBbwgdv1GB7C5Cu` | FLUX.1 Dev · Image Upscaler | Double any image's resolution with FLUX.1 Dev and 4x-UltraSharp. Upload a picture, hit run, and get a sharp 2x upscale refined tile by tile. Open weights. |
| `workflow_yEUesyGCusLF7QgX` | FLUX.1 Dev · Upscale With LoRA | Double any image's resolution with style-guided detail using FLUX.1 Dev and a LoRA. Upload a picture, load your adapter, and hit run. 2x upscale, tile by tile. |
| `workflow_NSpcwRjH4QA2tp8T` | FLUX.2 Klein 9B · Multi-image Edit + Upscale | Edit one photo using a second as reference, then refine and 4x upscale it with FLUX.2 Klein 9B by Black Forest Labs. Upload two images, describe the edit, run. |
| `workflow_QE1wpwK47NyEaVBq` | Full Z Image Base Model + Upscale ( Text 2 Image ) | A complete full base text-to-image process that produces photoreal results. This method will assist you in achieving detailed generations without sacrificing quality. This workflow is your shortcut to high-quality image  |
| `workflow_5y9c6SbX4UFyNRxg` | Image to 3D with Hunyuan3D w/ Texture Upscale | Create a 3D model from a reference image with Flux Dev texture upscaling. |
| `workflow_qn8ap1ZFBL9dvy25` | Image Upscaler (By Pixaroma) | This workflow can be used for upscaling images. It generates a new image when upscaling and the strength of new generation can be controlled by changing the denoise value (0.80 - minimal to no change, 0.95 - major change |
| `workflow_UAnUUEJrvQVv5JVd` | Image-to-Image Dataset Creation Workflow EP -2 | Create high-quality Image-to-Image datasets using ComfyUI with prompt automation, latent conditioning, LoRA control, and multi-stage refinement. Includes reference-based generation + upscale pipeline for consistent datas |
| `workflow_mFeQjtdSoiquZaEL` | LTX 2.3  ·  Image to Video For Kids Edu | Animate any photo into a 1080p video with synchronized audio using LTX-Video 2.3, Lightricks' 22B open-source model. Upload an image, describe the motion, and hit run. |
| `workflow_YeLPKC6cF5dRvjWA` | LTX 2.3 Image to Video with Two-Pass Upscaling |  |
| `workflow_omSzzFcYYKpWCD6L` | MiniMax H3 I2V · Image to Video with Upscale | Animate a starting image into video with synchronized audio using the open-weight MiniMax H3 FL2VA model, then automatically upscale the result 1.5x in a single run. |
| `workflow_GoEP8pQd4e2cgvEF` | Pika H3 Flex for Text Image to Video Upscale | Generate a 5-second video with synced audio from a text prompt or image using Pika H3 Flex, then upscale it to 2K. Write a prompt, hit run, download. |
| `workflow_7WLoUkNsM1ppZ9CV` | Qwen Image 2512 and NVIDIA PiD Text to 4k Image | Generate with Qwen Image 2512 and let NVIDIA PiD decode straight to 4K. One prompt, one run, a 4096px image with no separate upscale pass needed. |
| `workflow_rVNae8d5KrjYHGH3` | Realistic AI Influencer + Upscale (ComfyUI Hindi) | Create ultra-realistic AI influencer images using ComfyUI with high-quality prompts, LoRA, and multi-stage upscaling. Includes latent refinement + SEEDVR upscaler for sharp, professional results. Beginner-friendly Hindi  |
| `workflow_oijeLuZbDMd1gdKd` | RelayVSR Video 2x Upscale · Utility | Upload a video and double its resolution in a single pass using RelayVSR, a Wan2.2-based upscaler with one-step inference. Upload, run, download. |
| `workflow_NABZzU4dy1BHRQ19` | SD Ultimate upscale - Z-Image Turbo | Workflow uses SD Ultimate Upscale with a Z-Image Turbo model to generate new details. |
| `workflow_kaLRnXoFUf453AwK` | SeedVR 2 ultra resolution upscale | Using SeedVR 2 + UltimateSD Upscale + Z-Image Turbo to achieve extremely high resolution and sharp images. |
| `workflow_xTQy2j6fSuddLLCn` | SeedVR2 and TTP Toolset 8k Image Upscale |  |
| `workflow_JxhDD2MGwwERJ6oE` | SeedVR2 Upscale 4k - Film Grain - Sharp! | Ultimate SeedVR2 Image Upscaler - 4k Upscale with Film Grain and Sharpening! One Click Upscaler! |
| `workflow_9BhE9yzFcPjiVZ85` | SeedVR2 Video Upscaler | Upscale low-resolution videos, old clips, and AI-generated footage for FREE using SeedVR2.5 in ComfyUI |
| `workflow_3KkV2YxxzG6nV74o` | SeedVR2 · Image Upscaler | Upscale to Extreme Clarity |
| `workflow_GvM6N6cd9To1Pr4P` | SeedVR2 · Video Upscaler For AD Film | Upload a low-resolution video and SeedVR2 upscales it to 1080p in a single diffusion step, restoring fine detail, removing compression artifacts, and maintaining temporal consistency across every frame. |
| `workflow_AC919ev37yNJNUPh` | SeedVR2 · Video Upscaler For Anime | Upload a low-resolution video and SeedVR2 upscales it to 1080p in a single diffusion step, restoring fine detail, removing compression artifacts, and maintaining temporal consistency across every frame. |
| `workflow_jdzMMdAPM6nUT2GA` | SeedVR2 · Video Upscaler For Kids Edu | Upload a low-resolution video and SeedVR2 upscales it to 1080p in a single diffusion step, restoring fine detail, removing compression artifacts, and maintaining temporal consistency across every frame. |
| `workflow_yqU2aMVJvBSFqGhD` | SeedVR2 · Video Upscaler For Short Drama | Upload a low-resolution video and SeedVR2 upscales it to 1080p in a single diffusion step, restoring fine detail, removing compression artifacts, and maintaining temporal consistency across every frame. |
| `workflow_KFzQ6qVaifgpLNUm` | SeedVR2 · Video Upscaler For Viral SNS | Upload a low-resolution video and SeedVR2 upscales it to 1080p in a single diffusion step, restoring fine detail, removing compression artifacts, and maintaining temporal consistency across every frame. |
| `workflow_vo2bbyu6GdQfsoV8` | Simple SeedVR2 Upscaler | SeedVR2のシンプルなアップスケールワークフロー |
| `workflow_ZwQfrsZgPduQzVfV` | Topaz Image Face Upscale | Upscale any photo with built-in face recovery using the Topaz Labs API. Upload an image, pick a scale factor, and hit run. |
| `workflow_dJ7iWPnm8DDpmHFW` | Topaz Image Upscale Creative | Upscale any image up to 6x with Topaz Bloom 2, a diffusion-based creative upscaler that generates new detail as it enlarges. Upload an image, pick a scale factor, and hit run. |
| `workflow_Kks4okhmXiErGDem` | Topaz Image Upscale Generative | Upscale any image up to 4x with Topaz Wonder 3, a generative model that rebuilds missing detail instead of stretching pixels. Upload an image, pick a scale, and hit run. |
| `workflow_Frgg2Hd1fpyha3C3` | Topaz Image Upscale Precision | Upscale any image up to 4x with Topaz Gigapixel precision models, including face enhancement and detail recovery. Upload an image and hit run. |
| `workflow_K2z9pkDjqqEMjJPi` | Topaz Video Upscaler for Sharper Results | Upload a video, pick your enhancement model and quality level, and Topaz Video AI sharpens, denoises, and upscales it. Audio is preserved. Output is H265 MP4. |
| `workflow_SJS2QDBbaEBnXApG` | Ultimate Upscaler | Flux ultimate SD upscaler with detailer daemon and tile controlnet. Easy but extremely powerful. |
| `workflow_q3t2K5FoSArd4EMy` | upscale_chunk | upscale with chunks |
| `workflow_xmiW7MtHNG9dGwNf` | Upscaling Images to 4k using Qwen Image Edit 2511 | Upscale to 2k to 4k |
| `workflow_1Kguu6WB4aJNWoeE` | Vertical Video Background & Scene Rebuild |  |
| `workflow_QoWF3JkoPYF5gJ8T` | Vertical Video FX Inserter - Qwen + Wan 2.1 FunControl |  |
| `workflow_qCu6DU7RPJ7BfPe5` | Vertical Video FX Insterter / Element Pass with Seedream + Wan |  |
| `workflow_5Mix5zWMzaEPFdCB` | video_upscaler_per_chunk | upscale for long video without out of memory |
| `workflow_y1LnwzCy8zSvQJiM` | VideoUpscaler | Upscale the uploaded video |
| `workflow_QHs259xuc3rx5fYF` | Z Image Turbo Ipainting + Upscale | A workflow process of recreating, filling in, or fixing missing, damaged, or undesirable portions of any image to generate a smooth, complete vision |
| `workflow_z4mRi1Tct8WvH6V6` | Z Image Turbo Text to Image ( Latent + Model Upscale |  |
| `workflow_CvMAoKht3MXhLqH4` | Z-Anime - Text to Image with SeedVR Upscale | Generate anime and illustration art from text with Z-Anime, then upscale to 1080p with SeedVR. Compare the base render and the upscaled version side by side. |
| `workflow_E4UHFD8MTgj2cAT9` | Z-Image AI Influencer + Clothes & Pose Transfer | Create realistic AI influencer images with advanced clothes transfer, pose transfer, and cinematic styling using Z-Image Turbo + ControlNet in ComfyUI. Includes QwenVL prompt generation, Lineart ControlNet guidance, LoRA |
| `workflow_SCj5TCQ9wAHyGMpU` | Z-Image Turbo + DyPE + SeedVR2 2.5 + TTP  16k reso |  |
| `workflow_FndMBSAifBKSvX1a` | Z-Image Turbo - 2K Upscaler | Z-Image Turbo - 2K Upscaler |
| `workflow_g4vByscp8zmqWYDe` | Z-IMAGE TURBO WITH UPSCALE | Improves image quality with upscaling. |
| `workflow_fxufkSx5hjfkmRTh` | ZIT with face fix and upscale | Simple Z image turbo workflow. With a face fix and upscale. |

## Lip sync & talking avatars (26)

| ID | Name | What it does |
|---|---|---|
| `workflow_HuJWmqgvB4eaUfTE` | Image to Talking Video - LTX 2.3 + ElevenLabs UGC |  |
| `workflow_d1E5yNXF9UbQLP8f` | Image to Talking Video · Image-to-Video | Upload a close-up photo and turn it into a short video clip with lip-synced speech and stereo audio, powered by Flux 2 Klein and MiniMax H3. Pick a reaction, describe your subject, and hit run. |
| `workflow_DNFrPDRKMHWDwC95` | InfiniteTalk - Lip Sync Any Video to Any Audio |  |
| `workflow_zSNjYiJGxRrR9o9n` | InfiniteTalk / Image to Video: Unlimited Talking Avatar with Lip-sync |  |
| `workflow_pWXhSpLDr897Y8QQ` | InfiniteTalk · Image to Video | Upload a portrait and an audio file of any length, and InfiniteTalk generates a lip-synced talking avatar video that runs for the full duration of the audio using Wan 2.1 14B with windowed generation. |
| `workflow_V2w6k3XPkysiS9j1` | InfiniteTalk · Image to Video For AD Film | Upload a portrait and an audio file of any length, and InfiniteTalk generates a lip-synced talking avatar video that runs for the full duration of the audio using Wan 2.1 14B with windowed generation. |
| `workflow_zL9E1H5zXjCkr47Z` | InfiniteTalk · Image to Video For Kids Edu | Upload a portrait and an audio file of any length, and InfiniteTalk generates a lip-synced talking avatar video that runs for the full duration of the audio using Wan 2.1 14B with windowed generation. |
| `workflow_N4YHRfEvw8d7QET7` | InfiniteTalk · Image to Video For Short Drama | Upload a portrait and an audio file of any length, and InfiniteTalk generates a lip-synced talking avatar video that runs for the full duration of the audio using Wan 2.1 14B with windowed generation. |
| `workflow_PfsrC6XoeHtvSLPP` | InfiniteTalk · Image to Video For Viral SNS | Upload a portrait and an audio file of any length, and InfiniteTalk generates a lip-synced talking avatar video that runs for the full duration of the audio using Wan 2.1 14B with windowed generation. |
| `workflow_kheBdLfZLm4LGfU4` | Kling AI Avatar V2 Pro - Photo to Talking Video | Turn a photo into a talking video with Kling Avatar V2 Pro. |
| `workflow_PWqeySJfUFf7x5XD` | Kling AI Avatar V2 Pro · Photo to Talking Video | Upload a portrait and an audio file, and Kling AI Avatar V2 Pro generates a lip-synced talking avatar video with natural expressions, head movement, and 1080p output. |
| `workflow_nobQL9HJpuxpGczP` | LatentSync - Lip Sync Video from Audio | Make anyone in a video match your audio with LatentSync |
| `workflow_Nv3J9zcr3Uk68Et8` | LTX 2.3 - Audio to Video | Generate video from an audio track and a reference image with LTX 2.3 |
| `workflow_V5c4mGsGzbmjSL4D` | LTX 2.3 Image + Audio to Video | Generate Image to Video with Custom Audio using LTX 2.3 |
| `workflow_St1uZ4bUUebxFuLY` | LTX 2.3 Lip sync I2V - Advanced Series 02 | - Generates advanced lip sync image to video with LTX 2.3 with high quality and prompt adherence. - Related to the ComfyUI Advanced Video generation series on youtube channel : https://www.youtube.com/@AITold |
| `workflow_JNRAKpKoozxjTd6k` | LTX 2.3 Lip Sync · Image to Video For Kids Edu | Animate a portrait photo with accurate lip sync using LTX-Video 2.3, Lightricks' 22B open-source model with a lip sync LoRA. Upload a photo and an audio clip, describe the scene, and hit run. |
| `workflow_aUkeB9PEFhEizcKM` | LTX 2.3 Lip Sync · Image to Video For Viral SNS | Animate a portrait photo with accurate lip sync using LTX-Video 2.3, Lightricks' 22B open-source model with a lip sync LoRA. Upload a photo and an audio clip, describe the scene, and hit run. |
| `workflow_sW63NTNtPkqRtBr9` | LTX-2.3 LipDub + Voice Clone · Video to Video | Re-dialogue any video using LTX-2.3 with the LipDub LoRA and Chatterbox voice cloning. Upload a video, write new dialogue, and hit run. |
| `workflow_UqPZrVMBvdmxy2hK` | LTX-2.3 Pro - Image to Video with Lipsync | Animate a still image with LTX-2.3 Pro. Build a prompt from four parts (scene, dialog, ambient, style) and get a clip with lip-synced dialog and audio. |
| `workflow_JAnUFGwD6N5cCxdW` | LTX2.3 Lip Sync · Image + Audio to Video For Anime | Upload a portrait and an audio file. LTX 2.3 generates a 10-second 1080p video where the character speaks or sings in sync with your audio, using a three-pass upscaling pipeline with vocal separation, NAG, and static cam |
| `workflow_tCGWJ2ocMCQydvMa` | Sync Lipsync - Audio Driven Lip Sync for Video | Sync any audio track to a video face with Sync Lipsync. |
| `workflow_8Wb8GtCSP2qfoVNH` | Sync Lipsync 2 Pro · Video to Video | Upload a video and a new audio track, and Sync Lipsync 2 Pro replaces the lip movements to match the new audio while preserving facial detail, skin texture, and identity. |
| `workflow_uKYEeVU2113yviLz` | Talking avatar with LTX-2.3 (lip sync) | Provide audio and image, get a video of your character(s) talking |
| `workflow_EV711Zyirwsz6hG9` | Wan 2.1 FusionX MultiTalk · Image to Video | Upload a portrait and an audio file, and Wan 2.1 FusionX with MultiTalk generates a video of the character speaking or singing with precise lip-sync driven by your audio. |
| `workflow_QtqxW1GnnhpH61Up` | Wan 2.1 InfiniteTalk | Wan 2.1 InfiniteTalk talking video from audio and a reference clip |
| `workflow_5WSwbR54aceBCM8b` | Wan2.1 FusionX and MultiTalk - Image to Video | Turn any portrait - artwork, photos, or digital characters - into speaking, expressive videos that sync perfectly with audio input. MultiTalk handles lip movements, facial expressions, and body motion automatically. |

## Speech, voice & transcription (39)

| ID | Name | What it does |
|---|---|---|
| `workflow_nXqou2LrQPF3GjJv` | Change Emotion using IndexTTS2 | Clone any voice and change the emotional delivery. Upload audio, type new text, adjust emotions, and get speech with different feelings using the same voice. |
| `workflow_AJNu2fnMqJaoooF4` | Chatterbox Text to Speech | Text to speech workflow using Chatterbox |
| `workflow_yDf1NFu9zvdBhTj8` | CosyVoice 3 for Voice Clone | Clone any voice from a short audio clip using CosyVoice 3, Alibaba's multilingual zero-shot TTS model. Upload a voice sample, type your text, and hit run. |
| `workflow_Rws6hzhc8KGWcj81` | CosyVoice3 for Voice Conversion | Convert any voice recording into a different speaker using CosyVoice 3 by Alibaba. Upload two audio clips, hit run, and get it re-spoken in a new voice. |
| `workflow_ZTC4FroQFEABXR9C` | DramaBox: Direct a Voice Performance | Turn a scene-style prompt into a performed audio clip with DramaBox, Resemble AI's expressive open-source TTS model. Describe your speaker and delivery, optionally clone a voice, and hit run. |
| `workflow_B57oTw6ePCZUESXh` | ElevenLabs Eleven v4 for Text to Speech | Turn any script into a natural voiceover using ElevenLabs Eleven v4. Pick a voice, paste your text, and hit run. |
| `workflow_f8DsUCK3KZm1Ud72` | ElevenLabs Eleven v4 Turbo for Text to Speech | Turn any script into a natural voiceover using ElevenLabs Eleven v4. Pick a voice, paste your text, and hit run. |
| `workflow_cmrA6h6sMT5BJAGZ` | ElevenLabs Text to Speech | ElevenLabs Text to Speech |
| `workflow_yT6wkUEGFnuZDZS2` | Fish Audio S2 TTS - Expressive Text to Speech | Expressive Text to Speech |
| `workflow_Q1w7P5XcdDFS86no` | Fish Audio S2.1 for Voice Cloning | Clone a voice from short audio samples and generate speech from text using Fish Audio S2.1 Pro. Upload recordings, type your script, and hit run. |
| `workflow_vxpS9LvrsH14kmvq` | Fish Speech Voice Cloning TTS with Emotion Tags | Emotion Tags |
| `workflow_pRFXnF793uYnTxF6` | Gemini 3.1 Flash TTS for Text to Speech: | Turn any script into natural spoken audio with Gemini 3.1 Flash TTS, Google's text-to-speech model. Type your text, pick a voice, describe the tone, and hit run. |
| `workflow_No7zARTuqrgBV4Gb` | Gemini 3.8 Flash Lite TTS for Text to Speech | Turn any script into spoken audio using Google's Gemini 3.8 Flash-Lite TTS. Pick a voice, set the tone, and hit run. |
| `workflow_6LkhNj1RX5YV9nZW` | Gemini 3.8 Flash TTS for Text to Speech | Turn any script into spoken audio using Google's Gemini 3.8 Flash TTS. Pick a voice, describe the delivery style, and hit run. |
| `workflow_QZZN1LBri2ZLAY8m` | IndexTTS 2.5 and TTS Audio Suite for Voice Cloning | Clone any voice and shape its emotion with IndexTTS-2. Upload a short reference clip, type your text, set the mood with eight sliders, and run. |
| `workflow_3PbBycZbNJMoR3Dp` | IndexTTS2 · Voice Cloning With Emotion Control | Clone any voice and control emotional delivery with IndexTTS2, the open-weight TTS model. Upload a voice sample, type the text, and hit run. MIT license. |
| `workflow_GHAZRWGDW89eH5QF` | LongCat AudioDiT 3.5B - TTS, Voice Clone, Multi-Sp |  |
| `workflow_6x4a3sARpgv25Aak` | LongCat AudioDiT for Multi Speaker TTS | Clone two voices from short audio samples and generate dialogue between them with LongCat AudioDiT 3.5B. Upload your references, write your script, hit run. |
| `workflow_mx548V2Z8gAyhAJy` | LongCat AudioDiT for TTS | Turn text into spoken audio with LongCat AudioDiT 3.5B, Meituan's open-source diffusion TTS model. Clean voice quality in English and Chinese, no setup. |
| `workflow_bVrGA277Vj7RNN3x` | Minimax Speech 2.8 HD for Text to Speech | Create realistic speech using Minimax speech 2.8 |
| `workflow_Mk3y21m8pdmaF63c` | Morse Code to Speech | Upload Morse code audio, decode it to readable text, and convert to natural speech using ChatterboxTTS. Perfect for amateur radio transcription and accessibility. |
| `workflow_aqnof6okRrzs5Q6n` | Multi Model for Voice Convesion and Text to Speech | A workflow of TTS Audio Suite which can to use different type of audio models. |
| `workflow_5QfZpTWGNsdLBEzr` | Qwen3 ASR 1.7B - Speech to Text | Upload an audio file and Qwen3 ASR 1.7B transcribes it to text. Supports 52 languages, auto-detects the language, and handles noisy audio. No setup needed. |
| `workflow_e7ii3k9fkWhYeRr9` | Qwen3 ASR: Transcribe Audio | Upload audio and Qwen3's ASR engine returns the transcript, word-level timing for SRT subtitles, and an optional translation to English. Language auto-detected. |
| `workflow_UZLCAaHy7s67j88N` | Qwen3 for Voice Cloning | Clone any voice from a short audio clip using Qwen3 TTS, Alibaba's open-source speech model. Upload a reference, type your text, and hit run. Ten languages. |
| `workflow_UjxTuU2S36PRgZpq` | Qwen3 TTS DVA for Voice Cloning | Upload a 3-second voice clip, type what you want it to say, and Qwen3-TTS speaks it in that voice. Ten languages, built-in emotion controls, open source. |
| `workflow_Knn6ktvdpfQiU6bi` | SopranoTTS for Text to Speech | Turn speech using Soprano TTS |
| `workflow_u2sGHN68nPiAxgCh` | Sopro for Text to Speech | Turn your text to excellent speech using SoproTTS |
| `workflow_C17A9tyrLCPfD6M6` | Step Audio EditX for Voice Cloning | Upload a voice sample, transcribe it automatically with Whisper, then use Step-Audio EditX to clone that voice speaking your custom script. No trigger word needed. |
| `workflow_eicWv9AsPVHpy8f8` | Step Audio EditX for Voice Editing | Edit existing voice recordings with Step-Audio EditX. Change emotion, dialect, or style. Whisper transcribes your audio so you describe the edit, not the source. |
| `workflow_Z83U1zELjJxEpH1k` | Timbre Transfer (SeedVC) for Voice Change | Convert any voice into another with Seed-VC. Upload a source audio and a short reference clip, and the model rebuilds the audio in the reference voice. |
| `workflow_R6qcy4xU7RV3PeWc` | TTS and Speech Length Calculator | Speech calculator and TTS using Whisper and WhatDreamCost |
| `workflow_1MoT63zytTUazmUe` | VibeVoice Text to Speech Multi Speaker | Speech Multi Speaker |
| `workflow_tt9yKeQbdcTuzQnD` | VibeVoice · Text to Speech | Clone any voice from a short clip and read your text in it using VibeVoice Large by Microsoft. Upload a voice sample, type your script, hit run. MIT license. |
| `workflow_8ZDVPj2EG6Lgxs98` | Voice Changer using TTS Audio Suite (ChatterBox) | Convert any voice to match a target speaker using ChatterBox TTS. Upload source and narrator audio, run it, get back a converted MP3. No voice training needed. |
| `workflow_Gqk4AwQFzzQdFp4j` | VoxCPM2 for Text to Speech | Turn text into spoken audio with VoxCPM2. Describe the voice you want in plain language, type what it should say, and hit run. 30 languages, 48 kHz output. |
| `workflow_sAy5zHEFBpkYB4uo` | VoxCPM2 for Voice Cloning | Upload a short voice sample and type what you want it to say. VoxCPM2 clones the voice and generates new speech in 30 languages at 48 kHz studio quality. |
| `workflow_JKGoAkVUybPB73Tr` | Whisper Speech-to-Text and SRT Subtitle Generator | Upload any audio file and Whisper transcribes it into text with word-level and segment-level SRT subtitle files. Auto language detection included. |
| `workflow_uw8gxyAuTu5MiN2C` | Whisper STT | Create a text from speech using Whisper STT |

## Music & sound effects (13)

| ID | Name | What it does |
|---|---|---|
| `workflow_v6j7zxEw82E4Zg3s` | HunyuanVideo Foley: Create a Lifelike Sound |  |
| `workflow_2PEkNUKeKV62agaa` | ACE-Step 1.5 for Music Generation | Create stunning music using ACE Step 1.5 |
| `workflow_RgRrKXEgjwPomMMU` | ACE-Step 1.5 XL - Text to Music | Generate full songs with ACE-Step 1.5 XL Base. Write a style prompt, add structured lyrics like [Intro] [Verse] [Chorus], pick BPM and key, get an MP3. |
| `workflow_SCDjZa5KN4PmPU6i` | LTX-2.3 — Turn Any Image + Audio Into a Video | Bring any still image to life using audio |
| `workflow_mPvFBQ5R9BCtGdfJ` | Lyria 3.5 for Text to Music | Generate full songs and soundtracks from a text prompt using Google's Lyria 3.5 music model. Describe the genre, instruments, and structure, then hit run. |
| `workflow_nCm6KDJJwbDuLHSR` | MiniMax H3 · Music Video Generator | Upload 4 reference shots and your track. MiniMax H3 animates your subject across all four scenes and cuts to the beat automatically. |
| `workflow_ZtRhueZNiR3J6uDC` | Minimax Music 2.6 - Text to Music | Text-to-music with Minimax Music 2.6. Generate songs with vocals and backing from a style prompt and lyrics, or toggle instrumental mode for score only. |
| `workflow_aFmg1BE745Hqb2jr` | MiniMax Music 3 for Text to Music | Generate complete songs with vocals and full instrumentation using MiniMax Music 3. Write a style caption, add lyrics, and hit run. Up to five minutes. |
| `workflow_XWWmJ7gHdd2sPmsz` | MMAudio V2: Add Sound Effects to Any Video | Generate synchronized sound effects for any video using MMAudio V2, the open-source video-to-audio model from Sony AI and University of Illinois. Upload a video, describe the sounds, and hit run. |
| `workflow_d9z4WvTPuYgzGAbZ` | MMAudio: Video to Synced Audio | Generate synchronized audio with a given video input. It can be combined with video models to get videos with audio. |
| `workflow_k5ABPqfZm4TYqHUv` | Retro Disco Multi-Scene Concert Generator — GPT 2 | Drop any performer photo  → automatically generate 9 consistent retro disco concert images ready to cut into a music video. |
| `workflow_aPPw86nkFVV6Ehd9` | Sonilo v1.1 for Video Sound Effects | Upload a video and Sonilo v1.1 generates synchronized sound effects matched to the on-screen action. Describe the sounds you want or let the model read the scene on its own, then hit run. |
| `workflow_ciRznfhRtz98sGbf` | Sonilo V1.1 · Video to Sound Effects | Add realistic, synced sound effects to any video using Sonilo V1.1, a video-native AI sound model. Upload a video, describe the sounds you want, and hit run. |

## 3D (33)

| ID | Name | What it does |
|---|---|---|
| `workflow_x6dAoWPyU9PRAyJg` | AniSora 3.2 and Wan2.2: Best Practices for Generating Smooth Character 3D Spin |  |
| `workflow_h7tZJFiBqEuHZdCK` | asdasd | asdasd |
| `workflow_EQW5H6JVA7nGbnUD` | Chord for PBR Material Generation using Text to 3D | Create a 3D Game Material Asset using Chord Model from Ubisoft |
| `workflow_j7sNjHYr1G7cP7BK` | FLUX.1 Kontext · 3D Print Style (Image to Image) |  |
| `workflow_VSLH9tidQJTVr3yv` | Gaussian Splat to Image · Image to Image | Upload a screenshot from a 3D Gaussian Splat viewer and Qwen Image Edit 2511 with a specialized Gaussian restoration LoRA repairs blank areas, removes splat artifacts, and outputs a clean photorealistic image in 4 steps. |
| `workflow_n4ALP4ELgkDMqeW5` | Hi3D for Multiview to 3D | Upload one to four photos of an object from different angles. Hi3D V3 reconstructs a textured, PBR-ready 3D model you can open in Blender, Unity, or Unreal. |
| `workflow_ectZR84rCWpxEC3M` | Hi3D V3 · Image to 3D | Upload one image and Hi3D V3 by Math Magic reconstructs it into a high-detail 3D model with textures and PBR materials. Pick your format and download. |
| `workflow_7zKDjV7B9gkxUZ77` | Hunyuan 3D v3.1 for Part Splitter | Break a 3D mesh into clean, separate components using Tencent's Hunyuan 3D Part Splitter. Paste a link to an FBX file, hit run, and download each part individually. |
| `workflow_dxDyhhhFW5AFZpn7` | Hunyuan 3D v3.1 for Smart Topology | Upload a high-poly 3D model and retopologize it into clean, optimized geometry using Tencent's Hunyuan 3D PolyGen 1.5. Paste a model URL, pick your settings, and hit run. |
| `workflow_Zm8fvfSZSfwy9dFd` | Hunyuan 3D v3.1 Pro for Image to 3D | Upload a photo and Hunyuan 3D v3.1 Pro, Tencent's production-grade 3D model, generates a textured mesh you can download as a GLB file. Add extra angle photos to improve the result. |
| `workflow_bcM6SHr7RTLNegSx` | Hunyuan 3D v3.1 Pro for Text to 3D | Generate a textured 3D model from a text description using Tencent's Hunyuan 3D v3.1 Pro. Describe the object, set your polygon count, and hit run. |
| `workflow_HvBqtrUxwMvFRqs8` | Hyper3D Rodin V2 for Image to 3D | Turn your images into 3D using Hyper3D Rodin v2 |
| `workflow_MAEEujP8cEPT832e` | Image to 3D with Hunyuan3D | A simple workflow to create a detailed & textured 3D model from a reference image. |
| `workflow_QMeyfaKAhLVKreE3` | Meshy 7 · Image to 3D | Upload a photo or concept image and Meshy 7 generates a textured 3D model that matches it. Export as GLB, FBX, OBJ, USDZ, or STL. No 3D modeling needed. |
| `workflow_QAGd1WBpRa73ewfz` | Meshy 7 · Multi Image to 3D | Build a textured 3D mesh from up to four photos of the same object using Meshy 7, the image-to-3D model from Meshy. Upload your reference shots and hit run. |
| `workflow_24ap2yjLeQHXFypr` | Meshy 7 · Text to 3D | Describe any object and Meshy 7 generates a fully textured 3D model with PBR materials. Export as GLB, FBX, OBJ, USDZ, or STL. Write a prompt and run. |
| `workflow_ijKwv1z8t99FUr9t` | Meshy v6 for Image to 3D Model | Create a 3D model from Image using Meshy v6 |
| `workflow_saXHKVYHem8fPUTK` | Meshy v6 Text to 3D Model | Create a 3D using Meshy v6 text to model |
| `workflow_4EtW5op8Mdw2b9cU` | Minimax H3 Video Ref | Minimax H3 Video Ref |
| `workflow_u6DuRm69xzQgSDtN` | MoGe 2 for Perspective Image to 3D Mesh | Upload one photo and MoGe 2 by Microsoft Research converts it into a textured 3D mesh with depth maps, normal maps, and a downloadable GLB file. Hit run. |
| `workflow_nsdMJCMfCfnEUzUX` | MoGe 3 · 3D Geometry Estimation | Upload any photo and MoGe estimates its 3D structure, returning a depth map, normal map, or mask as a side-by-side PNG. |
| `workflow_9j6Uqg2wbAntf9bo` | MoGe-2 · Panorama to 3D Mesh | Turn a 360 panorama into a textured 3D mesh with MoGe-2, Microsoft's geometry model. Upload a panorama, hit run, and download a GLB you can open anywhere. |
| `workflow_KX3hwdbfVg4F7rMG` | Panorama to Panorama Depth and Normal Map | Upload a 360 panorama and get a full panoramic depth map using Apple's SHARP model. Multi-view estimation, stitched back into equirectangular format. Hit run. |
| `workflow_YpEvC7Z1ZVMLRMSz` | SHARP · Image to 3D Gaussian Splat | Upload one image and Apple's SHARP model generates a 3D Gaussian Splat in under a second, with a live 3D preview and a downloadable PLY file. |
| `workflow_enSn8rJwAnPHU2Y8` | Trellis 2 Image to 3D | Upload an image and Trellis 2 builds a textured 3D mesh with PBR materials. Outputs GLB ready for Blender, Unity, or Unreal in about a minute on an H100. |
| `workflow_RWYM8NhBG6JSLFD2` | Tripo P1 for Image to 3D | Upload one image and Tripo P1 builds a textured 3D model from it, with clean topology and PBR materials, ready for game engines, VR, and 3D editors. |
| `workflow_9bor5aDtbTnDDivz` | Tripo P1 for Text to 3D | Upload a photo and Tripo P1 generates a textured 3D model with clean low-poly topology, ready for game engines, 3D viewers, or further editing. No modeling required. |
| `workflow_EUNy9LzMnVVb4aXh` | Tripo P2 for Image to 3D | Upload one image and Tripo P2 builds a textured, game-ready 3D model with optional PBR materials. Preview it in the 3D viewer, then download. |
| `workflow_hnBpvgvB9yLE5nrb` | Tripo P2 for Text to 3D | Generate game-ready 3D models from text with Tripo P2 by Tripo AI. Get clean quad or triangle meshes with PBR textures. Describe an object and hit run. |
| `workflow_73SBVqczfLCZ943z` | Tripo3D for Image to 3D | Create 3D model using Tripo3D with v2.5 |
| `workflow_1e847uKXy1rV3GSq` | Tripo3D v2.5 for Multivew to 3D | Upload up to four photos of your subject from different angles and Tripo3D v2.5 builds a textured 3D mesh, ready for game engines, animation, or 3D printing. |
| `workflow_kXAfa9jYp8vAXSC3` | TripoSplat · Image to 3D Turnaround | Turn one photo into a 3D Gaussian splat with TripoSplat by VAST-AI, plus colour, depth, normal, and clay turntable videos. Upload an image and hit run. |
| `workflow_qhq1okxCuj4Ey2r9` | 🔥Create Stunning 10 Second 3D Spin Shots |  |

## Image to video (129)

| ID | Name | What it does |
|---|---|---|
| `workflow_jMaUBaV6PyZ3gBv3` | Kling 2.6 Pro for Image to Video | Create stunning videos using Kling 2.6 Pro |
| `workflow_aaSVCUqqf5Pjv9En` | LTX 2.3 - Extend Video | Add seconds to an existing video with LTX 2.3. Upload a clip, set the duration and mode |
| `workflow_7SdZhxMBt1PjDbvw` | 02_AdFilm_SUMI_v2b / LTX 2.3 3-Cut Batch | WFAIA 2026広告映像「SUMI」の3カットを、LTX 2.3 Image-to-Videoの独立ブランチとして再構成した公開検証版。代表キーフレーム、固定seed、各カットのプロンプト、ネイティブ音声、MP4保存までを収録。 |
| `workflow_aRWzbNX81FdgDzKE` | 05_Anime_YORUPAN_v4 / LTX 2.3 14-Cut Batch | WFAIA 2026「よるのパン屋さん / The Night Bakery」の完成版で採用した14カットを、LTX 2.3 Image-to-Videoの独立ブランチとして再現するバッチワークフロー。固定seed、入力画像、各カットのプロンプト、音声生成、MP4保存までを収録。 |
| `workflow_xm9PehMh9hAL1YiS` | 07_ShortDrama_KINGYO_v4 / LTX 2.3 10-Cut Batch | WFAIA 2026「ロボットと金魚 / The Robot and the Goldfish」の完成版で採用した10カットを、LTX 2.3 Image-to-Videoの独立ブランチとして再現するバッチワークフロー。固定seed、入力画像、各カットのプロンプト、音声生成、MP4保存までを収録。 |
| `workflow_hT5GoZEGcYi8LQox` | 11_Kids_MEBAE_v4 / LTX 2.3 8-Cut Batch | WFAIA 2026「おおきくなあれ / Grow, Little Seed!」の完成版で採用した8カットを、LTX 2.3 Image-to-Videoの独立ブランチとして再現するバッチワークフロー。固定seed、入力画像、各カットのプロンプト、音声生成、MP4保存までを収録。 |
| `workflow_sv3tF9cTY4jQ97Ln` | AI Travel Vlogger Generator · Image to Video | Upload a person photo and a location photo, composite them into a selfie-style travel image with Nano Banana 2, then animate it into a 10-second talking vlog clip with Kling 2.6 Pro. |
| `workflow_iMk7q6E6m2m6T4F9` | Anime Shot from a First Frame · MiniMax H3 | Animates one anime first frame into a 5-second shot at 2K with the MiniMax H3 API. Upload a finished frame and describe the motion. |
| `workflow_vXJvTAd3A1Qw65uo` | Anime Shot from a First Frame · Wan 3.0 | Animates one anime first frame into a 5-second shot with Wan 3.0. Upload a finished frame and describe the motion. Prompt included. |
| `workflow_T1L4y8w7UpijcArj` | Bernini-R · Image to Video | Generate or edit video with Bernini-R, ByteDance's unified 14B renderer built on Wan 2.2. Upload an image, pick a task mode, describe the motion, hit run. |
| `workflow_GyLBLQEfGrQZCfLB` | Boost Your Creative Video: Comprehensive Solutions |  |
| `workflow_2K9vLQtBRKJV9SzH` | Change in the Character using Image2Vid | Editing the character in the video without losing quality using video to video workflow |
| `workflow_3jtL7vWdtPmQ2CZd` | Character Reshoot using Qwen Edit 2511 + Kling O1 | Creating a reshoot for a character |
| `workflow_uuxq4XxXZJW27V2N` | FastVideo FastH3 for Image to Video | Animate any image into a video with synchronized audio using FastVideo FastH3, a distilled version of MiniMax H3. Upload a starting frame, describe the motion, and hit run. |
| `workflow_hxCNAJEQw4opGL67` | FLUX 3 · First & Last Frame to Video | FLUX 3 is Black Forest Labs' video model that builds the motion between two keyframes. Upload a start and end image for an HD clip up to 20 seconds. |
| `workflow_5vvaU6ReaibpBf35` | FLUX 3 · Image to Video | FLUX 3 is Black Forest Labs' multimodal video model that animates a still image into an HD clip up to 20 seconds. Upload an image, describe the motion, and run. |
| `workflow_HB13RW2Zv8iXorN1` | Full Anime Shot · H3 seq Interpolation Adapter | Animates one anime first frame into a whole 124-frame shot with MiniMax H3 open weights and our seq adapter. |
| `workflow_jdMy2bVDkBLiBbiW` | Gemini Omni Flash 1.1 for Image to Video | Turn a still image into a short video clip with synchronized audio using Google's Gemini Omni Flash 1.1. Upload a photo, describe the motion, and hit run. |
| `workflow_L4qm6UML8dC68DmT` | Gemini Omni Flash · Image to Video | Upload a starting image and describe the scene. Gemini Omni Flash by Google animates it into a 6-second video with native audio, cinematic motion, and synchronized sound effects. |
| `workflow_gnth4fz47QYFrkV9` | Grok Imagine Video · Image to Video | Upload a starting image and describe the motion. Grok Imagine Video by xAI animates it into a cinematic clip with synchronized audio, sound effects, and dialogue at 720p. |
| `workflow_tB98dPcsu1HNdowt` | Grok Imagine: Image to Video with Audio | Turn images into excellent video using the Grok Imagine |
| `workflow_MTFsxDPF8tV4oLKT` | Happy Horse 1.0 Reference to Video | Turn up to 9 reference images plus a prompt into a 5-second video with Happy Horse 1.0. Keep characters, products, and style consistent across the shot. |
| `workflow_oyvV5MszsBRi3gdK` | Happy Horse 1.1 · Image to Video | Upload a starting image and describe the motion you want. Happy Horse 1.1 animates it into a cinematic video with synchronized audio, dialogue, and lip-sync at up to 1080p. |
| `workflow_8c1Q5Bi5A3f7T5bH` | HAZARD FW26 - Apparel I2V (Seedance 2.0 Fast) | Turns a single apparel key visual into a short vertical cinematic clip with Seedance 2.0 Fast. A model walks toward camera down a neon corridor, the graphic staying sharp. Swap the image, prompt and aspect ratio (9:16 or |
| `workflow_Cg1hveTg2w2MAzAZ` | HITOMIGOKUU – FILM FLASH | A monochrome-and-gold image-to-video workflow created for the music video HITOMIGOKUU. It locks the Japanese title card and composition while animating antique-gold exposure flickers, film burn, dust, and ink-black atmos |
| `workflow_53NbVQsKH3TdCf74` | HunyuanVideo 1.5 for Image to Video |  |
| `workflow_xBGX7gqvjNNtmphD` | Image to Character Spin | See an image of a character spin 360 degrees.  Key Inputs  Image reference: Use any JPG or PNG showing your subject clearly  Width & height: Default resolution settings are noted: Default image resize resolution works be |
| `workflow_pn4nYHup3Jc93spp` | Image to Video with Multiframe Control | Used for image to video generation, including first frame, end frame, or other multiple key frames.  Key Inputs  Load Image (Start Frame): Use any JPG or PNG showing your subject clearly to start your video  Load Image ( |
| `workflow_JBGwg2WM7mvH3uLk` | Image to Video with Seedance Pro API | Animate a still into a 1080p clip with Seedance Pro by ByteDance. Upload a start and end image, describe the motion, and hit run. Smooth cinematic motion. |
| `workflow_DcqqNEqT2179Rk3g` | Image to Video with Wan | Turn still images into amazing videos with just prompts, using the SOTA Wan video model. |
| `workflow_tdCiREE2Q97BPMGT` | Image-to-Video with Reference Video (Prompt-Based Camera Rotation) |  |
| `workflow_CLQeMiR6pLHo6JsX` | Kling 2.5 Image to Video |  |
| `workflow_aKfitBM9EZLFCKcJ` | Kling 2.6 · Motion Control | Transfer motion from any video onto your character with Kling 2.6 by Kuaishou. Upload a character image and a reference clip, describe the scene, hit run. |
| `workflow_NwdRgMD6mgti1EPQ` | Kling 3.0 Pro Motion Control | Apply motion from a reference video to a still image with Kling 3.0 Pro. |
| `workflow_UY1RY4Kvhjtu5EVp` | Kling 3.0 Pro Motion Control · Image to Video | Upload a character image and a motion reference video, and Kling 3.0 Pro generates a new video of your character performing the referenced action with the option to keep the original audio. |
| `workflow_Z1kYAEXEPrNWGRVr` | Kling 3.0 Pro · Image to Video | Upload a start image and an optional end image, describe the motion, and Kling 3.0 Pro generates a cinematic video with native audio, lip-sync, and start-to-end frame control at up to 4K resolution. |
| `workflow_KYiTdW1js8hC6ebM` | Kling 3.0 Pro · Image to Video | Animate a still into a 4K clip with sound using Kling 3.0 Pro by Kuaishou. Upload a start and end image, describe the motion, and hit run. Up to 15 seconds. |
| `workflow_wZxVwrQ8VQUAAgPJ` | Kling 3.0 Standard for Image to Video | Animate the images using Kling 3.0 Standard |
| `workflow_CdAhzCMB6EieQSD9` | Kling Image to Video with Reference Control |  |
| `workflow_EktZusC5d5gnvUew` | Kling Master 2.0 Create Engaging Video Content |  |
| `workflow_A2GEqsajKY57wffx` | Kling O3 Pro - Image to Video |  |
| `workflow_pb6rRC5GpFHERUcF` | Kling O3 Pro Image to Video with Reference |  |
| `workflow_aCBuM8zcMRu72nd7` | Kling O3 Standard Image to Video with Reference |  |
| `workflow_QZNJmRQuNh7SDSEr` | Kling Omni One Image to Video |  |
| `workflow_ZdttKqJDv3D9p3Bp` | Kling v4.0 · Image to Video | Animate any image into a video with sound using Kling v4.0 by Kuaishou. Upload a start frame, describe the motion, and hit run. |
| `workflow_7AnExAvTCimQ3oT8` | Kling3.0_I2V_Character | Kling3.0を使用したImage-to-Videoワークフローです。スタートフレーム、正面図、キャラクターシートの3つをアップロードすることで、キャラクターの顔・衣装・雰囲気を保ちながら、一貫性の高い動画を生成できます。 This is an Image-to-Video workflow using Kling3.0. |
| `workflow_trRy7psBLLMkwatf` | LTX 2 19B Fast for Image to Video | A workflow for ltx 2 image to video using distilled model |
| `workflow_3FMS8YD2EoQBbZJN` | LTX 2.3 + Rogala for Prompt Relay and Overlay Txt | Turn a photo into a multi-scene video with synced audio and burnt-in text using LTX 2.3 and Prompt Relay. Upload an image, script your beats, hit run. |
| `workflow_Bv3Xhu18SWDQSsT6` | LTX 2.3 -  Motion Transfer | Copy any video's motion onto a still character photo using LTX 2.3 |
| `workflow_WGNLEkU4SMMjd7fT` | LTX 2.3 - Retake Video | Re-generate a specific segment of an existing video with LTX 2.3. |
| `workflow_doUv9vBPa9xKuMqt` | LTX 2.3 Advanced · Image to Video | Upload an image and LTX 2.3 22B animates it into a 10-second cinematic video at 1080p with synchronized audio, using a three-pass generation pipeline with spatial upscaling and Negative Attention Guidance for maximum qua |
| `workflow_o54UoyDX7YE6Ci34` | LTX 2.3 and LTXDirector for Video Generation | Build a clip on a timeline with LTX 2.3, the open-weight 22B model that writes picture and synced audio in one pass. Drop an image in, write the shot, run. |
| `workflow_uNkAHHaBF5RAy4Pf` | LTX 2.3 I2V (image-to-video) Distilled LoRA | Animate ANYTHING with this LTX 2.3 workflow. |
| `workflow_Ze9wsVYcLd1EkQhQ` | LTX 2.3 Image + Audio to Video · Image to Video | Upload an image and an audio track, describe the scene, and LTX Video 2.3 22B generates a video where the motion, energy, and pacing sync to your audio. |
| `workflow_PMxEMdLwbbneRHHM` | LTX 2.3 Image to video - Advanced Series 02 | Generates advanced image to video with LTX 2.3  with high quality and prompt adherence. - Related to the ComfyUI Advanced Video generation series on youtube channel : https://www.youtube.com/@AITold |
| `workflow_3hWfkPAVB82mG8ci` | LTX 2.3 Image to Video For AD Film | Animate any photo into a 1080p video with synchronized audio using LTX-Video 2.3, Lightricks' 22B open-source model. Upload an image, describe the motion, and hit run. |
| `workflow_JQMMcREDP81DeA5o` | LTX 2.3 Image to Video For Short Drama | Animate any photo into a 1080p video with synchronized audio using LTX-Video 2.3, Lightricks' 22B open-source model. Upload an image, describe the motion, and hit run. |
| `workflow_xDhCZy6W1HPLpAGg` | LTX 2.3 Image-to-Video and Text-to-Video (Combo) | Create both from Image-to-Video and Text-to-Video using LTX 2.3 |
| `workflow_pBcbAfSvLuzFteoC` | LTX 2.3 Start and End Frame Control | LTX 2.3 Image-to-Video Start and End Frame Control (First Frame-Last Frame/FLF) |
| `workflow_zCNAi7ufPyCnQ1Nu` | LTX 2.3 Text to Video and Image to Video | Generate video and audio together with LTX 2.3 22B. Switch between text-to-video and image-to-video with one toggle. Separate multimodal guidance keeps video and audio quality tuned independently. |
| `workflow_UXFCHd6HPSeAQr4G` | LTX 2.3 Two-Pass · Image to Video For Anime | Upload an image and LTX Video 2.3 22B generates a 5-second video at 1080p with synchronized audio, using a two-pass pipeline that renders at low resolution first then upscales in latent space for sharp, detailed output. |
| `workflow_uAyPHu1ceAmCCVJT` | LTX 2.3 · Image and Text to Video For Viral SNS | Animate a photo or generate video from text with synchronized audio using LTX-Video 2.3, Lightricks' 22B open-source model. Upload an image or toggle to text-only mode, describe the scene, and hit run. |
| `workflow_L21bG9CeZpfyRYD4` | LTX Director 2 · Timeline Video With Audio | Direct a multi-shot video on a timeline with LTX Director 2 and LTX-2.3. Drop images at the points you want, write what happens between them, hit run. |
| `workflow_FuZDxE8fHVwAXrxz` | LTX-2.3 Pro · Image to Video With Audio | Generate up to 4K video with sound using LTX-2.3 Pro, the quality tier of Lightricks' 22B model. Upload a start and end image, write the shot, hit run. |
| `workflow_Zs8VRrvejty4vCsa` | LTX-2.3 · Face Consistent Image to Video | Animate a face and keep identity locked through the clip with LTX-2.3 and a face LoRA. Upload a portrait, describe the scene, get 1080p video with audio. |
| `workflow_EvUBoMcM5MVBYPQx` | LTX-2.3: Image to Video With Audio | Turn a still into a 1080p clip with synchronized sound using LTX-2.3, the open-weight 22B model from Lightricks. Upload an image, write the shot, hit run. |
| `workflow_bgnqVa1UtPcMZuAb` | LTX-2.5 for Image to Video | Animate any image into a video clip with synced audio using LTX 2.5, Lightricks' 22B open-weights video model. Upload a frame, describe the motion, hit run. |
| `workflow_WQ1RPLrpVFR968FZ` | LTX-2.5 ICLoRA Motion Track for Image to Video | Animate a still image along motion paths you draw with LTX-2.5 and the Motion Track IC-LoRA. Upload an image, sketch the tracks, write a prompt, and hit run. |
| `workflow_U8ee8BHuvd9Gv33w` | LTX-2.5 · First and Last Frame to Video | Set a start image and an end image. LTX-2.5, Lightricks' open-source 22B video model, fills in the motion and audio between them. Upload two frames and hit run. |
| `workflow_NH65HkbLQgYos9Q2` | LTX2 Image + Sound to VIDEO | Image + Sound to VIDEO |
| `workflow_GbL4BmaqqwaRigGj` | LTX2.3_Start_End_Frame_opensauce | LTX2.3のStart Frame / End Frame対応Image to Videoワークフローです。オープンソースモデルのためAPIウォレットを消費せず、画像から動画生成を試せます。 This is an Image to Video workflow for LTX2.3 with Start Frame and End Frame support. Since it uses an open-source model, y |
| `workflow_AeZStNfxubK4Le4W` | LTX2.3_Start_Frame_Camera Control | LTX2.3のStart Frame / End Frame対応のImage to Videoワークフローです。カメラ制御のLoRAを入れました。 |
| `workflow_wHu4SNxpGBABw2Lm` | LTX2.3_YOSETA_StartEnd_v02_FLOYO | An LTX-Video 2.3 workflow for generating controlled video between a start and end frame. Designed to maintain composition and continuity while reducing unnecessary retakes in multi-shot video production. |
| `workflow_Exz7qxroy7CqtNqk` | MiniMax H3  Open Weights TI2V with Style Embedding | Generate video with native stereo audio using MiniMax H3 open weights. Write a prompt, add an optional start image and a style embedding, and hit run. |
| `workflow_5kENa3P44is59KdH` | MiniMax H3 Camera Control · Image to Video | Turn a still image into a video that follows a camera path you choose, using the MiniMax H3 (Hailuo 3.0) model. Upload a reference image, supply a camera reference video, write a prompt, and hit run. |
| `workflow_CYyqLDnvai8rYBVb` | MiniMax H3 Cinematic Start–End Frame I2V | MiniMax H3の開始・終了フレーム対応I2Vワークフロー。0.6MPの高速な動作検証から高品質化へ進められ、人物・背景・照明の一貫性を保つプロンプト設計に対応します。 / MiniMax H3 start/end-frame I2V workflow for efficient 0.6 MP motion tests with prompt controls for identity, background and lightin |
| `workflow_jm6jWYs1AhAwC9Le` | MiniMax H3 Max Image to Video · Image to Video | Turn a single image into a 5-second video with native audio using MiniMax H3 Max, upload your starting frame, describe the motion you want, and hit run. |
| `workflow_1t7mf2snN8gKwLib` | MiniMax H3 Open Weights · Image & Text to Video | Generate 2K video with stereo sound from a start image and a prompt using MiniMax H3 (Hailuo 3.0), the open-weights model. Mute the image to go text-only. |
| `workflow_C9PRrz9CTEvDBeHV` | MiniMax H3 · Character Motion Transfer | Upload a character image and a driving video. MiniMax H3 maps the motion onto the character and returns a new video with AI-generated stereo audio. |
| `workflow_ybwwmz8c4ZCuN8Ho` | MiniMax H3 · First & Last Frame to Video | Animate between two images with MiniMax H3 (Hailuo 3.0). Upload a first frame and an optional last frame, describe the motion, and hit run for a short 2K clip. |
| `workflow_r2HLg1VVVTSN7gCj` | MiniMax H3 · Reference to Video | Bring a photo to life with MiniMax H3 (Hailuo 3.0). Upload an image, describe the motion, add optional references to guide the look, and hit run for a 2K clip. |
| `workflow_R85AGGyndqbekEFM` | Minimax_H3_Image_to_Video_OpenWeight | Minimax H3を使用したImage to Videoワークフローです。オープンウェイトモデルのためAPIウォレットを消費せず、Load Imageにスタートフレーム画像をアップロードし、aspect_ratio、duration、promptを設定するだけで、すぐに動画生成できます。This is an Image to Video workflow using Minimax H3. Since it uses an open- |
| `workflow_bjD9C3KnFwe8C4c7` | My_WorkFlow_Minimax_H3_I2V |  |
| `workflow_Qz6WfExV679Ej4J8` | NEKO WA EKITAI / LTX 2.3 Liquid Cat Loop | WFAIA 2026 Viral SNS「ねこは液体」の最初の作品を、LTX 2.3 Image-to-Videoで再現する縦型ワークフロー。棚の上の猫が蜂蜜のように瓶へ流れ、満ちて瞬き、元の姿へ戻る1カット構成。固定seed、ネイティブ音声、MP4保存までを収録。 |
| `workflow_T2pTKRRXyTEU2deQ` | Next-Level Motion from Images using MiniMax |  |
| `workflow_mtD3Y61tcMwkx2Sj` | One-Video Sprite Sheet Pipeline | Crate video sprite sheet character |
| `workflow_e4CuyaNGDGgXZ4hk` | Pika_H3_Flex_Image_to_Video | Pika H3 Flexを使用したImage to Videoワークフローです。画像を読み込み、promptに動き・カメラ・音を入力するだけで、音付きの動画を生成できます。This is an Image to Video workflow using Pika H3 Flex. Load an image and describe the motion, camera, and sound in the prompt to gener |
| `workflow_PkB3fdSFYz2PFGMK` | Pixverse Swap for Image to Video Swap | You can swap object,, character and background using PixVerse |
| `workflow_oAD4HT3j4XNASsrC` | PROJECT EYE - Wan2.7 Image to Video | A simple workflow for generating cinematic shots from a single image using Wan2.7 Image-to-Video. This workflow was used in the production of the short film "PROJECT EYE". |
| `workflow_hdfPhz49pb3zukJN` | RAINBOW SHIFT / THE 8TH COLOR — WFAIA 2026 | Eight shots, one grammar. Wan2.2 Fun Camera i2v at 832x480/24fps/81f, camera_pose=Static, fixed seed. Only the suit colour and half a second of acting change. Gaze terms added to the Chinese negative are what stopped the |
| `workflow_Wbb2Ta6KkBL5A8Vw` | SCAIL-2 bf16 Loop FullLength Motion Transfer | Transfers the motion of a driving video onto a reference character image |
| `workflow_jyU8NVgVWNBmqSjv` | Seedance 1.5 Pro with Draft Mode | Draft mode lets you first experiment at a low cost by generating 480p draft videos |
| `workflow_rozqL2Yoignt712F` | Seedance 2.0 Fast - Image to Video with Audio | Animate any image into video with ByteDance's Seedance 2.0 Fast. Built-in audio generation, start and end frame control, and multiple aspect ratios. No setup needed. |
| `workflow_19197CjsJs8tkxu8` | Seedance 2.5 · Image to Video With Audio | Animate a still with sound using Seedance 2.5, ByteDance's 30-second video model. Upload a start image, add an end frame, describe the motion, and hit run. |
| `workflow_HUSR15Ed8P3NJzGr` | Seedance I2V: Image to Video in Minutes |  |
| `workflow_X3zn9A6g8xd1tLoa` | Seedance2.0 Full Reference-to-Video | This is a full-reference workflow for Seedance 2.0. It supports image, video, and audio references for more flexible video generation. Seedance 2.0用のフルリファレンス対応ワークフローです。 画像、動画、音声を参照でき、柔軟な動画生成が可能です。 |
| `workflow_QJdtCF9NkTTQoUA6` | Start/End Frame Multi-Video via Floyo API | Compare between Luma Dream Machine and Kling Pro 1.6 via Fal API |
| `workflow_5G5m58dJ554hNfaZ` | Storyboard to Video — GPT Image 2 + Seedance 2.0 | Turn a written scene description into a full animated  video — in two stages. |
| `workflow_LeYGY55ZeJt72Ue4` | TAPE_ECHO_WF | 複数の参照画像を読み込み、Seedance 2.0で動画を生成するworkflow。 |
| `workflow_ZLozRdKNbESpB4fF` | Turn a Photo Into a Video Ad · Image to Video | Upload a person photo and describe a product ad. The workflow generates an opening frame with Nano Banana 2, writes a video script, and produces a finished clip with spoken dialogue and sound using Seedance 2.5. |
| `workflow_c9J3XGzMJXyMmWCC` | Veo 3.1 Image to Video |  |
| `workflow_oWt9m8DEF9grQdw9` | Veo 3.1 Image to Video - First Frame & Last Frame |  |
| `workflow_RX7P43gKJ6hwG1Qw` | Vertical Video Character Face & Actor Swap (Wan 2.2 Animate) |  |
| `workflow_vt8MF5AHNLGPJxtC` | Vidu Q3 for Image to Video | Turn to images to real life |
| `workflow_bJCXTuEnb3Vt5Ycw` | Wan 2.1 FusionX · Image to Video | Animate a still into a cinematic clip with Wan 2.1 FusionX, a community fine-tune of Alibaba's 14B video model. Upload your image, describe the shot, hit run. |
| `workflow_HvNGni29sNJsL5bq` | Wan 2.2 14B · Image to Video + End Frame For Anime | Upload a start image and an end image, describe the motion, and Wan 2.2 generates smooth video between them using a dual-model pipeline with high-noise and low-noise passes for maximum quality in 6 steps. |
| `workflow_3vHke39XQuy962MW` | Wan 2.2 14B: I2V + End Frame For Kids Edu | Generate high quality video from a start frame, as well as an optional end frame with this Wan2.2 14b Image to Video workflow! |
| `workflow_kT71cVNkb59JM6w4` | Wan 2.2 14B: I2v + End Frame For Short Drama | Generate high quality video from a start frame, as well as an optional end frame with this Wan2.2 14b Image to Video workflow! |
| `workflow_TUPqTacbKAto7FtU` | Wan 2.2 14B: I2V + End Frame For Viral SNS | Generate high quality video from a start frame, as well as an optional end frame with this Wan2.2 14b Image to Video workflow! |
| `workflow_ZUjdezXG4E3Jza3p` | Wan 2.2 14B: Image to Video | Animate a still with Wan 2.2 14B, Alibaba's open-weight video model. Two experts split the render and a speed LoRA holds it to six steps. Upload and run. |
| `workflow_R3aMcTHVwDW4ST7A` | Wan 2.2 14B: Image to Video + End Frame | Generate high quality video from a start frame, as well as an optional end frame with this Wan2.2 14b Image to Video workflow! |
| `workflow_4kLvdmAPAwm1av5o` | Wan 2.2 14B: Image to Video+End Frame For AD Film | Generate high quality video from a start frame, as well as an optional end frame with this Wan2.2 14b Image to Video workflow! |
| `workflow_z3immFriYdaBqEE8` | Wan 2.2 Image to Video + End Frame | A workflow for creating a cinematic perfume advertisement using Wan 2.2 Image-to-Video with End Frame. It preserves character identity while generating smooth emotional motion between the start and end frames. |
| `workflow_4UVtoeyuERvBPyh4` | Wan 2.5: Image to Video with Audio |  |
| `workflow_9y2po1jyaupSSDGW` | Wan 2.6 · Multi-Shot Image to Video | Upload a starting image and describe your scene. Wan 2.6 automatically plans and renders multiple camera angles and shot transitions within a single video, with synchronized audio, dialogue, and character consistency. |
| `workflow_czbaY7L4n9xdmef4` | Wan 2.6 · Multi-Shot Image to Video | Turn a still image into a multi-shot video with sound using Wan 2.6 by Alibaba. The model plans camera cuts and syncs audio in one pass. Upload and run. |
| `workflow_EEq584DsZTLE5K3w` | Wan 2.7 Start/End Frame Cropped Image to Video | Generate high quality start/end frame video with Wan 2.7, output to 25:2 cropped and original aspect ratio. |
| `workflow_2SHh25MEXe23Yhc8` | Wan 3.0 Prime · Image to Video With Audio | Animate a still into a high-fidelity clip with sound using Wan 3.0 Prime, the quality tier of Alibaba's latest video model. Upload an image, describe the shot. |
| `workflow_s1uaGJn7sJ922HRA` | Wan 3.0 · Image to Video With Audio | Animate a still into a 30-second clip with sound using Wan 3.0, Alibaba's latest video model. Upload an image, describe the motion, and hit run. 1080p output. |
| `workflow_M2NCLzR6HPDqhUi1` | WAN i2v WF |  |
| `workflow_aJajy6NUG33uNCt5` | Wan2.1 + SCAIL for Animating Images for Movement |  |
| `workflow_URFkGCvXR8qaD8HZ` | Wan2.1 + WanMOVE for Animating Movement using Trajectory Path |  |
| `workflow_65tUn8m8M2D1qU2w` | Wan2.1 and ATI for Control Video Motion: Draw Your Path, Get Your Video |  |
| `workflow_qHEUxZqEsAcyFkti` | Wan2.1 Start & End Frame Image to Video | Used for image to video generation, defined by the first frame and end frame images. |
| `workflow_PFdgiEpog6JaYJgX` | Wan2.2 Fun Camera for Camera Control |  |
| `workflow_nH6a8HTngNM7W53r` | ⚡ MiniMax H3 I2V Turbo 4-Step｜高速画像動画化 | 【日本語】開始画像1枚を動画化する4-Step Turbo高速ワークフロー。16:9サンプル付き。画像と出力比率を合わせ、動き・カメラ・音を指定。5秒・24fps・音声ON。 【English】Fast 4-Step Turbo image-to-video workflow with a 16:9 sample. Match the input/output ratio; default 5s, 24 fps, audio on. |
| `workflow_sHDQuXBX72EMqtgh` | ペット動画パック｜写真1枚でオチ付き動画 | ペットの写真1枚から、オチ付きの6秒動画（音つき）を作ります。型は5つ: 1 空手 / 2 ディスコ / 3 残業中 / 4 魔法使い / 5 舞台デビュー。触るのはオレンジの4つだけ（写真・型の番号・ペットの特徴・秒数）。背景だけ作ってペットを合成するので、毛並みは写真のまま。FLUX.2 Klein 9B → MiniMax H3、Partner Nodes なし。 One pet photo → a 6-sec comedy cl |
| `workflow_qtRyCWcXM9Y8wH5t` | 写真1枚→2K動画｜Pika H3 Flex | スマホ写真1枚を、質感そのままの2K動画（音つき・5秒）に。Pika H3 Flex（MiniMax H3）で下書き→2Kに仕上げます。触るのはオレンジの5つだけ（写真・動き・音・秒数・仕上げの強さ）。動きと音は日本語OK、細かいタイミングは英語が確実。2Kで顔が変わったら仕上げの強さを下げてください（0.18→0.12）。Partner Nodes なし。 One photo → 2K video with sound. Edit o |
| `workflow_RJVhStZfFpt2KGCL` | 異和 -IWA- / AI Brand Film — FL2VA + I2VA Chain | 90秒の架空ライフスタイルブランド「異和」のブランドフィルム制作ワークフロー。Midjourney生成画像をSeeDanceのFL2VA（2画像間モーフ）とI2VA（単画像アニメーション）で映像化し、歌詞タイミングに完全同期させた「歌詞シンク構成」で編集。全21カットをFL2VA 12本+I2VA 9本のチェーン構造で接続。楽曲も自作。画像生成→動画生成→編集→タイポグラフィ→LPまで、一人のクリエイターによるトータルブランディング。 |

## Text to video (54)

| ID | Name | What it does |
|---|---|---|
| `workflow_nnH15d534538LubX` | Kling O3 Pro Text to Video |  |
| `workflow_9RDACryom5QeA2Bq` | Minimax H3 with Audio Refiner for Text to Video | Generate video with synchronized stereo audio from a text prompt using MiniMax H3, the open-source multimodal model by MiniMax. Write what you want to see and hear, then hit run. |
| `workflow_cuJN5TFXJ6GuGdQ6` | Seedance Text to Video: Create Stunning video |  |
| `workflow_gsfAXMkEKgXRgCDY` | BitDance 14B - Text to Image | Generate photorealistic images from text prompts using BitDance 14B, a 14-billion parameter autoregressive model that predicts up to 64 visual tokens per step. |
| `workflow_qjicqGd53vXnrjbu` | FastVideo FastH3 for Text to Video | Generate video with synchronized stereo audio from a text prompt using FastVideo FastH3, the 8-step distilled MiniMax H3 model. Write a scene, pick an aspect ratio, and hit run. |
| `workflow_E3C713CCmWWPmEom` | First and Next Scene · T2V For Short Drama | Describe an illustrated drama scene and what happens next using Qwen Image and Qwen Image Edit 2509 by Alibaba. Get two style-matched images in one run. |
| `workflow_Q7wXGYhz7m5LsZDt` | FLUX 3 · Keyframes to Video | FLUX 3 is Black Forest Labs' video model that hits up to 10 keyframes on a timeline you set. Upload your frames, place them, and get an HD clip with sound. |
| `workflow_kYZUALXk4RJkKJQ1` | FLUX 3 · Text to Video | FLUX 3 is Black Forest Labs' multimodal video model that turns a text prompt into an HD clip up to 20 seconds, with multi-shot scenes. Type a prompt and run. |
| `workflow_Jg4FshdCt9Mj7h4K` | FLUX Luxury Furniture Generator with LoRA Enhancem | Generate high-end furniture and interior design images with FLUX and multiple LoRAs. Perfect for product catalogs, showrooms, and design visualization. |
| `workflow_qLpodF23oBGeQoq7` | Gemini Omni Flash 1.1 for Text to Video | Generate video with sound from a text prompt using Google's Gemini Omni Flash 1.1. Describe a scene, set the duration and aspect ratio, and hit run. |
| `workflow_Pb9ECz2o8pNGvzBg` | Gemini Omni Flash · Text to Video | Write a prompt describing a scene and Gemini Omni Flash by Google generates a video with native audio at up to 8 seconds in 16:9, ready to download as MP4. |
| `workflow_sQJPMPPWSUArqCPL` | Grok Imagine for Text to Video | Create excellent videos using Grok Imagine for T2V |
| `workflow_BwPB5YSrE9C2a2WT` | Happy Horse 1.1 · Text to Video | Describe a scene in plain language and Happy Horse 1.1 generates a cinematic video with synchronized audio, dialogue, and lip-sync at up to 1080p. |
| `workflow_9grh1c41b3ABRVS1` | Kandinsky for Text to Video | Creating excellent videos using Kandinsky |
| `workflow_YCvTuSXpiSa3WCqx` | Kling 3.0 Pro for Text to Video | Create videos using Kling 3.0 |
| `workflow_PWkep1Pi2qvsG3MJ` | Kling 3.0 Standard for Text to Video | Create videos using Kling 3.0 Standard |
| `workflow_KTEsZfG8ydZ6y6M4` | Kling v4.0 · Text to Video | Generate video with sound from a text prompt using Kling v4.0 by Kuaishou. Describe the scene, pick a duration, and hit run. |
| `workflow_7Gp6gJUwqqyeV6kH` | LTX 2 19B Pro for Text to Video | An open source LTX 2 Pro for Text to Video |
| `workflow_Md9ifK48oHBh6FrM` | LTX 2.0 – Prompting & Dynamic Camera Movement |  |
| `workflow_zh7NvwGCozL869Sm` | LTX 2.3 for Text to 360 VR  Video Panorama | Describe a scene and LTX-2.3 by Lightricks generates a 360 video with synchronized sound that you can look around inside. Type a prompt and hit run. |
| `workflow_obbUKQDd7gcxKixf` | LTX 2.3 Pro Text to Video |  |
| `workflow_9Qx1Ak3wVJ8izy82` | LTX 2.3 Text to video - Advanced Series 01 | - Generates advanced text to video with LTX 2.3 with high quality and prompt adherence. - Related to the ComfyUI Advanced Video generation series on youtube channel : https://www.youtube.com/@AITold |
| `workflow_2wWnsMQ2o9TQ9sMX` | LTX 2.3 Text to Video for Ad Film | Generate cinematic ad film clips with synchronized audio using LTX-Video 2.3, Lightricks' 22B open-source model. Write a shot description and hit run. Toggle to image-to-video to animate a product photo. |
| `workflow_uEUGMRTf1KHBynZt` | LTX 2.3 Text to Video for Short Drama | Generate cinematic short drama clips with synchronized audio using LTX-Video 2.3, Lightricks' 22B open-source model. Write a shot description and hit run. Toggle to image-to-video to animate a product photo. |
| `workflow_EiNdtZK3QKcGNNr5` | LTX-2 19B · Text to Video With Audio | Generate 1080p video with synced sound from a text prompt using LTX-2, Lightricks' open-weight 19B model. Write the scene, hit run. Apache 2.0 open weights. |
| `workflow_CNuTuH6uaVMUBQVz` | LTX-2.5 Fast · Text to Video | Generate video clips with synchronized audio from a text prompt using LTX-2.5 Fast, the speed tier of Lightricks' open-weights video model. Describe a scene, hit run, and get a clip with sound back in seconds. |
| `workflow_yYSMo9w9gPGLW47b` | LTX-2.5 for Text to Video | Generate video with synchronized audio from a text prompt using LTX-2.5, the 22B open-weights model by Lightricks. Write a scene, hit run, get a clip with sound. |
| `workflow_R7BMBkQMgUBgzErW` | LTX-2.5 Pro · Text to Video | Generate video clips from a text prompt using LTX-2.5 Pro, the quality tier of Lightricks' open-weights video model. Describe a scene, hit run, and get a 1080p clip back. |
| `workflow_YaGWRV9r8FPAZ1h7` | LTX2.3 Text to Video Open Source Ver. | LTX2.3のText to Videoワークフローです。オープンソースモデルを使用しているため、APIウォレットを消費せず動画生成を試せます。 Text to Video workflow using LTX2.3. Generate videos without spending your API wallet. |
| `workflow_cBmPB9TUwavReuyp` | MiniMax H3 ControlNet Pose · Video Pose Control | Upload a video of someone moving and describe a new scene. MiniMax H3 follows the motion with ControlNet pose tracking and generates a matching video with synced audio. |
| `workflow_3zc8CbKfbrVQ233d` | Minimax H3 Max for Text to Video | Generate video with native stereo sound from a text prompt using MiniMax H3 Max, fal's post-trained version of MiniMax H3. Write a prompt, pick a duration, and hit run. |
| `workflow_1QPa4RKZNGUAqM87` | MiniMax H3 Max Turbo · Text to Video | Generate short video clips with sound from a text prompt using MiniMax H3 Max Turbo, fal's speed-optimized video model. Describe a scene, hit run, and get a video with audio back in seconds. |
| `workflow_Tou45K9E8FM2AkXK` | MiniMax H3 · Text to Video | Type a prompt and get back a native 2K video clip with synchronized sound from MiniMax H3 (Hailuo 3.0). Describe the scene, pick a length, and hit run. |
| `workflow_VKXK84H1Mmvk76HG` | MiniMax Text-to-Video Creative Concepts to Life |  |
| `workflow_GufTKVMLGrMJCndB` | Minimax_H3_Max_Text_to_Video | Minimax H3 Maxを使用したText to Videoワークフローです。promptに作りたい映像を入力し、ratio、duration、resolutionを設定するだけで、すぐに音付きの動画を生成できます。This is a Text to Video workflow using Minimax H3 Max. Just enter a prompt and set ratio, duration, and resolu |
| `workflow_Dv1119RaqTKWoXUs` | Pika H3 Flex for Text to Video | Generate video with synchronized audio from a text prompt using Pika H3 Flex, the open-weight model built on MiniMax H3. Describe the scene, the action, and the sounds you want, then hit run. |
| `workflow_mePTiuK43iMmAgJt` | Pika_H3_Flex_Text_to_Video | Pika H3 Flexを使用したText to Videoワークフローです。promptに作りたい映像を入力し、aspect_ratio、megapixels、durationを設定するだけで、すぐに音付きの動画を生成できます。This is a Text to Video workflow using Pika H3 Flex. Just enter a prompt and set aspect_ratio, megapixels |
| `workflow_xa34cnRnDxcXNpSi` | Seedance 2.0 Fast - Text to Video | Generate video with native audio from a text prompt using Seedance 2.0 Fast. Describe a scene, pick a duration and aspect ratio, get a clip with synced sound. |
| `workflow_dC5ft5AaHHJRxpe3` | Seedance 2.0 Mini · Text to Video | Write a prompt and Seedance 2.0 Mini by ByteDance generates a 5-second 720p video with native audio at low cost, powered by the same architecture as the full Seedance 2.0 model. |
| `workflow_KtkScSeHDr3qzM4m` | Seedance 2.0 Reference-to-Video with LLM Prompt |  |
| `workflow_CeQeHAs3FA5CDTEJ` | Seedance 2.0 · Text to Video | Generate a video clip from a text prompt with Seedance 2.0 by ByteDance. Describe the scene, the action, and the camera. Pick a shape and length, hit run. |
| `workflow_KVTx1aoC8RYxPV1m` | Seedance 2.5 · Text to Video With Audio | Generate video with sound from a text prompt using Seedance 2.5, ByteDance's 30-second video model. Write the scene, pick a shape and length, hit run. |
| `workflow_jC9Ejs1eqZDTXQ8L` | Text to Video + Hunyuan LoRA | Integrate a custom model with your text prompt to create a video with a consistent character, style or element.  Key Inputs  Prompt: as descriptive a prompt as possible. Make sure to include the trigger word from your Lo |
| `workflow_EV4sp3H2iZfdWGJ7` | Text to Video and Wan with optional LoRA | Generate a high-quality video from a text prompt and add in a LoRA for extra control over character or style consistency.  Key Inputs  Prompt: as descriptive a prompt as possible  Load LoRA: Load your reference model her |
| `workflow_5xdqd6egtDPxFDbG` | VEO3  Future of Video Creation |  |
| `workflow_536JND9WsQcpZ27j` | Vidu Q3 for Text to Video | Create good videos with Vidu Q3 |
| `workflow_872t8AJk7hvJ1MB4` | Wan 2.2 14b - Text to Video w/ LoRA | Run Wan 2.2 14b with a custom LoRA |
| `workflow_QdP7m8XACAgvf4os` | Wan 2.2 T2V Workflow with UnifiedReward Flex LoRA | Wan 2.2 T2V Workflow with UnifiedReward Flex LoRA |
| `workflow_kNab75Hny6Z73buv` | Wan 2.7 - Text to Video | Generate video from a text prompt using Alibaba's Wan 2.7 model. Set your resolution, aspect ratio, and duration, then hit Run. Audio input supported. |
| `workflow_hYUuvXngRYsfcz4D` | Wan 3.0 Prime · Text to Video With Audio | Generate a high-fidelity clip with sound from a written prompt using Wan 3.0 Prime, the quality tier of Alibaba's latest video model. No image needed, just describe the shot. |
| `workflow_vBmD416LykqN8CPM` | Wan 3.0 · Text to Video With Audio | Generate up to 30 seconds of 1080p video with sound using Wan 3.0, Alibaba's latest video model. Write a prompt, set the duration, and hit run. Audio included. |
| `workflow_WhhDdxRHA6tBsG31` | Wan Alpha Create Transparent Videos |  |
| `workflow_nQ1ce9gjziFRUucD` | Wan2.6 Text to Video |  |
| `workflow_c1rJXDw7G3PEEvGS` | ⚡ MiniMax H3 T2V Turbo 4-Step｜高速テキスト動画生成 | 【日本語】画像不要で映像と音声を生成するMiniMax H3 4-Step Turbo高速T2V。5秒・864×480・24fps・音声ON。promptとサイズを変えて実行できます。 【English】Fast MiniMax H3 text-to-video powered by the 4-Step Turbo LoRA. No image required; default 5s, 864×480, 24 fps, audio  |

## Video to video / editing (56)

| ID | Name | What it does |
|---|---|---|
| `workflow_5MK2fDaXXUGirsUL` | Auto Subtitles with Whisper - Video to Video | Upload a video and get it back with burned-in subtitles. Whisper transcribes the audio, then the text gets placed frame-by-frame with word-level timing. |
| `workflow_4NuyX2emb7KMw4c1` | Camera Angle Creation using Image2Vid | Using witness cameras to recreate additional shots that were not captured by principal photography |
| `workflow_QZkoY54RJJTSNmmg` | Gemini Omni Flash: Video Editing | A prompt-based video editing workflow that lets you edit an existing video with a plain-language instruction using Google's Gemini Omni Flash model. |
| `workflow_Un8ZDsXz1J2DXGSg` | Happy Horse 1.0 for Video Color Grading Multitone | Apply duotone, tritone, or reference-based color grading to any video using Happy Horse 1.0, Alibaba’s top-ranked video editing model. Upload a clip, pick your colors, and hit run. |
| `workflow_22ebcW1tMbZcRGvg` | Horizontal to Vertical Video Reframe |  |
| `workflow_7uppx9Cm1xcGywuM` | Kling O3 Pro - Video to Video Edit |  |
| `workflow_3gcwb8MVduA8MWau` | Kling O3 Pro - Video to Video Reference | Edit your video with Kling O3 Pro. Upload a clip, describe what to change, set duration and aspect ratio. Audio is preserved by default. |
| `workflow_UEX2CAGBdG47baqE` | Kling O3 Video to Video — Standard Edit |  |
| `workflow_3mUeraW8urXvGbcw` | Kling O3 Video to Video — Standard Reference |  |
| `workflow_QvqKMzyEEohjL2QG` | Kling Omni One Video to Video Edit |  |
| `workflow_S35f6LESBeQ9GMj3` | Kling v4.0 · Video to Video Edit | Edit any video with a text prompt using Kling v4.0 by Kuaishou. Upload your clip, describe the change, and hit run. |
| `workflow_vR387VAnjZaqRnEi` | Krea Wan 14B Video to Video |  |
| `workflow_CBQzqxwr2kZBwSr6` | LTX 2.3 IC LoRA Union Control - Video to Video | Restyle video with LTX 2.3 using IC-LoRA Union Control for structure guidance |
| `workflow_trJsDooP6nwP893o` | LTX 2.3 IC LoRA Union Control · V2V For Anime | Upload a video and a style reference image. LTX 2.3 with IC LoRA Union Control restyles the full video to match the reference while preserving the original motion, body pose, and scene structure using blended depth, pose |
| `workflow_asmUBXFT2z9QsFMA` | LTX 2.3 ICLoRA HDR | Convert 8-bit video to 16-bit |
| `workflow_FQP8DtJSShVVywPy` | LTX 2.3 Video Inpainting · Video to Video | Replace or add objects in a video with a single generation pass using LTX-Video 2.3 and a dedicated inpainting LoRA. Upload a video, draw a mask, describe the change, and hit run. Faster than the multi-pass version. |
| `workflow_t5NXKBMY3M3wycyH` | LTX 2.3 · Extend Video | Upload a video and describe what happens next. LTX 2.3 generates a seamless continuation from the last frame, matching the original motion, lighting, characters, and audio. |
| `workflow_hE3fWKPcX6uPpdbR` | LTX-2.3 IC-LoRA HDR for SDR to HDR Video | Convert SDR video to 16-bit linear HDR with LTX-2.3 and the HDR IC-LoRA. Get EXR frames ready for color grading pipelines, plus a tone-mapped SDR preview. |
| `workflow_gGLPkirUK28Gm7t1` | LTX-2.3 · Motion Transfer (Pose) | Transfer the movement from any reference video onto your portrait with LTX-2.3 by Lightricks, audio and all. Upload a photo and a clip, then hit run. |
| `workflow_KrZ9Vka4WCRUuzAq` | LTX-2.5 ICLoRA Outpaint for Video Outpainting | Extend any video beyond its original frame using LTX-2.5 with IC-LoRA outpainting. Upload a video, set a larger canvas size, and hit run. |
| `workflow_LxWdtvbZV4UPm7vb` | Minimax H3 for Video to Video Character Swap | Replace a person in a video clip with a character from a single image using MiniMax H3 and the Character Swap LoRA. Upload a clip, upload a character, describe the swap, and hit run. |
| `workflow_FVtg8FZz9dMeTqLD` | MiniMax H3 · Clay Render to Final Render V2V | Render a grey Blender clay pass into a finished, textured, lit clip with sound using MiniMax H3. Load your clay video, describe the look, and hit run. |
| `workflow_66AV75jEDQUe4MRC` | Moonvalley Marey Motion Transfer - Video to Video |  |
| `workflow_MS3pmkABY1VGUY9z` | Moonvalley Marey Pose Transfer - Video to Video |  |
| `workflow_vQ6D3jZDDEik7VCo` | SAM3 for Video Masking using Points | Create a video masking using SAM3 and Points only. |
| `workflow_rBZ5zEWc9YKUjjWC` | SAM3 for Video Masking using Text | Create a video masking using SAM3 and Text only. |
| `workflow_P2AJcay7eynbHGHB` | SAM3.1 for Image and Video Segmentation | Segment and track any object in images and video with SAM 3.1, Meta's concept segmentation model. Type what you want, hit run, and get clean masks back. |
| `workflow_JvAFFhYeACvQmEGd` | SeC Video Segmentation: Unleashing Adaptive, Semantic Object Tracking |  |
| `workflow_jTqYFyV8KfbpNDfR` | Seedance 2.0 · Reference to Video | Upload a character image and a motion reference video. Seedance 2.0 generates a new video of your character performing the action from the reference, with synchronized audio, using the #1-ranked AI video model. |
| `workflow_QEXPuFhLbQCoLyrw` | Segment Anything 2 for Creating Video Mask | Create a video mark frame by frame using Segment Anything 2 |
| `workflow_PMC1CV9fFE1P7Y8T` | Vertical to Horizontal Video Reframe |  |
| `workflow_arKem7Wc61QKTMpC` | Video Depth Anyting for Video Depth Map | Generate temporally consistent depth maps from any video using Video Depth Anything ViT-L. Upload a clip and get gray, color, and EXR depth outputs in one run. |
| `workflow_45pQ5HGTMq2nfCSe` | Video Detailer using LTX 2 Vid2Vid | It can enhance the detail of the video |
| `workflow_FCpTQPchKnAUgqrU` | Video to Video with Camera Control with Wan | Adjust the camera angle of an existing video, like magic. |
| `workflow_2YKKbu5scS5kuieC` | Video to Video with Control Image | Breathe life into a character from an image reference using motion reference from a video.  Key Inputs  Image reference: Use any JPG or PNG showing your subject clearly and the style of your shot  Load Video: Use any Mp4 |
| `workflow_CNc39C18ZW9Bi8B6` | VOID · Video Object Removal | Erase any object from a video and fill the gap with coherent motion using VOID by Netflix and SAM3 by Meta. Type the object name, hit run. Apache 2.0. |
| `workflow_St2A4jbiPHDDVGMy` | Wan 2.1 Fun Control + Flux V2V Restyle | Upload a video and describe a new visual style. FLUX.1 Dev generates a style reference frame, and Wan 2.1 Fun Control restyles the full video while preserving the original motion, structure, and audio. |
| `workflow_sS4F1Ngqg5XuSb3U` | Wan 2.1 Outpaint · Video to Video For Viral SNS | Upload a video and Wan 2.1 with the VACE module extends the frame outward, filling in new content that matches the original scene, motion, and lighting. |
| `workflow_ZYWEED4MTKPLxHyi` | Wan 2.1 RecamMaster · V2V Camera Contro | Upload a video and choose a new camera trajectory. RecamMaster on Wan 2.1 regenerates the video with the new camera path while preserving the scene content, motion, and audio. |
| `workflow_WLJ1RJPkJkLMpLBp` | Wan 2.1 VACE Outpaint · Video to Video | Upload a video and Wan 2.1 with the VACE module extends the frame outward, filling in new content that matches the original scene, motion, and lighting. |
| `workflow_cZVB6TAfXFpk7Q4U` | Wan 2.1 Vid2Vid Style Transfer with Ditto | Upload any video, describe a new style, and Wan 2.1 rewrites every frame. Ditto keeps motion and structure intact across anime, Pixar, clay, and dozens more. |
| `workflow_8wmXv3KEKGg7syEq` | Wan 2.2 + Qwen V2V Restyle · Video to Video | Upload a video, describe the target style, and a parallel pipeline generates a style reference frame with Qwen Image Edit 2511 while Wan 2.2 Animate restyles the full video with pose-guided structural control. |
| `workflow_i9zUxEfHegkFzqJL` | Wan 2.2 and Qwen for V2V Restyle | Create a new video by restyling an existing video with a reference image. |
| `workflow_CJ41ynBgHAPL9zZ1` | Wan 2.2 Animate · Video to Video For AD Film | Transfer any character into a reference video's motion using Wan 2.2 Animate 14B with ViTPose and SAM2 preprocessing. Upload a video and a character photo, describe the scene, and hit run. |
| `workflow_kKSjh9vGtxPoMo3m` | Wan 2.2 Animate · Video to Video For Short Drama | Transfer any character into a reference video's motion using Wan 2.2 Animate 14B with ViTPose and SAM2 preprocessing. Upload a video and a character photo, describe the scene, and hit run. |
| `workflow_U2QJxE22C5V16ACt` | Wan 2.2 Animate · Video to Video For Viral SNS | Transfer any character into a reference video's motion using Wan 2.2 Animate 14B with ViTPose and SAM2 preprocessing. Upload a video and a character photo, describe the scene, and hit run. |
| `workflow_3y59QjzKENgLijua` | Wan 3.0 Prime · Reference to Video | Place a character into any video using Wan 3.0 Prime by Alibaba. Upload a face, a reference clip, and describe the scene. Prime fidelity, audio included. |
| `workflow_MbqPAAwFitDsr4Up` | Wan 3.0 · Reference to Video | Re-render any video in a new visual style using Wan 3.0 by Alibaba. Upload a clip, describe the target look, and hit run. Motion preserved, audio included. |
| `workflow_ieqRS29tN38VGv3k` | Wan Animate 2 · Motion Transfer R2V | Transfer the motion from any reference video onto a character photo using Wan Animate 2, Alibaba's open-source 14B video model. Upload an image, upload a video, and hit run. |
| `workflow_YpZmW8QwHbyERAMX` | Wan2 Video to Video | Upload a video and the edited first frame |
| `workflow_HBbiLMSDTbBocJvC` | Wan2.1 + SCAIL-2 for Character Motion Transfer | Transfer the motion from any video onto your own character with SCAIL 2, Z.ai's end-to-end character animation model built on Wan 2.1. Upload a video and a character photo, then hit run. |
| `workflow_B1z627SCMG92wBtK` | Wan2.1 and RecamMaster for V2V Camera Control | Adjust the camera angle of an existing video, like magic. |
| `workflow_cjk5mKPGtVgusAdN` | Wan2.1 and VACE for Video to Video Outpainting | Wan VACE video outpainting invites you to break free from the limits of the frame and explore endless creative possibilities. |
| `workflow_mG5kKABXPGDA2YeQ` | Wan2.1 Fun Control and Flux for V2V Restyle | Create a new video by restyling an existing video with a reference image. |
| `workflow_hdGiH7Hr6qtRbCHE` | Wan2.2 Animate Character | Wan 2.2 |
| `workflow_JgnfUQ853Nqo9KCV` | Wan2.2 Fun and RealismBoost LoRA for V2V |  |

## Image editing & inpainting (128)

| ID | Name | What it does |
|---|---|---|
| `workflow_v77t9VGtmNkS8pyj` | Nano Banana Pro: Generate & Edit Images | Google just released Nano Banana Pro, and honestly, it's a pretty big step up from the original Nano Banana. The main thing? It can actually put legible text in images now. Like, real text that you can read, not the garb |
| `workflow_8RSAwFb5e53K5b2A` | Qwen Image Edit 2509 + Flux Krea for Creating Next Scene |  |
| `workflow_bCegx2Kn1Y76BrND` | Boogu Edit · Image to Image | Edit any image with a text instruction using Boogu-Image-0.1-Edit, a 10B open-source model. Upload a photo, describe the change, and hit run. |
| `workflow_QS5QPoKiBfh3dTi4` | Bria Fibo Edit 1.5 for Image Editing | Edit any image with a plain-language instruction using FIBO Edit 1.5, Bria AI's structured image editing model trained on licensed data. Upload a photo, describe the change, and hit run. |
| `workflow_CacGvWTDyHqtd8y7` | Capybara for Image Editing | Edit your cool images using Capybara |
| `workflow_egtGm84QSLHbtpNy` | Copy Lighting from Any Photo / Flux2 Klein 9B | Transfer the lighting, color grade, and mood from one image onto another while keeping the subject's face, pose, and composition untouched. |
| `workflow_3phPMpbFStT9Z6wP` | DarkRoom Color Grading Toolkit for Image Editing | Nine color grading tools with 70+ presets for tone curves, lift/gamma/gain, log wheels, hue remapping, and saturation control. Instant results, no AI model. |
| `workflow_UJFeJoLvVAYX1BMT` | Darkroom Film Stock Emulation for Image Editing | Apply 111 color and 50 B&W film stocks to any image with physics-based grain, halation, print simulation, and cross-processing. No AI models needed. |
| `workflow_a2HD5wCy524hmANq` | DarkRoom Lens & Optics Tools for Image Editing | Apply chromatic aberration, vignette, barrel distortion, perspective correction, and full lens profiles from 102 real lenses to any image. No model needed. |
| `workflow_NFz2DkJSCZ2thXCe` | Extended |  |
| `workflow_6fFrPZ2Y8nSZ42uY` | FireRed Image Edit - Makeup Transfer | Transfer makeup from a reference photo onto a portrait using FireRed Image Edit 1.1. Upload a face and a makeup reference, and the model applies the look while keeping pose and facial features intact. |
| `workflow_9Uj4ntHQP7DQkj8u` | FlatLogColor LoRA and Qwen Image Edit 2509 |  |
| `workflow_zWH6kLkpXJaL3R5U` | Flux 2 Klein 9B + 360 Panorama ERP LoRA | Turn any image into a full 360 equirectangular panorama with Klein 9B and a 360 ERP outpaint LoRA. Cut flat camera shots at any angle from the result. |
| `workflow_hbAgm4262Gy1cAut` | Flux 2 Klein 9B - One Image Edit | Image Editor |
| `workflow_pMnxSpLTMTfTyiHc` | Flux 2 Klein 9b - Perfect Face swap | Instead of using outdated or unstable techniques, this workflow was designed to take full advantage of FLUX 2 KLEIN's editing capabilities—using a face image and a reference character image to produce clean, highly consi |
| `workflow_auuWL1qyVwFy1RDi` | Flux 2 Klein 9B Panorama Inpainting | Edit 360 panoramas with Flux 2 Klein 9B. Select a region, describe the change, and the edit gets composited back into your full panoramic image. No warping. |
| `workflow_BQ1o2axCUkzUX6du` | FLUX 2 KLEIN – Viral Photo Edits | Use multiple source images to strengthen model understanding to generate trendy, viral-style photo edits. These techniques aren’t theory — they’re a practical system you can immediately apply to your content strategy. |
| `workflow_LdBMRJ8TtZaY1uxG` | Flux Fill Dev Image Outpainting | Extend your images out for a wider field of view or just to see more of your subject.  Expand compositions, change aspect ratios, or add creative elements while maintaining consistency in style, lighting, and detail whil |
| `workflow_83XwzJpJqiPy96Tn` | Flux Inpaint - ULTIMATE workflow. | Flux inpainting with Flux fill model and regular Flux dev model. All in one Flux inpainting workflow that easily AI retouches any image. |
| `workflow_RFQ75WiVmbZZchxZ` | Flux Kontext Inpainting | Inpaint with the power of Flux Kontext, providing additional content-awareness. |
| `workflow_gLEVQGznMxCzi2Ug` | Flux Simple Inpainting |  |
| `workflow_YB2M7NuqthDq3otz` | Flux. 2 Klein INPAINT Segment Edit Accurate Image |  |
| `workflow_6rpAqTZwLrssGEmh` | FLUX.2 Klein 4B for Image Outpainting | Outpaint image using Flux 2 Klein 4B using LanPaint and Outpaint LoRA |
| `workflow_muf6P37kwsPUtqdA` | FLUX.2 Klein 9B Consistency LoRA · I2I For AD Film | Edit any image with a text instruction using FLUX.2 Klein 9B by Black Forest Labs, with a Consistency LoRA to keep results close to the original. Upload a photo, describe the change, and hit run. |
| `workflow_dFmm9HYEiFwKtC48` | FLUX.2 Klein 9B · Image Editing With KV Cache | Edit images with Flux 2 Klein 9B in 4 steps. KV Cache speeds every run by reusing attention work across steps. Upload an image, describe the edit, hit Run. |
| `workflow_8Evybpz1n7c25E44` | FLUX.2 Klein 9B · Image to Image | Edit images with consistency of the subject or things using Flux.2 Klein 9B and a LoRA |
| `workflow_8CLgNm4vwjPv2HTJ` | FLUX.2 Klein 9B: Edit Images by Prompt | Unified workflow: one model for text‑to‑image, image‑to‑image, and image editing |
| `workflow_CJEKiADmhu9mwzJi` | FLUX.2 Klein 9B: Image Inpainting | Inpainting image using Flux.2 Klein and LanPaint |
| `workflow_xvVpNG1KBQZ14PWx` | Flux.2 Klein Image Expansion / Outpaint |  |
| `workflow_NoGgxqr4GXzXhqVB` | FLUX.2 Klein Image Expansion · I2I For AD Film | Expand any photo with new content on any side using FLUX.2 Klein 9B for outpainting and SeedVR2 7B Sharp for upscaling. Upload a photo, set the expansion width, and hit run. |
| `workflow_2CPTToSEurU5L6Zt` | FLUX.2 Klein Image Expansion · I2I For Short Drama | Expand any photo with new content on any side using FLUX.2 Klein 9B for outpainting and SeedVR2 7B Sharp for upscaling. Upload a photo, set the expansion width, and hit run. |
| `workflow_qdqGS6JVLuTqjzD2` | FLUX.2 Klein Outpaint · Image Expansion | Upload an image and FLUX.2 Klein extends the scene outward on both sides, filling in new content that matches the original lighting, perspective, and detail, then upscales the result with SeedVR2. |
| `workflow_bQe7CCFcNMrDSw3b` | FLUX.2 Max Edit · Image to Image | Upload an image to edit and up to eight reference images, describe the change, and FLUX.2 Max applies it with the highest editing consistency in the FLUX.2 family. |
| `workflow_xWimEPU1v7171fPx` | FLUX.3 for Image Editing | Edit any image with a text instruction using FLUX.3 Image by Black Forest Labs. Upload an image, describe the change, add optional reference images, and hit run. |
| `workflow_vp8PGMV6hU5dVacX` | Gemini Omni Flash 1.1 for Video Edit | Edit a video with a text instruction using Gemini Omni Flash 1.1, Google's multimodal video model. Upload a clip, describe the change, and hit run. |
| `workflow_6r3DD2P1RRdmwXPi` | GPT Image 1.5 | for Image Editing |
| `workflow_VLTMGgTJmh4GRxvy` | GPT Image 2 · Image Editing | Upload an image and describe the change you want. GPT Image 2 applies the edit while preserving everything you did not ask to change, with reasoning-powered precision and near-perfect text rendering. |
| `workflow_j5EHGZJh5UwWWraT` | GPT Image 2.5 Flare for Image Edit | Edit any image with a text instruction using GPT Image 2.5 Flare, OpenAI's fast image editing model. Upload a photo, describe the change, add optional references or a mask, and hit run. |
| `workflow_y3CTB8DFxFt1ohZF` | GPT Image 2.5 Sunburst for Image Edit | Edit any image with a text instruction using GPT Image 2.5 Sunburst, OpenAI's precision image model. Upload an image, describe the change, and hit run. |
| `workflow_BTbzgFwc4d2zKLG5` | GPT Image 2.6 Flare Edit for Image Editing | Edit any image with a text instruction using GPT Image 2.6 Flare, OpenAI’s fastest image editing model. Upload a photo, describe the change, and hit run. |
| `workflow_vJPWmTJiVfnCPAFm` | GPT Image 2.6 Sunburst Edit for Image Editing | Upload a photo, describe the change you want, and GPT Image 2.6 Sunburst redraws the edited parts and returns a new image. |
| `workflow_SkiDDYF4wKU2n4N6` | GPT Image edit geiger counter |  |
| `workflow_v4robWQUBSTEJcJ5` | Graphic Design Recomposer - Reframe Ads |  |
| `workflow_CKGKrvo2HG72y8dA` | Grok Imagine Image 2.0 Edit for Image Editing | Edit any image with a text instruction using Grok Imagine Image 2.0, xAI's precision image model. Upload a photo, describe the change, and hit run. |
| `workflow_Y5do8Wv49DoCjADY` | Happy Horse 1.0 for Video Color Grading (Monotone) | Apply a color grade to any video using Happy Horse 1.0, Alibaba’s instruction-driven video editing model. Upload a video, choose a color reference, and hit run. |
| `workflow_6QZQifywRB2n5eas` | HiDream Logo Generator with Qwen EditHidream |  |
| `workflow_7APSPYsFxQWSG5uN` | Ideogram V4 · Image to Image | Upload an image and describe the change you want. Ideogram V4 transforms it while preserving your composition, with the strength slider controlling how far the result moves from the original. |
| `workflow_4JmjxBYqZfD36yZ6` | Ideogram v4.5 for Image Editing | Edit any image with a text instruction using Ideogram v4.5, the precise edit model by Ideogram. Upload an image, describe the change, and hit run. |
| `workflow_D7qR44VtDN7nXKN8` | Image Inpainting | Change specific details on just a portion of the image, sometimes known as inpainting or Erase & Replace.  Key Inputs  Image reference: Use any JPG or PNG showing your subject clearly  Masking tools: Right-click to revea |
| `workflow_j8yqJpA35NQPFCC6` | Image Inpainting with LoRA | Change specific details on just a portion of the image for inpainting or Erase & Replace, adding a LoRA for extra control. |
| `workflow_FEU4TDeNwn5TB1SU` | Image Outpaint to Any Aspect Ratio | Reframe any image to a new aspect ratio without cropping. Nano Banana Pro extends the canvas, inventing new background pixels while keeping the original intact. |
| `workflow_s1h9fR3x87AFCfCf` | Image Transformation using Anime2Reality LoRA |  |
| `workflow_mjrGyXQJLqXPvqd3` | Inpainting with reference image |  |
| `workflow_zQJVwFUEKzT5CwYE` | JoyAI Image Edit · Image to Image | Edit any image with spatial instructions using JoyAI Image Edit, the open-weight 24B model from JD.com. Move, rotate, add, or remove objects with text. |
| `workflow_eSjAAifRURmEek4r` | Kling Omni One Image Edit |  |
| `workflow_Nhm1A82tBjKJ8iAS` | Kling v3 for Image Editing | Edit any image with a text prompt using Kling Image 3.0, Kuaishou's identity-preserving image model. Upload your image, add face references to lock identity, describe the change, and hit run. |
| `workflow_RGMYhsMeStjdKYgY` | Krea 2 · Drawing to Image | Turn a rough sketch into a photorealistic image that keeps your layout, using Krea 2 Turbo and an Identity Edit LoRA. Upload a drawing, describe it, hit run. |
| `workflow_a38BVBWtBtwB3nzV` | LongCat-Image-Edit - Instruction Image Editing | Upload one image, write an instruction, and LongCat-Image-Edit rewrites the parts you describe while keeping the rest identical. Bilingual prompts, 8 steps. |
| `workflow_krEWy3s8zZi83Eh2` | LTX 2.3 Edit Videos | With this workflow you can add, remove, replace, convert style of the video |
| `workflow_1oBrN5JjEEvTjdhL` | LTX-2.3 · Clean Plate (Video Object Removal) | Erase people and moving objects from a video and rebuild the scene behind them with LTX-2.3 by Lightricks. Upload a clip, describe the empty shot, hit run. |
| `workflow_uDPt1i4No6yEgMvc` | Luma Uni-1 Max for Image Editing | Edit any image with a text instruction using Luma Uni-1 Max, Luma AI's highest-quality image model. Upload an image, describe the change, add optional reference images, and hit run. |
| `workflow_DGk34qW1YmtsqK8o` | Luma Uni-1 · Edit (Image to Image) | Edit any image with a text instruction using Luma Uni-1, a reasoning-first image model that changes only what you describe. Upload an image, describe the edit, and hit run. |
| `workflow_LFvXZwgnLfB3n6Qn` | Mage Flow Edit· AI Image Editing | Edit, combine, or transform one or two images using natural language. Change backgrounds, merge scenes, swap outfits, add objects, or create entirely new compositions in just a few seconds. |
| `workflow_VuCHyVku3BDKzNu3` | Minimax H3 for Image Editing | Edit any image with a text instruction using MiniMax H3-Image, an open-weight model that generates up to 4K resolution. Upload an image, describe the change, and hit run. |
| `workflow_hpK98gnyyVBFE8RJ` | MiniMax H3 Open Weights - Reference to Video | Swap a character or object into an existing clip with MiniMax H3 (Hailuo 3.0), the open-weights editor. Add a reference image, describe the change, and hit run. |
| `workflow_81ERhiXnAnstr9cH` | Minimax_H3_Image_Edit_OpenWeight | Minimax H3を使用した画像編集ワークフローです。画像を読み込み、編集指示文を日本語で書くだけで、すぐに顔や服装を保ったままポーズ・背景・アングルを変えられます。APIウォレットは消費しません。This is an image edit workflow using Minimax H3. Just load an image and write an instruction to change the pose, backgro |
| `workflow_6DFCCoVsNDBozTix` | Model Repose and Perspective Generator |  |
| `workflow_1Jzp7cBWPYt1aS5C` | MOSS Image for Image Editing | Edit a photo with a text instruction using MOSS-Image SFT and the community Edit LoRA. Upload your image, describe the change, and hit run. |
| `workflow_GYPmZT4LA2pxA2wP` | Multi-Style Image Transformation Workflow | Multi-Style Image Transformation Workflow (One Input → Multiple Outputs) |
| `workflow_9udfAnLxiKKFw9Ww` | Multiple Angle Lighting LoRA + 2511 |  |
| `workflow_8drEq9ADhEAmDSiG` | Nano Banana 2 Lite · Image Editing | Upload up to 14 reference images and describe the change you want. Nano Banana 2 Lite, Google's fastest Gemini image model, applies the edit in about 4 seconds and returns the result. |
| `workflow_vdsniKWTuEtpF4XF` | Nano Banana 2 · Image Generation & Editing | The top-ranked image model on Artificial Analysis and LM Arena. 4K output, text rendering, and subject consistency across 5 characters. |
| `workflow_jYWz1QtGgPh3AGJR` | Nano Banana 2.1 for Image Editing | Edit any image with a text instruction using Nano Banana 2.1, Google DeepMind’s latest image model. Upload an image, describe the change, add optional references, and hit run. |
| `workflow_yDoDYTu3ofi5n2AD` | Nano Banana Pro · Edit Any Image | Edit any image with text using Nano Banana Pro, Google's Gemini 3 Pro image model. Upload your image, describe the change, add references, and hit run. |
| `workflow_wNE99s21M7b7pmLe` | Nano Banana Pro · Generate & Edit Images | Write a prompt to generate an image from scratch, or upload an image and describe the change you want. Nano Banana Pro, Google's Gemini 3 Pro image model, handles both in one workflow. |
| `workflow_Cy2kwHyuEjLRtNRE` | Nano Banana · Edit (Image to Image) |  |
| `workflow_SBJzWVUNeHKB65qw` | Outpaint |  |
| `workflow_2QAUshxzD51e385M` | Partial Modification Reference Image using Flux.2 | Paint a mask over the part of your product image you want to change, drop in a reference design, and Flux 2 Klein redraws only that region in four steps. |
| `workflow_CAcnMjcKnQ122fof` | Qwen 2511 Edit - Single Image to Character Dataset | Create a 60 image character dataset from one character image or sheet. |
| `workflow_RUyENWkRcQWGru48` | Qwen 2511 Multi-Angle Camera · I2I For Kids Edu | Re-render any photo from a new camera angle using Qwen Image Edit 2511 with the Multi-Angle LoRA. Upload a photo, set horizontal and vertical rotation, and hit run. |
| `workflow_cSgM89DWrK7L1Y5m` | Qwen 2511 · Composite a Photoshoot For Anime | Upload three images, a subject, an environment, and a prop or lighting reference, and Qwen Image Edit 2511 composites them into a single photorealistic editorial scene with matched lighting, scale, and perspective. |
| `workflow_jQsmwE8MG5JFtq7b` | Qwen 2511 · Single Image to Character Dataset | Upload a single character image and Qwen Image Edit 2511 generates a full multi-pose training dataset automatically, saving each image with a matching caption file ready for LoRA training. |
| `workflow_PMGtpKrpMdD6woSK` | Qwen Edit 2511 - inpainting | inpainting |
| `workflow_UHWrFpdZdK2UuNR9` | Qwen Edit 2511 Face Swap | Face Swap |
| `workflow_u9pFvGSgiDkrsJKz` | Qwen Edit 2511 Multi Angle Camera | Multi Angle Camera |
| `workflow_Sh6yjeLi91urm19b` | Qwen Edit 2511 OUTPAINTING | OUTPAINTING |
| `workflow_4z9icMKSiRrMLyiR` | Qwen Edit 2511: Multi-Angle Camera For AD Film | A image-editing workflow that generates a new camera angle of an image you provide. You load a source image, set horizontal_angle, vertical_angle, and zoom, and the node auto-writes a camera-instruction prompt (or you wr |
| `workflow_23Z4LyuUcZAEw9ib` | Qwen Edit 2511: Multi-Angle Camera For Anime | A image-editing workflow that generates a new camera angle of an image you provide. You load a source image, set horizontal_angle, vertical_angle, and zoom, and the node auto-writes a camera-instruction prompt (or you wr |
| `workflow_PHQ6ZHMx5NNqA54D` | Qwen Edit 2511: Multi-Angle Camera For Short Drama | A image-editing workflow that generates a new camera angle of an image you provide. You load a source image, set horizontal_angle, vertical_angle, and zoom, and the node auto-writes a camera-instruction prompt (or you wr |
| `workflow_hJFswuEvBdBVDMo6` | Qwen Image 2.1 Edit for Image Editing | Edit any image with a text prompt using Qwen Image 2.1, Alibaba's open-source image editing model. Upload an image, describe the change, add an optional reference image, and hit run. |
| `workflow_AHauAYViHMNLHGy7` | Qwen Image 2.1 for Image Outpainting | Upload a photo and Qwen Image 2.1 expands it outward on all four sides, filling in new scene content that matches the original. Upload your image and hit run. |
| `workflow_529ELFEyAaY9Yymp` | Qwen Image 2512 + Fun Controlnet Union 2602 | Transform your mages using the Qwen Image 2512 and with Fun Controlnet Union 2602 |
| `workflow_3BFmmxpKe75EyEYj` | Qwen Image 3.0 Pro Unified for Generated /  Edit | Generate images from text or edit existing ones using Qwen Image 3.0 Pro, Alibaba's flagship image model. Write a prompt, add reference images to edit, and hit run. |
| `workflow_a9syrjpS8wGFcs4B` | Qwen Image 3.0 Unifired for Generate / Edit Image | Generate or edit images with Qwen Image 3, Alibaba's unified model built for dense text, infographics, and long prompts. Upload references or start from text. |
| `workflow_nE1FJG14W9xAKKya` | Qwen Image Edit - Infinite Image Styles | Restyle any photo with text. Type a style, hit Run, get the same image as anime, watercolor, claymation, or any look in 4 seconds with Qwen Image Edit. |
| `workflow_Zfzaa4uwRWbiT61E` | Qwen Image Edit 2509 + Multi-Angle LoRA for Camera | Re-render your subject from any camera angle with Qwen Image Edit 2509 and a Multi-Angle LoRA. Pan, tilt, rotate, wide-angle, or close-up. No trigger word. |
| `workflow_NYXza3BeBVV7mU8s` | Qwen Image Edit 2509 · A2R | Merge up to three images into one scene with Qwen Image Edit 2509. Upload a subject, add items to place on it, describe the layout, hit run. Apache 2.0. |
| `workflow_38cjo8YoMm94hRns` | Qwen Image Edit 2509 · Build a LoRA Dataset | Upload one reference photo and write a list of scene descriptions. Qwen Image Edit 2509 generates multiple views of the same character across different poses, settings, and angles, saving each image and caption pair read |
| `workflow_X8mEaeNgEvTqGwnh` | Qwen Image Edit 2509 · Change Camera Angle | Re-render any subject from a new camera angle with Qwen Image Edit 2509 and a Multi-Angle LoRA. Upload one image, name the view, and hit run. Apache 2.0. |
| `workflow_5Ff6FWfKKsGkCHK9` | Qwen Image Edit 2509 · Face Swap | Swap a face between two photos with Qwen Image Edit 2509. Upload a main image and a reference, paint a mask on each face, hit run. Apache 2.0 open weights. |
| `workflow_AMeijw9yAbo4n7wz` | Qwen Image Edit 2509 · Relight | Remove harsh light and shadow from any photo and relight it with soft, even illumination using Qwen Image Edit 2509 and a Relight LoRA. Upload and run. |
| `workflow_aUH8AN75Q9y5YAkZ` | Qwen Image Edit 2509: Build a LoRA Dataset | Create Character LoRA Dataset |
| `workflow_JTQiDXKoC9JQg8Ug` | Qwen Image Edit 2511 + Style Transfer LoRA | Create new images from your lineart drawing or sketch using the style transfer LoRA and Qwen Image Edit 2511 |
| `workflow_hh3WK1F4NuvfofD5` | Qwen Image Edit 2511 and VNCCS Utils - Visual Pose | Create different position of person using VNCCS custom node and Qwen Image Edit 2511 |
| `workflow_fFKS5whTzdRyXqPA` | Qwen Image Edit 2511 Lightning - Multi-Image Edit |  |
| `workflow_Uo9283haxzfFiTKV` | Qwen Image Edit 2511 Restore Damage Old Photograph | Restore Damage Old Photograph |
| `workflow_hkJqYUNfVRgr8k2B` | Qwen Image Edit 2511 · Camera Angle Control | Set a precise camera angle with yaw, pitch, and distance using Qwen Image Edit 2511 and the Multi-Angle LoRA. Upload an image, dial in the view, hit run. |
| `workflow_xiGctUreQ47HNyy6` | Qwen Image Edit 2511 · Composite a Photoshoot | Upload three images, a subject, an environment, and a prop or lighting reference, and Qwen Image Edit 2511 composites them into a single photorealistic editorial scene with matched lighting, scale, and perspective. |
| `workflow_tQ43M6vkXJMJPUnQ` | Qwen Image Edit – Multi-Angle Camera View |  |
| `workflow_VEHbXDA65NNCRrC6` | Qwen Image Edit – Portrait Light Migration |  |
| `workflow_qeUA1KC4mFjDmupj` | Qwen Image Max Edit for Editing Images | Editing images using the flagship model of Qwen Image Max Edit |
| `workflow_wVn8RvC173pPUKci` | Qwen Multiangle Light with Qwen Image Edit 2511 | Relighting images using Qwen multiangle light node |
| `workflow_81kEUc3zKMXAQqQ4` | Qwen Multiangle Light · I2I For Viral SNS | Upload one image and this workflow generates five relighted versions simultaneously, each lit from a different angle and direction, with full control over azimuth, elevation, intensity, and color. |
| `workflow_WEfzt84c8XXgkLog` | Qwen Multiangle Light · Image to Image For AD Film | Upload one image and this workflow generates five relighted versions simultaneously, each lit from a different angle and direction, with full control over azimuth, elevation, intensity, and color. |
| `workflow_zG1ikxvWcayTeEkR` | Qwen Multiangle Light · Image to Image For Anime | Upload one image and this workflow generates five relighted versions simultaneously, each lit from a different angle and direction, with full control over azimuth, elevation, intensity, and color. |
| `workflow_ksJsnU3KM8XMP6Hj` | Qwen Multiangle Light · Image to Image For Kids Ed | Upload one image and this workflow generates five relighted versions simultaneously, each lit from a different angle and direction, with full control over azimuth, elevation, intensity, and color. |
| `workflow_gbuPGNpGB9QkD2Vu` | Qwen Multiangle Light · Img to Img For Short Drama | Upload one image and this workflow generates five relighted versions simultaneously, each lit from a different angle and direction, with full control over azimuth, elevation, intensity, and color. |
| `workflow_gSC3RxCXAKVgEh5E` | Reve 2.1 · Edit (Image to Image) | Reve 2.1 is Reve AI's layout-first editor that changes one element and keeps the rest, rendered in native 4K. Upload an image, describe the edit, and run. |
| `workflow_KfJgCQwD3dJfd3Mh` | Seedream 4.0 Edit: Unleash Creativity of Editing | Seedream |
| `workflow_wG5SmLrn6BwTMMAW` | Seedream 4.5 · Text to Image | Generate images from a text prompt with Seedream 4.5, ByteDance's unified model for illustration, text rendering, and layouts. Write a prompt and hit run. |
| `workflow_zQPNRCVyAgAnS916` | Seedream 5.0 Flash Edit for Image Editing | Edit any image with a text instruction using Seedream 5.0 Flash, ByteDance's fast image editing model. Upload an image, describe the change, and hit run. |
| `workflow_zbjTLe9AWbPqrAGt` | Seedream 5.0 Lite · Generate, Edit and Fuse | Generate, edit, or blend images with Seedream 5.0 Lite, the ByteDance model that reasons through your instruction before drawing. Prompt it and hit run. |
| `workflow_kL7E2m92qHEvbGf1` | Seedream 5.5 for Image Editing | Upload a photo, describe what to change, and Seedream 5.5 by ByteDance edits only what you ask for while keeping the rest intact. Write your edit prompt and hit run. |
| `workflow_agsFwsvRS2X8womZ` | Sprite Machine for Silly Tavern | This workflow will create expression sprites for Silly Tavern from a single input image. |
| `workflow_A65kzJsXP2bAxCJU` | SVG Potracer + Qwen Image 2511 for Image to SVG | Create SVG image using Qwen Image Edit and SVG Potracer node |
| `workflow_M8HPDT4G7grpD44C` | Wan 2.2 Animate Preprocess by Kijai (MDMZ Edition) |  |
| `workflow_ybqnUFcbToBQ9yg8` | Wan 2.7 Pro · Image Editing | Edit any image with Wan 2.7 Pro Unified, Alibaba's thinking-mode image model. Upload a picture, describe the change, and get a before-and-after comparison. |
| `workflow_q421gQxHaoMrEp5U` | Z-Image Turbo · Inpainting | Repaint any masked area with a text instruction using Z-Image Turbo and depth-guided ControlNet. Upload an image, paint the mask, describe the edit, run. |

## Text to image (118)

| ID | Name | What it does |
|---|---|---|
| `workflow_Eid9Js8txYbuhgYi` | Qwen Image - Text to 360° HDRI Panorama |  |
| `workflow_9eBM23Ny9hrDDet9` | Recraft V3 Image to Image - Style Transfer | Transform an existing image with Recraft V3. Upload a reference, write a prompt, set strength, and pick a style. Controls how much of the original survives. |
| `workflow_miQaMqmqm7o2MJmJ` | Anima Preview 3 · Text to Image | Generate anime and illustration art with Anima Preview 3, the 2B model from CircleStone Labs and Comfy Org. Write a prompt in tags or plain text, hit run. |
| `workflow_sjKGUA1FX7LAM3Gc` | Anima Preview 3 · Text to Image For Anime | Write a prompt using natural language or Danbooru tags and Anima Preview 3 generates four anime-style illustrations at once, using a 2-billion-parameter model built specifically for anime, character art, and non-photorea |
| `workflow_ZyKUdASVagFgHPvh` | Anima Text to Image_Turbo | Animaを使用したアニメ特化のText to Imageワークフローです。Turbo LoRAを導入しているため、通常より高速に画像生成できます。 This is an anime-focused Text to Image workflow using Anima. It includes Turbo LoRA for faster image generation. |
| `workflow_BRvu7ctBn2GWWb9G` | Anime Next Scene · T2I + I2I For Anime | Describe an anime scene in text, then direct the next shot with a camera or scene change prompt. This two-stage workflow generates connected anime frames with consistent characters, lighting, and composition using Qwen I |
| `workflow_gGXGmXP1LXSZuTMs` | Boogu Turbo · Text to Image | Generate images from a text prompt in 4 steps using Boogu-Image-0.1-Turbo, a distilled 10B open-source model. Type a prompt and hit run. |
| `workflow_N66vjWLcKdwHCArt` | Capybara for Text to Image | Create unique images using Capybara |
| `workflow_wBqqT4kH4pEtqv5Z` | Capybara · Text to Image For Kids Edu | Generate images from a text prompt using Capybara v0.1, a unified visual creation model built on HunyuanVideo 1.5. Type a prompt and hit run. |
| `workflow_cXmU1kDQ55TQKmVp` | Chroma 1 Radiance · Text to Image | Generate artifact-free images directly in pixel space with Chroma 1 Radiance. No VAE compression, no decode step. Write a prompt and hit run. Apache 2.0. |
| `workflow_VyqEme7HJKKXkFN9` | Dreamina 3.1 Text to Image |  |
| `workflow_XdEE4hYSS56ow9nJ` | DyPE + Z-Image Turbo · Text to Image For AD Film | Generate sharp 2K images from a text prompt using Z-Image Turbo with DyPE resolution scaling and a DeJPEG cleanup LoRA. Type a prompt and hit run. |
| `workflow_7NaZyQBEUmwqjrTg` | DyPE + Z-Turbo · Text to Image For Short Drama | Generate sharp 2K images from a text prompt using Z-Image Turbo with DyPE resolution scaling and a DeJPEG cleanup LoRA. Type a prompt and hit run. |
| `workflow_wnxeEGDh6RN7Qhjj` | DyPe and Z-Image Turbo for High Quality Text to Image |  |
| `workflow_35Ekzd5yLoKM1BQu` | ERNIE Image - Text to Image | Generate images with Baidu's ERNIE Image model. Write a short prompt and let the built-in AI enhancer expand it into rich detail. Toggle the enhancer on or off. |
| `workflow_LdEQRYRKndSZGS6j` | ERNIE Image · Text to Image For Kids Edu | Generate images from a text prompt using ERNIE-Image, Baidu's 8B DiT model with a built-in prompt enhancer and precise text rendering. Type a prompt and hit run. |
| `workflow_Mc8NpCsM8E7xfXaW` | Ernie Turbo Text to Image Workflow | Whether you're generating realistic photography, clean design-oriented imagery, or stylised artistic visuals, ERNIE handles it all — and fast. |
| `workflow_xhmeXAHQrumRusGH` | First and Next Scene · Text to Image For AD Film | Describe an illustrated AD Film scene and what happens next using Qwen Image and Qwen Image Edit 2509 by Alibaba. Get two style-matched images in one run. |
| `workflow_dByzKDx1B4vVYJNq` | First and Next Scene · Text to Image For Kids Edu | Describe an illustrated kids' scene and what happens next using Qwen Image and Qwen Image Edit 2509 by Alibaba. Get two style-matched images in one run. |
| `workflow_eYLm34aC8cKE6E7A` | First and Next Scene · Text to Image For Viral SNS | Describe an illustrated kids' scene and what happens next using Qwen Image and Qwen Image Edit 2509 by Alibaba. Get two style-matched images in one run. |
| `workflow_EVqZ5PLYGD67eZmW` | Flux 2 Klein 9b - Text to Image | A simple text to image workflow using the Flux 2 Klein 9B model. |
| `workflow_cukfwDxq8WEFPNG9` | Flux Character LoRA Test and Compare | Test and compare multiple epochs of a character LoRA side by side with preset prompts  When training a LoRA, you'll usually have a few checkpoints throughout the process to test. This workflow lets you load up to 4 LoRAs |
| `workflow_m8aeDvq82uHEDL4u` | flux t2i |  |
| `workflow_ieAn7bmMPvDvzCoC` | Flux Text to Image | Create original images using only text prompts, which can be simple or elaborate.  Key Inputs  Prompt: as descriptive a prompt as possible  Width & height: Optimal resolution settings are noted |
| `workflow_pSshkCEXter8uCnH` | Flux Text2Image w/ 2 Tone Color Grade | Generate cinematic images using Flux with the simple workflow to choose color tint in highlights and shadows  Key Inputs  Prompt: Set text prompt  SDXLResolution: Choose your aspect ratio/resolution  Seed: Choose either  |
| `workflow_cSGutsQ2R8g27caP` | FLUX.1 Dev · Text to Image With Image Input | Generate images from text with FLUX.1 Dev, the 12B open-weight model from Black Forest Labs. Enable the image input to edit from a picture. Write a prompt, run. |
| `workflow_6KQZcxNEHPDnTBMJ` | FLUX.2 Dev · Text to Image | Generate photorealistic images with FLUX.2 Dev, the 32B open-weight model from Black Forest Labs. Write a prompt, add optional references, and hit run. |
| `workflow_aNPvy8Wyh5ZNYDx1` | FLUX.2 Klein 9B · Text to Image For Anime | Write a prompt and FLUX.2 Klein 9B generates a photorealistic image at 1920x1280 in 20 steps, using a fast 9-billion-parameter model with strong prompt adherence and native negative prompt support. |
| `workflow_vwWPY6ZXsLfYRdV1` | FLUX.2 Klein 9B: Text to Image | Create a high quality image using 9B model of Flux 2 Klein |
| `workflow_LQjVwkHCBGgwQr6H` | FLUX.2 Klein 9B: Text to Image For AD Film | Create a high quality image using 9B model of Flux 2 Klein |
| `workflow_WAJVWMQp8DvCdDwe` | FLUX.2 Klein 9B: Text to Image For Kids Edu | Create a high quality image using 9B model of Flux 2 Klein |
| `workflow_VhkNTkRAMUcT9qeV` | FLUX.2 Klein 9B: Text to Image For Short Drama | Create a high quality image using 9B model of Flux 2 Klein |
| `workflow_1QGPXZzRNp2P7Tan` | FLUX.2 Klein 9B: Text to Image For Viral SNS | Create a high quality image using 9B model of Flux 2 Klein |
| `workflow_u9qYwwSDDcjkVwy7` | FLUX.2 Max · Text to Image | Write a prompt and FLUX.2 Max by Black Forest Labs generates the highest-quality image in the FLUX.2 family, with photorealistic detail, accurate text rendering, and strong prompt adherence. |
| `workflow_r3GQBDAeLFiEgTBG` | FLUX.3 for Text to Image | Generate images from a text prompt using FLUX.3 Image, Black Forest Labs' flagship model. Write a prompt, pick a size, and hit run. |
| `workflow_pHrQsbDhTuwWhfLE` | FLUX.3 Image Klein for Text to Image | Generate images from a text prompt using FLUX.3 Image Klein, Black Forest Labs’ open-weights 5.6B image model. Write a prompt, pick an aspect ratio, and hit run. |
| `workflow_a1A7jjQErhY6HFkQ` | GPT Image 2.5 Flare for Text to Image | Describe any image and GPT Image 2.5 Flare generates it. OpenAI's fastest image model, strong at product shots, clean layouts, and readable text. Write a prompt and hit run. |
| `workflow_LafQCTgEJ7VKZEtM` | GPT Image 2.5 Sunburst for Text to Image | Generate high-fidelity images from a text prompt using GPT Image 2.5 Sunburst, OpenAI's precision image model. Describe what you want and hit run. |
| `workflow_Tev7W93oH72eR9Zm` | GPT Image 2.6 Flare for Text-to-Image | Generate images from text with GPT Image 2.6 Flare. Supports PNG, JPEG, WebP, animated GIF, and SVG. Type a prompt and hit run. |
| `workflow_h8gBcmzpxzsuvDkF` | GPT Image 2.6 Sunburst for Text-to-Image | Generate images from text with GPT Image 2.6 Sunburst, OpenAI’s detail-optimized image model. Type a prompt, pick a size, and hit run. |
| `workflow_pTHP9GmoPQ7Meis9` | GPT Image 2: Text to Image | Generate stunning, highly detailed images from just  a text prompt using GPT Image 2. |
| `workflow_Hh4us3fiQAzVaQ8p` | Grok Imagine Image 2.0 for Text to Image | Generate images from a text prompt using Grok Imagine Image 2.0, xAI's precision image model with strong text rendering and prompt accuracy. Write a prompt and hit run. |
| `workflow_gyHTyTCCC1SqyzrA` | Grok Imagine: Fast Text to Image | Create cool images using Grok Imagine |
| `workflow_66ty9zDYwtGGWjmd` | HunyuanImage 3.0 Text to Image |  |
| `workflow_MVDYFsDYnFdaxPzS` | Ideogram V4 + LoRA · Text to Image | Paste the URL of a trained Ideogram V4 LoRA and write a prompt. The workflow generates images with your custom subject, style, or identity applied, using up to three LoRAs at once. |
| `workflow_mF3A4NNU3ur8T7kY` | Ideogram V4 · Text to Image | Write a prompt and Ideogram V4 generates a design-grade image with the most accurate text rendering of any open-weight model, at up to native 2K resolution. |
| `workflow_8ZTUbPiZyqhg7vbM` | Ideogram v4.5 for Text to Image | Generate images with readable text and clean design using Ideogram 4.5. Type a prompt, pick a size, and hit run. |
| `workflow_Xw26i18ovg5PyQtD` | Image prompt upsampling with LLMs | Enhance your prompts to generate higher quality images |
| `workflow_q1HM4kNtsrjE8Yq6` | Image to YouTube Thumbnail - Nano Banana Pro | Upload a photo, describe your video topic, and an AI prompt engine generates a click-optimized YouTube thumbnail with Nano Banana Pro. No prompt skills needed. |
| `workflow_1yErUimtRnbp33B1` | Kling v3 for Text to Image | Generate images from a text prompt using Kling Image V3, Kuaishou's latest image model. Add reference photos to keep faces and objects consistent, then hit run. |
| `workflow_Q9v6b6Q7TTj5u9cu` | Krea 2 for Text to Image | Turn a text prompt into a finished image with Krea 2 Turbo, Krea AI's fast open-source image model. Type what you want to see, hit run, and get a result in seconds. |
| `workflow_sJoWi1WKud7RYZc7` | Krea 2 for Text to Image For AD Film | Turn a text prompt into a finished image with Krea 2 Turbo, Krea AI's fast open-source image model. Type what you want to see, hit run, and get a result in seconds. |
| `workflow_y7fPCqqc82PJo9kV` | Krea 2 Turbo · Text to Image For Anime | Write a prompt and Krea 2 Turbo generates a high-resolution image at 1920x1280 in 8 steps, using a fast turbo-distilled model with a Qwen 3 VL text encoder. |
| `workflow_Bnd41dhtdL1VxSpG` | Krea 2 Turbo · Text to Image For Kids Edu | Write a prompt and Krea 2 Turbo generates a high-resolution image at 1920x1280 in 8 steps, using a fast turbo-distilled model with a Qwen 3 VL text encoder. |
| `workflow_gPx8ZsC7TWCeWra7` | Krea 2 Turbo · Text to Image For Short Drama | Write a prompt and Krea 2 Turbo generates a high-resolution image at 1920x1280 in 8 steps, using a fast turbo-distilled model with a Qwen 3 VL text encoder. |
| `workflow_YKhxrj8Se7EssUXA` | Krea 2 Turbo · Text to Image For Viral SNS | Write a prompt and Krea 2 Turbo generates a high-resolution image at 1920x1280 in 8 steps, using a fast turbo-distilled model with a Qwen 3 VL text encoder. |
| `workflow_y61ii332gVMrqfXL` | Krea2 text to image |  |
| `workflow_TPZuSZprfASW2fP6` | LongCat for Text to Image | Create cool images using the LongCat |
| `workflow_NZpi9MBN4kEN1H5g` | LongCat Image · Text to Image For Kids Edu | Generate images from a text prompt using LongCat-Image, Meituan's 6B bilingual model with precise Chinese and English text rendering. Type a prompt and hit run. |
| `workflow_Kd8Y9VU9Gey9Hn6q` | Luma Uni-1 Max for Text to Image | Generate high-fidelity images with Luma Uni-1 Max, a reasoning-first image model. Write a prompt, add reference images to guide the result, and hit run. |
| `workflow_Ah5tvtCjkp9oMa9r` | Luma Uni-1 · Text to Image | Generate images from a text prompt using Luma Uni-1, a reasoning-first image model that plans composition before rendering. Describe the scene, add optional reference images, and hit run. |
| `workflow_itnWTZmnD49mLhB6` | Mage Flow for Text to Image | Generate images from a text prompt with Mage-Flow, Microsoft's open-weight 4B image model. Pick an aspect ratio, describe the picture you want, and hit run. |
| `workflow_6LzVjak7Mp3ZLhoP` | Microsoft Lens Turbo · Text to Image | Write a prompt and Microsoft Lens Turbo generates a photorealistic image in 8 steps at 1280x720, using a 3.8B parameter model that matches the quality of models twice its size. |
| `workflow_RsiC7uvFCChQXE1z` | Microsoft Lens Turbo · Text to Image For AD Film | Write a prompt and Microsoft Lens Turbo generates a photorealistic image in 8 steps at 1280x720, using a 3.8B parameter model that matches the quality of models twice its size. |
| `workflow_GSzPtNUrLYwT8CUf` | Microsoft Lens Turbo · Text to Img For Short Drama | Write a prompt and Microsoft Lens Turbo generates a photorealistic image in 8 steps at 1280x720, using a 3.8B parameter model that matches the quality of models twice its size. |
| `workflow_BgqBsW9o5AmVcxrA` | Ming Image 0.1 Design for Text to Image | Describe a design layout and Ming Image 0.1 Design generates it as a finished image with readable text, clean structure, and optional transparency. Write a prompt and hit run. |
| `workflow_3Mi5SJLm6e4sqpDA` | Ming Image 0.1 Design · Text to Image (Design) | Describe a design layout and Ming Image 0.1 Design generates a finished composition with readable text, structured elements, and visual hierarchy in one pass. |
| `workflow_iLF6vKZiMttELUiG` | Minimax H3 for Text to Image | Generate high-resolution images from text prompts using MiniMax H3-Image with a built-in prompt enhancer that rewrites your description into a detailed caption before generating. Type your prompt and hit run. |
| `workflow_gt82kEPo9PQgWxKE` | MOSS Image + Banding Fix LoRA for Text to Image | Generate images from text with MOSS-Image SFT and a built-in banding fix LoRA. Type a prompt, pick a preset, and hit run. Open source, Apache 2.0. |
| `workflow_nA2PsK8yjdz35EPx` | MOSS Image for Layout-Guided Text to Image | Place text and objects exactly where you want them using bounding boxes, then generate the image with MOSS-Image, OpenMOSS’s 5B layout-controlled model. Draw boxes, label them, write a prompt, and hit run. |
| `workflow_e4MzGJYnfbzDjaXe` | MOSS Image for Text to Image | Generate detailed images with accurate English and Chinese text rendering using MOSS-Image SFT, an open-source 5B model by OpenMOSS. Write a prompt and hit run. |
| `workflow_QfEMW9yjTv8UjPDp` | MOSS Image for Text to Image Native 4MP Macro Img | Generate high-resolution images up to 4 megapixels from a text prompt using MOSS-Image SFT, with optional prompt enhancement and skip-layer guidance. Type your description and hit run. |
| `workflow_RWxaaYtGbshURNzi` | Multi-Image  Flux Ultra, Pro, Dev, Recraft+ | Start with a prompt, and get a different render from a range of unique models at the same time. |
| `workflow_YB7GZB9mPpDdcfHT` | Nano Banana 2 Lite: Text to Image | This workflow generates images from a text prompt using Nano Banana 2 Lite, Google's fast image model served through fal.ai. A built-in system prompt automatically expands simple prompts into detailed, well-composed scen |
| `workflow_pDLWSAFMSf6CWZVQ` | Nano Banana 2.1 for Text to Image | Generate images from a text prompt using Nano Banana 2.1, Google’s updated Gemini Flash image model. Write a prompt, pick a resolution, and hit run. |
| `workflow_mrB7eb1RcoNSGPh1` | Nano Banana Lite: Text to Image | A single-node text-to-image workflow that generates images from a written prompt using Google's Nano Banana Lite model (served via fal.ai). You write a prompt, pick an aspect ratio, and hit run — a built-in system prompt |
| `workflow_XjDZWpsbCfVxYCXY` | NetaYume Lumina Text to Image | Generate high-quality anime images with NetaYume Lumina, a fine-tuned model built on Lumina Image 2.0. Describe a scene, hit run, get detailed anime art. |
| `workflow_MFrvfV4yRnmuixSy` | Ovis Text to Image |  |
| `workflow_6FxH8HPS3qQ5uwyj` | PRISM Hair Oil CM - Text to Image | AI-powered text-to-image workflow for PRISM luxury hair oil commercial. Generates high-quality product shots with cinematic lighting and holographic effects.ai-video |
| `workflow_QRwyd5YyZTQS3SKb` | Qwen Image 2.1 for Text to Image | Generate images from a text prompt using Qwen Image 2.1, Alibaba's open-weight diffusion model with strong text rendering and product photography. Write a prompt, pick a size, and hit run. |
| `workflow_VmZpCbZx9ykX63VG` | Qwen Image 2512 · Text to Image | Text to image |
| `workflow_PSgNJqxZCkEqXMgG` | Qwen Image 2512 · Text to Image For AD Film | Write a prompt and Qwen Image 2512 generates a high-resolution image at up to 1920x1280 in 50 steps, using Alibaba's latest dedicated image generation model with strong photorealism and bilingual prompt support. |
| `workflow_giw1GxM83mEDwcMe` | Qwen Image 2512 · Text to Image For Anime | Write a prompt and Qwen Image 2512 generates a high-resolution image at up to 1920x1280 in 50 steps, using Alibaba's latest dedicated image generation model with strong photorealism and bilingual prompt support. |
| `workflow_hJ9vC1reSTY78ap5` | Qwen Image 2512 · Text to Image For Kids Edu | Write a prompt and Qwen Image 2512 generates a high-resolution image at up to 1920x1280 in 50 steps, using Alibaba's latest dedicated image generation model with strong photorealism and bilingual prompt support. |
| `workflow_VpKqVZi5Q6oSQ2RT` | Qwen Image 2512 · Text to Image For Short Drama | Write a prompt and Qwen Image 2512 generates a high-resolution image at up to 1920x1280 in 50 steps, using Alibaba's latest dedicated image generation model with strong photorealism and bilingual prompt support. |
| `workflow_11ZJ3TNwLx8xcQJw` | Qwen Image 2512 · Text to Image For Viral SNS | Write a prompt and Qwen Image 2512 generates a high-resolution image at up to 1920x1280 in 50 steps, using Alibaba's latest dedicated image generation model with strong photorealism and bilingual prompt support. |
| `workflow_yYd2qKcrNqNydQfb` | Qwen Image Max for Text to Image | Create a high quality using the flagship model of Qwen Image |
| `workflow_5APaxDyvcvh2qpeB` | Qwen_Image_2.1_Text_to_Image_Workflow | Qwen Image 2.1を使用したText to Imageワークフローです。オープンソースモデルのため、APIウォレットを消費せずに画像生成を試せます。This is a Text to Image workflow using Qwen Image 2.1. Since it uses an open-source model, you can generate images without consuming your API |
| `workflow_vtxhCdex84m22Yx3` | Recraft V3 Text to Image | Generate images with Recraft V3 from a text prompt. Choose a preset size or custom dimensions, pick a style, and run. |
| `workflow_zggEwo1CfFjBGBbA` | Reve 2.1 · Text to Image | Reve 2.1 is Reve AI's layout-first model that plans an image, then renders it in native 4K with legible text. Type a prompt and run, no upscaling needed. |
| `workflow_MgDjTgMZuiWvUUMz` | Seedream 5.0 Flash for Text to Image | Generate photorealistic images from a text prompt using ByteDance's Seedream 5.0 Flash, the fastest model in the Seedream 5 family. Write a prompt and hit run. |
| `workflow_qNQeDpitLEBjFDha` | Seedream 5.5 for Text to Image | Generate images from a text prompt using Seedream 5.5, ByteDance Seed’s latest image model. Type a description, pick a resolution, and hit run. |
| `workflow_4QvpTpSAtiDa6Ae3` | SRPO Next-Gen Text-to-Image |  |
| `workflow_VaXcANNNstux76y6` | Text to Image + LoRA model | Create an image from a trained AI model of something specific ( a specific figure, outfit, art style, product etc) to ensure specific details within. |
| `workflow_jooAJWh5vawhT5xP` | Text to Image Quick Start | A fast simple workflow to get familiar with open source workflows |
| `workflow_sbEgnJd6wM7H9t2q` | Text to Image with Multi-LoRA | Create consistent images with multiple LoRA models. |
| `workflow_NXf7ad2vTVTbi6wU` | Text2Image + Prompt Enhancer LLM for Flux | Classic Flux text2image with an added LLM to improve your prompts. |
| `workflow_8nYBLizSe4e5kTU6` | Video to YouTube Thumbnail - Nano Banana | Upload a video and your brand assets. A built-in AI prompt engine writes the image prompt, then Nano Banana Pro generates a click-ready 16:9 thumbnail. |
| `workflow_j8YatX4a6YpG6ycC` | Wan 2.1 Text2Image | Created by @yanokusnir on Reddit, please support the original creator!  https://www.reddit.com/r/StableDiffusion/comments/1lu7nxx/wan_21_txt2img_is_amazing/  If this is your workflow, please contact us at team@floyo.ai t |
| `workflow_pdnvpRsXQ5ruFAKN` | Z-Image Base · Text to Image For Anime | Write a prompt and Z-Image Base generates a photorealistic image at 1024x1024 with 30 steps and the res_multistep sampler, using the undistilled 6B model for maximum detail and quality. |
| `workflow_8ssrpdfCQbtt3MXL` | Z-Image Base · Text to Image With LoRA | Generate stylized images with Z-Image Base and a community LoRA. Write a prompt starting with the trigger word, pick a size, hit run. Apache 2.0 open weights. |
| `workflow_DkNhtaREPfc4oCcN` | Z-Image Base: High-Detail T2I For Kids Edu | Create sunning images using z-image base model (non distlled). |
| `workflow_8PMSr6GCRro5YNWD` | Z-Image Base: High-Detail T2I For Short Drama | Create sunning images using z-image base model (non distlled). |
| `workflow_VstCZXJNPv5kagXc` | Z-Image Base: High-Detail T2I For Viral SNS | Create sunning images using z-image base model (non distlled). |
| `workflow_2NxYGMmMek8zeLAJ` | Z-Image Base: High-Detail Text to Image | Create sunning images using z-image base model (non distlled). |
| `workflow_RRGGz8LgZC8wZGqt` | Z-Image Base: High-Detail Text to Img For AD Film | Create sunning images using z-image base model (non distlled). |
| `workflow_BBxDsnL6s6HAZZTu` | Z-Image Turbo + Chord Image to  PBR Material |  |
| `workflow_R5Y5XeH21JQL5Mkg` | Z-Image Turbo + SDA LoRA for Diverse Text to Image | Generate images with Z-Image Turbo while the SDA diversity LoRA stops every seed from producing the same pose and composition. 8 steps, 2x upscale to 2048. |
| `workflow_yosMyMTMjPHUwe2B` | Z-Image Turbo + SDA · Text to Image For AD Film | Write a prompt and Z-Image Turbo generates a photorealistic image in 8 steps, with the SDA diversity LoRA ensuring each seed produces a distinct composition, pose, and camera angle. Output upscaled to 2048x2048. |
| `workflow_kZzJBPgRwZLxt7tE` | Z-Image Turbo · Text or Image to Image | Z-Image Turbo is Alibaba's open-source 6B model that turns a text prompt into photorealistic images in about 8 steps. Type a prompt, or rework an image. |
| `workflow_hGVXR6A6yWn3hbML` | Z-Image Turbo · Text to Image For Anime | Write a prompt and Z-Image Turbo generates a photorealistic 1024x1024 image in 9 steps, using a 6-billion-parameter model distilled for speed with bilingual prompt support. |
| `workflow_TKPq27BvQqq7cCcV` | Z-Image Turbo · Text to Image With Diversity LoRA | Generate a different composition on every seed with Z-Image Turbo and the SDA diversity LoRA. Write a prompt, hit run, get layout variety. Apache 2.0. |
| `workflow_yxDn2YDQxcPKWqmE` | Z-Image Turbo · Text to Image with Wildcards | Create unique AI characters using Z-Image Turbo. Write a base prompt, add wildcard variations, and generate a different image every run. |
| `workflow_P41vyNbazS5Lsx3v` | Z-Image Turbo: Fast Generation For Short Drama |  |
| `workflow_MHUfCQHkLaMEj2Xx` | Z-Image Turbo: Fast Image Generation For AD Film | Fast Image Generation in Seconds |
| `workflow_ZJ2R7qTZkUnZVi99` | Z-Image Turbo: Fast Image Generation For Viral SNS |  |
| `workflow_bppbuD17QP8DviRq` | Z-Img Turbo + SDA · Text to Image For Short Drama | Write a prompt and Z-Image Turbo generates a photorealistic image in 8 steps, with the SDA diversity LoRA ensuring each seed produces a distinct composition, pose, and camera angle. Output upscaled to 2048x2048. |
| `workflow_z9jr1f2RmK6RRQzG` | Z_Image_NLoRA_Text_to_Image | Z-ImageにLoRAを組み込んだText to Imageワークフローです。高質感で自由度の高い人物画像を生成しやすく、日本人から欧米人まで幅広い人物表現に対応できます。This is a Text to Image workflow using Z-Image with an compatible LoRA. |

## Image to image & style (37)

| ID | Name | What it does |
|---|---|---|
| `workflow_QhLKhj6qM7xoGHbW` | Qwen  LoRA Trainer with Auto-Caption | Train a custom Qwen Image Edit 2511 LoRA from a folder of images. Florence 2 auto-captions, Musubi trains, and a built-in test section previews results. |
| `workflow_ubTYKF2jG5LDHZFX` | Anything2Real 2601A |  |
| `workflow_fxAcN75A5a8SrA74` | Audio to Spectogram using Orion4D Secret | Turn any image into audio by encoding it as a spectrogram. Upload a picture, set your frequency range, and get an MP3 that shows your image when visualized. |
| `workflow_79kiEC2zdaQ41UDj` | Dissolve image lighting Kontext V2 |  |
| `workflow_mB9JG4NDauAYM1Tf` | Flux Kontext and HD360 LoRA for 360 Degree View | Flux Kontext 360° Workflow - Seamless Panorama Generation  Input: Simply upload an image in the "Load Image from Outputs" node Output: A 360° Panoramic image |
| `workflow_PVLmxynugrnY9i3Z` | Flux Kontext · Sketch to Image For Anime | Upload a rough sketch and describe the target style. Flux Kontext reads the composition, pose, and layout from your drawing and renders it as a full-color illustration, anime character, game asset, or any visual style yo |
| `workflow_YbrJKarGPmk8L4cm` | FLUX.2 Consistency LoRA · I2I For Short Drama | Edit any image with a text instruction using FLUX.2 Klein 9B by Black Forest Labs, with a Consistency LoRA to keep results close to the original. Upload a photo, describe the change, and hit run. |
| `workflow_zqLnBm1oJ3xmTRDb` | FLUX.2 Klein 4B for Text to Sprite Sheet | Create sprite sheet for game characters in using flux 2 Klein  4B |
| `workflow_vAqMMaLKK6Q6n1Cw` | FLUX.2 Klein 9B + SAM3 + GhostMannequin LoRA | Create a ghost mannequin clothes using flux.2 klein, SAM3 and Ghost mannequin LoRA |
| `workflow_4jvMvihTKYYTv961` | FLUX.2 Klein 9B: Realistic Photo Enhancer | Create realistic image but in an enhanced details using FLUX.2 Klein 9B and with LoRA |
| `workflow_m3Mx1dgNbnrLCHkX` | Flux.2 Klein Enhancer for Identity Transfer | Edit a photo of a person with Klein 9B while an identity transfer enhancer keeps their face and likeness locked, so they still look like themselves after. |
| `workflow_inmwDSkJxp76k86S` | Image to Character Sheet with Kontext | Create a character sheet with multiple poses and expressions from a single image! |
| `workflow_yUFa78LU4QqLaz5E` | Image to Image Character Sheet Face Swap with Ace+ | Take a character sheet and use a reference image to replace all the faces with that new person.  Key Inputs  Load Image: Use any JPG or PNG showing your pose sheet  Load New Face: Use any JPG or PNG showing your subject  |
| `workflow_DTC1JndNxMKrJyKL` | Image to Image with Flux ControlNet | Transform your images into something completely new, yet retaining specific details and composition from your original using flexible controls.  Key Inputs  Image reference: Use any JPG or PNG showing your subject clearl |
| `workflow_4MBn2TQ9NdETv45x` | InsightFace for Filtering Character LoRA Dataset | Upload a reference face, point to your dataset, and InsightFace filters out images that don't match. Cosine, L2 Norm, and Euclidean distance all supported. |
| `workflow_GDzUM6QdfE69Lj6s` | Modify the Image using InstantX Union ControlNet |  |
| `workflow_B7JEXFtWABfjCeMa` | Nano Banana 2 for  Image to 360 Panorama | Turn any photo into a 360 equirectangular panorama with Nano Banana 2. Upload an image, hit run, and get a 2:1 wrap ready for VR scenes and skyboxes. |
| `workflow_sQ7yzrdWicjhvgTQ` | Nano Banana Pro - Game Art Restyling |  |
| `workflow_rQhztDFqoQZQ2wCL` | Nano Banana Pro Storyboard: 1 Image to 5 Shots |  |
| `workflow_QQHTdwPHKPzbNNrb` | Qwen Image 2.1 Face Swap | Upload a photo and a new face. Qwen Image 2.1 swaps in the whole head and keeps the body, pose, outfit, and scene from your original. Two uploads, one prompt. |
| `workflow_YDox8jRMAZ6AE5C8` | Qwen Image 3 · Character Pose Transfer | Redraw any character in a new body pose using Qwen Image 3 by Alibaba. Upload a character photo and a pose reference, and hit run. |
| `workflow_VRegpMVLfx9AwK1h` | Qwen_Image_2.1_Image_to_Image | Qwen Image 2.1を使用したImage to Imageワークフローです。オープンソースモデルのためAPIウォレットを消費せず、構図維持、画像編集、スタイル変更、参照画像を使った再生成に活用できます。ネイティブ2K出力にも対応しています。 This is an Image to Image workflow using Qwen Image 2.1. It uses an open-source model. |
| `workflow_A8RLDwFKhysWJ6FE` | R2A for Klein · Image to Image For Anime | Upload any photo or render and FLUX.2 Klein converts it into an anime-style illustration with cel shading, clean lineart, and vibrant color, then upscales the result to high resolution. |
| `workflow_YBFJvEoeeWjbxQno` | ReActor - Simple Face Swap |  |
| `workflow_PLS2v9CjKPGxDPr6` | Reve 2.1 · Remix (Multi-Image) | Reve 2.1 is Reve AI's layout-first model that blends up to 8 reference images into one, in native 4K. Upload your references, describe the mix, and run. |
| `workflow_FYf15LkJDPdWk885` | RPBuddy - Flux 2 Klein Expression Sheet Generator | Generate expression variants of your characters for use in RP and visual novels! |
| `workflow_oYAxBDPfT1TJuUh9` | SAM3 Image Segmentation |  |
| `workflow_PGvYpETz3HPNdfp9` | Seamless PBR Texture Workflow | Turn any reference image into a tileable wood texture with full PBR maps: basecolor, normal, roughness, metalness, and height. Built for Unreal and Blender. |
| `workflow_5kSCgdzjsZADJygq` | Seedream5 Pro_recompose_i2i | Seedream 5.0 Proを使用した構図更用のImage to Imageワークフローです。 This is an Image to Image outfit change workflow using Seedream 5.0 Pro. |
| `workflow_fs5yZtcLu1vETwdd` | Topaz Image Sharpen | Sharpen any photo with Topaz Sharpen AI, the AI sharpening model by Topaz Labs. Upload an image, pick a sharpening mode, and hit run. |
| `workflow_xGeFVVnRznoDrWPu` | Topaz Image Super Focus | Fix soft or out-of-focus photos with Topaz Super Focus V2, an AI focus recovery model by Topaz Labs. Upload an image, adjust the strength, and hit run. |
| `workflow_vYHvC5f6ikbhEV7c` | Vertical Video Prop & Object Replacement Using Seedream + Wan 2.2 |  |
| `workflow_7G6z4m1QHLhWNSxX` | Z-Image Turbo with Controlnet 2.1 and Qwen VLM | Creating Accurate Variety of Images |
| `workflow_tJH9AyrFCnwS72qW` | Z-Image Turbo: ControlNet I2I For Kids Edu |  |
| `workflow_aACEHU9Tr6L1WbBz` | Z-Image Turbo: ControlNet I2I For Viral SNS |  |
| `workflow_LWNCLV1BQKD9kghK` | Z-Image Turbo: ControlNet Image to Image | Image to Image |
| `workflow_QxXVk1J8E9CzoCCK` | Z-Image Turbo: ControlNet Image to Image For Anime | This workflow uses Z-Image Turbo with Fun ControlNet Union to transform a reference image into a new style while preserving its original structure. The input image is processed with a ControlNet preprocessor to retain po |

## LoRA training (6)

| ID | Name | What it does |
|---|---|---|
| `workflow_FzbWVGdMxTJsChuL` | Anima LoRA Training · LoRA Training | Train a custom LoRA on the Anima image model using your own images and captions. Upload a dataset, configure training, and download a .safetensors file ready for any Anima workflow. |
| `workflow_UHLCwaec49KadsaP` | Detailed Auto Caption | Generate high-quality captions for LoRA training and automatically resize images to SDXL/Flux-compatible resolution. |
| `workflow_vt5J5s9oZ9YVskba` | Fast LoRA Training for Flux via Floyo API | FLUX is great at generating images, but locking in a specific aesthetic or character is easier with a  LoRA. Here's how to create your own. |
| `workflow_2J5v15hA9xZHinym` | Ideogram V4 LoRA Trainer · LoRA Training | Upload your training images and this workflow fine-tunes a LoRA adapter on Ideogram V4, returning a download link for the trained LoRA file and config, ready to use in generation workflows. |
| `workflow_KjeHD3yEcWZ4qoRg` | LoRA Training Video with Hunyuan | Hunyuan is great at generating videos, but locking in a specific aesthetic or character is easier with a  LoRA. |
| `workflow_mbWnCbEsgP22GD8U` | SDXL LoRA Trainer | Train a custom SDXL LoRA on your own images, with preview samples rendered between training stages. |

## Other (151)

| ID | Name | What it does |
|---|---|---|
| `workflow_gSFA3t2bRHtbjE9Q` | Floyo Workflow Card Thumbnail Maker |  |
| `workflow_LDsJqdTJPKx7Hcwz` | ,mnkmbn | dasda |
| `workflow_jrvmQ9tPfdV4iiBH` | 100% |  |
| `workflow_MV416g4Kq1SauqfZ` | 10sorlabs Krea2 Image Workflow DEFO_ZIT_LINEAR | Copy of DEFO. Only changes: UpscaleModelLoader uses zit_upscaler.safetensors and ImageScaleBy uses linear. All LoRAs, prompts, samplers and FaceDetailer settings are unchanged. |
| `workflow_gqkBAxEPeF6sE2RR` | 360° Character Turnaround & Sheet Workflow |  |
| `workflow_oZ4T6cCzUyDmAcH9` | 5 Camera Angles with QwenMultiAngle | 5 Camera Angles with QwenMultiAngle |
| `workflow_9Z6GDV2Q9578Cqco` | A2R for Klein | A2R Klein |
| `workflow_BqeHuJ5PT2Z9Ly2L` | Advanced Live Portrait: Facial Expression Tuner |  |
| `workflow_CFZnMjHmxqmqeaZ1` | AI Travel Vlogger Generator (Nano Banana + Kling) | Create social-ready travel reels from a single image and location reference. |
| `workflow_Ypw3DUAEQ8hjnSe6` | AI Video Background Replacement | Step 1: Upload you footage.  Step 2: Upload alpha of what you need to replace, be it full BG or selected area. Step 3: Add prompt Step 4: Upload a reference image Step 5: Hit Que |
| `workflow_NvaSF7ATLwQ5Ny5B` | Anima Turbo: Restyle Any Photo Into Anime Art | Turn a photo or sketch into an anime illustration with Anima Base v1.0 plus the Turbo LoRA. Upload an image, describe the look you want, and hit run. |
| `workflow_sq2HfNrZCxThHaTZ` | Anime Tween Between Two Keys · H3 seq Adapter | Generates the 22 frames between a first and last key with MiniMax H3 open weights and our seq adapter. Built for redoing one short span inside a longer take. |
| `workflow_21dBLavjPu9vrQ21` | Anime Workflow (with facedetailer) |  |
| `workflow_iHY6SKcVQVPioAwe` | asdas | dasdasd |
| `workflow_H9PZzJ9PnpCAXqQH` | asdasd | asdasd |
| `workflow_3pj96p9rcbffeLAX` | Audio Separation for Video to Audio | Upload a video, strip the audio, and split it into four clean stems (Bass, Drums, Other, and Vocals), then save your chosen stem as an MP3. No model required. |
| `workflow_rJMhXYRb6iafZHGS` | Audio to Modem Encryption using Orion4D Secret | Encode text into audio signals using three modem methods (AFSK, OFDM, Spectral), then decode and verify integrity. Built with Orion4D nodes in ComfyUI. |
| `workflow_b5UxNEzYBKmbJyBf` | Audio Watermarking using Orion 4D Secret | Upload any audio file, write the text to hide, and get back two watermarked copies. Steganography packs more data. Frequency encoding survives MP3 compression. |
| `workflow_HN9bSrS9WRd3MAXh` | basic gpt-image2 workflow |  |
| `workflow_ZWHJ2KKp5SAEMiHq` | Basic Krea 2 Turbo Realism | ComfyUI workflow utilizing Krea 2 turbo models, text fusion, skin details, and custom LoRAs optimized for high-realism image generation with recommended settings like er_sde sampler and beta scheduler. |
| `workflow_RcaM5WBy3gniLu7G` | Biomechanical labor | Biomechanical labor sytle for background. |
| `workflow_1EemJ4TheMCYqjuB` | Camera Angle Control for Consistent Characters | Generate the same character from any camera angle without losing the design. Built for animation work, where one cut list needs high angle, low angle, profile and over-the-shoulder views of a single character. Set the an |
| `workflow_Ki34D3riJ5ej9Tob` | Camera Angle Control with Qwen | Qwen |
| `workflow_Z1NhUVS5j15JGoU1` | Cat＆BAG LTX23_Start_End_Frame | Cat＆BAG |
| `workflow_kRYPxsRyd9CZrNAL` | Character Consistency - 1 image only. Flux Ace++ | Load 1 image and use natural language to get variations of your input image. Works great for character consistency to generate a dataset for loras. |
| `workflow_iJVuJjphmC6sFnEH` | Character Sheet for Consistency | Consistency is important when using Ai to generate Film, Art or Motion. This workflow is an easy way to gain consistent characters and keep a smooth character in your generations |
| `workflow_e5TPhTrbkN9oxsjM` | DOG AT HOME — World Setup | Visual development workflow for a cinematic zombie outbreak in Tokyo, contrasting a devastated city with one untouched home. |
| `workflow_LSnzN72B7b2NVxvz` | douga work |  |
| `workflow_rRyRgV4DNzuKSDri` | FLUX 2 Klein 9B — Turn Game Sketches Into Any Art | Transform your rough character sketches into stunning ]game-ready art styles. |
| `workflow_nY5QzKkdiPJ2Yu7D` | FLUX 3 · Extend Video | FLUX 3 is Black Forest Labs' video model that continues a clip where it left off. Upload a video for up to 20 seconds of new footage, with sound. |
| `workflow_DdRhhnP1a5d73FU5` | Flux ControlNet 2.0 - All-in-one | Latest and greatest Flux ControlNet workflow. |
| `workflow_11JtpYKRHLeNvSrk` | Flux Kontext - Quick & Easy | Load an image reference and use the smart Flux Kontext model to ask for anything. The model understands natural language and looks at your input image. Example:  Put this man on a tropical island. This man is sleeping in |
| `workflow_xckZrv4Lv4PZNLdT` | Flux Kontext - Single Image to Character LoRA | Generate a 60-Image LoRA Dataset from a Single Character Image |
| `workflow_EDNnbs88c4BMvrQB` | Flux Kontext - Sketch to Image | Bring your sketches to life in full color with Flux Kontext!  Key Inputs  Load Image – Upload the sketch you want to transform.  Prompt – Describe the desired output style, such as:     “Render this sketch as a realistic |
| `workflow_Sb8VcfvCTFRG75hT` | Flux Kontext Multi-Image Reference | Combine up to 3 reference images into one with Flux Kontext  Key Inputs  Load Image (3x): Load 3 different reference images.  Prompt: Describe how to combine these images, see default value for example. |
| `workflow_zgiP7RFtdf3ZNy78` | Flux Kontext Sketch to LineArt + Color Previz | Quickly convert rough sketches into polished lineart and colorized concepts. Ideal for early storyboards, character designs, scene planning, and other visual explorations. |
| `workflow_LMe2CC4GPA7X9bAT` | Flux Kontext · Single Image to Character LoRA Data | Upload a single character image and Flux Kontext generates a full multi-pose, multi-angle training dataset automatically, saving each image with a matching caption ready for LoRA training. |
| `workflow_sMAFPwxisbqFK24K` | Flux LoRA Trainer |  |
| `workflow_QQA4NWwsnrhAY5PS` | Flux Text to Character Sheet | Create a character and a range of consistent outputs suitable for establishing character consistency, training a model, and ensuring consistency throughout multiple scenes.  Key Inputs  Image reference: Use the included  |
| `workflow_87bE4F3WJ6RSCb7p` | Gemini Omni Flash 1.1 for Reference to Video | Turn a reference image into a short video with synchronized audio using Gemini Omni 1.1 Flash. Upload an image, describe the motion, and hit run. |
| `workflow_DNrtFagk3oVqSBF4` | Gemma 4 E4B: Ask Anything About a Video | Upload a video, ask a question or give an instruction, and get a written answer from Gemma 4 E4B, Google DeepMind's open-weights multimodal model. It reads the frames and the audio track together. |
| `workflow_GkJsFP949mvANZKh` | Gemma 4 E4B: Ask Anything About an Image | Upload an image, ask a question or give an instruction, and get a written answer from Gemma 4 E4B, Google DeepMind's open-weights multimodal model. Add audio to transcribe or analyze it alongside the image. |
| `workflow_wjLDKCHyrUpsZRyG` | Giovanna Modelo | Giovanna Modelo |
| `workflow_B9bgrxT92AfZh4EK` | GPT Image2 CharaSheet | このワークフローは参照画像を元にキャラクターシートを作成するワークフローです。ノードごとに画像を参照させます。 |
| `workflow_FhDcSRTS23fywE7s` | Happy Horse 1.1 · Reference to Video | Upload up to nine reference images of characters, objects, or scenes, and Happy Horse 1.1 generates a cinematic video that preserves their identity, style, and detail with synchronized audio. |
| `workflow_EokBQkrnMApthYMW` | Hidden Faces |  |
| `workflow_pGds6geMbk3AUYfN` | IC-Light | [Test] |
| `workflow_wv3oq5g8yTh3bCW2` | iffy | iffy |
| `workflow_KnDZdnXQ7M16XPkH` | Illustrious Comic Factory V1 | Four panel generation with editable dialogue and face aware bubble placement |
| `workflow_GP1BDwsG32FL3gJC` | image create |  |
| `workflow_GyKwJ65SVHa7DVfq` | Image Generator | AI image generation for creative professionals |
| `workflow_q1YeEpKgEVkEkoKk` | Image Redux with Flux | Create variations of a given image, or restyle them. It can be used to refine, explore, or transform ideas and concepts.   Key Inputs  Image reference: Use any JPG or PNG showing your subject clearly  Width & height: In  |
| `workflow_xMpMnAcG3s6pGqGm` | Isometric Miniatures from a Selfie |  |
| `workflow_8HXnG8uYbRjE1Jcc` | jhvhjv | lkjlkj |
| `workflow_y79r8356Rrriux7V` | joy caption fine controls |  |
| `workflow_8XN9JrDJQ8xcF1Vy` | Juanro3 |  |
| `workflow_CSrgaR94u5ch82B1` | JUXN |  |
| `workflow_Eegs2bpvXFgGh6uz` | kjhjkn | dsfdsf |
| `workflow_hP1kBQUa7PzeESVq` | Kling 3.0 Standard Motion Control | Transfer movements from a reference video to any character image. |
| `workflow_cMa56yJn8gH4YDie` | Kling Omni 1 Reference to Video |  |
| `workflow_NYF5LkqE9kGAmSfJ` | Kling V3 Pro Motion Control |  |
| `workflow_FoK6Z1xvK7ZBYLyx` | Kling v4.0 · Reference to Video | Create a video from your own images, clips, characters, and voices using Kling v4.0 by Kuaishou. Upload your references, describe what to make, and hit run. |
| `workflow_MWAbV1X1hGXsNVvd` | Kling3.0_Motion Control_Character Reference | 画像、動画をアップロードすることで一貫性の高いキャラクターのモーションコントロールができます |
| `workflow_Tt2zexb4vmF85gJe` | Krea 2 Coloring Art | Two Coloring-Page Editions from One Queue |
| `workflow_44hmNFhvgQwpNKBA` | krea 2 image | generate images from krea2 with your identity lora |
| `workflow_8mDvUtxWM8DqeDpn` | Krea 2 Simple WorkFlow V1.0 by HARUKI_MIX | Krea 2用のシンプルなワークフロー |
| `workflow_7SstdJiVFtCMXYzT` | Krea 2 Simple WorkFlow V2.0 by HARUKI_MIX | Krea2用のシンプルかつ高品質な画像生成を求める人のワークフロー |
| `workflow_eoGi18p3fkmE1NpE` | Krea2 Advanced Workflow | Krea2 advanced workflow with prompt assist 📝, I2I 🖼️, Upscalers, Detailers, and  Post Production Correctors 🎨 |
| `workflow_jTP17EELs3HUgBha` | Krea2_Ultra_Real | Workflow for hyper-realistic AI Images using Krea2 and UltraReal Lora. |
| `workflow_dTCSUPk96q9QeR3B` | LITTLE_ISSN | A 26-scene Seedance 2.0 workflow that reimagines the Japanese folktale Issun-boshi, blending dry-brush textures, ink bleeds, and expressive linework from traditional Japanese painting with dynamic camera moves and high-i |
| `workflow_owS1RT1pMd6TbHeX` | LTX 2.3 Audio to Video |  |
| `workflow_2pPdAyKzrG16XU72` | LTX 2.3 ComfyVFX V2V | LTX 2.3 video to video powered by ComfyVFX nodes. |
| `workflow_NUwZyG5WNfsvL2D5` | LTX-2.3 · Video Colorization | Colorize black-and-white or faded video with LTX-2.3 by Lightricks. A local Gemma model reads the scene and writes the colour prompt, then you hit run. |
| `workflow_hMuBn4Xr83UgMo6X` | LTX-2.5 for Audio to Video | Generate video from an audio file using LTX 2.5, Lightricks' 22B open-source video model. Upload audio, write a prompt, add a starting image if you want, and hit run. |
| `workflow_tPLU18mN924HNq9B` | LTX-2.5 IC LoRA for SDR to HDR | Convert standard video to HDR using LTX-2.5 with a dedicated SDR-to-HDR IC-LoRA by Lightricks. Upload an SDR video, hit run, and get back an HDR master with EXR frames. |
| `workflow_2CNHRp4XMWJAArPS` | LTX-2.5 ICLoRA Ingredients for Reference to Video | Upload a reference sheet of characters, props, or locations, describe the action in a prompt, and LTX-2.5 with the Ingredients IC-LoRA generates a video with synced audio. |
| `workflow_UPHN4HT8PR4JJcND` | LTX2 Sound to Video | Sound to Video |
| `workflow_o22G61f7zgYFB5WN` | MiniMax H3 Anime 768p Generation to True 60 FPS | A tested one-reference workflow for stable anime motion, native audio, and smooth delivery |
| `workflow_nE5TGVJXsPGAn7CD` | MiniMax H3 ControlNet · Pose-Guided Generation | Transfer motion from a control video into an entirely new scene using MiniMax H3 Ref2VA with ControlNet pose guidance, describe the new visuals, and hit run. |
| `workflow_rDJCRU7BrrSxjDy7` | Minimax H3 FLF2V + Orbit LoRA for 360 View | Upload a photo and MiniMax H3 with the Orbit LoRA animates a full 360 camera rotation around it, with synchronized stereo audio, in one pass. Upload, run, download. |
| `workflow_W6Nfq8Dp8NEB2ecA` | Minimax H3 for Object to Logo Motion Graphics | Upload a photo of any object, convert it into a bold emblem-style logo with GPT-4o Image, then generate a transformation animation and brand showcase video with MiniMax H3 Max. |
| `workflow_rKVQkX69kkTgM7Uq` | MiniMax H3 Masking · Video Identity Replacement | Replace the person in an existing video with a new identity and wardrobe using MiniMax H3 Ref2VA and SAM segmentation, then describe the new look and hit run. |
| `workflow_44snJYA6UcFVdqDE` | MiniMax H3 Open Weights Image to Reference 480P | MiniMax H3 Open Weightsイメージリファレンス480P |
| `workflow_pACzY3Smic1369hb` | MiniMax H3 R2V · Reference to Video | Generate video with synchronized audio from reference images, video, and voice clips using MiniMax H3 Ref2VA, then describe the scene you want in a text prompt and hit run. |
| `workflow_pSTVstDsm1JysRh9` | MiniMax H3 RefMod · Reference to Video | Generate identity-locked video with synchronized audio from pre-encoded reference bundles using MiniMax H3 Ref2VA and the RefMod system, then describe the scene with a structured prompt and hit run. |
| `workflow_P5Jz48gb6MFouWvn` | MiniMax H3 VFX · Reference-to-Video | Upload a subject photo and a VFX style image, describe the scene, and MiniMax H3 generates a video with synced audio that blends both. Hit run to start. |
| `workflow_y5KdeCzAvpUgqKfe` | MiniMax H3 · Reference to Multi-Shot Video | Upload a reference image and up to three guide images as timed keyframes, write a prompt describing the motion, and MiniMax H3 generates a multi-shot video with synchronized audio in one pass. |
| `workflow_c8rP9RdcTE7By4fG` | MiniMax R2V and Character Sheet | MiniMax R2V and Character Sheet |
| `workflow_LJcwc26obTJXA7MD` | MinimaxH3 | MinimaxH3 |
| `workflow_2wJgHoCLoPSNNRda` | Musubi Tuner - Wan LoRA Trainer | Train Wan LoRAs directly on Floyo with this simple all-in-one custom node. |
| `workflow_f1GtXpYvKS1QX129` | Musubi Tuner - Z-Image LoRA Trainer | Train Z-Image LoRAs directly on Floyo with this simple all-in-one custom node. |
| `workflow_rxDV53se4ZMC2ZWx` | My Monster Dad |  |
| `workflow_WhcEuzPJ5R9cdQCK` | Nano Banana — Generate Game Character Sheets | Create full game character sheets from a single character image. |
| `workflow_TCEnsTGnNJmrKyC2` | Nano Banana — Turn Sketches Into Game Art Style | Transform your rough character sketches into stunning game-ready art. |
| `workflow_our85PPt5MM7XLsn` | NanoBanana2_Character Sheet | Nanobanana2を使用したキャラクターシート生成ワークフローです。キャラクター画像をアップロードして生成ボタンを押すだけで、顔のアップ、正面図、キャラクターシートを自動生成できます。 This is a character sheet generation workflow using Nanobanana2. Simply upload a character image to the green node, Load Imag |
| `workflow_B9P1u7Wqg8GH2QgX` | NOKI_AI_Studio_WFAIA2026 |  |
| `workflow_6tzyCJaq5UdpmChB` | Omnipotent Image 2.0 – Multi-Image Scene Composer | Upload up to 3 reference images for a face, clothing, and scene, then describe what you want. Nano Banana 2 combines all three into one composed output. |
| `workflow_acAwgM2iKrMbEf5T` | Pika H3 Flex for First Last Frame to Video | Set a start image and an end image, describe the motion between them, and Pika H3 Flex generates a video with synchronized audio in six steps. Upload two frames, write a prompt, and hit run. |
| `workflow_qWhAhc4PY38NKPBK` | Pika H3 Flex for Reference to Video | Upload reference images, describe the scene, and Pika H3 Flex generates a video with synced stereo audio in six sampling steps. Hit run. |
| `workflow_wCYFf1FpfsVB53h4` | Pika_H3_Flex_Reference_to_Video | キャラシートや人物画像を参照して、同じ人物・服装で音付きの動画を作ります。Pika H3 Flexを使い、Partner Node不要でFlo Timeだけで動きます。 / Create videos with sound that keep the same person and outfit from a character sheet or portrait. Runs on Floyo GPU with Flo Time, no |
| `workflow_V2tvR51F5GWg1WtF` | Prueba 2 |  |
| `workflow_KSTtULC2eeFNJMn8` | Qwen 3.5 9B for Open Source LLM and VLM | Run Qwen 3.5 9B in ComfyUI as a text-only LLM or as a vision language model. Attach an image or a video, write your prompt, and get text back. |
| `workflow_65sFkmu3gPeJ1fxt` | Qwen 3.5 Plus for Multimodal LLM and VLM | Analyze your images or videos using you Qwen 3.5 Plus |
| `workflow_dtdX46DVjERwGhmt` | Qwen Image 2.1 for Character Pose Transfer | Transfer any body pose onto your character using Qwen Image 2.1 and Fun ControlNet Union by Alibaba. Upload a character photo, upload a pose reference, describe the scene, and hit run. |
| `workflow_4FW5FRQWZiZnZd44` | Qwen Thinking Prompt Refiner |  |
| `workflow_FVmWh9qLk6f4vMzN` | Qwen3 Thinking Prompt Enhancer |  |
| `workflow_PY6pG9vLV8B54ejK` | Qwen3-VL Image and Video Captioning | Upload an image or video and get a detailed text description from Qwen3-VL. Choose your model size, pick a preset prompt, or write your own. Runs in your browser. |
| `workflow_hAfYuakSDJTbwZ1i` | R2V MiniMax H3 | MiniMax H3 Reference to Video |
| `workflow_NYqESPY62SRjrLXF` | SCAIL2_Motion_Control | SCAIL2を使用したモーションコントロール用のワークフローです。動画をモーション元としてアップロードし、入れ替えたい人物画像をアップロードすることで、動画内の動きをキャラクターへ転送できます。緑色のノードだけ設定すればすぐ使えます。 This is an Image-to-Video motion control workflow using SCAIL2. |
| `workflow_RhsGfSrUN75gLiLk` | scale up | most important |
| `workflow_V57BV4ggcerYWHsc` | SDR 2 HDR | Upgrade your 8bit SDR footage to 32 or 16bit HDR EXR. |
| `workflow_VzC9aQH4M3D64XQo` | Seedance 2.0 Fast Reference-to-Video |  |
| `workflow_AYSWK9qHMCw4q6Db` | Seedance 2.0 UGC Fashion Video · Reference to Vide | Upload a product photo and a model photo, write a timed multi-scene script, and Seedance 2.0 generates a 13-second vertical fashion video with dynamic cuts, varied angles, and native audio. |
| `workflow_iJg78giiugBBd6Er` | Seedance 2.0: Reference to Video | Composite up to nine reference images into one video clip with Seedance 2.0 by ByteDance. Tag each image in the prompt, describe the scene, and hit run. |
| `workflow_CemEhdz9Ptdczkkz` | Seedance 2.5 UGC Fashion Video · R2V | Upload a product photo and a model photo, describe the scene shot by shot, and Seedance 2.5 generates a vertical fashion video with sound. |
| `workflow_GGxApBBc1dokTujK` | Seedance 2.5 · Reference to Video with Draft mode | Make any face follow a motion video with matched audio using Seedance 2.5 by ByteDance. Upload a face, a clip, and a recording, and hit run. 720p output. |
| `workflow_aPm2erk2Wmc5h3n7` | Seedance2 Reference | bring my imagination to life using reference images. |
| `workflow_EawSBkFJS9fKdyz3` | Seedream 5.0 Pro_Character Sheet | Seedream 5.0 Proを使用したキャラクターシート生成ワークフローです。This is a character sheet generation workflow using Seedream 5.0 Pro. |
| `workflow_3j5BKC6P34YXSvpE` | Seedream5.0Hot_Character Sheet | Seedream5.0を使用したキャラクターシート生成ワークフローです。キャラクター画像をアップロードして生成ボタンを押すだけで、顔のアップ、正面図、キャラクターシートを自動生成できます。 This is a character sheet generation workflow using Seedream5.0. Simply upload a character image to the green node, Load Imag |
| `workflow_oMYvz4Tqh5EEaXxJ` | Several Images inputs Seedance Reference to Video | Several Images inputs Seedance Reference to Video |
| `workflow_biaSS82nyHHBVr6d` | Simple Self-Forcing Wan1.3B+Vace workflow | Created by @davcha on Civitai, please support the original creator!  https://civitai.com/models/1674121/simple-self-forcing-wan13bvace-workflow  If this is your workflow, please contact us at team@floyo.ai to claim it!   |
| `workflow_qiS7yfzXKrkMKyHf` | Single Image to Multiple Consistent Shots |  |
| `workflow_TH66jdR5LWQwZUAP` | Sketch to Image | Turn your sketches into full blown scenes.  Key Inputs  Image reference: Use any JPG or PNG showing your subject clearly  Prompt: as descriptive a prompt as possible  Width & height: In pixels  ControlNet Strength: The a |
| `workflow_YpWsYzmZyZ7RyWxK` | SMART FACE SWAPPER - Ace++ Flux Face swap | Face swapper built with Flux and ACE++. Works with added details too, like hats, jewelry. Smart features, use natural language. |
| `workflow_uK19hdAn3PbbM3x5` | Spacecraft Interior | This lora a "stylized" spacecraft room style for backgrounds and enviroments. |
| `workflow_PgBJ5VGWgBtaQLgT` | Static Watermark Remover |  |
| `workflow_4RrjgNL1NFJ8KiBe` | TEST WORKFLOW | TEST WORKFLOW |
| `workflow_wSNRcCh8oDw8HnwP` | Text Manipulator | Encode plain text into cipher characters and decode it back. Paste a message, pick a cipher style, and get a disguised version only the matching decoder reads. |
| `workflow_dcJ3GeTXarH2NBFM` | Text to Character Sheet with a reference LoRA | Generate a character sheet using a prompt and a LoRA model of a particular person for more accurate renders.  Key Inputs  Load Image: Use any JPG or PNG of your pose sheet  Prompt: as descriptive a prompt as possible  Wi |
| `workflow_5rkghL7x1dYe636f` | Texture to PBR · Image to Material | Upload a seamless texture and this workflow extracts a full PBR material set including albedo, normal, metallic, roughness, ambient occlusion, and height maps using Marigold and Lotus models. |
| `workflow_ERCxNQS2xeYkNtjp` | The Day the Stork Came – Family Story Generator |  |
| `workflow_AAcHxvhkYRi6UYZ3` | Transform Your Character Into a Pixel Sprite Sheet | Upload any character, object or icon and this workflow automatically generates a fully animated sprite sheet using Nano Banana 2. |
| `workflow_zkc5mqCw4gsg2DsL` | Vertical Video Light & Mood Shift |  |
| `workflow_9mAQqtrwnDSskwvr` | Vertical Video Scene Extension & Coverage Generator |  |
| `workflow_Lc1qkGwjB34w6wEA` | Vertical Video Scene Extension & Coverage Generator using Seedream +Wan |  |
| `workflow_EsKE2qByyvNgHARF` | Video Masking with Sam2 Comparison | Use a video clip and visual markers to segment/create masks of the subject or the inverse.  Key Inputs  Load Video: Use any Mp4 that you would like to segment or create a mask from  Select subject: Use 3 green selectors  |
| `workflow_EHqecejAdt2NvBTh` | videopromptmask |  |
| `workflow_B9wrBRMFzCBqiidr` | VideoPromptMask | VideoPromptMask |
| `workflow_e4CGJwXYVy4vsP2b` | VideoPromptMask | Mask the video with prompts |
| `workflow_JmbNifmqQR3PSPwx` | Wan 2.2 multilora | a wan 2.2 workflow that should allow both lightning and also allow you to add extra loras. |
| `workflow_iXqqZkHnQKsZEJA3` | Wan 3.0_Prime_Image_to_Video | Wan 3.0 Primeを使用したImage to Videoワークフローです。画像1枚とプロンプトを用意し、解像度・長さ・音声を設定するだけで、セリフや環境音つきの動画をすぐに生成できます。This is an Image to Video workflow using Wan 3.0 Prime. Just add an image and a prompt to generate a video with sound. |
| `workflow_fKMhuyibv58VYjUn` | Wan 3.0_Prime_Reference_to_Video | Wan 3.0 Primeを使用したReference to Videoワークフローです。キャラクター設定画を参照させ、セリフなしの10秒アクション動画を生成できます。This is a Reference to Video workflow using Wan 3.0 Prime. Reference a character sheet to generate a silent 10-second action video. |
| `workflow_ef44Q5MnZi9qBuMt` | what will you choose?kakudo |  |
| `workflow_tEJHXmiFqsav5qq6` | Woma_in_SUNlight | This is a simulation of the surface of the sun that you can use as a background image when rendering. |
| `workflow_sMR2JKLj14TbAixc` | Z-Imag workflow | Fast workflow |
| `workflow_TeF87tDfNC1oFe93` | Z-Image glow WF |  |
| `workflow_6JBiDopD5wUFDjDM` | z-image-turbo | text-to-image |
| `workflow_hqLLs7kbSt32DF7V` | ⚡ MiniMax H3 Start & End Turbo 4-Step｜開始・終了指定 | 【日本語】開始・終了画像を指定して、その間を生成する4-Step Turbo高速ワークフロー。背景・画角・比率を揃えた16:9サンプル付き。5秒・24fps・音声ON。 【English】Fast 4-Step Turbo workflow for continuous motion between matching start and end frames. Includes aligned 16:9 samples; default |
| `workflow_QLQXxk3hGPfzAVE6` | つるつるガール | つるつるガールを生成する |
| `workflow_T8ygy67bW4Bzt61n` | 三面図&顔アップ生成 | キャラクターの三面図と顔のアップの作成 |
| `workflow_cRMh1zbTPoBLG772` | ＷFAIA提出用ワークフロー | Ｃ３ |
