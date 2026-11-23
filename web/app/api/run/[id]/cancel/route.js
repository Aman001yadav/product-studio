import { cancelJob } from "@/lib/jobs";

// Cancel a job: stops its current Floyo run.
export async function POST(request, { params }) {
  try {
    await cancelJob((await params).id);
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 502 });
  }
}
