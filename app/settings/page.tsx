import AppShell from "@/components/AppShell";
import PageHeader from "@/components/PageHeader";

export default function Settings() { return <AppShell><main className="app-main settings-page"><PageHeader eyebrow="WORKSPACE" title="Settings" copy="Manage your workspace preferences and identity." action="Save changes" />
  <div className="settings-layout"><nav><button className="active">General</button><button>Members</button><button>Notifications</button><button>Integrations</button><button>Billing</button></nav><section className="settings-content">
    <div className="settings-section"><div><h2>Workspace profile</h2><p>The essential details your team sees across Tundrel.</p></div><div className="logo-upload"><span className="brand-mark big">T</span><div><button>Change logo</button><small>PNG, JPG or SVG. 2MB maximum.</small></div></div><label>Workspace name<input defaultValue="Tundrel" /></label><label>Workspace URL<div className="url-input"><span>tundrel.app/</span><input defaultValue="workspace" /></div></label></div>
    <div className="settings-section"><div><h2>Preferences</h2><p>Choose defaults for dates, time and communication.</p></div><div className="two-fields"><label>Time zone<select defaultValue="lisbon"><option value="lisbon">Europe / Lisbon (GMT+1)</option></select></label><label>Week starts on<select><option>Monday</option></select></label></div><div className="toggle-row"><div><b>Weekly summary</b><span>Receive a concise workspace update every Friday.</span></div><input type="checkbox" defaultChecked /></div><div className="toggle-row"><div><b>Project celebrations</b><span>Show team celebrations when milestones are reached.</span></div><input type="checkbox" defaultChecked /></div></div>
  </section></div>
  </main></AppShell> }
