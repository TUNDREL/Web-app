import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Fill, Mail } from "@/components/Fill";
import { company, security, vendors } from "@/lib/content";

// DRAFT TEXT: confirm every statement with your providers and a lawyer (see docs/LAUNCH_CHECKLIST.md).
export const metadata: Metadata = {
  title: "Security & Data Handling | Tundrel Call Agent",
  description:
    "What data Tundrel handles, which vendors process it, how recording and consent work, and how to ask for deletion.",
};

const cards: [string, string][] = [
  [
    "What we handle",
    "To answer a call we process call audio, a transcript, the caller's phone number and the details they give, such as name, address and the issue. Customers' calls are processed on their behalf.",
  ],
  [
    "Recording and consent",
    "Recording rules differ by location. Businesses are responsible for notifying their own callers, and your setup includes a configurable disclosure. The assistant can introduce itself as a virtual receptionist.",
  ],
  [
    "Who processes it",
    "A small set of vendors help us run calls, deliver messages and host this site. They are listed below and we keep the list current.",
  ],
  ["Retention and deletion", `${security.retention} ${security.dataOwnership}`],
  ["Protection", security.protection],
  ["Certifications", security.certifications],
];

export default function Security() {
  return (
    <main>
      <div className="page-shell">
        <SiteHeader />
        <section className="inner-hero">
          <span className="eyebrow">SECURITY &amp; DATA</span>
          <h1>
            What we handle,
            <br />
            <em>and who touches it.</em>
          </h1>
          <p>
            Plain answers about call data, recording, vendors and your
            responsibilities. This site is served over HTTPS.
          </p>
        </section>
        <section className="security-grid">
          {cards.map(([title, text], i) => (
            <article key={title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>
                <Fill>{text}</Fill>
              </p>
            </article>
          ))}
        </section>
        <section className="vendors" id="vendors">
          <h2>Vendors &amp; subprocessors</h2>
          <p>
            Providers that may process information on our behalf. Last
            reviewed: <Fill>{security.vendorsReviewed}</Fill>
          </p>
          <div className="vendor-scroll">
            <table>
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>What they do</th>
                  <th>Data involved</th>
                </tr>
              </thead>
              <tbody>
                {vendors.map((v) => (
                  <tr key={v.name}>
                    <td>
                      <Fill>{v.name}</Fill>
                    </td>
                    <td>{v.purpose}</td>
                    <td>{v.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="security-contact">
          <h2>Report a concern or make a request</h2>
          <p>
            Security issues: <Mail email={security.contact} />. Privacy or
            deletion requests: <Mail email={company.privacyEmail} />. See also
            our <Link href="/privacy">Privacy policy</Link> and{" "}
            <Link href="/terms">Terms of service</Link>.
          </p>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
