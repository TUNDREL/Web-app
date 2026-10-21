import Link from "next/link";
import { demoPhone, demoPhoneHref, phoneConfigured } from "@/lib/site";

const links = [
  ["/how-it-works", "How it works"],
  ["/pricing", "Pricing"],
  ["/faq", "FAQ"],
  ["/about", "About"],
] as const;

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        <span className="brand-mark">T</span>TUNDREL
      </Link>
      <nav aria-label="Main navigation">
        {links.map(([href, label]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="nav-actions">
        {phoneConfigured && (
          <a className="nav-phone" href={demoPhoneHref} data-track="call-header">
            ☎ {demoPhone}
          </a>
        )}
        <Link className="button button-dark" href="/book-demo" data-track="book-demo-header">
          Book a demo
        </Link>
        {/* No-JavaScript menu for small screens (the desktop nav is hidden there). */}
        <details className="mobile-nav">
          <summary aria-label="Open menu">Menu</summary>
          <div className="mobile-nav-panel">
            {links.map(([href, label]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            <Link href="/security">Security &amp; data</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
