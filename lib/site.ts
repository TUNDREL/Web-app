const rawPhone = process.env.NEXT_PUBLIC_DEMO_PHONE?.trim();
export const phoneConfigured = Boolean(rawPhone);
export const demoPhone = rawPhone || "(555) 014-8842";
export const demoPhoneHref = `tel:${demoPhone.replace(/[^+\d]/g, "")}`;
export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "";
export const bookingConfigured = Boolean(bookingUrl);
