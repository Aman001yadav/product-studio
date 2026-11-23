import { advanceJob } from "@/lib/jobs";

// Job status: { status, step, total, stepTitle, results: [{ file, title, type }], error }
export async function GET(request, { params }) {
  const job = await advanceJob((await params).id);
  if (!job) return Response.json({ error: "Run not found" }, { status: 404 });
  return Response.json(job);
}
