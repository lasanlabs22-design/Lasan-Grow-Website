// The same mark as the app: two upward chevrons on the brand-blue square.
export function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden>
        <rect width="32" height="32" rx="6" fill="#0f6cbd" />
        <g fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 21.5 L16 14 L23.5 21.5" opacity=".6" />
          <path d="M8.5 14.5 L16 7 L23.5 14.5" />
        </g>
      </svg>
      <span className="text-[17px] font-semibold tracking-tight">
        Lasan<span className="font-normal text-muted"> Grow</span>
      </span>
    </span>
  );
}
