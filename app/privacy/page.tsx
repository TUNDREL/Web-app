import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Fill, Mail } from "@/components/Fill";
import { company, legal, security } from "@/lib/content";

// DRAFT TEXT: have a qualified lawyer review this page before launch (see docs/LAUNCH_CHECKLIST.md).
export const metadata: Metadata = {
  title: "Privacy Policy | Tundrel Call Agent",
  description:
    "How Tundrel collects, uses, and protects call and business data for HVAC companies using the AI receptionist service.",
};

export default function Privacy() {
  return (
    <main>
      <div className="page-shell">
        <SiteHeader />
        <article className="legal">
          <span className="eyebrow">
            LAST UPDATED: <Fill>{legal.lastUpdated}</Fill>
          </span>
          <h1>Privacy policy</h1>
          <p className="lead">
            This policy explains how <Fill>{company.legalName}</Fill>{" "}
            (&ldquo;Tundrel&rdquo;) handles information collected through this
            website, our live AI phone demonstration and our call-answering
            service.
          </p>
          <h2>Who we are</h2>
          <p>
            <Fill>{company.legalName}</Fill>, <Fill>{company.address}</Fill>.
            Privacy questions and requests: <Mail email={company.privacyEmail} />.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you use our website, request a demonstration or call our live
            demo number, we may collect information you provide such as your
            name, business details, contact information, call audio,
            transcripts and scheduling information. Basic device and usage
            information may also be collected by our hosting and scheduling
            providers.
          </p>
          <h2>Call recording and AI processing</h2>
          <p>
            Calls may be recorded, transcribed and processed by automated
            systems to provide the conversation, evaluate quality, prevent
            misuse and improve the service.{" "}
            <Fill>{security.demoDisclosure}</Fill> Do not share sensitive
            personal, payment, medical or emergency information during a
            demonstration.
          </p>
          <h2>Customers who use Tundrel to answer their calls</h2>
          <p>
            When a business uses Tundrel, we process the calls it receives on
            that business&apos;s behalf. The business is responsible for
            notifying its own callers and meeting recording and consent
            requirements that apply to it. <Fill>{security.dataOwnership}</Fill>
          </p>
          <h2>How we use information</h2>
          <p>
            We use information to provide demonstrations, respond to inquiries,
            schedule meetings, operate and secure the service, evaluate
            performance and improve our product. We do not sell personal
            information.
          </p>
          <h2>Service providers</h2>
          <p>
            We use service providers for telephony, AI processing, form
            delivery, scheduling, hosting and analytics. They process
            information on our behalf under their own contractual and security
            obligations. See the current list on our{" "}
            <Link href="/security#vendors">vendors page</Link>.
          </p>
          <h2>Retention and choices</h2>
          <p>
            We retain information only as long as reasonably needed for the
            purposes described above, legal obligations and dispute resolution.{" "}
            <Fill>{security.retention}</Fill> You may request access,
            correction or deletion by emailing <Mail email={company.privacyEmail} />.
          </p>
          <h2>Contact</h2>
          <p>
            Questions or privacy requests: <Mail email={company.privacyEmail} />,
            or write to <Fill>{company.legalName}</Fill>,{" "}
            <Fill>{company.address}</Fill>.
          </p>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
