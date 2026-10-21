"use client";

import { useMemo, useState } from "react";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const num = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });

// Deliberately modest starting points. Owners should replace them with their own numbers.
const DEFAULTS = { calls: 10, jobValue: 350, missedRate: 20, winBack: 30 };

export default function RevenueCalculator() {
  const [calls, setCalls] = useState(DEFAULTS.calls);
  const [jobValue, setJobValue] = useState(DEFAULTS.jobValue);
  const [missedRate, setMissedRate] = useState(DEFAULTS.missedRate);
  const [winBack, setWinBack] = useState(DEFAULTS.winBack);

  const { missed, jobs, loss } = useMemo(() => {
    const missedCalls = calls * 30 * (missedRate / 100);
    const recovered = missedCalls * (winBack / 100);
    return { missed: missedCalls, jobs: recovered, loss: recovered * jobValue };
  }, [calls, jobValue, missedRate, winBack]);

  return (
    <section className="calculator" id="calculator">
      <div className="calculator-copy">
        <span className="eyebrow">THE COST OF SILENCE</span>
        <h2>
          What are missed calls
          <br />
          <em>costing you?</em>
        </h2>
        <p>
          Many callers won&apos;t leave a voicemail—they call the next company.
          Enter your own numbers to see what&apos;s at stake in your phone log.
        </p>
        <div className="formula-note">
          <b>The math, with your numbers</b>
          <span>
            {calls} calls/day × 30 days × {missedRate}% missed ={" "}
            {num.format(missed)} missed calls a month
          </span>
          <span>
            × {winBack}% you&apos;d win back = {num.format(jobs)} jobs × {money.format(jobValue)} ={" "}
            {money.format(loss)}
          </span>
        </div>
        <p className="fine">
          An illustrative estimate from the numbers you enter, not a guarantee of
          results.
        </p>
      </div>
      <div className="calculator-card">
        <label>
          <span>Inbound calls per day</span>
          <strong>{calls}</strong>
          <input
            aria-label="Inbound calls per day"
            type="range"
            min="3"
            max="80"
            value={calls}
            onChange={(e) => setCalls(Number(e.target.value))}
          />
          <small>
            <i>3</i>
            <i>80</i>
          </small>
        </label>
        <label>
          <span>Average job value</span>
          <strong>{money.format(jobValue)}</strong>
          <input
            aria-label="Average job value"
            type="range"
            min="100"
            max="2500"
            step="25"
            value={jobValue}
            onChange={(e) => setJobValue(Number(e.target.value))}
          />
          <small>
            <i>$100</i>
            <i>$2,500</i>
          </small>
        </label>
        <label>
          <span>Calls currently missed</span>
          <strong>{missedRate}%</strong>
          <input
            aria-label="Percentage of calls missed"
            type="range"
            min="5"
            max="60"
            step="5"
            value={missedRate}
            onChange={(e) => setMissedRate(Number(e.target.value))}
          />
          <small>
            <i>5%</i>
            <i>60%</i>
          </small>
        </label>
        <label>
          <span>Missed calls you&apos;d win back</span>
          <strong>{winBack}%</strong>
          <input
            aria-label="Percentage of missed calls you would win back"
            type="range"
            min="10"
            max="60"
            step="5"
            value={winBack}
            onChange={(e) => setWinBack(Number(e.target.value))}
          />
          <small>
            <i>10%</i>
            <i>60%</i>
          </small>
        </label>
        <div className="loss-result">
          <span>Potential monthly revenue you could recover</span>
          <strong>{money.format(loss)}</strong>
          <small>That&apos;s roughly {money.format(loss * 12)} over a year.</small>
        </div>
        <a href="/book-demo" className="button button-accent" data-track="book-demo-calculator">
          See how Tundrel can help <span>→</span>
        </a>
      </div>
    </section>
  );
}
