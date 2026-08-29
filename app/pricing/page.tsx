import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Pricing | AI Receptionist for HVAC Companies — Tundrel",
  description:
    "Simple, predictable pricing for HVAC call answering. Plans from $299/month with a free 1-week trial — no card required, no obligation.",
};
const plans = [
  {
    name: "Starter",
    price: "299",
    desc: "For owner-operators covering after-hours and overflow.",
    minutes: "300 AI minutes",
    overage: "$0.40/min after that",
    features: [
      "One phone line",
      "Lead qualification & emergency triage",
      "Appointment booking",
      "Call summaries by text/email",
      "After-hours & overflow routing",
      "Standard voice setup",
    ],
  },
  {
    name: "Growth",
    price: "449",
    desc: "For busy shops ready to book more work around the clock.",
    minutes: "600 AI minutes",
    overage: "$0.35/min after that",
    popular: true,
    features: [
      "Everything in Starter",
      "Full-time call answering, not just overflow",
      "Real calendar integration",
      "Emergency call escalation",
      "Custom service-area rules",
      "Monthly performance review",
      "Priority email support",
    ],
  },
  {
    name: "Pro",
    price: "699",
    desc: "For multi-location teams with higher volume and complexity.",
    minutes: "1,200 AI minutes",
    overage: "$0.30/min after that",
    features: [
      "Everything in Growth",
      "Multiple locations or lines",
      "Advanced call routing",
      "Bilingual assistant",
      "Dedicated priority support",
      "Custom integrations",
    ],
  },
];
export default function Pricing() {
  return (
    <main>
      <div className="page-shell">
        <SiteHeader />
        <section className="inner-hero">
          <span className="eyebrow">CLEAR, PREDICTABLE PRICING</span>
          <h1>
            One captured job can
            <br />
            <em>pay for the whole month.</em>
          </h1>
          <p>
            No seat fees. No long implementation. Pick the coverage that fits
            your call volume.
          </p>
        </section>
        <div className="trial-banner">
          <span>✦ Try any plan free for 1 week — no card required to start, no obligation after.</span>
        </div>
        <section className="pricing-grid">
          {plans.map((plan) => (
            <article className={plan.popular ? "popular" : ""} key={plan.name}>
              {plan.popular && <div className="popular-tag">MOST POPULAR</div>}
              <span>{plan.name.toUpperCase()}</span>
              <div className="price">
                <strong>${plan.price}</strong>
                <small>/ month</small>
              </div>
              <p>{plan.desc}</p>
              <b className="minutes">{plan.minutes}</b>
              <b className="minutes" style={{ fontWeight: 400, opacity: 0.75 }}>
                {plan.overage}
              </b>
              <ul>
                {plan.features.map((x) => (
                  <li key={x}>✓ {x}</li>
                ))}
              </ul>
              <Link
                href="/book-demo"
                className={`button ${plan.popular ? "button-accent" : "button-dark"}`}
              >
                Start your free week <span>→</span>
              </Link>
            </article>
          ))}
        </section>
        <p className="pricing-note">
          Every plan starts with a free 1-week trial — see it handle real
          calls before you pay anything. One-time setup fee of $150–$300
          applies once you continue, confirmed during your demo based on
          your specific configuration.{" "}
          <Link href="/book-demo">Let&apos;s talk.</Link> Need more minutes
          or a custom workflow? We can scope that too.
        </p>
      </div>
      <section className="pricing-assurance">
        <div>
          <span>NO SURPRISE SETUP</span>
          <h2>We do the heavy lifting.</h2>
        </div>
        <ul>
          <li>
            <b>01</b>
            <span>
              <strong>Built around your business</strong>Your services, coverage
              area, hours and booking rules.
            </span>
          </li>
          <li>
            <b>02</b>
            <span>
              <strong>Tested before it answers</strong>You approve the assistant
              before any customer reaches it.
            </span>
          </li>
          <li>
            <b>03</b>
            <span>
              <strong>Improved every month</strong>We review real conversations
              and tighten performance.
            </span>
          </li>
        </ul>
      </section>
      <SiteFooter />
    </main>
  );
}
