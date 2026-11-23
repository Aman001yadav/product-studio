# Support video input with two light workflows; leave out video upscaling

Video options load the uploaded clip through the workflow's `LoadVideo` node (`file` input), the same way photo options use `LoadImage`, so the job and version code is shared. Two video workflows went in after real runs on a 5-second 1080p clip: Add sound to video (MMAudio V2, ~30 s, ~$0.005) and Edit video with prompt (Gemini Omni Flash 1.1, ~1.5 min, ~$0.50). Video upscaling was left out: SeedVR2 used 578 s of FloTime on that clip without finishing before it was canceled, and RelayVSR 2x also ran for over 9 minutes, too slow and costly for an interactive app.

## Consequences

- A finished video run can be marked complete a moment before its output file is listed, so a job waits up to 8 status checks for the file before failing.
- Add sound to video sets the sound's length to the clip's length (rounded up, at most 30 s); the saved workflow is fixed at 8 s.
- A video made from a photo (Animate into a video) can go straight into the video options.
