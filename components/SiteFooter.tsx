import Link from "next/link";
import { demoPhone, demoPhoneHref, phoneConfigured } from "@/lib/site";
import { company } from "@/lib/content";
import { Fill, Mail } from "@/components/Fill";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <div className="brand">
            <span className="brand-mark">T</span>TUNDREL
          </div>
          <p>
            Every call answered.
            <br />
            Every opportunity captured.
          </p>
          <address className="footer-company">
            <Fill>{company.legalName}</Fill>
            <br />
            <Fill>{company.address}</Fill>
          </address>
        </div>
        <div>
          <span>EXPLORE</span>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/about">About</Link>
        </div>
        <div>
          <span>TAKE ACTION</span>
          {phoneConfigured && (
            <a href={demoPhoneHref} data-track="call-footer">
              Call {demoPhone}
            </a>
          )}
          <Mail email={company.email} />
          <Link href="/book-demo">Book a demo</Link>
        </div>
        <div>
          <span>LEGAL</span>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms of service</Link>
          <Link href="/security">Security &amp; data</Link>
          <Link href="/security#vendors">Vendors &amp; subprocessors</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © 2026 <Fill>{company.legalName}</Fill>. All rights reserved.
        </span>
        <span>Built for home service businesses.</span>
      </div>
    </footer>
  );
}
