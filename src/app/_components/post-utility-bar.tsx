"use client";

import { useState } from "react";

type Props = {
  title: string;
  slug: string;
  date: string;
  authorName?: string;
};

export default function PostUtilityBar({ title, slug, date, authorName }: Props) {
  const [copied, setCopied] = useState(false);
  const postUrl = `https://brieflyq.com/posts/${slug}`;

  const shareOnTwitter = () => {
    const text = encodeURIComponent(`Executive Docket: ${title} via @BrieflyQ\n\n${postUrl}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`, "_blank", "noopener,noreferrer");
  };

  const copyCitation = () => {
    const pubDate = new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const citation = `BrieflyQ Judicial Intelligence, "${title}," (published ${pubDate}), available at ${postUrl}.`;
    navigator.clipboard.writeText(citation).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="border-y border-[#1E2536] bg-[#0A0D13] py-3.5 px-4 rounded-lg my-8 flex flex-wrap items-center justify-between gap-4 text-xs select-none">
      {/* Meta indicators */}
      <div className="flex items-center gap-3 text-[#8E95A5]">
        <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] text-[#D4AF37]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
          Verified Docket
        </span>
        <span className="text-slate-700">•</span>
        <span>3 min read</span>
        <span className="text-slate-700">•</span>
        <span className="hidden sm:inline">Delaware & Federal Cross-Reference</span>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2">
        {/* Share to X */}
        <button
          onClick={shareOnTwitter}
          type="button"
          title="Share brief on X / Twitter"
          className="px-2.5 py-1.5 rounded bg-[#141822] hover:bg-[#1E2536] border border-[#232A3D] text-[#BAC1D2] hover:text-white transition flex items-center gap-1.5 font-medium"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="hidden sm:inline">Post</span>
        </button>

        {/* Share to LinkedIn */}
        <button
          onClick={shareOnLinkedIn}
          type="button"
          title="Share on LinkedIn"
          className="px-2.5 py-1.5 rounded bg-[#141822] hover:bg-[#1E2536] border border-[#232A3D] text-[#BAC1D2] hover:text-white transition flex items-center gap-1.5 font-medium"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.78-1.72 1.73s.77 1.73 1.72 1.73 1.73-.78 1.73-1.73-.78-1.73-1.73-1.73z" />
          </svg>
          <span className="hidden sm:inline">Share</span>
        </button>

        {/* Copy Legal Citation */}
        <button
          onClick={copyCitation}
          type="button"
          title="Copy Bluebook Legal Citation"
          className="px-2.5 py-1.5 rounded bg-[#141822] hover:bg-[#1E2536] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] transition flex items-center gap-1.5 font-bold"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span>{copied ? "Copied Citation!" : "Cite Record"}</span>
        </button>

        {/* Print / Export Memo */}
        <button
          onClick={handlePrint}
          type="button"
          title="Print or Export Memorandum"
          className="px-2.5 py-1.5 rounded bg-[#141822] hover:bg-[#1E2536] border border-[#232A3D] text-[#BAC1D2] hover:text-white transition flex items-center gap-1.5 font-medium"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          <span className="hidden md:inline">Print Memo</span>
        </button>
      </div>
    </div>
  );
}
