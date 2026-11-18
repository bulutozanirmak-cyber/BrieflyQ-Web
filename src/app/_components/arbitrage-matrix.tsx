import Link from "next/link";
import dossier from "@/data/dossier.json";

export default function ArbitrageMatrix() {
  const deals = dossier.arbitrage_matrix || [];

  const getSpreadBadge = (status: string, spread: string) => {
    switch (status) {
      case "widening":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#EF4444]/15 border border-[#EF4444]/30 text-[#F87171] font-mono font-bold text-xs">
            <span className="text-[10px]">▲</span>
            <span>{spread}</span>
            <span className="text-[9px] font-sans font-extrabold uppercase tracking-wider text-[#EF4444] opacity-80 ml-0.5">WIDE</span>
          </span>
        );
      case "narrowing":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] font-mono font-bold text-xs">
            <span className="text-[10px]">▼</span>
            <span>{spread}</span>
            <span className="text-[9px] font-sans font-extrabold uppercase tracking-wider text-[#10B981] opacity-80 ml-0.5">TIGHT</span>
          </span>
        );
      case "stable":
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#E5C158] font-mono font-bold text-xs">
            <span className="text-[10px]">■</span>
            <span>{spread}</span>
            <span className="text-[9px] font-sans font-extrabold uppercase tracking-wider text-[#D4AF37] opacity-80 ml-0.5">FLAT</span>
          </span>
        );
    }
  };

  const getProbColor = (probStr: string) => {
    const num = parseInt(probStr, 10);
    if (isNaN(num)) return "bg-[#D4AF37]";
    if (num >= 80) return "bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)]";
    if (num >= 50) return "bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.5)]";
    return "bg-[#EF4444] shadow-[0_0_8px_rgba(239,68,68,0.5)]";
  };

  const getVenueBadge = (venue: string) => {
    if (venue.includes("Del. Ch.")) {
      return "text-[#E5C158] bg-[#D4AF37]/10 border-[#D4AF37]/25";
    }
    if (venue.includes("D.D.C.") || venue.includes("Washington")) {
      return "text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/25";
    }
    return "text-[#BAC1D2] bg-[#141822] border-[#222938]";
  };

  return (
    <section id="arbitrage-matrix" className="border-t border-[#1E2536] pt-10 sm:pt-12 mb-16">
      
      {/* Risk Desk Telemetry Header */}
      <div className="flex flex-wrap items-end justify-between mb-7 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
            </span>
            <span className="text-[10.5px] font-mono font-black uppercase tracking-widest text-[#D4AF37]">
              M&amp;A Risk-Arbitrage Desk // Telemetry
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-white tracking-tight">
            Delaware Chancery • Merger Spread &amp; Risk Matrix
          </h2>
        </div>
        
        <div className="flex flex-wrap items-center gap-2.5 text-xs">
          <div className="px-3 py-1.5 rounded-md bg-[#11151F] border border-[#232B3E] text-[#BAC1D2] font-mono text-[11px] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
            <span>5 High-Beta Dockets Active</span>
          </div>
          <div className="hidden sm:inline-flex px-3 py-1.5 rounded-md bg-[#11151F] border border-[#232B3E] text-[#8E95A5] text-[11px]">
            Delaware Chancery &amp; Federal Dockets
          </div>
        </div>
      </div>

      {/* Bloomberg-Grade Matrix Ledger Table */}
      <div className="bg-gradient-to-b from-[#11151F] via-[#0E121A] to-[#080A0E] border border-[#232B3E] rounded-xl overflow-hidden shadow-[0_12px_44px_rgba(0,0,0,0.5)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#202738] bg-[#070A0F] text-[#8E95A5] font-extrabold uppercase tracking-wider text-[10.5px]">
                <th className="py-4 px-4 sm:px-6">Target / Acquirer</th>
                <th className="py-4 px-3.5">Deal Value</th>
                <th className="py-4 px-3.5">Gross Spread</th>
                <th className="py-4 px-3.5">Implied Prob</th>
                <th className="py-4 px-3.5">Break Fee Exposure</th>
                <th className="py-4 px-3.5">Presiding Jurist &amp; Venue</th>
                <th className="py-4 px-3.5">Next Critical Milestone</th>
                <th className="py-4 px-4 sm:px-6 text-right">Dossier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E2536]/70">
              {deals.map((deal, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#141926] transition-colors duration-150 group"
                >
                  {/* Target & Acquirer */}
                  <td className="py-4.5 px-4 sm:px-6">
                    <div className="font-bold text-white text-[13.5px] group-hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                      <span>{deal.target}</span>
                    </div>
                    <div className="text-[11px] text-[#7A8294] mt-0.5 font-medium">
                      Acquirer: <span className="text-[#A0A7B8]">{deal.acquirer}</span>
                    </div>
                  </td>

                  {/* Deal Value */}
                  <td className="py-4.5 px-3.5 font-bold font-mono text-[#FAF7F2] text-sm whitespace-nowrap">
                    {deal.deal_value}
                  </td>

                  {/* Gross Spread */}
                  <td className="py-4.5 px-3.5 whitespace-nowrap">
                    {getSpreadBadge(deal.spread_status, deal.gross_spread)}
                  </td>

                  {/* Implied Closing Probability */}
                  <td className="py-4.5 px-3.5 whitespace-nowrap">
                    <div className="flex items-center gap-2.5">
                      <span className="font-bold font-mono text-white text-xs min-w-[28px]">
                        {deal.closing_prob}
                      </span>
                      <div className="w-16 sm:w-20 h-2 rounded-full bg-[#1A202E] overflow-hidden p-0.5 border border-[#262F44]">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${getProbColor(deal.closing_prob)}`}
                          style={{
                            width: deal.closing_prob.includes("%")
                              ? deal.closing_prob
                              : "50%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </td>

                  {/* Break Fee */}
                  <td className="py-4.5 px-3.5 whitespace-nowrap">
                    <span className="px-2.5 py-1 rounded bg-[#0A0D14] border border-[#232B3E] text-[#BAC1D2] font-mono text-[11px]">
                      {deal.reverse_break_fee}
                    </span>
                  </td>

                  {/* Jurist & Venue (Court Intervention Tag) */}
                  <td className="py-4.5 px-3.5 min-w-[170px]">
                    <div className="font-semibold text-white text-xs truncate">
                      {deal.presiding_jurist}
                    </div>
                    <div className="mt-1">
                      <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-mono border ${getVenueBadge(deal.venue)}`}>
                        {deal.venue}
                      </span>
                    </div>
                  </td>

                  {/* Next Milestone */}
                  <td className="py-4.5 px-3.5 whitespace-nowrap">
                    <div className="inline-flex items-center gap-1.5 text-[#E5C158] font-medium text-[11.5px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                      <span>{deal.next_milestone}</span>
                    </div>
                  </td>

                  {/* Action Link */}
                  <td className="py-4.5 px-4 sm:px-6 text-right whitespace-nowrap">
                    <Link
                      href={`/posts/${deal.slug}`}
                      className="px-3.5 py-1.5 rounded-md border border-[#2B354D] hover:border-[#D4AF37] bg-[#121622] hover:bg-[#D4AF37] text-white hover:text-slate-950 font-bold text-[11px] uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-1.5 shadow-sm group/btn"
                    >
                      <span>Dossier</span>
                      <span className="group-hover/btn:translate-x-0.5 transition-transform">&rarr;</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
