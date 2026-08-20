import AppShell from "@/components/AppShell";
import PageHeader from "@/components/PageHeader";

const team = [["AM","Amara Mensah","Product design","Lisbon","3 projects"],["JK","Jonah Kim","Brand director","London","2 projects"],["SL","Sofia Laurent","Product lead","Paris","4 projects"],["RT","Ravi Thakkar","Engineering lead","New York","3 projects"],["NO","Nia Okafor","UX researcher","Berlin","2 projects"],["EC","Eli Chen","Product engineer","Toronto","3 projects"]];
export default function Team() { return <AppShell><main className="app-main"><PageHeader eyebrow="WORKSPACE" title="Team" copy="The people bringing Tundrel’s work to life." action="Invite teammate" />
  <div className="team-overview"><article><span>TEAM MEMBERS</span><b>12</b><small>Across 6 disciplines</small></article><article><span>CAPACITY THIS WEEK</span><b>78%</b><small>Healthy workload</small></article><article><span>TIME ZONES</span><b>05</b><small>Always moving</small></article></div>
  <div className="toolbar"><div className="filter-tabs"><button className="active">Everyone <span>12</span></button><button>Design <span>4</span></button><button>Engineering <span>5</span></button><button>Operations <span>3</span></button></div><div><button>⌕ Search people</button></div></div>
  <section className="team-grid">{team.map(([avatar,name,role,place,projects],i)=><article key={name}><div className={`person-avatar p${i}`}>{avatar}</div><h3>{name}</h3><p>{role}</p><span>{place}</span><div><b>{projects}</b><i>Available</i></div><button>View profile <span>→</span></button></article>)}</section>
  </main></AppShell> }
