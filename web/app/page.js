"use client";

import { useEffect, useState } from "react";
import { ACTIONS } from "@/lib/actions";
import { inputOf } from "@/lib/workflow";

const fileUrl = (name) => `/api/files/${name}`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const newId = () => Math.random().toString(36).slice(2, 10);
const STEPS = ["Choose", "Details", "Processing", "Result"];
const TABS = { image: "📷 Photo", video: "🎬 Video" };
const NOUN = { image: "photo", video: "video", audio: "music" };
const ACCEPT = { image: "image/png,image/jpeg,image/webp", video: "video/mp4,video/quicktime,video/webm" };

// Every file you upload or result you make is a "version": { id, file, label, type, from, actionId, prompt }.
// type is "image", "video" or "audio"; "from" is the id of the version it was made from;
// actionId and prompt record the workflow (option) that made it, so it can be reopened or re-run.
// Click a result version to open its workflow's result; click an upload to work on it.
// × removes a version; "Back one step" discards the result you back out of.

export default function Home() {
  const [step, setStep] = useState(0);
  const [tab, setTab] = useState("image"); // which options to show: photo or video
  const [actionId, setActionId] = useState(null);
  const [versions, setVersions] = useState([]);
  const [currentId, setCurrentId] = useState(null); // the photo or video we work on
  const [job, setJob] = useState(null); // { jobId, prompt }
  const [shown, setShown] = useState(null); // { id, beforeId } of the result on screen
  const [rerunPrompt, setRerunPrompt] = useState(null); // prompt to prefill when re-running a workflow

  const byId = (id) => versions.find((v) => v.id === id);
  const current = byId(currentId);
  const action = ACTIONS[actionId];

  // A new upload is a new starting version; earlier versions stay.
  function addUpload(file, type) {
    const v = { id: newId(), file, type, label: `Original ${NOUN[type]}`, from: null };
    setVersions((vs) => [...vs, v]);
    setCurrentId(v.id);
  }

  // Results of one job become versions, chained: start -> step 1 -> step 2 ...
  function finished(results) {
    const startId = inputOf(actionId) === "none" ? null : currentId;
    let from = startId;
    const added = results.map((r, i) => {
      // the user's prompt went to the first step; later steps of a combined option used their defaults
      const v = { id: newId(), file: r.file, label: r.title, type: r.type, from, actionId: r.actionId, prompt: i === 0 ? job.prompt : null };
      from = v.id;
      return v;
    });
    setVersions((vs) => [...vs, ...added]);
    setShown({ id: added.at(-1).id, beforeId: startId });
    setStep(3);
  }

  function workOn(v) {
    setCurrentId(v.id);
    setTab(v.type);
    setStep(0);
  }

  // A result opens the result screen of the workflow that made it; an upload opens the options.
  function openVersion(v) {
    if (!v.actionId) return workOn(v);
    setActionId(v.actionId);
    setShown({ id: v.id, beforeId: v.from });
    setStep(3);
  }

  // Run the same workflow again on the same input, with its prompt prefilled.
  function rerun(v) {
    setCurrentId(v.from);
    if (v.from) setTab(byId(v.from).type);
    setActionId(v.actionId);
    setRerunPrompt(v.prompt);
    setStep(1);
  }

  // A version and every version made from it, directly or indirectly.
  function familyOf(id) {
    const ids = new Set([id]);
    let grew = true;
    while (grew) {
      grew = false;
      for (const v of versions) if (ids.has(v.from) && !ids.has(v.id)) { ids.add(v.id); grew = true; }
    }
    return ids;
  }

  // Remove a version and everything made from it.
  function removeVersion(id) {
    const gone = familyOf(id);
    const parent = byId(id).from;
    setVersions((vs) => vs.filter((v) => !gone.has(v.id)));
    if (gone.has(currentId)) setCurrentId(parent);
    if (step === 3 && shown && gone.has(shown.id)) {
      setShown(null);
      setStep(0);
    }
  }

  // Go back to the version this result came from and discard the result.
  function backOneStep() {
    const parent = byId(byId(shown.id).from);
    removeVersion(shown.id);
    setShown(null);
    if (parent) workOn(parent);
    else setStep(0);
  }

  function goToStep(i) {
    if (step === 2 || i >= step) return; // only backwards, never mid-run
    setStep(i);
  }

  const restart = () => { setVersions([]); setCurrentId(null); setShown(null); setStep(0); };

  return (
    <>
      <header className="hero">
        <div className="wrap">
          <span className="badge">Powered by Floyo</span>
          <h1>Product Studio</h1>
          <p>Turn product photos and videos into cutouts, scenes, edits, banners, 4K images and polished clips with sound, plus music for your ads.</p>
        </div>
      </header>

      <main className="wrap">
        <ol className="stepper">
          {STEPS.map((s, i) => (
            <li key={s} className={i === step ? "active" : i < step ? "done" : ""} onClick={() => goToStep(i)}>
              <span>{i < step ? "✓" : i + 1}</span>{s}
            </li>
          ))}
        </ol>

        {versions.length > 0 && (
          <Versions versions={versions} activeId={step === 3 ? shown?.id : currentId}
            disabled={step === 2} onOpen={openVersion} onRestart={restart}
            onRemove={(v) => {
              const others = familyOf(v.id).size - 1;
              if (others && !window.confirm(`Remove "${v.label}" and the ${others} version(s) made from it?`)) return;
              removeVersion(v.id);
            }} />
        )}

        {step === 0 && (
          <ChooseAction tab={tab} setTab={setTab} current={current}
            onPick={(id) => { setActionId(id); setRerunPrompt(null); setStep(1); }} />
        )}
        {step === 1 && (
          <Details key={actionId} actionId={actionId} current={current} initialPrompt={rerunPrompt}
            onUpload={addUpload} onBack={() => setStep(0)} onStart={(j) => { setJob(j); setStep(2); }} />
        )}
        {step === 2 && (
          <Processing action={action} job={job}
            before={inputOf(actionId) === "none" ? null : current}
            onDone={finished} onCancel={() => setStep(1)} />
        )}
        {step === 3 && shown && byId(shown.id) && (
          <Result version={byId(shown.id)} before={byId(shown.beforeId)} via={byId(byId(shown.id).from)}
            onBackOne={backOneStep} onMore={() => workOn(byId(shown.id))}
            onRerun={() => rerun(byId(shown.id))} onRestart={restart} />
        )}
      </main>
    </>
  );
}

