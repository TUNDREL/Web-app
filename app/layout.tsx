import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tundrel — Every HVAC Call Answered",
  description: "A 24/7 AI receptionist that answers, qualifies and books HVAC calls.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
