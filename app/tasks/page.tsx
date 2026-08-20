import AppShell from "@/components/AppShell";
import PageHeader from "@/components/PageHeader";

const groups = [
  { title: "TODAY", count: 4, tasks: [["Review launch concepts", "Summer release", "High", "AM", "Today"], ["Approve final colour system", "Brand system", "Medium", "JK", "Today"], ["Product sync", "Mobile app", "Low", "SL", "3:00 PM"], ["Send weekly update", "Workspace", "Medium", "MO", "5:00 PM"]] },
  { title: "UPCOMING", count: 3, tasks: [["Finalize onboarding flow", "Mobile app", "High", "AM", "Tomorrow"], ["Write launch announcement", "Summer release", "Medium", "JK", "Aug 24"], ["Prepare usability session", "Customer experience", "Low", "SL", "Aug 25"]] },
];

export default function Tasks() { return <AppShell><main className="app-main"><PageHeader eyebrow="MY WORK" title="Tasks" copy="A clear view of what needs your attention." action="New task" />
  <div className="toolbar"><div className="filter-tabs"><button className="active">My tasks <span>7</span></button><button>Assigned by me <span>14</span></button><button>All tasks <span>42</span></button></div><div><button>☷ Filter</button></div></div>
  <section className="task-board">{groups.map(group => <div className="task-group" key={group.title}><div className="task-group-head"><h3>{group.title} <span>{group.count}</span></h3><button>−</button></div>{group.tasks.map(([task,project,priority,avatar,due]) => <article key={task}><button className="check" /><div className="task-title"><b>{task}</b><span>{project}</span></div><span className={`priority ${priority.toLowerCase()}`}>{priority}</span><span className="task-avatar">{avatar}</span><span className="due">{due}</span><button>⋯</button></article>)}</div>)}</section>
  </main></AppShell> }
