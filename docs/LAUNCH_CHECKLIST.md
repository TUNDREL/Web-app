# Launch checklist

Run `npm run check:placeholders` any time. It lists every unfinished placeholder and
exits with an error until they are all filled in. Placeholders are the highlighted
`[bracketed]` text on the site; they all live in `lib/content.ts` (replace the whole
`todo("...")` call with real text).

## Must be true before you promote the site

- [ ] `NEXT_PUBLIC_DEMO_PHONE` is set to a number your agent actually answers
- [ ] `npm run check:placeholders` reports 0 remaining
- [ ] Legal entity name, address and contact emails are real (footer, About, Terms, Privacy)
- [ ] A lawyer has reviewed **Terms**, **Privacy** and **Security & data**
      (the drafts say what the service does; they are not legal advice)
- [ ] Every statement on the Security page is confirmed with your providers
- [ ] Vendor list matches what you actually use (telephony, speech/LLM, hosting, analytics)
- [ ] The demo line announces that it is an AI and that calls may be recorded
- [ ] Pricing is consistent: homepage, pricing page and what you quote on calls
- [ ] Plan features are things you can deliver today (calendar integration, emergency
      escalation, bilingual, advanced routing, monthly reviews)
- [ ] Sample call: real recording added, transcript matches it, the "example conversation" note removed
- [ ] Founder photo, name, story and LinkedIn are real
- [ ] About-page principles are promises: confirm your assistant really introduces itself as AI,
      never invents answers, and hands off per your rules
- [ ] Founding-customer offer and guarantee are real, and you can honor them
- [ ] No testimonials or results unless they are real and you have permission
- [ ] Emergency section: only enable `NEXT_PUBLIC_SHOW_EMERGENCY_SECTION=1` after the
      emergency script is built **and tested end to end** with your agent

## Nice to have

- [ ] Link-preview (Open Graph) image
- [ ] Analytics. Key buttons already carry `data-track="..."` attributes
      (call-header, call-sticky, call-demo-hero, book-demo-hero, book-demo-plan-*, ...)
      so you can attach any analytics tool to count call taps and demo requests.
- [ ] Update page titles/descriptions when you add industries beyond HVAC
