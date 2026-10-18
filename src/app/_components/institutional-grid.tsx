import Link from "next/link";
import { Post } from "@/interfaces/post";
import dossier from "@/data/dossier.json";
import TimeAgo from "@/app/_components/time-ago";

type Props = {
  posts?: Post[];
};

export default function InstitutionalGrid({ posts = [] }: Props) {
  const dispatches = dossier.institutional_analyses || [];

  return (
    <div id="capital" className="border-t border-[#1E2536] pt-10 mb-14">
      <div className="flex flex-wrap items-baseline justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
            The Capital & Court Ledger
          </span>
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
            Institutional Analyses
          </h2>
        </div>
        <div className="text-xs text-[#8E95A5] font-medium">
          Curated by Wall Street and Chancery Court Legal Counsel
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dispatches.map((dispatch, idx) => (
          <article
            key={idx}
            className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-6 hover:border-[#2E374D] transition duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-[#7A8294] mb-3">
                <span className={`font-bold uppercase tracking-wider ${dispatch.categoryColor}`}>
                  {dispatch.category}
                </span>
                <TimeAgo date={dispatch.published_at_iso} format="short" className="text-[#8E95A5]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#D4AF37] transition leading-snug mb-3.5">
                {dispatch.title}
              </h3>

              {/* EXECUTIVE SUMMARY BLOCK */}
              <div className="bluf-memo bg-[#141822] border-l-2 border-[#D4AF37] p-3.5 rounded-r text-xs text-[#BAC1D2] mb-4 transition-all">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                  Executive Summary
                </span>
                {dispatch.bluf}
              </div>

              <p className="regular-body text-xs text-[#8E95A5] leading-relaxed mb-3">
                {dispatch.context}
              </p>

              {dispatch.primary_sources?.regulatory_statute || dispatch.primary_sources?.governing_statute || dispatch.primary_sources?.statute ? (
                <div className="text-[10px] text-[#7A8294] font-mono bg-[#141822]/70 px-2 py-1 rounded border border-[#1E2536] truncate">
                  Law: {dispatch.primary_sources?.regulatory_statute || dispatch.primary_sources?.governing_statute || dispatch.primary_sources?.statute}
                </div>
              ) : null}
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#1E2536] flex items-center justify-between text-xs text-[#7A8294]">
              <span className="font-medium">{dispatch.desk}</span>
              <Link
                href={`/posts/${dispatch.slug}`}
                className="text-[#D4AF37] font-bold group-hover:translate-x-0.5 transition"
              >
                Review Dossier &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}


