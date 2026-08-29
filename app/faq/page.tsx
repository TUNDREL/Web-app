import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | AI Answering Service for HVAC Companies — Tundrel",
  description:
    "Answers to common questions about Tundrel's AI receptionist for HVAC companies — setup, pricing, data security, and how the free trial works.",
};

const faqs = [
  [
    "Does this replace my office staff?",
    "No. Tundrel covers the calls your team cannot reach—after hours, overflow, lunch breaks and busy periods. Your staff stays in control and can take over whenever needed.",
  ],
  [
    "What happens if the AI cannot answer something?",
    "It follows the escalation rules you approve. It can take a message, transfer urgent calls or tell the caller exactly when a human will follow up. It never invents an answer.",
  ],
  [
    "Can it book into our existing calendar?",
    "Yes. The Growth and Pro plans can connect to supported calendars and scheduling systems so the assistant offers real availability instead of simply taking a message.",
  ],
  [
    "Do we have to change our phone number?",
    "No. You keep your existing business number. Calls can route to Tundrel after hours, when your staff does not answer, or whenever you choose.",
  ],
  [
    "Will customers know it is AI?",
    "We recommend being transparent. The assistant can introduce itself as your virtual receptionist while still sounding natural, patient and helpful.",
  ],
  [
    "Are calls recorded?",
    "Calls may be recorded for quality, training and service improvement where permitted. Your setup includes a configurable disclosure, and you remain responsible for requirements specific to your location.",
  ],
  [
    "How long does setup take?",
    "Most straightforward pilots can be configured and tested within several business days after we receive your services, hours, service areas and booking rules.",
  ],
  [
    "Can I try it before committing to anything?",
    "Yes. Every plan starts with a free 1-week trial once your assistant is configured—no card required to start, and no obligation to continue afterward. If it's working, you pick a plan; if it's not a fit, you walk away with no cost.",
  ],
  [
    "Is our customer data secure?",
    "We limit collection to what is needed to handle the call and use service providers appropriate to the workflow. We cover retention, access and deletion expectations during onboarding.",
  ],
];

// FAQPage structured data (JSON-LD) — this is what lets Google and AI
// answer engines (AI Overviews, ChatGPT, Perplexity) parse these as
// discrete question/answer pairs and cite them directly, rather than
// just seeing a wall of unstructured text.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function FAQ() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="page-shell">
        <SiteHeader />
        <section className="inner-hero faq-hero">
          <span className="eyebrow">STRAIGHT ANSWERS</span>
          <h1>
            Questions a careful owner
            <br />
            <em>should ask.</em>
          </h1>
          <p>
            What Tundrel does, what it doesn&apos;t, and how you stay in
            control.
          </p>
        </section>
        <section className="faq-list">
          {faqs.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{q}</b>
                <i>＋</i>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </section>
      </div>
      <section className="final-cta">
        <span className="eyebrow">STILL HAVE A QUESTION?</span>
        <h2>Ask us—or ask the AI.</h2>
        <div>
          <Link href="/book-demo" className="button button-accent">
            Talk to a human <span>→</span>
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
