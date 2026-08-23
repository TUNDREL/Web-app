import { demoPhone, demoPhoneHref, phoneConfigured } from "@/lib/site";
export default function PhoneDemo({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "phone-demo compact" : "phone-demo"}>
      <div className="live-pill">
        <i /> LIVE AI DEMO
      </div>
      <h2>
        Don&apos;t take our word for it.
        <br />
        <em>Call it right now.</em>
      </h2>
      <p>
        Ask about availability, pricing, an emergency repair—anything a real
        homeowner would ask. No script. Just a real conversation.
      </p>
      <a className="phone-number" href={demoPhoneHref}>
        <span className="phone-icon">☎</span>
        <b>{demoPhone}</b>
        <span className="call-label">TAP TO CALL</span>
      </a>
      {!phoneConfigured && (
        <small className="config-note">
          Demo number placeholder—set NEXT_PUBLIC_DEMO_PHONE before launch.
        </small>
      )}
      <div className="privacy-note">
        ◉ Calls may be recorded for quality and demonstration purposes.{" "}
        <a href="/privacy">Privacy details</a>
      </div>
    </section>
  );
}
