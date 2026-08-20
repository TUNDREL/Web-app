import AppShell from "@/components/AppShell";
import PageHeader from "@/components/PageHeader";

const activity = [
  ["AM", "Amara", "completed", "Prototype the new dashboard", "Summer release", "12 min ago"],
  ["JK", "Jonah", "uploaded", "3 new brand concepts", "Brand system", "38 min ago"],
  ["SL", "Sofia", "commented on", "Mobile navigation exploration", "Mobile app", "1 hr ago"],
  ["MO", "You", "created", "Customer interview synthesis", "Customer experience", "2 hrs ago"],
  ["RT", "Ravi", "moved", "Analytics taxonomy", "Data foundations", "Yesterday"],
];
export default function Activity() { return <AppShell><main className="app-main narrow"><PageHeader eyebrow="WORKSPACE" title="Activity" copy="The latest movement across your team." action="Share update" />
  <div className="toolbar"><div className="filter-tabs"><button className="active">Everything</button><button>Mentions</button><button>Following</button></div><div><button>☷ Filter</button></div></div>
  <section className="activity-feed"><div className="feed-day"><span>TODAY</span><i /></div>{activity.map(([avatar,name,verb,item,project,time], i) => <article key={item}><div className={`feed-avatar a${i}`}>{avatar}</div><div><p><b>{name}</b> {verb} <strong>{item}</strong></p><span>{project} · {time}</span>{i === 2 && <div className="comment-card">The tighter navigation direction feels right. I left two small notes on the prototype.</div>}</div><button>⋯</button></article>)}</section>
  </main></AppShell> }
