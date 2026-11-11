"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { process } from "@/lib/content"
import { Reveal } from "./motion"

export function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] })
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="process" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
      <div data-dark className="relative overflow-hidden rounded-[28px] bg-night px-6 pb-14 pt-14 text-white sm:rounded-[40px] sm:px-12 sm:pb-16 sm:pt-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-flame/25 blur-[100px]" />
        <Reveal className="relative mb-12">
          <div className="label mb-3 text-flame">How I work</div>
          <h2 className="max-w-[20ch] font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.02] tracking-[-0.03em]">
            From an idea to a working solution.
          </h2>
        </Reveal>

        <div ref={ref} className="relative">
          {/* connecting line: horizontal on desktop, vertical on mobile */}
          <div className="absolute left-[19px] top-0 h-full w-[2px] bg-night-line md:hidden">
            <motion.div className="h-full w-full origin-top bg-flame" style={{ scaleY: fill }} />
          </div>
          <div className="absolute left-0 top-[19px] hidden h-[2px] w-full bg-night-line md:block">
            <motion.div className="h-full w-full origin-left bg-flame" style={{ scaleX: fill }} />
          </div>

          <ol className="relative grid gap-10 md:grid-cols-5 md:gap-6">
            {process.map((s, i) => (
              <motion.li
                key={s.title}
                className="flex gap-5 md:flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-flame bg-night font-mono text-sm text-flame">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{s.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
        <Reveal className="relative mt-12 border-t border-night-line pt-8">
          <p className="font-display text-xl font-medium text-white/85 sm:text-2xl">
            Clear communication, practical engineering and a focus on delivery.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
