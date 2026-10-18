import Link from "next/link";
import dossier from "@/data/dossier.json";

export default function ArbitrageMatrix() {
  const deals = dossier.arbitrage_matrix || [];

  const getSpreadBadge = (status: string, spread: string) => {
    switch (status) {
      case "widening":
        return (
          <span className="inline-flex items-center gap-1 text-[#EF4444] font-bold font-mono">
            <span>▲</span> {spread}
          </span>
        );
      case "narrowing":
        return (
          <span className="inline-flex items-center gap-1 text-[#10B981] font-bold font-mono">
            <span>▼</span> {spread}
          </span>
        );
      case "stable":
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[#D4AF37] font-bold font-mono">
            <span>■</span> {spread}
          </span>
        );
    }
  };

  const getProbColor = (probStr: string) => {
    const num = parseInt(probStr, 10);
    if (isNaN(num)) return "bg-[#D4AF37]";
    if (num >= 80) return "bg-[#10B981]";
    if (num >= 50) return "bg-[#D4AF37]";
    return "bg-[#EF4444]";
  };

  return (
    <section id="arbitrage-matrix" className="border-t border-[#1E2536] pt-10 mb-14">
      <div className="flex flex-wrap items-baseline justify-between mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              M&A Risk-Arbitrage Desk Telemetry
            </span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
            Delaware Chancery • Merger Spread & Risk Matrix
          </h2>
        </div>
        <div className="text-xs text-[#8E95A5] font-medium flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-[#141822] border border-[#232A3D] text-[#BAC1D2]">
            5 High-Beta Dockets Active
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="hidden sm:inline">Delaware Chancery & Federal Dockets</span>
        </div>
      </div>

      <div className="bg-[#0F1218] border border-[#1E2536] rounded-xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#1E2536] bg-[#0A0D14] text-[#7A8294] font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4 sm:px-6">Target / Acquirer</th>
                <th className="py-3.5 px-3">Deal Value</th>
                <th className="py-3.5 px-3">Gross Spread</th>
                <th className="py-3.5 px-3">Implied Prob</th>
                <th className="py-3.5 px-3">Break Fee Exposure</th>
                <th className="py-3.5 px-3">Presiding Jurist & Venue</th>
                <th className="py-3.5 px-3">Next Critical Milestone</th>
                <th className="py-3.5 px-4 sm:px-6 text-right">Dossier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E2536]/60">
              {deals.map((deal, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#141822] transition duration-150 group"
                >
                  {/* Target & Acquirer */}
                  <td className="py-4 px-4 sm:px-6">
                    <div className="font-bold text-white text-sm group-hover:text-[#D4AF37] transition">
                      {deal.target}
                    </div>
                    <div className="text-[11px] text-[#7A8294] mt-0.5">
                      Acquirer: {deal.acquirer}
                    </div>
                  </td>

                  {/* Deal Value */}
                  <td className="py-4 px-3 font-bold font-mono text-[#F2F4F8] text-sm">
                    {deal.deal_value}
                  </td>

                  {/* Gross Spread */}
                  <td className="py-4 px-3 whitespace-nowrap">
                    {getSpreadBadge(deal.spread_status, deal.gross_spread)}
                  </td>

                  {/* Implied Closing Probability */}
                  <td className="py-4 px-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold font-mono text-white text-xs">
                        {deal.closing_prob}
                      </span>
                      <div className="w-16 h-1.5 rounded-full bg-[#1A202C] overflow-hidden">
                        <div
                          className={`h-full ${getProbColor(deal.closing_prob)}`}
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
                  <td className="py-4 px-3">
                    <span className="px-2 py-0.5 rounded bg-[#1A1F2C] border border-[#2B354D] text-[#BAC1D2] font-mono text-[11px]">
                      {deal.reverse_break_fee}
                    </span>
                  </td>

                  {/* Jurist & Venue */}
                  <td className="py-4 px-3">
                    <div className="font-medium text-white text-xs">
                      {deal.presiding_jurist}
                    </div>
                    <div className="text-[11px] text-[#7A8294]">
                      {deal.venue}
                    </div>
                  </td>

                  {/* Next Milestone */}
                  <td className="py-4 px-3 whitespace-nowrap font-medium text-[#D4AF37] text-[11px]">
                    {deal.next_milestone}
                  </td>

                  {/* Action Link */}
                  <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                    <Link
                      href={`/posts/${deal.slug}`}
                      className="px-3 py-1.5 rounded border border-[#2B354D] hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-slate-950 text-white font-bold text-[11px] uppercase tracking-wider transition inline-flex items-center gap-1"
                    >
                      Dossier &rarr;
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
