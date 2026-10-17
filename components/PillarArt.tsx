// The three pillar illustrations from the Claude Design export, now used as small badges on the home deck.
import type { Pillar } from "@/content/site";

export function PillarArt({ pillar }: { pillar: Pillar }) {
  if (pillar === "learn") {
    return (
      <svg viewBox="0 0 400 400" aria-hidden="true" focusable="false">
        <circle cx="200" cy="200" r="190" fill="var(--learn-tint)" />
        <path d="M60 232 L195 207 L195 302 L60 327 Z" fill="var(--orange)" />
        <path d="M340 232 L205 207 L205 302 L340 327 Z" fill="var(--orange-dark)" />
        <line x1="200" y1="207" x2="200" y2="304" stroke="#fff" strokeWidth="4" />
        <path d="M200 88 L292 124 L200 160 L108 124 Z" fill="var(--ink)" />
        <rect x="192" y="160" width="16" height="32" fill="var(--ink)" />
        <circle cx="200" cy="192" r="7" fill="var(--red)" />
      </svg>
    );
  }
  if (pillar === "do") {
    return (
      <svg viewBox="0 0 400 400" aria-hidden="true" focusable="false">
        <circle cx="200" cy="200" r="190" fill="var(--do-tint)" />
        <rect x="55" y="90" width="290" height="220" rx="18" fill="#fff" />
        <rect x="55" y="90" width="290" height="40" rx="18" fill="var(--ink)" />
        <rect x="55" y="112" width="290" height="18" fill="var(--ink)" />
        <circle cx="80" cy="110" r="6" fill="var(--red)" />
        <circle cx="100" cy="110" r="6" fill="var(--orange)" />
        <rect x="80" y="150" width="120" height="10" rx="5" fill="var(--red)" opacity=".85" />
        <rect x="80" y="172" width="180" height="10" rx="5" fill="var(--ink)" opacity=".5" />
        <rect x="80" y="194" width="90" height="10" rx="5" fill="var(--ink)" opacity=".5" />
        <path d="M150 245 l-25 20 25 20" fill="none" stroke="var(--red)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M250 245 l25 20 -25 20" fill="none" stroke="var(--red)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M216 238 l-22 50" stroke="var(--ink)" strokeWidth="7" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <circle cx="200" cy="200" r="190" fill="none" stroke="rgb(246 242 234 / .2)" strokeWidth="3" />
      <circle cx="200" cy="200" r="140" fill="none" stroke="rgb(246 242 234 / .28)" strokeWidth="3" />
      <path d="M200 150 C170 100 90 120 90 180 C90 240 160 270 200 310 C240 270 310 240 310 180 C310 120 230 100 200 150Z" fill="var(--orange)" />
      <path d="M108 292 C138 250 170 250 200 276 C230 250 262 250 292 292 C276 332 232 352 200 352 C168 352 124 332 108 292Z" fill="var(--cream)" opacity=".92" />
    </svg>
  );
}
