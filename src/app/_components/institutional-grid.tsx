import Link from "next/link";
import { Post } from "@/interfaces/post";
import dossier from "@/data/dossier.json";
import TimeAgo from "@/app/_components/time-ago";

type Props = {
  posts?: Post[];
};

export default function InstitutionalGrid({ posts = [] }: Props) {
  const dispatches = dossier.institutional_analyses || [];

  const getCategoryBadgeClass = (categoryColor: string) => {
    if (categoryColor.includes("38BDF8")) {
      return "border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8]";
    }
    if (categoryColor.includes("10B981")) {
      return "border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981]";
    }
    if (categoryColor.includes("E11D48") || categoryColor.includes("EF4444")) {
      return "border-[#EF4444]/30 bg-[#EF4444]/10 text-[#F87171]";
    }
    if (categoryColor.includes("818CF8")) {
      return "border-[#818CF8]/30 bg-[#818CF8]/10 text-[#A5B4FC]";
    }
    return "border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#E5C158]";
  };

  return (
    <div id="capital" className="border-t border-[#1E2536] pt-10 sm:pt-12 mb-16">
      
      {/* Editorial Section Header */}
      <div className="flex flex-wrap items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
              The Capital &amp; Court Ledger // Specialized Dossiers
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-white tracking-tight">
            Institutional Analyses &amp; Advisory
          </h2>
        </div>
        <div className="text-xs text-[#8E95A5] font-medium flex items-center gap-2">
          <span>Curated by Wilmington &amp; Wall Street Counsel</span>
        </div>
      </div>

      {/* 3-Column Dossier Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {dispatches.map((dispatch, idx) => (
          <article
            key={idx}
            className="bg-gradient-to-b from-[#131722] via-[#0E121A] to-[#0A0D14] border border-[#202738] hover:border-[#D4AF37]/50 rounded-xl p-6 sm:p-7 hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top ambient hover accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Category & Timestamp */}
              <div className="flex items-center justify-between text-xs mb-3.5">
                <span className={`px-2.5 py-1 rounded text-[10.5px] font-extrabold uppercase tracking-wider border ${getCategoryBadgeClass(dispatch.categoryColor)}`}>
                  {dispatch.category}
                </span>
                <TimeAgo date={dispatch.published_at_iso} format="short" className="text-[#8E95A5] font-mono text-[11px]" />
              </div>

              {/* Headline */}
              <h3 className="font-serif font-bold text-xl sm:text-[21px] text-white group-hover:text-[#D4AF37] transition-colors leading-snug mb-4">
                <Link href={`/posts/${dispatch.slug}`}>
                  {dispatch.title}
                </Link>
              </h3>

              {/* EXECUTIVE SUMMARY BLUF CARD */}
              <div className="bluf-memo bg-[#0C1018] border-l-2 border-l-[#D4AF37] border-y border-r border-[#1E2536] p-4 rounded-r-lg text-xs text-[#BAC1D2] mb-4.5 transition-all shadow-sm">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
                  Executive Summary // BLUF
                </span>
                <p className="font-serif italic text-[#FAF7F2] text-[13px] leading-relaxed">
                  “{dispatch.bluf}”
                </p>
              </div>

              {/* Context Text */}
              <p className="regular-body text-xs text-[#8E95A5] leading-relaxed mb-4">
                {dispatch.context}
              </p>

              {/* Statutory Citation Tag */}
              {dispatch.primary_sources?.regulatory_statute || dispatch.primary_sources?.governing_statute || dispatch.primary_sources?.statute ? (
                <div className="text-[10.5px] text-[#A0A7B8] font-mono bg-[#080B10] px-3 py-1.5 rounded-md border border-[#1E2536] flex items-center gap-1.5 truncate mb-2">
                  <span className="text-[#D4AF37] font-semibold shrink-0">Law:</span>
                  <span className="truncate">
                    {dispatch.primary_sources?.regulatory_statute || dispatch.primary_sources?.governing_statute || dispatch.primary_sources?.statute}
                  </span>
                </div>
              ) : null}
            </div>

            {/* Card Footer Byline & Action */}
            <div className="mt-6 pt-4 border-t border-[#1E2536] flex items-center justify-between text-xs text-[#7A8294]">
              <span className="font-semibold text-[#8E95A5] text-[11px] uppercase tracking-wider">{dispatch.desk}</span>
              <Link
                href={`/posts/${dispatch.slug}`}
                className="text-[#D4AF37] hover:text-[#E5C158] font-bold text-xs inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Review Dossier</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
