import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LeadForm from "@/components/LeadForm";
import { demoPhone, demoPhoneHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Demo | AI Receptionist for HVAC Companies — Tundrel",
  description:
    "See a live, unscripted demo of the AI that answers your HVAC company's calls, then start a free 1-week trial — no card required, no hard sell.",
};

export default function BookDemo() {
  return (
    <main>
      <div className="page-shell">
        <SiteHeader />
        <section className="booking-layout">
          <div className="booking-copy">
            <span className="eyebrow">15-MINUTE WORKFLOW REVIEW</span>
            <h1>
              Let&apos;s see what your
              <br />
              <em>missed calls are worth.</em>
            </h1>
            <p>
              Tell us a bit about your business. We&apos;ll look at your
              current call flow, show you the live assistant and map out a
              practical pilot—no hard sell.
            </p>
            <ul>
              <li>
                <span>01</span>
                <div>
                  <b>Your current call flow</b>
                  <small>Where calls get missed, delayed or dropped.</small>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <b>A live, unscripted demo</b>
                  <small>Ask the assistant anything your customers ask.</small>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <b>A free 1-week trial</b>
                  <small>See it handle real calls before you pay a cent.</small>
                </div>
              </li>
            </ul>
            <div className="call-instead">
              <span>Want to hear the AI first?</span>
              <a href={demoPhoneHref}>Call {demoPhone} →</a>
            </div>
          </div>
          <div className="calendar-card">
            <LeadForm />
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
