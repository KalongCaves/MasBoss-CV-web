import type { Metadata, Viewport } from "next";
import "./tierra.css";

export const metadata: Metadata = {
  title: "Tierra Mesa | Seasonal Mexican Kitchen in Chicago",
  description: "A seasonal Mexican kitchen in Chicago’s Wicker Park. Good food, good company, and a little more time around the table.",
  applicationName: "Tierra Mesa",
  keywords: ["seasonal Mexican kitchen", "Chicago restaurant", "Wicker Park dining", "tasting menu"],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Tierra Mesa | Seasonal Mexican Kitchen in Chicago",
    description: "Season-led cooking, made for sharing in Chicago’s Wicker Park.",
    siteName: "Tierra Mesa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tierra Mesa | Seasonal Mexican Kitchen in Chicago",
    description: "Season-led cooking, made for sharing in Chicago’s Wicker Park.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f0e7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
