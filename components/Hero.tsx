"use client"

import { AnimatePresence, motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { cooking, profile, proof } from "@/lib/content"
import { CountUp } from "./motion"

const Kitchen = dynamic(() => import("./scene/Kitchen"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <div className="h-24 w-24 animate-pulse rounded-full bg-cobalt/20" />
    </div>
  ),
})

const ease = [0.22, 1, 0.36, 1] as const

function Cooking() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % cooking.length), 3200)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="flex min-h-[44px] items-start gap-3 text-sm text-muted">
      <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-flame" style={{ animation: "pulse-ring 1.6s infinite" }} />
      <div className="min-w-0 flex-1">
        <span className="label text-[11px] text-ink">Now cooking</span>
        <div className="relative h-5 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={i}
              className="absolute inset-x-0 truncate"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.4, ease }}
            >
              {cooking[i]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const words = ["I", "turn", "ideas", "into", "AI", "agents,", "automations", "and", "websites", "people", "actually", "use."]
  return (
    <section id="top" className="grain relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-cobalt/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 top-[40%] h-[420px] w-[420px] rounded-full bg-flame/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative z-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs text-muted backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint" style={{ animation: "pulse-ring 2s infinite" }} />
            {profile.availability}
          </motion.div>

          <h1 className="font-display text-[clamp(38px,5.6vw,66px)] font-bold leading-[0.98] tracking-[-0.035em]">
            {words.map((w, i) => (
              <motion.span
                key={i}
                className={`mr-[0.22em] inline-block ${w.startsWith("AI") ? "text-cobalt" : ""} ${w === "use." ? "text-flame" : ""}`}
                initial={{ opacity: 0, y: 40, rotateX: -60 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.05, ease }}
                style={{ transformOrigin: "50% 100%", transformPerspective: 600 }}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease }}
            className="mt-6 max-w-[54ch] text-[17px] leading-relaxed text-muted"
          >
            I&apos;m Sachit, a developer from IIT Mandi. I build AI that does real work: assistants that answer from
            your own data, and automations that take the repetitive jobs off your team. I launch it, host it and keep it
            running. Two-time KrackHack champion, and I look after 50+ websites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3.5 font-medium text-white shadow-[0_10px_30px_-10px_var(--flame)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              Start a project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#work"
              className="rounded-full border border-line bg-surface px-6 py-3.5 font-medium transition-colors hover:border-ink"
            >
              See what I&apos;ve built
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-8">
            <Cooking />
          </motion.div>
        </div>

        <motion.div
          className="order-1 h-[360px] sm:h-[440px] lg:order-2 lg:h-[600px]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease }}
        >
          <Kitchen />
        </motion.div>
      </div>

      {/* Proof strip */}
      <div className="relative mx-auto mt-10 max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-surface/80 backdrop-blur lg:grid-cols-4">
          {proof.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className={`flex flex-col gap-1 p-5 sm:p-7 ${i % 2 ? "" : "border-r"} ${i < 2 ? "border-b lg:border-b-0" : ""} ${
                i === 1 ? "lg:border-r" : ""
              } border-line`}
            >
              <div className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                <CountUp to={p.value} prefix={p.prefix} suffix={p.suffix} />
              </div>
              <div className="font-medium">{p.label}</div>
              <div className="text-xs text-muted">{p.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
