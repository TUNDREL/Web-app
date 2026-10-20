import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PhoneDemo from "@/components/PhoneDemo";
import RevenueCalculator from "@/components/RevenueCalculator";

export const metadata: Metadata = {
  title: "AI Answering Service for HVAC Companies | Tundrel Call Agent",
  description:
    "Stop losing jobs to missed calls. Tundrel is an AI receptionist built for HVAC companies — it answers 24/7, qualifies callers, and books the job. Try it free for a week.",
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
    "You wake up to booked work",
    "Qualified calls become appointments, urgent jobs are escalated, and every conversation is summarized.",
  ],
];

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span>Built for HVAC companies that are done losing calls</span>
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
              Tundrel answers every call, qualifies the homeowner and books the
              job—so your trucks stay full even when your team can&apos;t pick
              up.
            </p>
            <div className="hero-ctas">
              <Link className="button button-accent" href="/book-demo">
                Book a 15-minute demo <span>→</span>
              </Link>
              <a href="#live-demo" className="button button-outline">
                Call the AI now <span>↓</span>
              </a>
            </div>
            <div className="trust-line">
              <span>✓ Works with your current number</span>
              <span>✓ Live in days, not months</span>
              <span>✓ Built for HVAC</span>
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
                <i>LIVE</i>
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
                    I&apos;m sorry about that, James. I can get an emergency
                    technician out between 2 and 4 PM...
                  </span>
                </p>
              </div>
              <div className="call-status">
                <span>
                  <i /> Call in progress
                </span>
                <b>01:42</b>
              </div>
            </div>
            <div className="booking-toast">
              <span>✓</span>
              <div>
                <b>Emergency repair booked</b>
                <small>Today · 2:00–4:00 PM · $149 callout</small>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="live-demo">
        <PhoneDemo />
      </div>
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
      <RevenueCalculator />
      <section className="pricing-preview page-shell">
        <div>
          <span className="eyebrow">SIMPLE PRICING</span>
          <h2>
            Cheaper than one
            <br />
            <em>missed install.</em>
          </h2>
          <p>Start small. Upgrade when the call volume proves it.</p>
          <Link href="/pricing" className="text-arrow">
            Compare every plan <span>→</span>
          </Link>
        </div>
        <article>
          <span>STARTER</span>
          <div className="price">
            <strong>$199</strong>
            <small>/ month</small>
          </div>
          <p>For owner-operators who need every after-hours call covered.</p>
          <ul>
            <li>150 AI-handled minutes</li>
            <li>Lead qualification & summaries</li>
            <li>After-hours and overflow coverage</li>
          </ul>
          <Link href="/book-demo" className="button button-accent">
            Book a demo <span>→</span>
          </Link>
        </article>
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
          walkthrough.
        </p>
        <div>
          <Link className="button button-accent" href="/book-demo">
            Book your demo <span>→</span>
          </Link>
          <a className="button button-light" href="#live-demo">
            Call the AI first
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
