import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Fill, Mail } from "@/components/Fill";
import { company, legal, plansTerms } from "@/lib/content";

// DRAFT TEXT: have a qualified lawyer review these terms before launch (see docs/LAUNCH_CHECKLIST.md).
export const metadata: Metadata = {
  title: "Terms of Service | Tundrel Call Agent",
  description:
    "The terms that apply to using Tundrel's AI call-answering service and website.",
};

export default function Terms() {
  return (
    <main>
      <div className="page-shell">
        <SiteHeader />
        <article className="legal">
          <span className="eyebrow">
            LAST UPDATED: <Fill>{legal.lastUpdated}</Fill>
          </span>
          <h1>Terms of service</h1>
          <p className="lead">
            These terms apply to this website and to Tundrel&apos;s AI
            call-answering service (the &ldquo;Service&rdquo;), provided by{" "}
            <Fill>{company.legalName}</Fill> (&ldquo;Tundrel&rdquo;,
            &ldquo;we&rdquo;). By using the Service you agree to them.
          </p>

          <h2>1. The Service</h2>
          <p>
            Tundrel provides an AI voice assistant that answers calls for your
            business according to the configuration you approve, and sends your
            team summaries and appointment details. Features depend on your
            plan. We may improve or change the Service over time.
          </p>

          <h2>2. Setup and your instructions</h2>
          <p>
            You give us accurate information about your business: services,
            hours, service areas, pricing rules and escalation contacts. You
            review and approve the assistant before customers reach it. You are
            responsible for the instructions and information you provide.
          </p>

          <h2>3. Free trial</h2>
          <p>
            Each plan starts with a free 1-week trial once your assistant is
            configured. No card is required to start and there is no obligation
            to continue. If you continue, a one-time setup fee of $150–$300
            applies, confirmed with you beforehand.
          </p>

          <h2>4. Fees and billing</h2>
          <p>
            Plan prices and included minutes are listed on our{" "}
            <Link href="/pricing">pricing page</Link>. Minutes beyond your plan
            are billed at the overage rate shown for your plan.{" "}
            <Fill>{plansTerms.billing}</Fill> <Fill>{plansTerms.contract}</Fill>{" "}
            <Fill>{plansTerms.refunds}</Fill>
          </p>

          <h2>5. Cancellation</h2>
          <p>
            <Fill>{plansTerms.cancellation}</Fill>
          </p>

          <h2>6. Your responsibilities</h2>
          <ul>
            <li>
              Follow the laws that apply to your calls and location, including
              call-recording, consent, disclosure and telemarketing rules. You
              are responsible for these requirements for your own callers.
            </li>
            <li>
              Do not use the Service for unlawful, deceptive or abusive
              purposes.
            </li>
            <li>
              Review call summaries and follow up with customers. Unless you
              connect a calendar, an appointment request is not confirmed until
              your team confirms it.
            </li>
          </ul>

          <h2>7. Emergencies</h2>
          <p>
            Tundrel is not an emergency service and cannot dispatch fire,
            medical or gas-utility responders. In an emergency, people should
            call 911 or the appropriate emergency line.
          </p>

          <h2>8. AI limitations</h2>
          <p>
            The assistant is an AI system. It can misunderstand callers or make
            mistakes. We do not guarantee that it will capture any particular
            number of calls, bookings or revenue, or that its output is free of
            errors.
          </p>

          <h2>9. Data and privacy</h2>
          <p>
            Our <Link href="/privacy">Privacy policy</Link> and{" "}
            <Link href="/security">Security &amp; data page</Link> describe how
            we handle information. You grant us the rights needed to process
            call data to provide the Service.
          </p>

          <h2>10. Suspension and termination</h2>
          <p>
            We may suspend or end the Service if these terms are breached, if
            use creates legal or security risk, or if fees are unpaid. You may
            stop using the Service as described in the cancellation section
            above.
          </p>

          <h2>11. Intellectual property</h2>
          <p>
            We own the Service and its underlying software. You keep ownership
            of your business information and content.
          </p>

          <h2>12. Disclaimers and liability</h2>
          <p>
            To the extent the law allows, the Service is provided &ldquo;as
            is&rdquo; without warranties of any kind.{" "}
            <Fill>{legal.liability}</Fill>
          </p>

          <h2>13. Governing law</h2>
          <p>
            <Fill>{legal.governingLaw}</Fill>
          </p>

          <h2>14. Changes to these terms</h2>
          <p>
            We may update these terms. If a change is material, we will give
            notice before it takes effect. Continued use after the effective
            date means you accept the update.
          </p>

          <h2>15. Contact</h2>
          <p>
            <Fill>{company.legalName}</Fill>, <Fill>{company.address}</Fill>.{" "}
            <Mail email={company.email} />
          </p>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
