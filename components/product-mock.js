import { Search } from "lucide-react";

// An illustration of the app's deals board, drawn in HTML so it stays sharp on every screen. It
// mirrors the real product (suite bar, KPI tiles, pipeline columns with weighted values) using
// generic deal names rather than invented customers.

const KPIS = [
  ["Open pipeline", "₹42.6L"],
  ["Weighted", "₹18.1L"],
  ["Win rate", "58%"],
];

const COLUMNS = [
  { name: "Qualified", prob: "10%", cards: [["Pilot", "₹1.2L"], ["Onboarding package", "₹85K"]] },
  { name: "Demo scheduled", prob: "40%", cards: [["Annual license", "₹4.8L"], ["Expansion", "₹2.1L"]] },
  { name: "Proposal sent", prob: "60%", cards: [["Enterprise plan", "₹6.4L"]] },
];

function Chevrons({ className = "" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="6" fill="#0f6cbd" />
      <g fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 21.5 L16 14 L23.5 21.5" opacity=".6" />
        <path d="M8.5 14.5 L16 7 L23.5 14.5" />
      </g>
    </svg>
  );
}

export function ProductMock() {
  return (
    <div className="relative" aria-label="Illustration of the Lasan Grow deals board" role="img">
      <div className="overflow-hidden rounded-xl border border-line bg-white shadow-lift">
        {/* Suite bar */}
        <div className="flex h-10 items-center gap-2 bg-brand-900 px-3 text-white">
          <Chevrons className="size-5" />
          <span className="text-xs font-semibold">Lasan Grow</span>
          <span className="text-xs text-white/60">| Sales</span>
          <span className="mx-auto hidden h-6 w-44 items-center gap-1.5 rounded border border-white/20 bg-white/10 px-2 text-[10px] text-white/70 sm:flex">
            <Search className="size-3" /> Search or create
          </span>
        </div>

        <div className="bg-soft p-3 sm:p-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold">Deals</p>
              <p className="text-[11px] text-subtle">5 open deals · board view</p>
            </div>
            <span className="rounded bg-brand-500 px-2.5 py-1 text-[11px] font-semibold text-white">+ New deal</span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {KPIS.map(([k, v]) => (
              <div key={k} className="rounded-md border border-line bg-white p-2 shadow-[inset_0_2px_0_#0f6cbd]">
                <p className="text-[10px] text-subtle">{k}</p>
                <p className="text-sm font-semibold tabular-nums">{v}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {COLUMNS.map((col) => (
              <div key={col.name} className="rounded-md border border-line bg-[#eef1f4] p-2">
                <p className="truncate text-[11px] font-semibold">{col.name}</p>
                <p className="text-[10px] text-subtle">{col.prob} likely</p>
                <div className="mt-1.5 h-1 rounded-full bg-white">
                  <div className="h-1 rounded-full bg-brand-500" style={{ width: col.prob }} />
                </div>
                <div className="mt-2 grid gap-1.5">
                  {col.cards.map(([title, value]) => (
                    <div key={title} className="rounded border border-line bg-white p-1.5 shadow-card">
                      <p className="truncate text-[10.5px] font-medium">{title}</p>
                      <p className="mt-0.5 font-mono text-[10px] font-semibold text-muted">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating lead-score card */}
      <div className="absolute -bottom-6 -left-3 hidden w-52 rounded-lg border border-line bg-white p-3 shadow-lift sm:block">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-subtle">New lead</p>
        <div className="mt-1.5 flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full border-[3px] border-ok text-sm font-semibold text-ok">92</span>
          <div>
            <p className="text-sm font-semibold">Hot · call first</p>
            <p className="text-[11px] text-subtle">Scored 0–100 automatically</p>
          </div>
        </div>
      </div>

      {/* Floating won toast */}
      <div className="absolute -right-3 -top-4 hidden items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-lift sm:flex">
        <span className="pulse-dot size-2 rounded-full bg-ok" />
        <p className="text-xs font-semibold">Deal won · ₹4.8L</p>
      </div>
    </div>
  );
}
