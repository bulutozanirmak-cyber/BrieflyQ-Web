import dossier from "@/data/dossier.json";
import TimeAgo from "@/app/_components/time-ago";

export default function RegulatoryRadar() {
  const radarItems = dossier.regulatory_radar || [];
  const dockets = dossier.active_dockets || [];

  const getSourceColor = (source: string) => {
    if (source.includes("SEC")) return "text-[#D4AF37]";
    if (source.includes("Reserve") || source.includes("Fed")) return "text-[#38BDF8]";
    if (source.includes("DOJ") || source.includes("FTC")) return "text-[#F87171]";
    return "text-[#D4AF37]";
  };

  const getDocketBadgeStyle = (color: string) => {
    switch (color) {
      case "emerald":
        return "bg-[#10B981]/15 text-[#10B981]";
      case "sky":
        return "bg-[#38BDF8]/15 text-[#38BDF8]";
      case "gold":
      default:
        return "bg-[#D4AF37]/15 text-[#D4AF37]";
    }
  };

  return (
    <aside className="lg:col-span-4 space-y-8">
      
      {/* REGULATORY RADAR FEED */}
      <div id="regulatory" className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-6">
        <div className="flex items-center justify-between mb-5 border-b border-[#1E2536] pb-3.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            <h2 className="font-serif font-bold text-white text-xl tracking-tight">Regulatory Radar</h2>
          </div>
          <span className="text-xs uppercase tracking-wider text-[#7A8294] font-bold">Priority Feed</span>
        </div>

        <div className="space-y-5">
          {radarItems.map((item, idx) => (
            <div key={idx}>
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between text-xs text-[#7A8294] mb-1">
                  <span className={`font-bold uppercase tracking-wider ${getSourceColor(item.source)}`}>
                    {item.source}
                  </span>
                  <TimeAgo date={item.timestamp_iso} format="short" className="text-[#8E95A5]" />
                </div>
                <h3 className="font-serif text-base font-semibold text-[#F2F4F8] group-hover:text-[#D4AF37] transition leading-snug">
                  {item.headline}
                </h3>
                <p className="text-xs text-[#8E95A5] mt-1.5 line-clamp-2">
                  {item.summary}
                </p>
                {item.citation && (
                  <div className="mt-2 text-[10px] text-[#7A8294] font-mono bg-[#141822] p-1.5 rounded border border-[#1E2536]/60">
                    Ref: {item.citation}
                  </div>
                )}
              </div>
              {idx < radarItems.length - 1 && <hr className="border-[#1E2536] mt-5" />}
            </div>
          ))}
        </div>
      </div>

      {/* ACTIVE DOCKET WATCH */}
      <div id="dockets" className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-6">
        <div className="flex items-center justify-between mb-4 border-b border-[#1E2536] pb-3">
          <h2 className="font-serif font-bold text-white text-lg tracking-tight">Active Docket Watch</h2>
          <span className="text-xs text-[#D4AF37] uppercase tracking-wider font-bold">Live Status</span>
        </div>

        <div className="space-y-3 text-xs">
          {dockets.map((docket, idx) => (
            <div key={idx} className="p-3 rounded bg-[#141822] border border-[#232A3D] flex items-center justify-between">
              <div>
                <div className="font-bold text-white">{docket.case}</div>
                <div className="text-[#7A8294] mt-0.5">{docket.court}</div>
              </div>
              <span className={`px-2 py-0.5 rounded font-bold ${getDocketBadgeStyle(docket.color)}`}>
                {docket.status}
              </span>
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
}

