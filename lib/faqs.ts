import { company, plansTerms, security } from "./content";

export type Faq = {
  q: string;
  a: string;
  featured?: boolean;
  // Hidden until the emergency handling is live (see showEmergencySection).
  requires?: "emergency";
};

export const faqs: Faq[] = [
  {
    q: "Does this replace my office staff?",
    a: "No. Tundrel covers the calls your team cannot reach—after hours, overflow, lunch breaks and busy periods. Your staff stays in control and can take over whenever needed.",
  },
  {
    q: "What happens if the AI cannot answer something?",
    a: "It follows the escalation rules you approve. It can take a message, transfer urgent calls or tell the caller exactly when a human will follow up. It never invents an answer.",
    featured: true,
  },
  {
    q: "What happens in an emergency, like a gas smell?",
    a: "During setup you define what counts as an emergency and who gets alerted. For gas or carbon monoxide risks, the assistant tells the caller to leave the building and call 911 or the gas utility's emergency line, then alerts your on-call person. Tundrel is not an emergency service and cannot dispatch responders.",
    requires: "emergency",
  },
  {
    q: "Can it book into our existing calendar?",
    a: "Yes. The Growth and Pro plans can connect to supported calendars and scheduling systems so the assistant offers real availability instead of simply taking a message.",
  },
  {
    q: "What if the assistant gets something wrong?",
    a: "Your team receives a summary of every call, so mistakes surface quickly. If the assistant misunderstands something or gives a wrong answer, tell us and we update its instructions, and we tighten it using real conversations. Unless you have connected a calendar, nothing is confirmed until your team confirms it.",
  },
  {
    q: "Do we have to change our phone number?",
    a: "No. You keep your existing business number. Calls can route to Tundrel after hours, when your staff does not answer, or whenever you choose.",
    featured: true,
  },
  {
    q: "Will customers know it is AI?",
    a: "We recommend being transparent. The assistant can introduce itself as your virtual receptionist while still sounding natural, patient and helpful.",
    featured: true,
  },
  {
    q: "Are calls recorded?",
    a: "Calls may be recorded for quality, training and service improvement where permitted. Your setup includes a configurable disclosure, and you remain responsible for requirements specific to your location.",
    featured: true,
  },
  {
    q: "How long does setup take?",
    a: "Most straightforward pilots can be configured and tested within several business days after we receive your services, hours, service areas and booking rules.",
  },
  {
    q: "Can I try it before committing to anything?",
    a: "Yes. Every plan starts with a free 1-week trial once your assistant is configured—no card required to start, and no obligation to continue afterward. If it's working, you pick a plan; if it's not a fit, you walk away with no cost.",
    featured: true,
  },
  {
    q: "How do I cancel?",
    a: plansTerms.cancellation,
  },
  {
    q: "Is our customer data secure?",
    a: "We limit collection to what is needed to handle the call and use service providers appropriate to the workflow. We cover retention, access and deletion expectations during onboarding. Details are on our Security & data page.",
  },
  {
    q: "Who owns the call data?",
    a: security.dataOwnership,
  },
  {
    q: "Who do I contact if something goes wrong?",
    a: `Email ${company.email}. Support hours: ${company.supportHours}.`,
  },
];
