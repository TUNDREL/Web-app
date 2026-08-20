export default function PageHeader({ eyebrow, title, copy, action = "New item" }: { eyebrow: string; title: string; copy?: string; action?: string }) {
  return <div className="page-header"><div><span className="page-eyebrow">{eyebrow}</span><h1>{title}</h1>{copy && <p>{copy}</p>}</div><button className="button button-accent"><span>＋</span>{action}</button></div>;
}
