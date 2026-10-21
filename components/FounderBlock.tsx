import Link from "next/link";
import { founder, isTodo } from "@/lib/content";
import { ExternalLink, Fill } from "@/components/Fill";

export default function FounderBlock({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "founder page-shell compact" : "founder page-shell"}>
      <div className="founder-photo">
        {!isTodo(founder.photo) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={founder.photo} alt={`Portrait of ${founder.name}`} width={220} height={220} />
        ) : (
          <div className="photo-placeholder" role="img" aria-label="Founder photo placeholder">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <circle cx="32" cy="24" r="12" />
              <path d="M8 60c2-14 12-22 24-22s22 8 24 22z" />
            </svg>
            <span className="todo">[Add founder photo]</span>
          </div>
        )}
      </div>
      <div className="founder-copy">
        <span className="eyebrow">WHO&apos;S BEHIND IT</span>
        <h2>
          <Fill>{founder.name}</Fill>
        </h2>
        <small className="founder-role">
          <Fill>{founder.role}</Fill>
        </small>
        {(compact ? founder.story.slice(0, 1) : founder.story).map((p, i) => (
          <p key={i}>
            <Fill>{p}</Fill>
          </p>
        ))}
        <div className="founder-links">
          {compact ? (
            <Link href="/about" className="text-arrow">
              Read our story <span>→</span>
            </Link>
          ) : null}
          <ExternalLink href={founder.linkedin}>LinkedIn →</ExternalLink>
        </div>
      </div>
    </section>
  );
}
