import AppShell from "@/components/AppShell";
import PageHeader from "@/components/PageHeader";

const projects = [
  { icon: "SR", tone: "lime", name: "Summer release", team: "Product · 8 people", progress: 72, due: "Sep 04", status: "On track" },
  { icon: "BS", tone: "violet", name: "Brand system", team: "Creative · 5 people", progress: 48, due: "Sep 18", status: "At risk" },
  { icon: "MA", tone: "blue", name: "Mobile app", team: "Engineering · 11 people", progress: 86, due: "Aug 29", status: "On track" },
];

export default function Dashboard() {
  return <AppShell><main className="app-main">
    <PageHeader eyebrow="THURSDAY, 20 AUGUST" title="Good morning, Marco." copy="Here’s what’s moving across your workspace." action="New project" />
    <section className="stat-grid">
      <article><div><small>ACTIVE PROJECTS</small><strong>08</strong></div><span className="delta positive">↗ 2 this month</span><i className="stat-symbol">◇</i></article>
      <article><div><small>OPEN TASKS</small><strong>24</strong></div><span className="delta neutral">7 due this week</span><i className="stat-symbol">✓</i></article>
      <article><div><small>TEAM VELOCITY</small><strong>84%</strong></div><span className="delta positive">↗ 12% this week</span><i className="stat-symbol">↗</i></article>
      <article className="dark-stat"><div><small>NEXT MILESTONE</small><strong>06<span>d</span></strong></div><span className="delta">Product beta · Aug 26</span><i className="stat-symbol">◷</i></article>
    </section>
    <div className="dashboard-grid">
      <section className="panel projects-panel"><div className="panel-head"><div><span className="page-eyebrow">IN PROGRESS</span><h2>Active projects</h2></div><button>View all <span>→</span></button></div>
        <div className="project-table"><div className="table-row table-labels"><span>PROJECT</span><span>PROGRESS</span><span>DUE DATE</span><span>STATUS</span><span /></div>{projects.map(p => <div className="table-row" key={p.name}><div className="project-name"><i className={`tile ${p.tone}`}>{p.icon}</i><div><b>{p.name}</b><small>{p.team}</small></div></div><div className="progress"><span><i style={{width: `${p.progress}%`}} /></span><b>{p.progress}%</b></div><span>{p.due}</span><span className={`status ${p.status === "At risk" ? "risk" : ""}`}>{p.status}</span><button>⋯</button></div>)}</div>
      </section>
      <aside className="panel focus-panel"><div className="panel-head"><div><span className="page-eyebrow">TODAY</span><h2>Your focus</h2></div><span className="count">4</span></div>
        <label><input type="checkbox" /><span><b>Review launch concepts</b><small>Summer release · 10:00</small></span></label>
        <label><input type="checkbox" /><span><b>Approve final colour system</b><small>Brand system · 12:30</small></span></label>
        <label><input type="checkbox" /><span><b>Product sync</b><small>Team meeting · 15:00</small></span></label>
        <label><input type="checkbox" /><span><b>Send weekly update</b><small>Workspace · End of day</small></span></label>
        <button className="add-task">＋ Add a task</button>
      </aside>
    </div>
    <section className="team-strip"><div><div className="avatar-stack"><span>AM</span><span>JK</span><span>SL</span><span>+9</span></div><p><b>12 teammates</b> are active today</p></div><button>View team <span>→</span></button></section>
  </main></AppShell>;
}
