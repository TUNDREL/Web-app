# Tundrel Web App

A conversion-focused Next.js site for Tundrel, a 24/7 AI receptionist for HVAC companies. It includes a live-call CTA, missed-revenue calculator, pricing, before/after workflow, demo booking, FAQ, and starter privacy policy.

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Launch configuration

Create `.env.local` and provide the live Vapi number and booking embed URL:

```bash
NEXT_PUBLIC_DEMO_PHONE="+1 555 555 5555"
NEXT_PUBLIC_BOOKING_URL="https://calendly.com/your-team/intro"
```

The site shows explicit setup placeholders until these values are provided. Review the starter privacy policy with qualified counsel and add the operating company details before launch.
