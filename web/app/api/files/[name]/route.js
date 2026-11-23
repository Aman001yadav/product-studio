import fs from "node:fs/promises";
import path from "node:path";
import { DATA_DIR, MIME } from "@/lib/floyo";

// Serve an uploaded file or a result from data/. ?download=1 saves it instead of opening it.
export async function GET(request, { params }) {
  const name = path.basename((await params).name);
  try {
    const body = await fs.readFile(path.join(DATA_DIR, name));
    const headers = { "Content-Type": MIME[path.extname(name).toLowerCase()] || "application/octet-stream" };
    if (new URL(request.url).searchParams.has("download")) {
      headers["Content-Disposition"] = `attachment; filename="${name}"`;
    }
    return new Response(body, { headers });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
