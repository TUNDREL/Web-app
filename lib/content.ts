/**
 * Everything on the site that is NOT final lives in this file.
 *
 * Unknown details are written as todo("what goes here"). On the page they render as a
 * highlighted [placeholder] so nothing can be forgotten, and `npm run check:placeholders`
 * lists every one that is still open (it exits with an error until they're all replaced).
 *
 * To fill one in, replace the whole todo("...") call with a normal string.
 */

export const todo = (label: string) => `[${label}]`;
export const isTodo = (value: string) => /\[[^\]]+\]/.test(value);

// ---- feature switches (set in .env.local / your host) ----------------------------------

// The emergency section makes safety promises. It shows in `npm run dev` for review,
// but in production only when NEXT_PUBLIC_SHOW_EMERGENCY_SECTION=1, i.e. after the
// emergency handling is built and tested.
export const showEmergencySection =
  process.env.NEXT_PUBLIC_SHOW_EMERGENCY_SECTION === "1" ||
  process.env.NODE_ENV === "development";

// Path of a recording placed in /public, e.g. "/sample-call.mp3".
export const sampleCallAudio = process.env.NEXT_PUBLIC_SAMPLE_CALL_AUDIO?.trim() || "";

// ---- company ---------------------------------------------------------------------------

export const company = {
  brand: "Tundrel",
  legalName: todo("Legal company name"),
  address: todo("Business mailing address"),
  email: "contact@tundrel.com",
  privacyEmail: todo("Privacy contact email"),
  supportHours: todo("Support hours, e.g. Mon-Fri 9am-6pm ET"),
  linkedin: todo("LinkedIn company page URL"),
};

export const founder = {
  name: todo("Founder name"),
  role: todo("Title, e.g. Founder & CEO"),
  // Path of a file in /public, e.g. "/founder.jpg".
  photo: todo("Founder photo: path of a file in /public, e.g. /founder.jpg"),
  story: [
    todo("Why you built Tundrel: 2-3 sentences, in your own words"),
    todo("Your background in home services, phones or AI"),
  ],
  linkedin: todo("Your LinkedIn profile URL"),
};

// ---- proof -----------------------------------------------------------------------------

export const pilot = {
  title: "Founding customer pilot",
  perks: [
    todo("Perk 1, e.g. setup fee waived"),
    todo("Perk 2, e.g. direct line to the founder"),
    todo("Perk 3, e.g. locked-in launch pricing"),
  ],
  guarantee: todo("Your guarantee in one sentence"),
  spots: todo("Number of founding spots left"),
};

export type Testimonial = { quote: string; name: string; role: string; company: string };
export type ResultStat = { value: string; label: string; source: string };

// Add only REAL quotes you have permission to use. The section stays hidden while empty.
export const testimonials: Testimonial[] = [];
// Add only measured results from real customers. The section stays hidden while empty.
export const results: ResultStat[] = [];

export const integrations = [
  todo("Scheduling tool 1"),
  todo("Scheduling tool 2"),
  todo("Scheduling tool 3"),
];
export const integrationsNote = todo("List only the tools you support today");

// ---- sample call (illustrative until you add a real recording) -------------------------

export const sampleCall = {
  business: "Summit Heating (sample business)",
  note: todo("Replace with the transcript of your real recording, then delete this note"),
  lines: [
    { who: "ai", text: "Thanks for calling Summit Heating, this is the virtual receptionist. How can I help?" },
    { who: "caller", text: "Our AC just stopped working and it's getting hot in here." },
    { who: "ai", text: "I'm sorry about that. Let me get this to our on-call technician. Can I have your name and the address?" },
    { who: "caller", text: "James, 24 Maple Street." },
    { who: "ai", text: "Thanks, James. I've sent your request to the team and someone will confirm your appointment shortly. Is this the best number to reach you?" },
    { who: "caller", text: "Yes, this one." },
  ] as { who: "ai" | "caller"; text: string }[],
  alert: {
    subject: "New request: AC not working (needs confirmation)",
    fields: [
      ["Caller", "James"],
      ["Phone", "the number they called from"],
      ["Address", "24 Maple Street"],
      ["Issue", "AC stopped working, house getting hot"],
      ["Urgency", "Same day"],
    ] as [string, string][],
  },
};

// ---- commercial terms ------------------------------------------------------------------

export const plansTerms = {
  contract: todo("Contract terms, e.g. month-to-month, no long-term contract"),
  billing: todo("Billing terms, e.g. billed monthly in advance by card"),
  cancellation: todo("How to cancel and when it takes effect"),
  refunds: todo("Refund policy"),
};

// ---- legal -----------------------------------------------------------------------------
// DRAFT TEXT: have a qualified lawyer review the Terms, Privacy and Security pages before launch.

export const legal = {
  lastUpdated: todo("Date this page was last updated"),
  governingLaw: todo("Governing law and venue, e.g. the laws of the State of X"),
  liability: todo("Limitation of liability clause, drafted by your lawyer"),
};

export const security = {
  retention: todo("How long call recordings and transcripts are kept"),
  recordingDefault: todo("Whether customer calls are recorded by default"),
  demoDisclosure: todo("Confirm the demo line announces AI and recording at the start of the call"),
  protection: todo("Encryption and access-control statement, confirmed with your providers"),
  certifications: todo("Compliance status, e.g. no certifications yet / SOC 2 in progress"),
  contact: todo("Security contact email"),
  dataOwnership: todo("Who owns call data and how customers can export or delete it"),
  vendorsReviewed: todo("Date you last reviewed the vendor list"),
};

export const vendors: { name: string; purpose: string; data: string }[] = [
  {
    name: "Vapi",
    purpose: "Runs the voice AI on phone calls",
    data: "Call audio, transcripts and the caller's phone number",
  },
  {
    name: "Web3Forms",
    purpose: "Delivers demo requests from this website to our team",
    data: "Name, business name, email, phone, missed-call estimate and message you submit",
  },
  {
    name: "EmailJS",
    purpose: "Sends the confirmation email after a demo request",
    data: "Name, business name and email address",
  },
  { name: todo("Telephony provider"), purpose: "Phone numbers and call routing", data: "Phone numbers and call metadata" },
  { name: todo("Speech and language-model providers"), purpose: "Understand and speak during calls", data: "Call audio and transcripts" },
  { name: todo("Website hosting provider"), purpose: "Serves this website", data: "Standard server logs (IP address, browser)" },
  { name: todo("Analytics provider, if any"), purpose: "Measures website usage", data: "Pages viewed and clicks" },
];