// Shows an image, video or audio file. Videos are muted only when asked (the "after"
// video plays with sound, so you can hear the sound an option added).
function Media({ v, thumb, muted, ...props }) {
  if (!v) return null;
  const src = fileUrl(v.file);
  if (v.type === "image") return <img src={src} alt={v.label} {...props} />;
  if (v.type === "video") {
    return thumb
      ? <video src={`${src}#t=0.5`} muted preload="metadata" {...props} />
      : <video src={src} controls loop playsInline muted={muted} autoPlay={muted} {...props} />;
  }
  return thumb ? <div className="vthumb">🎵</div> : <audio src={src} controls {...props} />;
}

// The version strip: click a version to work on it, × to remove it
function Versions({ versions, activeId, disabled, onOpen, onRestart, onRemove }) {
  const number = (id) => versions.findIndex((v) => v.id === id) + 1;
  return (
    <section className="versions card">
      <div className="versions-head">
        <strong>Your versions</strong>
        <span className="muted small">Click a version to open the workflow that made it; × removes one you don't want.</span>
        <button className="link" onClick={onRestart} disabled={disabled}>Start over</button>
      </div>
      <div className="versions-list">
        {versions.map((v, i) => (
          <div key={v.id} className="version-wrap">
            <button disabled={disabled} className={`version ${v.id === activeId ? "current" : ""}`} onClick={() => onOpen(v)}>
              <div className="vmedia">
                <Media v={v} thumb />
                {v.type === "video" && <span className="vbadge">🎬</span>}
              </div>
              <span className="vlabel">{i + 1}. {v.label}</span>
              {v.from && <span className="vfrom">from {number(v.from)}</span>}
            </button>
            <button className="vremove" disabled={disabled} onClick={() => onRemove(v)}
              title="Remove this version" aria-label={`Remove ${v.label}`}>×</button>
          </div>
        ))}
      </div>
    </section>
  );
}

