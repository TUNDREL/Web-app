import Link from "next/link";
import { pilot, results, testimonials } from "@/lib/content";
import { Fill } from "@/components/Fill";

export default function Proof() {
  return (
    <section className="proof page-shell">
      <div className="section-head">
        <div>
          <span className="eyebrow">FOUNDING CUSTOMERS</span>
          <h2>
            Be one of our
            <br />
            first shops.
          </h2>
        </div>
        <p>
          We&apos;re onboarding a small number of shops hands-on. You get direct
          access to the people building it; we get honest feedback.
        </p>
      </div>
      <div className="pilot-card">
        <div>
          <span className="pilot-label">{pilot.title.toUpperCase()}</span>
          <ul>
            {pilot.perks.map((perk) => (
              <li key={perk}>
                <Fill>{perk}</Fill>
              </li>
            ))}
          </ul>
          <p className="guarantee">
            <b>Our guarantee:</b> <Fill>{pilot.guarantee}</Fill>
          </p>
        </div>
        <div className="pilot-cta">
          <small>
            Spots left: <Fill>{pilot.spots}</Fill>
          </small>
          <Link href="/book-demo" className="button button-accent" data-track="book-demo-pilot">
            Apply for a founding spot <span>→</span>
          </Link>
        </div>
      </div>
      {results.length > 0 && (
        <div className="results">
          {results.map((r) => (
            <article key={r.label}>
              <strong>{r.value}</strong>
              <span>{r.label}</span>
              <small>{r.source}</small>
            </article>
          ))}
        </div>
      )}
      {testimonials.length > 0 && (
        <div className="testimonials">
          {testimonials.map((t) => (
            <blockquote key={t.name}>
              <p>“{t.quote}”</p>
              <footer>
                {t.name}, {t.role}, {t.company}
              </footer>
            </blockquote>
          ))}
        </div>
      )}
    </section>
  );
}
