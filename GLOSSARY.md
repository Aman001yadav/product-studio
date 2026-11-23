# Product Studio

A web app that turns product photos and videos into marketing images, clips and music by running Floyo workflows.

## Language

**Option**:
One thing the user can do, such as Remove background or Add sound to video. Each option runs one Floyo workflow, or several in a row (a combined option).
_Avoid_: action (in the UI), feature, tool

**Workflow**:
A saved Floyo pipeline, identified by an id like `workflow_wXGXj1ZqCNmUJrNr`, whose definition is Comfy API workflow JSON.
_Avoid_: model, pipeline, graph

**Workflow JSON**:
The node-by-node definition of a workflow that the app edits and sends to Floyo to start a run.
_Avoid_: prompt (Floyo's API calls it `prompt`, which clashes with the user's text prompt)

**Prompt**:
The text the user writes for an option that takes text: the scene to place the product in, the change to make, the motion for a video, or the mood of the music.
_Avoid_: instruction, description

**Run**:
One execution of a workflow on Floyo, with a status of queued, running, complete, failed or canceled.
_Avoid_: job, task, generation

**Input path**:
Where an uploaded photo or video lives in Floyo storage (`#inputs/api/uploads/...`); it goes into the workflow's LoadImage or LoadVideo node.
_Avoid_: file URL

**Result**:
The image, video or audio a run produces, downloaded to the app.
_Avoid_: output (Floyo's word for every file a run returns, including logs and previews)

**Version**:
An image, video or audio track in the user's session: an uploaded photo or video, or any result. Each result remembers the version it was made from.
_Avoid_: history item, step, snapshot

**FloTime**:
Floyo's GPU time, billed while a run executes.

**Partner credits**:
Floyo credits in USD spent by partner-node workflows that call outside models, such as Seedream and Kling.
