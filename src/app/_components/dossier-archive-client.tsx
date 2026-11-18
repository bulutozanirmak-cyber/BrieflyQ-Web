"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Post } from "@/interfaces/post";
import TimeAgo from "@/app/_components/time-ago";

type Props = {
  posts: Post[];
};

const CATEGORIES = [
  { id: "all", label: "All Intelligence" },
  { id: "delaware", label: "Delaware Chancery" },
  { id: "sec", label: "SEC & Capital Markets" },
  { id: "antitrust", label: "FTC & Antitrust" },
  { id: "credit", label: "Private Credit & Debt" },
];

export default function DossierArchiveClient({ posts }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Category filter
      if (selectedCategory !== "all") {
        const text = `${post.title} ${post.excerpt} ${post.slug}`.toLowerCase();
        if (selectedCategory === "delaware") {
          const match = ["delaware", "chancery", "dgcl", "mfw", "zurn", "laster", "mccormick", "chancellor", "apex"].some(k => text.includes(k));
          if (!match) return false;
        } else if (selectedCategory === "sec") {
          const match = ["sec", "securities", "broker-dealer", "10(b)", "13(d)", "crypto", "treasury", "gpu"].some(k => text.includes(k));
          if (!match) return false;
        } else if (selectedCategory === "antitrust") {
          const match = ["ftc", "doj", "antitrust", "hsr", "clayton", "monopsony", "merger", "hyperscaler"].some(k => text.includes(k));
          if (!match) return false;
        } else if (selectedCategory === "credit") {
          const match = ["credit", "debt", "ucc", "uptier", "liquidity", "syndicate", "restructuring", "recap"].some(k => text.includes(k));
          if (!match) return false;
        }
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const searchable = `${post.title} ${post.excerpt} ${post.author?.name || ""}`.toLowerCase();
        return searchable.includes(q);
      }

      return true;
    });
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div>
      {/* Category Pills & Live Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition ${
                  isActive
                    ? "bg-[#D4AF37] text-black font-bold shadow-sm"
                    : "bg-[#141822] text-[#8E95A5] hover:text-white border border-[#232A3D] hover:border-[#D4AF37]/50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search dockets, statutes, jurists..."
            className="w-full bg-[#10141D] border border-[#232A3D] focus:border-[#D4AF37] rounded-lg py-1.5 pl-8 pr-3 text-xs text-white placeholder-[#606775] outline-none transition"
          />
          <svg
            className="w-3.5 h-3.5 text-[#606775] absolute left-2.5 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              type="button"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8E95A5] hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Counter bar */}
      <div className="flex items-center justify-between text-xs text-[#7A8294] mb-4 px-1">
        <span>
          Showing <strong className="text-white">{filteredPosts.length}</strong> of {posts.length} institutional intelligence dossiers
        </span>
        {(selectedCategory !== "all" || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            type="button"
            className="text-[#D4AF37] hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Posts List */}
      <div className="bg-[#0F1218] border border-[#1E2536] rounded-lg divide-y divide-[#1E2536] overflow-hidden">
        {filteredPosts.length === 0 ? (
          <div className="p-12 text-center text-[#8E95A5]">
            <p className="text-base font-serif font-bold text-white mb-1">No matching judicial dockets found</p>
            <p className="text-xs">Try adjusting your search criteria or reset category filters.</p>
          </div>
        ) : (
          filteredPosts.map((post) => (
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
          ))
        )}
      </div>
    </div>
  );
}
