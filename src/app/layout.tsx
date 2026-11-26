import type { Metadata, Viewport } from "next";
import "./tierra.css";

export const metadata: Metadata = {
  title: "Masakan MasBoss | Masakan Khas Jawa",
  description: "Masakan khas Jawa yang lezat dan menggugah selera.",
  applicationName: "Masakan MasBoss",
  keywords: ["Masakan Khas Jawa", "Tempat Makan Bandung", "Bandung Timur", "Kuliner Jawa Tengah"],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Masakan MasBoss | Masakan Khas Jawa",
    description: "Masakan khas Jawa yang lezat dan menggugah selera.",
    siteName: "Masakan MasBoss",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masakan MasBoss | Masakan Khas Jawa",
    description: "Masakan khas Jawa yang lezat dan menggugah selera.",  
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
