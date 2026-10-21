import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { plans, startingPrice } from "@/lib/plans";
import { plansTerms } from "@/lib/content";
import { Fill } from "@/components/Fill";

export const metadata: Metadata = {
  title: "Pricing | AI Receptionist for HVAC Companies — Tundrel",
  description: `Simple, predictable pricing for HVAC call answering. Plans from $${startingPrice}/month with a free 1-week trial — no card required, no obligation.`,
};

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
                data-track={`book-demo-plan-${plan.name.toLowerCase()}`}
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
        <section className="terms-glance" aria-labelledby="terms-glance-title">
          <h2 id="terms-glance-title">Terms at a glance</h2>
          <dl>
            <div>
              <dt>Free trial</dt>
              <dd>1 week once your assistant is configured. No card required, no obligation.</dd>
            </div>
            <div>
              <dt>Setup</dt>
              <dd>One-time fee of $150–$300 if you continue, confirmed during your demo.</dd>
            </div>
            <div>
              <dt>Contract</dt>
              <dd><Fill>{plansTerms.contract}</Fill></dd>
            </div>
            <div>
              <dt>Billing</dt>
              <dd><Fill>{plansTerms.billing}</Fill></dd>
            </div>
            <div>
              <dt>Cancellation</dt>
              <dd><Fill>{plansTerms.cancellation}</Fill></dd>
            </div>
            <div>
              <dt>Refunds</dt>
              <dd><Fill>{plansTerms.refunds}</Fill></dd>
            </div>
          </dl>
          <p>
            Full details in our <Link href="/terms">Terms of service</Link>.
          </p>
        </section>
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
