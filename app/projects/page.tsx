import AppShell from "@/components/AppShell";
import PageHeader from "@/components/PageHeader";

const items = [
  ["SR", "lime", "Summer release", "A focused release for our next generation workspace.", "72%", "On track", "Aug 26"],
  ["MA", "blue", "Mobile app", "Bring the Tundrel experience to iOS and Android.", "86%", "On track", "Aug 29"],
  ["BS", "violet", "Brand system", "A flexible visual language for every touchpoint.", "48%", "At risk", "Sep 18"],
  ["CX", "orange", "Customer experience", "Rethink onboarding, support and activation.", "31%", "On track", "Oct 02"],
  ["DA", "pink", "Data foundations", "A trustworthy source for product decision-making.", "62%", "On track", "Sep 12"],
  ["WB", "gray", "Website refresh", "Tell the Tundrel story with clarity and confidence.", "15%", "Planning", "Oct 21"],
];

export default function Projects() { return <AppShell><main className="app-main"><PageHeader eyebrow="WORKSPACE" title="Projects" copy="Follow every initiative from first idea to final delivery." action="New project" />
  <div className="toolbar"><div className="filter-tabs"><button className="active">All <span>8</span></button><button>Active <span>6</span></button><button>Planning <span>2</span></button><button>Completed <span>12</span></button></div><div><button>⇅ Sort</button><button>☷ Filter</button></div></div>
  <section className="project-cards">{items.map(([icon,tone,name,copy,progress,status,date]) => <article key={name}><div className="card-top"><i className={`tile large ${tone}`}>{icon}</i><button>⋯</button></div><h2>{name}</h2><p>{copy}</p><div className="card-meta"><span>{status}</span><span>Due {date}</span></div><div className="card-progress"><span><i style={{width:progress}} /></span><b>{progress}</b></div><div className="card-foot"><div className="mini-avatars"><span>A</span><span>M</span><span>J</span></div><span>24 tasks</span><button>Open <span>↗</span></button></div></article>)}</section>
  </main></AppShell> }
