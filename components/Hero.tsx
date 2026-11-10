"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { proof } from "@/lib/content"
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

export function Hero() {
  const words = ["I", "turn", "ideas", "into", "AI", "agents,", "automations", "and", "websites", "people", "actually", "use."]
  return (
    <section id="top" className="grain relative overflow-hidden pt-24 sm:pt-32">
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-cobalt/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 top-[40%] h-[420px] w-[420px] rounded-full bg-flame/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-2 px-5 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
        <div className="relative z-10">
          <h1 className="font-display text-[clamp(40px,5.6vw,66px)] font-bold leading-[0.98] tracking-[-0.035em]">
            {words.map((w, i) => (
              <motion.span
                key={i}
                className={`mr-[0.22em] inline-block ${w === "AI" ? "text-cobalt" : ""} ${w === "use." ? "text-flame" : ""}`}
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
            I&apos;m Sachit, a developer from IIT Mandi. I build AI that does real work: assistants that answer from your
            own data, and automations that take the repetitive jobs off your team. I launch it, host it and keep it
            running.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease }}
            className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3.5 font-medium text-white shadow-[0_10px_30px_-10px_var(--flame)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              Start a project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#work" className="rounded-full border border-line bg-surface px-6 py-3.5 font-medium transition-colors hover:border-ink">
              See my work
            </a>
          </motion.div>
        </div>

        <motion.div
          className="-mx-5 h-[300px] sm:mx-0 sm:h-[440px] lg:h-[600px]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
        >
          <Kitchen />
        </motion.div>
      </div>

      {/* Proof strip */}
      <div className="relative mx-auto max-w-6xl px-5 pb-14 sm:mt-6 sm:px-6 sm:pb-16">
        <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-surface/80 backdrop-blur lg:grid-cols-4">
          {proof.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className={`flex flex-col gap-1 border-line p-4 sm:p-7 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} ${
                i === 1 ? "lg:border-r" : ""
              }`}
            >
              <div className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
                <CountUp to={p.value} prefix={p.prefix} suffix={p.suffix} />
              </div>
              <div className="text-sm font-medium leading-snug sm:text-base">{p.label}</div>
              <div className="text-[11px] leading-snug text-muted sm:text-xs">{p.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
