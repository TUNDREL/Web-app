import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PhoneDemo from "@/components/PhoneDemo";
export default function HowItWorks() {
  return (
    <main>
      <div className="page-shell">
        <SiteHeader />
        <section className="inner-hero">
          <span className="eyebrow">HOW TUNDREL WORKS</span>
          <h1>
            Your phone keeps ringing.
            <br />
            <em>Now someone always answers.</em>
          </h1>
          <p>
            We turn your existing business line into a dependable booking
            channel—without replacing your number or your people.
          </p>
        </section>
      </div>
      <section className="before-after">
        <div className="before">
          <span>TODAY, WITHOUT TUNDREL</span>
          <h2>A missed call goes cold.</h2>
          <ol>
            <li>
              <b>00:00</b>
              <p>Homeowner calls while your team is on a job.</p>
            </li>
            <li>
              <b>00:25</b>
              <p>They reach voicemail and hang up.</p>
            </li>
            <li>
              <b>00:42</b>
              <p>They call the next HVAC company on Google.</p>
            </li>
            <li>
              <b>LATER</b>
              <p>Your callback reaches someone who already booked.</p>
            </li>
          </ol>
          <div className="outcome bad">− $475 average job value</div>
        </div>
        <div className="after">
          <span>WITH TUNDREL</span>
          <h2>The same call becomes a booking.</h2>
          <ol>
            <li>
              <b>00:00</b>
              <p>Your AI receptionist answers in your company&apos;s name.</p>
            </li>
            <li>
              <b>00:18</b>
              <p>It identifies the issue, location and urgency.</p>
            </li>
            <li>
              <b>01:22</b>
              <p>It offers a real appointment or escalates the emergency.</p>
            </li>
            <li>
              <b>01:45</b>
              <p>Your team receives the booking and a clear summary.</p>
            </li>
          </ol>
          <div className="outcome good">+ Booked before the next ring</div>
        </div>
      </section>
      <section className="setup-flow page-shell">
        <div className="section-head">
          <div>
            <span className="eyebrow">LIVE IN DAYS</span>
            <h2>From kickoff to first call.</h2>
          </div>
          <p>
            No technical team required. We configure, test and improve it with
            you.
          </p>
        </div>
        {[
          [
            "01",
            "Discovery",
            "We learn how you answer, what you service, where you go and when to escalate.",
          ],
          [
            "02",
            "Build",
            "We configure the voice, knowledge, qualification questions and booking rules.",
          ],
          [
            "03",
            "Test",
            "You call it, challenge it and approve the experience before customers hear it.",
          ],
          [
            "04",
            "Launch",
            "We connect your number and monitor the first calls closely.",
          ],
          [
            "05",
            "Improve",
            "Real conversations make the assistant sharper every month.",
          ],
        ].map(([n, t, c]) => (
          <article key={n}>
            <span>{n}</span>
            <h3>{t}</h3>
            <p>{c}</p>
          </article>
        ))}
      </section>
      <PhoneDemo compact />
      <section className="final-cta">
        <span className="eyebrow">SEE IT ON YOUR OWN WORKFLOW</span>
        <h2>Bring us your hardest call.</h2>
        <p>We&apos;ll show you exactly how Tundrel would handle it.</p>
        <Link className="button button-accent" href="/book-demo">
          Book your demo <span>→</span>
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
