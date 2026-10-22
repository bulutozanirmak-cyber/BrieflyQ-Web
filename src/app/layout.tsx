import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import Ticker from "@/app/_components/ticker";
import SubBar from "@/app/_components/sub-bar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_NAME, SITE_URL, HOME_OG_IMAGE_URL, SITE_TAGLINE } from "@/lib/constants";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  weight: ["700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Private institutional intelligence on the Delaware Court of Chancery, Wall Street M&A, and Federal Regulatory Agencies.",
  keywords: [
    "BrieflyQ",
    "Delaware Chancery Court",
    "Wall Street",
    "M&A",
    "Private Credit",
    "Antitrust Law",
    "SEC Filings",
    "Institutional Intelligence",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "Private institutional intelligence on the Delaware Court of Chancery, Wall Street M&A, and Federal Regulatory Agencies.",
    images: [
      {
        url: HOME_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: "Private institutional intelligence on US Law & Capital.",
    images: [HOME_OG_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={`${sans.variable} ${newsreader.variable} ${bodoni.variable} font-sans bg-[#080A0E] text-[#F2F4F8] min-h-screen selection:bg-[#D4AF37] selection:text-black antialiased transition-colors duration-300`}
      >
        <Ticker />
        <Header />
        <SubBar />
        <div id="contentArea" className="min-h-screen">
          {children}
        </div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
