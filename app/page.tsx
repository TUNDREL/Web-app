import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PhoneDemo from "@/components/PhoneDemo";
import RevenueCalculator from "@/components/RevenueCalculator";
import HearItWork from "@/components/HearItWork";
import EmergencySection from "@/components/EmergencySection";
import WorksWith from "@/components/WorksWith";
import Proof from "@/components/Proof";
import FounderBlock from "@/components/FounderBlock";
import { faqs } from "@/lib/faqs";
import { plans } from "@/lib/plans";
import { showEmergencySection } from "@/lib/content";
import { Fill } from "@/components/Fill";

export const metadata: Metadata = {
  title: "AI Answering Service for HVAC Companies | Tundrel Call Agent",
  description:
    "Stop losing jobs to missed calls. Tundrel is an AI receptionist built for HVAC companies — it answers 24/7, qualifies callers, and gets the job details to you. Try it free for a week.",
};

const steps = [
  [
    "01",
    "We connect your number",
    "Keep your existing business line. Missed and after-hours calls route to your Tundrel assistant.",
  ],
  [
    "02",
    "It answers like your best dispatcher",
    "Your assistant learns your services, service area, availability, pricing rules and escalation process.",
  ],
  [
    "03",
    "You wake up to qualified jobs",
    "Qualified calls become appointment requests or calendar bookings, urgent jobs are escalated, and every conversation is summarized.",
  ],
];

const homeFaqs = faqs.filter(
  (f) => f.featured && (f.requires !== "emergency" || showEmergencySection),
);
const starter = plans[0];
const others = plans.slice(1);

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span>Built for home service businesses that are done losing calls</span>
      </div>
      <div className="page-shell">
        <SiteHeader />
        <section className="hvac-hero">
          <div className="hero-copy-block">
            <span className="eyebrow">
              <i /> YOUR 24/7 AI RECEPTIONIST
            </span>
            <h1>
              The job you miss
              <br />
              becomes <em>their job.</em>
            </h1>
            <p>
              Tundrel answers every call, finds out what&apos;s wrong and sends
              you the job details—so your trucks stay full even when your team
              can&apos;t pick up.
            </p>
            <div className="hero-ctas">
              <Link className="button button-accent" href="/book-demo" data-track="book-demo-hero">
                Book a 15-minute demo <span>→</span>
              </Link>
              <a href="#live-demo" className="button button-outline" data-track="call-demo-hero">
                Call the AI now <span>↓</span>
              </a>
            </div>
            <div className="trust-line">
              <span>✓ Works with your current number</span>
              <span>✓ Live in days, not months</span>
              <span>✓ Free 1-week trial, no card</span>
            </div>
          </div>
          <div className="call-visual">
            <div className="call-window">
              <div className="call-head">
                <span className="brand-mark">T</span>
                <div>
                  <b>Tundrel AI</b>
                  <small>Answering for Summit Heating</small>
                </div>
                <i>SAMPLE</i>
              </div>
              <div className="wave">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="transcript">
                <p>
                  <i>AI</i>
                  <span>
                    Thanks for calling Summit Heating. How can I help today?
                  </span>
                </p>
                <p className="customer">
                  <i>J</i>
                  <span>
                    Our AC stopped working and it&apos;s getting hot fast.
                  </span>
                </p>
                <p>
                  <i>AI</i>
                  <span>
                    I&apos;m sorry about that, James. Let me get your address and
                    send this to the on-call technician right now...
                  </span>
                </p>
              </div>
              <div className="call-status">
                <span>Example conversation · Summit Heating is a sample business</span>
              </div>
            </div>
            <div className="booking-toast">
              <span>✓</span>
              <div>
                <b>Urgent request sent to your team</b>
                <small>Details and summary on their phone</small>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="live-demo">
        <PhoneDemo />
      </div>
      <HearItWork />
      <RevenueCalculator />
      <section className="how-preview page-shell">
        <div className="section-head">
          <div>
            <span className="eyebrow">FROM RING TO REVENUE</span>
            <h2>
              Every call handled.
              <br />
              Nothing falls through.
            </h2>
          </div>
          <p>
            We don&apos;t give you another dashboard to manage. We give you a
            receptionist that never clocks out.
          </p>
        </div>
        <div className="steps">
          {steps.map(([n, title, text]) => (
            <article key={n}>
              <span>{n}</span>
              <div className="step-icon">
                {n === "01" ? "↳" : n === "02" ? "◉" : "✓"}
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <Link href="/how-it-works" className="text-arrow">
          See exactly how it works <span>→</span>
        </Link>
      </section>
      <EmergencySection />
      <WorksWith />
      <section className="pricing-preview page-shell">
        <div>
          <span className="eyebrow">SIMPLE PRICING</span>
          <h2>
            Cheaper than one
            <br />
            <em>missed install.</em>
          </h2>
          <p>Start small. Upgrade when the call volume proves it.</p>
          <p className="plan-line">
            {others.map((p) => `${p.name} $${p.price}`).join(" · ")} / month
          </p>
          <Link href="/pricing" className="text-arrow">
            Compare every plan <span>→</span>
          </Link>
        </div>
        <article>
          <span>{starter.name.toUpperCase()}</span>
          <div className="price">
            <strong>${starter.price}</strong>
            <small>/ month</small>
          </div>
          <p>{starter.desc}</p>
          <ul>
            <li>{starter.minutes}</li>
            <li>Lead qualification & summaries</li>
            <li>After-hours and overflow coverage</li>
          </ul>
          <Link href="/book-demo" className="button button-accent" data-track="book-demo-pricing">
            Book a demo <span>→</span>
          </Link>
        </article>
      </section>
      <Proof />
      <FounderBlock compact />
      <section className="faq-preview page-shell">
        <div className="section-head">
          <div>
            <span className="eyebrow">STRAIGHT ANSWERS</span>
            <h2>
              Questions a careful owner
              <br />
              should ask.
            </h2>
          </div>
          <p>The short answers. The full list is one click away.</p>
        </div>
        <div className="faq-list">
          {homeFaqs.map((f, i) => (
            <details key={f.q}>
              <summary>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{f.q}</b>
                <i>＋</i>
              </summary>
              <p>
                <Fill>{f.a}</Fill>
              </p>
            </details>
          ))}
        </div>
        <Link href="/faq" className="text-arrow">
          Read every question <span>→</span>
        </Link>
      </section>
      <section className="final-cta">
        <span className="eyebrow">YOUR NEXT CALL IS AN OPPORTUNITY</span>
        <h2>
          Stop sending good jobs
          <br />
          to voicemail.
        </h2>
        <p>
          See how Tundrel would answer your real calls in a focused 15-minute
          walkthrough. Free 1-week trial, no card required.
        </p>
        <div>
          <Link className="button button-accent" href="/book-demo" data-track="book-demo-final">
            Book your demo <span>→</span>
          </Link>
          <a className="button button-light" href="#live-demo" data-track="call-demo-final">
            Call the AI first
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
