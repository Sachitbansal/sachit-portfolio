"use client"

import { useEffect, useRef, useState } from "react"
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
  const row = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  // Phone only: the row scrolls sideways, so show which card is in view and nudge the row once
  // when it first appears, so people see there is more to swipe.
  useEffect(() => {
    const el = row.current
    if (!el) return
    const onScroll = () => {
      const card = el.firstElementChild as HTMLElement | null
      if (!card) return
      setActive(Math.min(services.length - 1, Math.round(el.scrollLeft / (card.offsetWidth + 12))))
    }
    el.addEventListener("scroll", onScroll, { passive: true })
    let t: ReturnType<typeof setTimeout>
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || el.scrollWidth <= el.clientWidth || el.scrollLeft > 0) return
        io.disconnect()
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
        // snapping would cancel a partial scroll, so switch it off for the nudge
        t = setTimeout(() => {
          el.style.scrollSnapType = "none"
          el.scrollTo({ left: 90, behavior: "smooth" })
          t = setTimeout(() => {
            el.scrollTo({ left: 0, behavior: "smooth" })
            t = setTimeout(() => (el.style.scrollSnapType = ""), 600)
          }, 650)
        }, 700)
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => {
      el.removeEventListener("scroll", onScroll)
      io.disconnect()
      clearTimeout(t)
    }
  }, [])

  return (
    <section id="services" className="relative mx-auto max-w-6xl scroll-mt-16 py-20 sm:px-6 lg:py-16">
      <Reveal className="mb-8 flex flex-col gap-3 px-5 sm:px-0 md:flex-row md:items-end md:justify-between lg:mb-8">
        <div>
          <div className="label mb-3 text-flame">Services</div>
          <h2 className="max-w-[18ch] font-display text-[clamp(30px,4vw,48px)] font-bold leading-[1.02] tracking-[-0.03em]">
            What I can build for you.
          </h2>
        </div>
        <p className="max-w-[44ch] text-muted">
          Four kinds of solutions, often combined in one project: the AI, the automation around it, the product people
          use and the infrastructure that keeps it running.
        </p>
      </Reveal>

      {/* phone: swipeable row · tablet & desktop: 2×2 grid */}
      <Reveal>
      <div ref={row} className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
        {services.map((s, i) => (
          <div key={s.key} className="w-[82%] shrink-0 snap-start sm:w-auto">
            <Tilt className="h-full" max={3}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-shadow duration-300 hover:shadow-[0_24px_48px_-30px_rgba(16,27,45,0.25)]">
                <div className="flex items-center gap-3.5">
                  <div className="h-11 w-14 shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5">
                    <Glyph k={s.key} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold leading-tight tracking-tight">{s.title}</h3>
                    <p className="mt-0.5 text-[13.5px] leading-snug text-muted">{s.tagline}</p>
                  </div>
                </div>
                <ul className="mt-4 grid gap-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[13px] leading-snug">
                      <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-flame" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-3.5">
                  <div className="rounded-xl bg-paper px-3 py-2 text-[12.5px] leading-snug text-muted">
                    <span className="mr-1.5 font-mono text-[10px] uppercase tracking-wider text-flame">Example</span>
                    {s.example}
                  </div>
                </div>
              </article>
            </Tilt>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between px-5 sm:hidden">
        <div className="flex gap-1.5">
          {services.map((s, i) => (
            <span key={s.key} className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-flame" : "w-1.5 bg-line"}`} />
          ))}
        </div>
        <span className="font-mono text-[11px] text-muted">
          {active === services.length - 1 ? "4 / 4" : "Swipe for more →"}
        </span>
      </div>
      </Reveal>
    </section>
  )
}
