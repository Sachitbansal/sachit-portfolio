"use client"

import { AnimatePresence, motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { thinking } from "@/lib/content"
import { Reveal } from "./motion"

const ease = [0.22, 1, 0.36, 1] as const
const rows = [
  ["who", "Who it's really for", "var(--cobalt)"],
  ["pain", "What actually hurts", "var(--flame)"],
  ["first", "The first version", "var(--mint)"],
  ["pitch", "How we'd pitch it", "#ffc145"],
] as const

function Sharpener() {
  const [i, setI] = useState(0)
  const [auto, setAuto] = useState(true)
  const box = useRef<HTMLDivElement>(null)
  const seen = useInView(box, { amount: 0.5 })
  useEffect(() => {
    if (!auto || !seen) return
    const t = setInterval(() => setI((v) => (v + 1) % thinking.examples.length), 7000)
    return () => clearInterval(t)
  }, [auto, seen])
  const ex = thinking.examples[i]

  return (
    <div ref={box} onMouseEnter={() => setAuto(false)} className="relative overflow-hidden rounded-[28px] bg-ink p-5 text-white shadow-[0_40px_80px_-40px_rgba(16,27,45,0.6)] sm:p-7">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cobalt/25 blur-[80px]" />
      <div className="relative">
        <div className="label mb-3 text-white/50">How I&apos;d take a rough idea</div>
        <div className="flex flex-wrap gap-2" role="tablist">
          {thinking.examples.map((e, k) => (
            <button
              key={e.rough}
              role="tab"
              aria-selected={k === i}
              onClick={() => {
                setI(k)
                setAuto(false)
              }}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                k === i ? "border-flame bg-flame text-white" : "border-white/15 text-white/70 hover:border-white/40"
              }`}
            >
              {e.tag}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={i} initial="hide" animate="show" exit="out" className="mt-6">
            <motion.div
              variants={{ hide: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 }, out: { opacity: 0 } }}
              transition={{ duration: 0.4, ease }}
              className="rounded-2xl border border-dashed border-white/20 px-4 py-3"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">The brief</div>
              <div className="mt-1 font-display text-xl font-semibold sm:text-2xl">“{ex.rough}”</div>
            </motion.div>

            <ol className="relative mt-4 flex flex-col gap-2.5 pl-5">
              <span className="absolute bottom-3 left-[5px] top-3 w-px bg-white/15" />
              {rows.map(([k, label, c], n) => (
                <motion.li
                  key={k}
                  variants={{ hide: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 }, out: { opacity: 0 } }}
                  transition={{ duration: 0.45, delay: 0.25 + n * 0.18, ease }}
                  className="relative rounded-2xl bg-white/[0.05] px-4 py-3"
                >
                  <span className="absolute -left-[19px] top-4 h-2.5 w-2.5 rounded-full" style={{ background: c }} />
                  <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: c }}>
                    {label}
                  </div>
                  <div className="mt-0.5 text-[15px] leading-snug text-white/85">{ex[k]}</div>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
        <p className="mt-4 text-[11px] text-white/35">Examples of how I think through a brief, not client case studies.</p>
      </div>
    </div>
  )
}

export function Thinking() {
  return (
    <section id="why" className="mx-auto max-w-6xl scroll-mt-16 px-5 pb-24 pt-8 sm:px-6 lg:pt-12">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <Reveal>
          <div className="label mb-3 text-flame">Why work with me</div>
          <h2 className="max-w-[16ch] font-display text-[clamp(30px,4vw,48px)] font-bold leading-[1.04] tracking-[-0.03em]">
            {thinking.title}
          </h2>
          <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-muted">{thinking.intro}</p>
          <ol className="mt-8 flex flex-col gap-5">
            {thinking.points.map((p, n) => (
              <li key={p.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-flame/40 font-mono text-xs text-flame">
                  0{n + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold leading-tight">{p.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 border-l-2 border-flame pl-4 font-display text-lg font-medium leading-snug">{thinking.closing}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <Sharpener />
        </Reveal>
      </div>
    </section>
  )
}
