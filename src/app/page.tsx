import HeroMemo from "@/app/_components/hero-memo";
import RegulatoryRadar from "@/app/_components/regulatory-radar";
import ArbitrageMatrix from "@/app/_components/arbitrage-matrix";
import InstitutionalGrid from "@/app/_components/institutional-grid";
import SovereignWealth from "@/app/_components/sovereign-wealth";
import DossierArchive from "@/app/_components/dossier-archive";
import Newsletter from "@/app/_components/newsletter";
import AdSlot from "@/app/_components/ad-slot";
import { getAllPosts } from "@/lib/api";
import { SITE_URL } from "@/lib/constants";

export default function Index() {
  const allPosts = getAllPosts();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does BrieflyQ cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BrieflyQ provides private institutional intelligence covering the Delaware Court of Chancery, Wall Street M&A litigation, SEC Corporation Finance enforcement, FTC/DOJ antitrust actions, and private credit restructurings.",
        },
      },
      {
        "@type": "Question",
        name: "How often is BrieflyQ intelligence updated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BrieflyQ updates every business morning at 6:30 AM EST with newly filed judicial memorandum opinions, regulatory enforcement releases, and unsealed dockets.",
        },
      },
      {
        "@type": "Question",
        name: "Who are the primary readers of BrieflyQ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BrieflyQ is engineered for General Counsel, corporate board members, private equity transaction partners, merger arbitrageurs, and institutional asset managers.",
        },
      },
    ],
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Atmospheric Obsidian Radial Mesh Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 obsidian-ambient-mesh" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-gradient-to-b from-[#D4AF37]/[0.05] via-[#10B981]/[0.02] to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[800px] right-0 w-[600px] h-[600px] bg-radial from-[#38BDF8]/[0.025] to-transparent blur-3xl pointer-events-none -z-10" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Editorial Desk Telemetry Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-[#1E2536]/80 text-xs text-[#8E95A5]">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] font-bold text-[10px] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
              Wilmington &amp; NY Desk Active
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="font-mono text-[#BAC1D2] text-[11px] hidden sm:inline">
              DELAWARE CHANCERY • S.D.N.Y. • D.C. CIRCUIT • SEC CORP FIN
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium text-[#7A8294]">
            <span className="hidden md:inline">Daily Verified Judicial Briefing</span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="text-[#D4AF37] font-semibold tracking-wide">Primary Docket Recap</span>
          </div>
        </div>

        {/* 2-Column Institutional Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-14">
          <HeroMemo post={allPosts[0]} slug={allPosts[0]?.slug} />
          <RegulatoryRadar />
        </div>

        {/* Institutional Underwriting / Placement Slot */}
        <AdSlot slotType="leaderboard" className="mb-14" />

        {/* Live Delaware Chancery M&A Arbitrage Spread Risk Matrix */}
        <ArbitrageMatrix />

        {/* 3-Tier Institutional Analyses Grid */}
        <InstitutionalGrid posts={allPosts.slice(1)} />

        {/* Sovereign Wealth & Cross-Border Governance Monitor */}
        <SovereignWealth />

        {/* Complete Executive Dossiers Index with Instant Search & Category Filter */}
        <DossierArchive />

        {/* Newsletter Syndicate */}
        <Newsletter />
      </main>
    </div>
  );
}
