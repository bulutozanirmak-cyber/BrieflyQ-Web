export default function RegulatoryRadar() {
  return (
    <aside className="lg:col-span-4 space-y-8">
      
      {/* REGULATORY RADAR FEED */}
      <div className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-6">
        <div className="flex items-center justify-between mb-5 border-b border-[#1E2536] pb-3.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            <h2 className="font-serif font-bold text-white text-xl tracking-tight">Regulatory Radar</h2>
          </div>
          <span className="text-xs uppercase tracking-wider text-[#7A8294] font-bold">Priority Feed</span>
        </div>

        <div className="space-y-5">
          <div className="group cursor-pointer">
            <div className="flex items-center justify-between text-xs text-[#7A8294] mb-1">
              <span className="text-[#D4AF37] font-bold uppercase tracking-wider">SEC Corp Finance</span>
              <span>24m ago</span>
            </div>
            <h3 className="font-serif text-base font-semibold text-[#F2F4F8] group-hover:text-[#D4AF37] transition leading-snug">
              Staff Legal Bulletin 14L Tightens Exclusions on Sovereign Wealth Governance Inquiries
            </h3>
            <p className="text-xs text-[#8E95A5] mt-1.5 line-clamp-2">
              Public issuers can no longer bypass proxy ballot proposals scrutinizing state-owned cross-shareholdings.
            </p>
          </div>

          <hr className="border-[#1E2536]" />

          <div className="group cursor-pointer">
            <div className="flex items-center justify-between text-xs text-[#7A8294] mb-1">
              <span className="text-[#38BDF8] font-bold uppercase tracking-wider">Federal Reserve</span>
              <span>1h ago</span>
            </div>
            <h3 className="font-serif text-base font-semibold text-[#F2F4F8] group-hover:text-[#D4AF37] transition leading-snug">
              Basel III Endgame Tier-2 Liquidity Rules Softened for Regional Custody Lenders
            </h3>
            <p className="text-xs text-[#8E95A5] mt-1.5 line-clamp-2">
              Adjusted risk-weighted asset floors lowered from 19% to 14.5% after intensive private meetings.
            </p>
          </div>

          <hr className="border-[#1E2536]" />

          <div className="group cursor-pointer">
            <div className="flex items-center justify-between text-xs text-[#7A8294] mb-1">
              <span className="text-[#F87171] font-bold uppercase tracking-wider">DOJ Antitrust Division</span>
              <span>3h ago</span>
            </div>
            <h3 className="font-serif text-base font-semibold text-[#F2F4F8] group-hover:text-[#D4AF37] transition leading-snug">
              Civil Investigative Demands Served on Direct Lending Clubs Over Coordinated Covenants
            </h3>
            <p className="text-xs text-[#8E95A5] mt-1.5 line-clamp-2">
              Scrutinizing information sharing among non-bank syndicates governing $42B in software buyout credit.
            </p>
          </div>
        </div>
      </div>

      {/* ACTIVE DOCKET WATCH */}
      <div className="bg-[#0F1218] border border-[#1E2536] rounded-lg p-6">
        <div className="flex items-center justify-between mb-4 border-b border-[#1E2536] pb-3">
          <h2 className="font-serif font-bold text-white text-lg tracking-tight">Active Docket Watch</h2>
          <span className="text-xs text-[#D4AF37] uppercase tracking-wider font-bold">Live Status</span>
        </div>

        <div className="space-y-3 text-xs">
          <div className="p-3 rounded bg-[#141822] border border-[#232A3D] flex items-center justify-between">
            <div>
              <div className="font-bold text-white">FTC v. Meta Platforms</div>
              <div className="text-[#7A8294] mt-0.5">D.D.C. • Monopolization Defense</div>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#D4AF37]/15 text-[#D4AF37] font-bold">Oral Arg Oct 29</span>
          </div>

          <div className="p-3 rounded bg-[#141822] border border-[#232A3D] flex items-center justify-between">
            <div>
              <div className="font-bold text-white">Citadel Securities v. SEC</div>
              <div className="text-[#7A8294] mt-0.5">D.C. Cir. • Order Flow Routing</div>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#10B981]/15 text-[#10B981] font-bold">Ruling Imminent</span>
          </div>

          <div className="p-3 rounded bg-[#141822] border border-[#232A3D] flex items-center justify-between">
            <div>
              <div className="font-bold text-white">In re Paramount Shareholder Litigation</div>
              <div className="text-[#7A8294] mt-0.5">Del. Ch. • Fiduciary Standards</div>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#38BDF8]/15 text-[#38BDF8] font-bold">Discovery Review</span>
          </div>
        </div>
      </div>

    </aside>
  );
}
