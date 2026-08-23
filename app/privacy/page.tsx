import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
export default function Privacy() {
  return (
    <main>
      <div className="page-shell">
        <SiteHeader />
        <article className="legal">
          <span className="eyebrow">LAST UPDATED: 21 AUGUST 2026</span>
          <h1>Privacy policy</h1>
          <p className="lead">
            This policy explains how Tundrel handles information collected
            through this website and live AI phone demonstration.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you use our website, schedule a demonstration or call our live
            demo number, we may collect information you provide such as your
            name, business details, contact information, call audio, transcripts
            and scheduling information. Basic device and usage information may
            also be collected by our hosting and scheduling providers.
          </p>
          <h2>Call recording and AI processing</h2>
          <p>
            Calls to the live demonstration may be recorded, transcribed and
            processed by automated systems to provide the conversation, evaluate
            quality, prevent misuse and improve the service. A disclosure should
            be presented at the beginning of each recorded call. Do not share
            sensitive personal, payment, medical or emergency information during
            a demonstration.
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
            We may use service providers for telephony, AI processing,
            scheduling, hosting and analytics. They process information on our
            behalf under their own contractual and security obligations.
          </p>
          <h2>Retention and choices</h2>
          <p>
            We retain information only as long as reasonably needed for the
            purposes described above, legal obligations and dispute resolution.
            You may request access, correction or deletion by contacting us.
            Recording and consent laws vary by location; this policy should be
            reviewed by qualified counsel before launch.
          </p>
          <h2>Contact</h2>
          <p>
            Questions or privacy requests can be directed to the contact details
            provided during your Tundrel engagement.
          </p>
          <div className="legal-warning">
            <b>Launch note</b>
            <span>
              This is a practical starter policy, not legal advice. Add the
              operating company name, address, privacy email, specific vendors,
              retention periods and jurisdiction-specific disclosures before
              accepting public traffic.
            </span>
          </div>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
