import { integrations, integrationsNote } from "@/lib/content";
import { Fill } from "@/components/Fill";

export default function WorksWith() {
  return (
    <section className="works-with page-shell">
      <div>
        <span className="eyebrow">WORKS WITH</span>
        <h2>The tools you already use.</h2>
        <p>
          We connect to your existing scheduling and phone setup instead of
          replacing it.
        </p>
      </div>
      <div className="chips">
        {integrations.map((name) => (
          <span className="chip" key={name}>
            <Fill>{name}</Fill>
          </span>
        ))}
        <small>
          <Fill>{integrationsNote}</Fill>
        </small>
      </div>
    </section>
  );
}
