import dossier from "@/data/dossier.json";

export default function Ticker() {
  const tickerItems = dossier.ticker || [];
  const edition = dossier.edition || "New York • London Institutional Edition";
  const publishedAt = dossier.published_at || "October 2026";

  const getChangeStyle = (type: string) => {
    switch (type) {
      case "bull":
        return "text-[#10B981] font-semibold";
      case "bear":
        return "text-[#EF4444] font-semibold";
      case "alert":
        return "text-[#D4AF37] font-semibold";
      case "neutral":
      default:
        return "text-slate-400 font-semibold";
    }
  };

  return (
    <div className="border-b border-[#1A1F2C] bg-[#050608] py-2 px-4 text-xs select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] tracking-wider uppercase shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span> Live Ledger
          </span>
          <div className="overflow-hidden whitespace-nowrap max-w-xl sm:max-w-3xl">
            <div className="ticker-track space-x-7 text-xs text-[#8E95A5]">
              {tickerItems.map((item, idx) => (
                <span key={idx} className="inline-flex items-center gap-1.5">
                  <strong className={item.type === "alert" ? "text-[#D4AF37] font-bold" : "text-[#F2F4F8] font-bold"}>
                    {item.label}
                  </strong>{" "}
                  <span>{item.value}</span>{" "}
                  <span className={getChangeStyle(item.type)}>{item.change}</span>
                  {idx < tickerItems.length - 1 && <span className="text-slate-700 ml-4">/</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs text-[#7A8294] font-medium">
          <span>{edition}</span>
          <span>{publishedAt}</span>
        </div>
      </div>
    </div>
  );
}


