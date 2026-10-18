import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import TimeAgo from "@/app/_components/time-ago";

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

      <div className="bg-[#0F1218] border border-[#1E2536] rounded-lg divide-y divide-[#1E2536] overflow-hidden">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="p-5 sm:p-6 hover:bg-[#141822] transition duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-xs mb-2">
                <span className="px-2 py-0.5 rounded bg-[#D4AF37]/15 text-[#D4AF37] font-bold text-[11px] uppercase tracking-wider">
                  Dossier Record
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-[#8E95A5] font-medium">{post.author?.name}</span>
                <span className="text-slate-600">•</span>
                <TimeAgo date={post.date} format="long" className="text-[#8E95A5]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white hover:text-[#D4AF37] transition leading-snug">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-xs text-[#8E95A5] mt-1.5 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="shrink-0 flex items-center">
              <Link
                href={`/posts/${post.slug}`}
                className="px-4 py-2 rounded border border-[#2E374D] hover:border-[#D4AF37] hover:text-[#D4AF37] text-white text-xs font-bold uppercase tracking-wider transition whitespace-nowrap"
              >
                Inspect Docket &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
