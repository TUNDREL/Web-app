import Link from "next/link";
import { demoPhone, demoPhoneHref } from "@/lib/site";

export default function SiteFooter() {
  return <footer className="site-footer"><div className="footer-top"><div><div className="brand"><span className="brand-mark">T</span>TUNDREL</div><p>Every call answered.<br/>Every opportunity captured.</p></div><div><span>EXPLORE</span><Link href="/how-it-works">How it works</Link><Link href="/pricing">Pricing</Link><Link href="/faq">FAQ</Link></div><div><span>TAKE ACTION</span><a href={demoPhoneHref}>Call {demoPhone}</a><Link href="/book-demo">Book a demo</Link></div><div><span>LEGAL</span><Link href="/privacy">Privacy policy</Link></div></div><div className="footer-bottom"><span>© 2026 Tundrel. All rights reserved.</span><span>Built for home service businesses.</span></div></footer>;
}
