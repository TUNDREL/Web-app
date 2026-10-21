import { sampleCall, sampleCallAudio } from "@/lib/content";
import { Fill } from "@/components/Fill";

/** "Hear it work": a sample call with transcript, plus what the owner receives afterwards. */
export default function HearItWork() {
  return (
    <section className="hear page-shell" id="hear-it-work">
      <div className="section-head">
        <div>
          <span className="eyebrow">HEAR IT WORK</span>
          <h2>
            Hear how a call goes,
            <br />
            start to finish.
          </h2>
        </div>
        <p>
          Listen to a sample call, then see exactly what lands in your inbox or
          on your phone when it ends.
        </p>
      </div>
      <div className="hear-grid">
        <div className="player-card">
          <span className="sample-badge">SAMPLE CALL · {sampleCall.business}</span>
          {sampleCallAudio ? (
            <audio controls preload="none" src={sampleCallAudio}>
              Your browser can&apos;t play audio. Read the transcript below.
            </audio>
          ) : (
            <div className="player-placeholder">
              <Fill>
                [Add your sample call recording: put the file in /public and set NEXT_PUBLIC_SAMPLE_CALL_AUDIO]
              </Fill>
            </div>
          )}
          <details open>
            <summary>Transcript</summary>
            <ol className="transcript-list">
              {sampleCall.lines.map((line, i) => (
                <li key={i} className={line.who === "caller" ? "caller" : "ai"}>
                  <i>{line.who === "caller" ? "Caller" : "AI"}</i>
                  <span>{line.text}</span>
                </li>
              ))}
            </ol>
          </details>
          <p className="fine">
            Example conversation. <Fill>{sampleCall.note}</Fill>
          </p>
        </div>
        <aside className="owner-card" aria-label="What the owner receives">
          <span className="owner-label">WHAT YOU RECEIVE</span>
          <div className="alert-mock">
            <b>{sampleCall.alert.subject}</b>
            <dl>
              {sampleCall.alert.fields.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <small>Sent to your phone or inbox after every call.</small>
          </div>
          <p>
            No dashboard to check. Every call ends with the details your team
            needs to follow up.
          </p>
        </aside>
      </div>
    </section>
  );
}
