import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FounderBlock from "@/components/FounderBlock";
import { ExternalLink, Fill, Mail } from "@/components/Fill";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "About | Tundrel Call Agent",
  description:
    "Who is behind Tundrel, why we built an AI receptionist for home service businesses, and how to reach us.",
};

const principles: [string, string][] = [
  [
    "Be upfront that it's AI",
    "The assistant introduces itself as your virtual receptionist. No pretending to be a person.",
  ],
  [
    "Never invent an answer",
    "When it doesn't know, it takes a message or hands off, following rules you approve.",
  ],
  [
    "Keep your team in control",
    "It covers the calls you can't reach. Your staff can take over any time.",
  ],
  [
    "Earn trust with a trial",
    "Try it on real calls for a week before you pay or commit to anything.",
  ],
];

export default function About() {
  return (
    <main>
      <div className="page-shell">
        <SiteHeader />
        <section className="inner-hero">
          <span className="eyebrow">ABOUT TUNDREL</span>
          <h1>
            The people behind
            <br />
            <em>the phone.</em>
          </h1>
          <p>
            Tundrel is an AI receptionist for home service businesses, starting
            with HVAC. We exist so good jobs stop going to voicemail.
          </p>
        </section>
      </div>
      <FounderBlock />
      <section className="principles page-shell">
        <div className="section-head">
          <div>
            <span className="eyebrow">HOW WE WORK</span>
            <h2>What you can count on.</h2>
          </div>
          <p>The rules we hold ourselves to.</p>
        </div>
        <div className="principle-grid">
          {principles.map(([title, text], i) => (
            <article key={title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="company-card page-shell">
        <h2>Company details</h2>
        <dl>
          <div>
            <dt>Legal name</dt>
            <dd>
              <Fill>{company.legalName}</Fill>
            </dd>
          </div>
          <div>
            <dt>Address</dt>
            <dd>
              <Fill>{company.address}</Fill>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <Mail email={company.email} />
            </dd>
          </div>
          <div>
            <dt>Support hours</dt>
            <dd>
              <Fill>{company.supportHours}</Fill>
            </dd>
          </div>
          <div>
            <dt>LinkedIn</dt>
            <dd>
              <ExternalLink href={company.linkedin}>Tundrel on LinkedIn</ExternalLink>
            </dd>
          </div>
        </dl>
      </section>
      <section className="final-cta">
        <span className="eyebrow">TALK TO A HUMAN</span>
        <h2>Let&apos;s look at your calls together.</h2>
        <div>
          <Link href="/book-demo" className="button button-accent" data-track="book-demo-about">
            Book a 15-minute demo <span>→</span>
          </Link>
          <Link href="/#live-demo" className="button button-light">
            Call the AI
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
