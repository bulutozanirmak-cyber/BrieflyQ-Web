import { getAllPosts } from "@/lib/api";
import DossierArchiveClient from "@/app/_components/dossier-archive-client";

export default function DossierArchive() {
  const posts = getAllPosts();

  return (
    <section id="dossiers" className="border-t border-[#1E2536] pt-10 mb-14">
      <div className="flex flex-wrap items-baseline justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
            Institutional Repository
          </span>
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
            Executive Dossiers & Docket Repository
          </h2>
        </div>
        <div className="text-xs text-[#8E95A5] font-medium">
          Comprehensive Index of Delaware Chancery & Federal Regulatory Filings
        </div>
      </div>

      <DossierArchiveClient posts={posts} />
    </section>
  );
}
