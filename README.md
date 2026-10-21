# Tundrel Web App

A conversion-focused Next.js site for Tundrel, a 24/7 AI receptionist for home service businesses, starting with HVAC.

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Pages

Home, How it works, Pricing, FAQ, About, Security & data, Terms, Privacy, Book a demo.

## Launch configuration

Copy `.env.example` to `.env.local` and fill it in (set the same values on your host):

```bash
NEXT_PUBLIC_DEMO_PHONE="+1 555 555 5555"      # shown as (555) 555-5555 style where possible
NEXT_PUBLIC_SAMPLE_CALL_AUDIO="/sample-call.mp3"  # file placed in /public
NEXT_PUBLIC_WEB3FORMS_KEY=""                   # demo-request form
NEXT_PUBLIC_EMAILJS_SERVICE_ID=""              # confirmation email
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=""
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=""
# NEXT_PUBLIC_SHOW_EMERGENCY_SECTION=1         # only once emergency handling is live
```

## Content and placeholders

Unfinished content is shown as highlighted `[bracketed]` text and is defined in `lib/content.ts`
as `todo("...")`. Replace the whole call with real text to finish an item. To see what is left:

```bash
npm run check:placeholders
```

Plans and prices live in `lib/plans.ts` (used by the pricing page and the homepage).
FAQ answers live in `lib/faqs.ts`. See `docs/LAUNCH_CHECKLIST.md` before promoting the site.

The Terms, Privacy and Security pages are drafts. Have a qualified lawyer review them and
add the operating company details before accepting public traffic.
