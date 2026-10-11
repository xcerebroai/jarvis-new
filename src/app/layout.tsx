import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

import { site } from "@/content/site";

import "./globals.css";
import "./visual-polish.css";

/**
 * Variable families for body, display, technical accents, and the brand.
 * Weight is a continuum rather
 * than a set of separately downloaded files, and `next/font` self-hosts each
 * one — no external request, no layout shift on load.
 */

/** Body, UI, navigation, buttons. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = localFont({
  src: "../fonts/Orbitron-Variable.ttf",
  variable: "--font-orbitron",
  weight: "400 900",
  style: "normal",
  display: "swap",
});

/** Display and headlines. */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

/** Metrics, labels, system numbers, technical accents. */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.positioning}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.positioning}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.positioning}`,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
