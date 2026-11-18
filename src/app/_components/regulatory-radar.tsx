import dossier from "@/data/dossier.json";
import TimeAgo from "@/app/_components/time-ago";

export default function RegulatoryRadar() {
  const radarItems = dossier.regulatory_radar || [];
  const dockets = dossier.active_dockets || [];

  const getSourceBadge = (source: string) => {
    if (source.includes("SEC")) {
      return "border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#E5C158]";
    }
    if (source.includes("Reserve") || source.includes("Fed")) {
      return "border-[#38BDF8]/40 bg-[#38BDF8]/10 text-[#38BDF8]";
    }
    if (source.includes("DOJ") || source.includes("FTC")) {
      return "border-[#EF4444]/40 bg-[#EF4444]/10 text-[#F87171]";
    }
    return "border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]";
  };

  const getDocketBadgeStyle = (color: string) => {
    switch (color) {
      case "emerald":
        return {
          pill: "bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30",
          dot: "bg-[#10B981]",
        };
      case "sky":
        return {
          pill: "bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30",
          dot: "bg-[#38BDF8]",
        };
      case "gold":
      default:
        return {
          pill: "bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30",
          dot: "bg-[#D4AF37]",
        };
    }
  };

  return (
    <aside className="lg:col-span-4 space-y-7">
      
      {/* REGULATORY RADAR FEED */}
      <div id="regulatory" className="bg-gradient-to-b from-[#131722] via-[#0E121A] to-[#0A0D14] border border-[#232B3E] hover:border-[#2E374D] rounded-xl p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all relative overflow-hidden">
        {/* Subtle radial ambient glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-radial from-[#D4AF37]/[0.04] to-transparent blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between mb-5 border-b border-[#202738] pb-3.5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
            </span>
            <h2 className="font-serif font-bold text-white text-xl tracking-tight">Regulatory Radar</h2>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono font-bold px-2 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            Priority Feed
          </span>
        </div>

        <div className="space-y-5">
          {radarItems.map((item, idx) => (
            <div key={idx}>
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider border ${getSourceBadge(item.source)}`}>
                    {item.source}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#8E95A5] font-mono">
                    <TimeAgo date={item.timestamp_iso} format="short" className="text-[#8E95A5]" />
                  </div>
                </div>
                
                <h3 className="font-serif text-[15px] font-bold text-[#F2F4F8] group-hover:text-[#D4AF37] transition-colors leading-snug mb-1.5">
                  {item.headline}
                </h3>
                
                <p className="text-xs text-[#8E95A5] leading-relaxed line-clamp-2">
                  {item.summary}
                </p>

                {item.citation && (
                  <div className="mt-2.5 text-[10.5px] text-[#9EA6B8] font-mono bg-[#090C12] px-2.5 py-1.5 rounded border border-[#1E2536] flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-[#D4AF37] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span className="truncate">{item.citation}</span>
                  </div>
                )}
              </div>
              {idx < radarItems.length - 1 && <hr className="border-[#1E2536] mt-4.5" />}
            </div>
          ))}
        </div>
      </div>

      {/* ACTIVE DOCKET WATCH */}
      <div id="dockets" className="bg-gradient-to-b from-[#131722] via-[#0E121A] to-[#0A0D14] border border-[#232B3E] hover:border-[#2E374D] rounded-xl p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all">
        <div className="flex items-center justify-between mb-4 border-b border-[#202738] pb-3">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            <h2 className="font-serif font-bold text-white text-lg tracking-tight">Active Docket Watch</h2>
          </div>
          <span className="text-[10px] text-[#BAC1D2] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#141822] border border-[#1E2536]">
            3 High-Beta
          </span>
        </div>

        <div className="space-y-3 text-xs">
          {dockets.map((docket, idx) => {
            const badgeStyle = getDocketBadgeStyle(docket.color);
            return (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-[#0C1018] hover:bg-[#121622] border border-[#202738] hover:border-[#D4AF37]/40 flex items-center justify-between gap-3 transition-all duration-200 group"
              >
                <div className="min-w-0">
                  <div className="font-bold text-white text-[13px] group-hover:text-[#D4AF37] transition-colors truncate">
                    {docket.case}
                  </div>
                  <div className="text-[#8E95A5] text-[11px] mt-0.5 flex items-center gap-1.5 truncate">
                    <span>{docket.court}</span>
                    {docket.docket && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="font-mono text-[#7A8294] text-[10px]">{docket.docket}</span>
                      </>
                    )}
                  </div>
                </div>
                
                <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold shrink-0 flex items-center gap-1.5 ${badgeStyle.pill}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${badgeStyle.dot}`}></span>
                  <span>{docket.status}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </aside>
  );
}
