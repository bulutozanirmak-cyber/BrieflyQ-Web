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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* 2-Column Institutional Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
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
  );
}

