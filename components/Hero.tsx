"use client"

import { track } from "@vercel/analytics"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { credibility, origin, proof } from "@/lib/content"
import { CountUp, SceneBoundary } from "./motion"

const Kitchen = dynamic(() => import("./scene/Kitchen"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <div className="h-24 w-24 animate-pulse rounded-full bg-cobalt/20" />
    </div>
  ),
})

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const words = ["I", "build", "AI", "agents", "&", "automations", "that", "turn", "complex", "problems", "into", "working", "solutions."]
  const accent = new Set([2, 3, 4, 5])
  return (
    <section id="top" className="grain relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-cobalt/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 top-[40%] h-[420px] w-[420px] rounded-full bg-flame/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-2 px-5 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
        <div className="relative z-10">
          <h1 className="font-display text-[clamp(34px,4.1vw,52px)] font-bold leading-[1.04] tracking-[-0.035em]">
            {words.map((w, i) => (
              <motion.span
                key={i}
                className={`mr-[0.22em] inline-block ${accent.has(i) ? "text-flame" : ""}`}
                initial={{ opacity: 0, y: 40, rotateX: -60 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.05, ease }}
                style={{ transformOrigin: "50% 100%", transformPerspective: 600 }}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease }}
            className="mt-5 max-w-[54ch] text-base leading-relaxed text-muted sm:mt-6 sm:text-[17px]"
          >
            Not another AI experiment. Technology that solves real problems, from concept to deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
            className="mt-5 inline-flex max-w-full items-center gap-3 rounded-2xl sm:rounded-full border border-line bg-surface/80 py-1.5 pl-1.5 pr-4 backdrop-blur"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-flame/10 font-mono text-[11px] font-semibold text-flame">
              {"</>"}
            </span>
            <p className="text-[13.5px] leading-snug text-muted">
              <span className="font-display font-semibold text-ink">{origin.lead}</span> {origin.short}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease }}
            className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
          >
            <a
              href="#contact"
              onClick={() => track("cta_click", { where: "hero" })}
              className="group inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3.5 font-medium text-white shadow-[0_10px_30px_-10px_var(--flame)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              Let&apos;s discuss your project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#work" className="rounded-full border border-line bg-surface px-6 py-3.5 font-medium transition-colors hover:border-ink">
              Explore my work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.05, ease }}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-muted"
          >
            {credibility.map((c, i) => (
              <span key={c} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-muted/40" />}
                {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="-mx-5 h-[300px] sm:mx-0 sm:h-[440px] lg:h-[600px]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
        >
          <SceneBoundary
            fallback={
              <div className="flex h-full items-center justify-center">
                <div className="h-40 w-40 rounded-full bg-gradient-to-br from-cobalt/30 to-flame/20 blur-2xl" />
              </div>
            }
          >
            <Kitchen />
          </SceneBoundary>
        </motion.div>
      </div>

      {/* Proof strip */}
      <div className="relative mx-auto max-w-6xl px-5 pb-14 sm:mt-6 sm:px-6 sm:pb-16">
        <div className="grid grid-cols-3 overflow-hidden rounded-3xl border border-line bg-surface/80 backdrop-blur">
          {proof.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className={`flex flex-col gap-1 border-line p-3.5 sm:p-7 ${i < proof.length - 1 ? "border-r" : ""}`}
            >
              <div className="font-display text-2xl font-bold tracking-tight sm:text-5xl">
                <CountUp to={p.value} prefix={p.prefix} suffix={p.suffix} />
              </div>
              <div className="text-[13px] font-medium leading-snug sm:text-base">{p.label}</div>
              <div className="text-[11px] leading-snug text-muted sm:text-xs">{p.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
