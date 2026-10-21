import Link from "next/link";
import { demoPhone, demoPhoneHref, phoneConfigured } from "@/lib/site";

/** Tap-to-call bar for phones. Hidden until a real demo number is configured. */
export default function StickyCallBar() {
  if (!phoneConfigured) return null;
  return (
    <div className="sticky-call">
      <a className="sticky-call-main" href={demoPhoneHref} data-track="call-sticky">
        <span aria-hidden="true">☎</span>
        <b>Call the AI demo</b>
        <small>{demoPhone}</small>
      </a>
      <Link className="sticky-call-demo" href="/book-demo" data-track="book-demo-sticky">
        Book demo
      </Link>
    </div>
  );
}
