import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tundrel.com"),
  title: {
    default: "Tundrel — Every HVAC Call Answered",
    template: "%s | Tundrel",
  },
  description: "A 24/7 AI receptionist that answers, qualifies, and books HVAC calls.",
  openGraph: {
    siteName: "Tundrel",
    title: "Tundrel — Every HVAC Call Answered",
    description: "A 24/7 AI receptionist that answers, qualifies, and books HVAC calls.",
    url: "https://tundrel.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tundrel",
    alternateName: ["Tundrel AI", "Tundrel Call Agent"],
    url: "https://tundrel.com",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}