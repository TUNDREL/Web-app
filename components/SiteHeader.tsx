import Link from "next/link";
import { demoPhoneHref } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        <span className="brand-mark">T</span>TUNDREL
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/how-it-works">How it works</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/faq">FAQ</Link>
      </nav>
      <div className="nav-actions">
        <a className="nav-phone" href={demoPhoneHref}>
          Try the AI <span>↗</span>
        </a>
        <Link className="button button-dark" href="/book-demo">
          Book a demo
        </Link>
      </div>
    </header>
  );
}
