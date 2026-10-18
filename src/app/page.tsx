import HeroMemo from "@/app/_components/hero-memo";
import RegulatoryRadar from "@/app/_components/regulatory-radar";
import ArbitrageMatrix from "@/app/_components/arbitrage-matrix";
import InstitutionalGrid from "@/app/_components/institutional-grid";
import SovereignWealth from "@/app/_components/sovereign-wealth";
import DossierArchive from "@/app/_components/dossier-archive";
import Newsletter from "@/app/_components/newsletter";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* 2-Column Institutional Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
        <HeroMemo post={allPosts[0]} slug={allPosts[0]?.slug} />
        <RegulatoryRadar />
      </div>

      {/* Live Delaware Chancery M&A Arbitrage Spread Risk Matrix */}
      <ArbitrageMatrix />

      {/* 3-Tier Institutional Analyses Grid */}
      <InstitutionalGrid posts={allPosts.slice(1)} />

      {/* Sovereign Wealth & Cross-Border Governance Monitor */}
      <SovereignWealth />

      {/* Complete Executive Dossiers Index */}
      <DossierArchive />

      {/* Newsletter Syndicate */}
      <Newsletter />
    </main>
  );
}

