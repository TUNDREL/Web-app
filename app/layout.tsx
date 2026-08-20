import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tundrel — Workspace",
  description: "A focused workspace for ambitious teams.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