// Step 1: photo or video, then what do you want to do?
function ChooseAction({ tab, setTab, current, onPick }) {
  const menu = Object.entries(ACTIONS).filter(([id, a]) => !a.hidden && [tab, "none"].includes(inputOf(id)));
  return (
    <section>
      <div className="tabs" role="tablist">
        {Object.entries(TABS).map(([t, label]) => (
          <button key={t} role="tab" aria-selected={tab === t} className={`tab ${tab === t ? "active" : ""}`}
            onClick={() => setTab(t)}>{label}</button>
        ))}
      </div>
      <h2>What do you want to do with your {NOUN[tab]}?</h2>
      {current?.type === tab && <p className="muted">Working on: <strong>{current.label}</strong></p>}
      <div className="grid">
        {menu.map(([id, a]) => (
          <button key={id} className={`card action ${a.steps ? "combo" : ""}`} onClick={() => onPick(id)}>
            <span className="icon">{a.icon}</span>
            <strong>{a.title}</strong>
            <span className="muted">{a.description}</span>
            <span className="tags">
              {a.steps && <span className="tag accent">{a.steps.length} workflows</span>}
              {inputOf(id) === "none" && <span className="tag">No upload needed</span>}
              <span className="tag">{{ image: "Image", video: "Video", audio: "Audio" }[a.output]}</span>
              <span className="tag">{a.time}</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

// Step 2: add a photo or video (unless the option needs none) and a prompt, then start
function Details({ actionId, current, initialPrompt, onUpload, onBack, onStart }) {
  const action = ACTIONS[actionId];
  const kind = inputOf(actionId); // "image" | "video" | "none"
  const input = current?.type === kind ? current : null;
  const [over, setOver] = useState(false);
  const [error, setError] = useState("");
  const [prompt, setPrompt] = useState(initialPrompt || action.defaultPrompt || "");
  const [meta, setMeta] = useState({}); // width, height, duration of the input
  const [starting, setStarting] = useState(false);

  async function upload(f) {
    setError("");
    const form = new FormData();
    form.append("file", f);
    const res = await fetch("/api/upload", { method: "POST", body: form });
    const data = await res.json();
    if (!res.ok) return setError(data.error);
    if (data.type !== kind) return setError(`This option needs a ${NOUN[kind]}.`);
    onUpload(data.file, data.type);
  }

  async function start() {
    setStarting(true);
    setError("");
    const res = await fetch("/api/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file: input?.file, action: actionId, prompt, ...meta }),
    });
    const data = await res.json();
    setStarting(false);
    if (!res.ok) return setError(data.error);
    onStart({ jobId: data.jobId, prompt: action.promptLabel ? prompt : null });
  }

  const pickFile = (e) => e.target.files[0] && upload(e.target.files[0]);
  const onImage = (e) => setMeta({ width: e.target.naturalWidth, height: e.target.naturalHeight });
  const onVideo = (e) => setMeta({ width: e.target.videoWidth, height: e.target.videoHeight, duration: e.target.duration });

  const panel = (
    <div className="card panel">
      <p className="muted">{action.description}</p>
      {action.steps && (
        <ol className="chain">
          {action.steps.map((s) => <li key={s}>{ACTIONS[s].icon} {ACTIONS[s].title}</li>)}
        </ol>
      )}
      {action.promptLabel && (
        <label className="field">
          {action.promptLabel}
          <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={4} />
        </label>
      )}
      <ul className="facts">
        <li>Result: {{ image: "PNG image", video: "MP4 video", audio: "MP3, 30 seconds" }[action.output]}</li>
        <li>Takes {action.time}</li>
        {action.note && <li>{action.note}</li>}
      </ul>
      <button className="primary wide" disabled={(kind !== "none" && !input) || starting} onClick={start}>
        {starting ? "Starting..." : `${action.title} →`}
      </button>
      {kind !== "none" && !input && <p className="muted small">Add a {NOUN[kind]} to continue.</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );

  return (
    <section>
      <div className="title-row">
        <h2>{action.icon} {action.title}</h2>
        <button className="link" onClick={onBack}>← Back to options</button>
      </div>

      {kind === "none" ? <div className="single-col">{panel}</div> : (
        <div className="two-col">
          <div>
            {input ? (
              <div className="preview">
                {kind === "image"
                  ? <img src={fileUrl(input.file)} alt="Your photo" onLoad={onImage} />
                  : <video src={fileUrl(input.file)} controls muted playsInline onLoadedMetadata={onVideo} />}
                <label className="link">
                  Upload a different {NOUN[kind]}
                  <input type="file" accept={ACCEPT[kind]} hidden onChange={pickFile} />
                </label>
              </div>
            ) : (
              <label className={`drop ${over ? "over" : ""}`}
                onDragOver={(e) => { e.preventDefault(); setOver(true); }}
                onDragLeave={() => setOver(false)}
                onDrop={(e) => { e.preventDefault(); setOver(false); e.dataTransfer.files[0] && upload(e.dataTransfer.files[0]); }}>
                <span className="icon big">{kind === "image" ? "📷" : "🎬"}</span>
                <strong>Add your product {NOUN[kind]}</strong>
                <span className="muted">
                  Drag and drop, or click to choose. {kind === "image" ? "PNG, JPG or WEBP." : "MP4, MOV or WEBM."}
                </span>
                <input type="file" accept={ACCEPT[kind]} hidden onChange={pickFile} />
              </label>
            )}
          </div>
          {panel}
        </div>
      )}
    </section>
  );
}

// Step 3: poll the job until it finishes; can be canceled
function Processing({ action, job, before, onDone, onCancel }) {
  const [state, setState] = useState({ status: "queued", step: 1, total: 1 });
  const [secs, setSecs] = useState(0);
  const [error, setError] = useState("");
  const [canceling, setCanceling] = useState(false);

  useEffect(() => {
    let alive = true;
    const start = Date.now();
    const timer = setInterval(() => setSecs(Math.round((Date.now() - start) / 1000)), 1000);
    (async () => {
      while (alive) {
        const s = await (await fetch(`/api/run/${job.jobId}`)).json();
        if (!alive) return;
        if (s.status === "complete") return onDone(s.results);
        if (s.status === "canceled") return;
        if (s.status === "failed" || s.error) return setError(s.error || "The run failed");
        setState(s);
        await sleep(4000);
      }
    })();
    return () => { alive = false; clearInterval(timer); };
  }, [job.jobId]);

  async function cancel() {
    setCanceling(true);
    await fetch(`/api/run/${job.jobId}/cancel`, { method: "POST" });
    onCancel();
  }

  const time = `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;
  return (
    <section className="card processing">
      {error ? (
        <>
          <h2>Something went wrong</h2>
          <p className="error">{error}</p>
          <button className="primary" onClick={onCancel}>← Go back</button>
        </>
      ) : (
        <>
          <div className="loader" />
          <h2>{action.title}</h2>
          {state.total > 1 && <p className="stepinfo">Step {state.step} of {state.total}: {state.stepTitle}</p>}
          <p className="muted">
            {state.status === "queued" ? "Waiting in the Floyo queue" : "Running on Floyo"} · {time} elapsed · usually {action.time}
          </p>
          {before ? <div className="ghost"><Media v={before} thumb /></div> : <div className="ghost-icon">{action.icon}</div>}
          <button onClick={cancel} disabled={canceling}>{canceling ? "Canceling..." : "Cancel and go back"}</button>
        </>
      )}
    </section>
  );
}

// Step 4: before and after side by side (photos and videos); audio gets a player
function Result({ version, before, via, onBackOne, onMore, onRerun, onRestart }) {
  const action = ACTIONS[version.actionId];
  return (
    <section>
      <div className="title-row">
        <h2>{action?.icon || "✓"} {version.label}</h2>
        {via && <button className="link" onClick={onBackOne}>← Back one step to “{via.label}”</button>}
      </div>
      {version.prompt && <p className="muted">Prompt: “{version.prompt}”</p>}
      {before && via && before.id !== via.id && (
        <p className="muted">Made in two steps: {before.label} → {via.label} → {version.label}</p>
      )}

      {version.type === "audio" ? (
        <div className="card audio-card">
          <span className="icon big">🎵</span>
          <p className="muted">30-second instrumental track</p>
          <Media v={version} autoPlay />
        </div>
      ) : (
        <div className="compare">
          <figure>
            <figcaption>Before · {before?.label}</figcaption>
            <div className="frame"><Media v={before} muted /></div>
          </figure>
          <figure>
            <figcaption className="after">After · {version.label}</figcaption>
            <div className={`frame ${version.type === "image" ? "checker" : ""}`}><Media v={version} /></div>
          </figure>
        </div>
      )}

      <div className="actions-row">
        <a className="primary" href={`${fileUrl(version.file)}?download=1`}>⬇ Download {NOUN[version.type]}</a>
        {version.type !== "audio" && <button onClick={onMore}>Do more with this {NOUN[version.type]} →</button>}
        {action && <button onClick={onRerun}>↻ Run “{action.title}” again</button>}
        {via && <button onClick={onBackOne}>← Back one step</button>}
        <button onClick={onRestart}>Start over</button>
      </div>
    </section>
  );
}
