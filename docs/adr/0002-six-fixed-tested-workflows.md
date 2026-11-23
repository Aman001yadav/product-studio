# Offer six fixed workflows, chosen and test-run while building

Floyo has about 950 verified workflows (listed in `docs/floyo-workflows.md`). The app offers six, each chosen for a product seller and run for real at least once before it went into the app: inputs that take a single image, outputs that can be checked (transparency, exact 4x size, an MP4), and known time and cost. The user never picks a raw workflow, so a result that looks wrong points to one known workflow, not a guess.

## Consequences

- Adding an option means testing a new workflow and adding one entry to `lib/actions.js`.
- The video option (Kling v4.0) was kept despite its cost (~$1.18 per clip, ~9 min), and the UI shows that cost before the user runs it.
