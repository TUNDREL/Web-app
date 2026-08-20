import Link from "next/link";

const features = [
  { n: "01", title: "Everything in view", text: "See projects, priorities and progress without stitching together five different tools." },
  { n: "02", title: "Built for momentum", text: "A calm, opinionated workspace that keeps your team moving from idea to delivery." },
  { n: "03", title: "Clear by default", text: "Make ownership, decisions and the next best action obvious to everyone." },
];

export default function LandingPage() {
  return (
    <main className="landing">
      <nav className="public-nav shell">
        <Link href="/" className="brand"><span className="brand-mark">T</span>TUNDREL</Link>
        <div className="nav-links"><a href="#product">Product</a><a href="#principles">Principles</a><a href="#contact">Contact</a></div>
        <Link href="/dashboard" className="button button-dark">Open workspace <span>↗</span></Link>
      </nav>

      <section className="hero shell">
        <div className="eyebrow"><span className="pulse" /> A new way to work together</div>
        <h1>Build what matters.<br /><em>Without the noise.</em></h1>
        <p className="hero-copy">Tundrel brings your team&apos;s work, thinking and momentum into one beautifully focused workspace.</p>
        <div className="hero-actions">
          <Link href="/dashboard" className="button button-accent">Explore the workspace <span>→</span></Link>
          <a href="#product" className="text-link">See how it works <span>↓</span></a>
        </div>
        <div className="hero-board" id="product">
          <div className="board-top"><span className="brand-mark small">T</span><span>Product launch</span><span className="board-status">On track</span></div>
          <div className="board-grid">
            <div className="mock-sidebar"><b>Overview</b><span>Projects</span><span>Tasks</span><span>Calendar</span><i /></div>
            <div className="mock-main">
              <div className="mock-heading"><div><small>GOOD MORNING, MARCO</small><h3>Here&apos;s what&apos;s moving.</h3></div><button>+ New project</button></div>
              <div className="mock-stats"><article><small>ACTIVE PROJECTS</small><strong>08</strong><span>↗ 2 this month</span></article><article><small>TEAM VELOCITY</small><strong>84%</strong><span>↗ 12% this week</span></article><article className="accent-card"><small>NEXT MILESTONE</small><strong>06d</strong><span>Product beta</span></article></div>
              <div className="mock-project"><div><span className="project-icon">S</span><div><b>Summer release</b><small>Design & engineering</small></div></div><span>72%</span><i><b /></i></div>
              <div className="mock-project"><div><span className="project-icon purple">B</span><div><b>Brand system</b><small>Creative</small></div></div><span>48%</span><i><b className="half" /></i></div>
            </div>
          </div>
        </div>
      </section>

      <section className="principles shell" id="principles">
        <div><span className="section-label">THE TUNDREL WAY</span><h2>Less managing.<br />More making.</h2></div>
        <div className="feature-list">{features.map((f) => <article key={f.n}><span>{f.n}</span><div><h3>{f.title}</h3><p>{f.text}</p></div></article>)}</div>
      </section>

      <footer id="contact" className="shell"><div className="brand"><span className="brand-mark">T</span>TUNDREL</div><p>Built for teams with somewhere to go.</p><span>© 2026 Tundrel</span></footer>
    </main>
  );
}
