import HeroMemo from "@/app/_components/hero-memo";
import RegulatoryRadar from "@/app/_components/regulatory-radar";
import InstitutionalGrid from "@/app/_components/institutional-grid";
import Newsletter from "@/app/_components/newsletter";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* 2-Column Institutional Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
        <HeroMemo slug={allPosts[0]?.slug} />
        <RegulatoryRadar />
      </div>

      {/* 3-Tier Institutional Analyses Grid */}
      <InstitutionalGrid posts={allPosts.slice(1)} />

      {/* Newsletter Syndicate */}
      <Newsletter />
    </main>
  );
}
