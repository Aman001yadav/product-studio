# Fetch each workflow's saved JSON at run time and edit it by node type

Floyo's run endpoint takes a full Comfy workflow JSON, with no separate field for inputs. The app fetches the saved JSON on every run, puts the photo into every `LoadImage` node, and changes other settings by node type (`SeedreamV55Edit`, `ImagePadKJ`, `PiDPrepare`, `KlingV4`), never by node id, because ids differ between workflows and can change when a workflow is edited. Fetching at run time picks up fixes the workflow's author makes; the risk is that the author changes a node the app relies on, which `npm run check:workflows` catches.

## Consequences

- The saved upscale workflow lacks `model_precision`, which Floyo now requires. The app sets it to `bf16` (the default Floyo reported) only when it is missing, so a later fix on Floyo's side wins.
