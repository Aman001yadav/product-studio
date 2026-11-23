# Run combined options as server-side jobs that chain single workflows

A combined option, such as Lifestyle banner (Place in a scene, then Expand to banner), is a list of existing single options, not a new merged Floyo workflow. The server tracks it as one job: when a step's Floyo run completes, it downloads the result and starts the next step with it, and the page polls the job, not each run. Reusing tested single options means a combination needs no new workflow JSON to verify, and each step's result is kept as its own version, so "Back one step" from the banner returns to the scene.

## Considered Options

- **Merge two workflows into one Floyo workflow JSON**: one run, but a new untested graph for every combination, and the middle result is not returned.
- **Chain in the browser**: simpler server, but a closed tab stops the chain halfway.
- **Chain on the server** (chosen).

## Consequences

- Overlapping status checks share one in-flight check, so a step is never downloaded or started twice.
- Jobs live in server memory; restarting the server loses running jobs.
