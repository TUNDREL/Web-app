"use client";

import { useMemo, useState } from "react";
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function RevenueCalculator() {
  const [calls, setCalls] = useState(18);
  const [jobValue, setJobValue] = useState(475);
  const [missedRate, setMissedRate] = useState(25);
  const loss = useMemo(() => calls * 30 * (missedRate / 100) * jobValue * 0.35, [calls, jobValue, missedRate]);
  return <section className="calculator" id="calculator"><div className="calculator-copy"><span className="eyebrow">THE COST OF SILENCE</span><h2>What are missed calls<br/><em>costing you?</em></h2><p>Most callers won&apos;t leave a voicemail—they call the next company. Use your real numbers to see the opportunity hiding in your phone log.</p><div className="formula-note"><b>How we estimate it</b><span>30 days × missed calls × 35% booking rate × average job value</span></div></div><div className="calculator-card"><label><span>Inbound calls per day</span><strong>{calls}</strong><input aria-label="Inbound calls per day" type="range" min="3" max="80" value={calls} onChange={e=>setCalls(Number(e.target.value))}/><small><i>3</i><i>80</i></small></label><label><span>Average job value</span><strong>{money.format(jobValue)}</strong><input aria-label="Average job value" type="range" min="100" max="2500" step="25" value={jobValue} onChange={e=>setJobValue(Number(e.target.value))}/><small><i>$100</i><i>$2,500</i></small></label><label><span>Calls currently missed</span><strong>{missedRate}%</strong><input aria-label="Percentage of calls missed" type="range" min="5" max="60" step="5" value={missedRate} onChange={e=>setMissedRate(Number(e.target.value))}/><small><i>5%</i><i>60%</i></small></label><div className="loss-result"><span>Potential monthly revenue at risk</span><strong>{money.format(loss)}</strong><small>That&apos;s roughly {money.format(loss * 12)} every year.</small></div><a href="/book-demo" className="button button-accent">See how much Tundrel can recover <span>→</span></a></div></section>;
}
