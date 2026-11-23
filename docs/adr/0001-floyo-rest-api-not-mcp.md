# Use the Floyo REST API, not the Floyo MCP server

The app calls the Floyo REST API directly (`/workflows`, `/runs`, CDN upload) instead of putting an AI agent between the user and Floyo through the Floyo MCP server. With MCP, an agent would pick workflows and edit their JSON at run time, so the same request could take different paths, cost model tokens on top of Floyo credits, and be hard to test. The REST API lets every option be fixed in code and checked. MCP stays useful for exploring workflows while developing.

## Considered Options

- **Floyo MCP with an agent in the app**: flexible (any of ~950 workflows, plain-language requests), but not checkable, slower, and OAuth-only, so it acts as one signed-in user.
- **Floyo REST API** (chosen): API key on the server, deterministic, testable.
