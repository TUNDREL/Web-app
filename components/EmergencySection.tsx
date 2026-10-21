import { showEmergencySection, todo } from "@/lib/content";
import { Fill } from "@/components/Fill";

const alertMethod = todo("How the on-call person is alerted, e.g. instant text and phone call");
const reviewNote = todo("Confirm these behaviors are built and tested before this section goes live");

const cards: [string, string][] = [
  [
    "Recognizes the red flags",
    "Gas smell, carbon monoxide alarm, burning smell, no heat with vulnerable people at home. You define what counts as an emergency for your business.",
  ],
  [
    "Safety comes first",
    "For gas or carbon monoxide risks it tells the caller to leave the building and call 911 or the gas utility's emergency line before anything else.",
  ],
  ["Alerts your on-call person", alertMethod],
  [
    "Leaves a clear record",
    "Every emergency call is flagged and summarized, so nothing is lost at handoff.",
  ],
];

export default function EmergencySection() {
  if (!showEmergencySection) return null;
  return (
    <section className="emergency page-shell" id="emergencies">
      <div className="section-head">
        <div>
          <span className="eyebrow">WHEN IT&apos;S AN EMERGENCY</span>
          <h2>
            It doesn&apos;t improvise
            <br />
            with safety.
          </h2>
        </div>
        <p>
          Some calls aren&apos;t appointments. Tundrel is set up to recognize them,
          put safety first and get a person on the line fast.
        </p>
      </div>
      <div className="emergency-grid">
        {cards.map(([title, text], i) => (
          <article key={title}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>
              <Fill>{text}</Fill>
            </p>
          </article>
        ))}
      </div>
      <p className="fine">
        Tundrel is not an emergency service and can&apos;t dispatch fire, medical
        or gas-utility responders. <Fill>{reviewNote}</Fill>
      </p>
    </section>
  );
}
