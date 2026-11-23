# Spec: Product Studio

Written after the first build, from the decisions made while building it. A spec-first process (grill, then spec, then tickets, then a test-first build) writes this first; see "What I would do differently" at the end.

## Problem Statement

A small online seller has a plain phone photo of a product. Turning it into listing images, a lifestyle shot, a banner and a short video means a photographer, an editor or several separate AI tools, each with its own learning curve.

## Solution

A single web page: pick what you want, add your photo, wait while Floyo runs the right workflow, then compare before and after and download. Results can feed the next option, and any earlier version can be picked up again, so a seller can try a chain of edits without starting over.

## User Stories

1. As a seller, I want to see every option on one screen, so that I know what the app can do before I upload anything.
2. As a seller, I want each option to show whether it makes an image or a video and how long it takes, so that I can choose with the right expectations.
3. As a seller, I want to add my photo by drag and drop or a file picker, so that it works however I prefer.
4. As a seller, I want to describe the scene for "Place in a scene", so that the product appears where I want it.
5. As a seller, I want to describe the motion for "Animate into a video", so that the clip shows the product the way I like.
6. As a seller, I want a sensible prompt filled in already, so that I can run an option without writing anything.
7. As a seller, I want to see whether my run is queued or running and how long it has taken, so that I know it has not stalled.
8. As a seller, I want to cancel a run that is taking too long, so that I can go back and try something else.
9. As a seller, I want the before and after shown side by side at full size, so that I can see the difference clearly.
10. As a seller, I want transparent areas shown as a checkerboard, so that I can see the background was removed.
11. As a seller, I want to download the result, so that I can use it in my store.
12. As a seller, I want to apply another option to a result, so that I can chain edits (cutout, then scene, then banner).
13. As a seller, I want to go back one step from a result, so that I can try a different option on the image it came from.
14. As a seller, I want every version I made kept in view, so that I can return to any of them without starting over.
15. As a seller, I want to start over with a new photo, so that I can work on another product.
16. As a seller, I want a clear message when a run fails, so that I know what happened and can go back.
17. As the developer, I want the app to keep working when a Floyo workflow adds a required setting, so that a change on Floyo's side does not break a demo.
18. As a seller, I want to describe any change in my own words, so that I can make edits the fixed options don't cover.
19. As a seller, I want background music for my product video in a mood I describe, so that my ad doesn't need a separate music tool.
20. As a seller, I want to make music without uploading a photo, so that I can start with it.
21. As a seller, I want to upload a product video, not only a photo, so that I can improve clips I already have.
22. As a seller, I want to add sound that matches my video, so that a silent clip is ready to post.
23. As a seller, I want to edit my video by describing the change, so that I can restyle a clip without editing software.
24. As a seller, I want one option that edits my video and then adds sound, so that I get a finished ad in one click.
25. As a seller, I want a video made from my photo to go straight into the video options, so that I can keep improving it.
26. As a seller, I want to hear the added sound in the result, so that I can judge it before downloading.
27. As a seller, I want one option that runs two workflows in a row, so that I get a lifestyle banner in one click.
28. As a seller, I want to see which step of a combined option is running, so that I know how far along it is.
29. As a seller, I want "Back one step" to discard the result I'm backing out of, so that my versions only show what I kept.

## Implementation Decisions

- Next.js (Node.js) app: a React page plus API routes. The Floyo API key stays on the server.
- Ten single workflows (seven photo options, two video options, music, plus Expand used only inside Lifestyle banner), each chosen and test-run while building (ADR 0002), and two combined options that chain them (ADR 0005).
- Video options load the upload through the workflow's LoadVideo node; the clip's length sets how long the added sound is (ADR 0006).
- Background music runs ACE-Step 1.5 XL without a photo: a 30-second instrumental MP3, with a new seed each run (the saved workflow's seed is fixed at 0).
- Expand to banner is not a menu card; it runs only as step 2 of Lifestyle banner, with its 12B prompt-enhancer model switched off (5+ minutes cold, same result without it).
- The server fetches the workflow JSON at run time, puts the uploaded photo's input path into every LoadImage node, and applies the option's own settings by node type (ADR 0003).
- Option settings: Place in a scene sets the prompt and keeps the photo's aspect ratio, longest side 2048. Expand to banner pads 384 px left and right only. Upscale to 4K sets `model_precision: bf16`, which the saved workflow lacks. Animate into a video sets the prompt, 5 seconds, 1080p.
- The result file is picked from a run's outputs: an image or video, never a log or a before/after preview, preferring final files over `_temp_` previews.
- Runs are polled every 4 seconds. Results are downloaded to local disk and served by the app.
- Versions live in page state; each records the version it came from (ADR 0004).
- The Floyo REST API is used, not the Floyo MCP server (ADR 0001).

## Testing Decisions

- Tests cover the two pieces of logic that decide whether a run is right: how each option edits its workflow JSON, and which output file becomes the result.
- Tests run against fixtures saved from Floyo: the real workflow JSON of all six workflows and the real outputs of six finished runs, so they check real shapes, not invented ones.
- A separate read-only check fetches the live workflows and confirms the nodes the app edits still exist, because Floyo workflows can change after testing.
- Floyo runs themselves are not part of the automated tests: they cost credits and take up to 15 minutes. Each option was run for real at least once while building.

## Out of Scope

- User accounts, saved projects, and a database: versions last until the page is closed.
- Deployment: the app runs on localhost.
- Payments and per-user credit limits.
- Letting an AI choose workflows at run time (see ADR 0001 and ADR 0002).

## Further Notes

Floyo plan limits matter: the free plan runs one job at a time, and the video option uses about $1.18 of partner credits per clip.

## What I would do differently

Several issues surfaced only after a real run, and each would have been a question in a grill before building:
- "Which output file is the result?": the background-removal run returns two preview files, and the video run returns a `.txt` log next to the MP4.
- "Does the saved workflow still run as-is?": the upscale workflow needed a setting it did not have.
- "What does each option cost and how long does it take?": the video costs real money and relight can take 15 minutes when cold.
- "What should the user be able to undo?": the back-step feature was added after trying the app.
