import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { DATA_DIR, MIME } from "@/lib/floyo";

// Save an uploaded photo or video locally; returns { file, type }.
export async function POST(request) {
  const upload = (await request.formData()).get("file");
  const ext = path.extname(upload?.name || "").toLowerCase();
  const type = MIME[ext]?.split("/")[0]; // "image" | "video" | "audio"
  if (type !== "image" && type !== "video") {
    return Response.json({ error: "Please upload a photo (PNG, JPG, WEBP) or a video (MP4, MOV, WEBM)" }, { status: 400 });
  }
  const file = crypto.randomUUID().slice(0, 8) + ext;
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(path.join(DATA_DIR, file), Buffer.from(await upload.arrayBuffer()));
  return Response.json({ file, type });
}
