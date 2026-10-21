import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import type { Metadata } from "next";
import { faqs } from "@/lib/faqs";
import { showEmergencySection } from "@/lib/content";
import { Fill } from "@/components/Fill";

export const metadata: Metadata = {
  title: "FAQ | AI Answering Service for HVAC Companies — Tundrel",
  description:
    "Answers to common questions about Tundrel's AI receptionist for HVAC companies — setup, pricing, data security, and how the free trial works.",
};

// FAQPage structured data (JSON-LD) — this is what lets Google and AI
// answer engines (AI Overviews, ChatGPT, Perplexity) parse these as
// discrete question/answer pairs and cite them directly, rather than
// just seeing a wall of unstructured text.
const visibleFaqs = faqs.filter(
  (f) => f.requires !== "emergency" || showEmergencySection,
);
// Unfinished answers contain [placeholders]; keep them out of the search-engine markup.
const hasPlaceholder = (text: string) => /\[[^\]]+\]/.test(text);
const schemaFaqs = visibleFaqs.filter((f) => !hasPlaceholder(f.q) && !hasPlaceholder(f.a));

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: schemaFaqs.map(({ q: question, a: answer }) => ({
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
          {visibleFaqs.map(({ q, a }, i) => (
            <details key={q} open={i === 0}>
              <summary>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{q}</b>
                <i>＋</i>
              </summary>
              <p>
                <Fill>{a}</Fill>
              </p>
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
