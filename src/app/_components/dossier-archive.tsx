import { getAllPosts } from "@/lib/api";
import DossierArchiveClient from "@/app/_components/dossier-archive-client";

export default function DossierArchive() {
  const posts = getAllPosts();

  return (
    <section id="dossiers" className="border-t border-[#1E2536] pt-10 sm:pt-12 mb-16">
      <div className="flex flex-wrap items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
              Institutional Repository // Primary Archive
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-white tracking-tight">
            Executive Dossiers &amp; Docket Archive
          </h2>
        </div>
        <div className="text-xs text-[#8E95A5] font-medium">
          Comprehensive Index of Delaware Chancery &amp; Federal Regulatory Filings
        </div>
      </div>

      <DossierArchiveClient posts={posts} />
    </section>
  );
}
