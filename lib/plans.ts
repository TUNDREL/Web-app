// Single source of truth for plans. Used by the pricing page and the homepage preview,
// so the two can never disagree again.
export type Plan = {
  name: string;
  price: number;
  desc: string;
  minutes: string;
  overage: string;
  popular?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: 199,
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
    price: 399,
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
    price: 599,
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

export const startingPrice = Math.min(...plans.map((p) => p.price));
