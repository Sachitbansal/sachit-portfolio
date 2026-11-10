"use client"

import { services, type Service } from "@/lib/content"
import { Reveal, Tilt } from "./motion"

function Glyph({ k }: { k: Service["key"] }) {
  // Small isometric-ish illustrations, one per service.
  if (k === "automation")
    return (
      <svg viewBox="0 0 120 90" className="h-full w-full">
        <path d="M30 22 C 60 22, 60 45, 84 45 M84 45 C 60 45, 60 68, 30 68" stroke="var(--line)" strokeWidth="2.5" fill="none" />
        {[
          [30, 22, "var(--flame)"],
          [84, 45, "var(--cobalt)"],
          [30, 68, "var(--mint)"],
        ].map(([x, y, c], i) => (
          <g key={i}>
            <rect x={(x as number) - 20} y={(y as number) - 9} width="40" height="18" rx="6" fill="var(--surface)" stroke="var(--line)" strokeWidth="2" />
            <circle cx={(x as number) - 11} cy={y as number} r="4" fill={c as string} />
            <rect x={(x as number) - 4} y={(y as number) - 2} width="18" height="4" rx="2" fill="var(--ink)" />
          </g>
        ))}
        <circle r="3.5" fill="var(--flame)">
          <animateMotion dur="2.6s" repeatCount="indefinite" path="M30 22 C 60 22, 60 45, 84 45 C 60 45, 60 68, 30 68" />
        </circle>
      </svg>
    )
  if (k === "web")
    return (
      <svg viewBox="0 0 120 90" className="h-full w-full">
        <rect x="14" y="12" width="92" height="66" rx="6" fill="var(--surface)" stroke="var(--line)" strokeWidth="2" />
        <rect x="14" y="12" width="92" height="12" rx="6" fill="var(--line)" />
        <circle cx="22" cy="18" r="2" fill="var(--flame)" />
        <circle cx="29" cy="18" r="2" fill="#ffc145" />
        <circle cx="36" cy="18" r="2" fill="var(--mint)" />
        <rect x="22" y="32" width="40" height="7" rx="2" fill="var(--ink)" />
        <rect x="22" y="43" width="30" height="4" rx="2" fill="var(--line)" />
        <rect x="22" y="51" width="18" height="8" rx="4" fill="var(--flame)" />
        <rect x="68" y="32" width="30" height="27" rx="4" fill="var(--cobalt)" />
        <rect x="22" y="64" width="76" height="8" rx="2" fill="var(--paper)" />
      </svg>
    )
  if (k === "ai")
    return (
      <svg viewBox="0 0 120 90" className="h-full w-full">
        {[
          [24, 22],
          [24, 68],
          [96, 22],
          [96, 68],
        ].map(([x, y], i) => (
          <g key={i}>
            <line x1={x} y1={y} x2="60" y2="45" stroke="var(--line)" strokeWidth="2" />
            <rect x={x - 9} y={y - 7} width="18" height="14" rx="3" fill="var(--surface)" stroke="var(--line)" strokeWidth="2" />
          </g>
        ))}
        <circle cx="60" cy="45" r="16" fill="var(--cobalt)" />
        <circle cx="60" cy="45" r="22" fill="none" stroke="var(--cobalt)" strokeOpacity=".3" strokeWidth="2" />
        <path d="M53 45h14M60 38v14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    )
  // cloud
  return (
    <svg viewBox="0 0 120 90" className="h-full w-full">
      <path d="M38 34a14 14 0 0 1 27-6 11 11 0 0 1 17 9h1a9 9 0 0 1 0 18H39a11 11 0 0 1-1-21z" fill="var(--surface)" stroke="var(--line)" strokeWidth="2" transform="translate(0,-14)" />
      {[0, 1].map((i) => (
        <g key={i}>
          <rect x="30" y={50 + i * 20} width="60" height="15" rx="3" fill="var(--ink)" />
          <circle cx="38" cy={57.5 + i * 20} r="2.5" fill="var(--mint)" />
          <circle cx="46" cy={57.5 + i * 20} r="2.5" fill="var(--mint)" opacity=".5" />
          <rect x="62" y={55 + i * 20} width="22" height="5" rx="2" fill="#2a313c" />
        </g>
      ))}
      <line x1="60" y1="41" x2="60" y2="50" stroke="var(--cobalt)" strokeWidth="2" strokeDasharray="3 2" />
      <path d="M100 52c6 0 8 6 8 10 0 8-8 12-8 12s-8-4-8-12c0-4 2-10 8-10z" fill="var(--flame)" opacity=".9" />
    </svg>
  )
}

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <Reveal className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="label mb-3 text-flame">What I can do for you</div>
          <h2 className="max-w-[18ch] font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.02] tracking-[-0.03em]">
            One person for the whole product.
          </h2>
        </div>
        <p className="max-w-[46ch] text-muted">
          Most projects need some AI, a few automations, a website and a cloud to run it all. I do all four, so nothing
          gets lost between different freelancers.
        </p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.key} delay={i * 0.08}>
            <Tilt className="h-full">
              <article className="group flex h-full flex-col gap-5 rounded-3xl border border-line bg-surface p-7 transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(13,16,22,0.25)]">
                <div className="h-24 w-32 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                  <Glyph k={s.key} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-2xl font-bold tracking-tight">{s.title}</h3>
                  <p className="text-muted">{s.body}</p>
                </div>
                <div className="mt-auto flex flex-col gap-3 border-t border-line pt-4">
                  <div className="flex items-start gap-2 text-sm font-medium">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-flame" />
                    {s.proof}
                  </div>
                  <div className="font-mono text-[11px] text-muted">{s.tools}</div>
                </div>
              </article>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
