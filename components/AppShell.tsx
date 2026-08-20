"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  ["/dashboard", "⌂", "Overview"],
  ["/projects", "◇", "Projects"],
  ["/tasks", "✓", "Tasks"],
  ["/activity", "↗", "Activity"],
  ["/team", "◎", "Team"],
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <Link href="/" className="brand"><span className="brand-mark">T</span>TUNDREL</Link>
        <nav>{nav.map(([href, icon, label]) => <Link key={href} href={href} className={pathname === href ? "active" : ""}><span>{icon}</span>{label}</Link>)}</nav>
        <div className="sidebar-bottom">
          <Link href="/settings"><span>⚙</span>Settings</Link>
          <div className="user-card"><div className="avatar">MO</div><div><b>Marco Ongan</b><span>Workspace admin</span></div><button>⋯</button></div>
        </div>
      </aside>
      <section className="app-body">
        <header className="app-header"><button className="mobile-menu">☰</button><div className="breadcrumbs">Tundrel <span>/</span> Workspace</div><div className="header-actions"><button className="search">⌕ <span>Search anything</span><kbd>⌘ K</kbd></button><button className="notification">♢<i /></button></div></header>
        {children}
      </section>
    </div>
  );
}
