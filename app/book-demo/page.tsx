import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  bookingConfigured,
  bookingUrl,
  demoPhone,
  demoPhoneHref,
} from "@/lib/site";
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
              Pick a time that works. We&apos;ll look at your current call flow,
              show you the live assistant and map out a practical pilot—no hard
              sell.
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
                  <b>A clear pilot recommendation</b>
                  <small>Scope, timeline and cost based on your volume.</small>
                </div>
              </li>
            </ul>
            <div className="call-instead">
              <span>Want to hear the AI first?</span>
              <a href={demoPhoneHref}>Call {demoPhone} →</a>
            </div>
          </div>
          <div className="calendar-card">
            {bookingConfigured ? (
              <iframe title="Book a Tundrel demo" src={bookingUrl} />
            ) : (
              <div className="calendar-placeholder">
                <span className="brand-mark big">T</span>
                <h2>Connect your booking calendar</h2>
                <p>
                  Set <code>NEXT_PUBLIC_BOOKING_URL</code> to your Calendly,
                  Cal.com or other embeddable scheduling URL.
                </p>
                <div className="fake-calendar">
                  <b>August 2026</b>
                  <div>
                    {[
                      "M",
                      "T",
                      "W",
                      "T",
                      "F",
                      "S",
                      "S",
                      "17",
                      "18",
                      "19",
                      "20",
                      "21",
                      "22",
                      "23",
                      "24",
                      "25",
                      "26",
                      "27",
                      "28",
                      "29",
                      "30",
                    ].map((x, i) => (
                      <span className={x === "21" ? "chosen" : ""} key={i}>
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
