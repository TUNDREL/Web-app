import type { ReactNode } from "react";
import { isTodo } from "@/lib/content";

/** Renders text, highlighting any [bracketed placeholder] so unfinished content is obvious. */
export function Fill({ children }: { children: string }): ReactNode {
  const parts = children.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\[[^\]]+\]$/.test(part) ? (
          <span className="todo" key={i}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** An email link, or a highlighted placeholder if the address isn't filled in yet. */
export function Mail({ email }: { email: string }) {
  if (isTodo(email)) return <Fill>{email}</Fill>;
  return <a href={`mailto:${email}`}>{email}</a>;
}

/** An external link, or a highlighted placeholder if the URL isn't filled in yet. */
export function ExternalLink({ href, children }: { href: string; children: string }) {
  if (isTodo(href)) return <Fill>{href}</Fill>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
