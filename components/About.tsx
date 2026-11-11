"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import { achievements, education, journey, leadership } from "@/lib/content"
import { Reveal } from "./motion"

export function Journey() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] })

  return (
    <section id="journey" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Reveal className="lg:sticky lg:top-28">
            <div className="label mb-3 text-flame">The story behind the builder</div>
            <h2 className="max-w-[14ch] font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.02] tracking-[-0.03em]">
              Curious by nature. Driven to create.
            </h2>
            <div className="mt-6 flex max-w-[46ch] flex-col gap-4 text-[17px] leading-relaxed text-muted">
              <p>
                Technology was never just a subject to study. It was something I wanted to understand, experiment with
                and build.
              </p>
              <p>
                I wasn&apos;t learning because it was part of a curriculum. I was learning because I wanted to turn ideas
                into something real.
              </p>
            </div>
            <blockquote className="mt-8 hidden max-w-[44ch] border-l-2 border-flame pl-4 font-display text-lg font-medium leading-snug lg:block">
              Curiosity isn&apos;t just about asking questions. It&apos;s having the courage to explore the answers, and
              the ability to build something from what you discover.
            </blockquote>
          </Reveal>
        </div>

        <ol ref={ref} className="relative flex flex-col gap-8 pl-10">
          <div className="absolute bottom-2 left-[11px] top-2 w-[2px] bg-line">
            <motion.div className="h-full w-full origin-top bg-flame" style={{ scaleY: scrollYProgress }} />
          </div>
          {journey.map((j, i) => (
            <motion.li
              key={j.title}
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className={`absolute -left-10 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-paper ${
                  i === journey.length - 1 ? "border-flame bg-flame" : "border-flame"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${i === journey.length - 1 ? "bg-white" : "bg-flame"}`} />
              </span>
              <div className="font-mono text-[11px] uppercase tracking-wider text-flame">{j.when}</div>
              <h3 className="mt-1 font-display text-xl font-bold leading-tight">{j.title}</h3>
              <p className="mt-1.5 max-w-[52ch] text-[15px] leading-relaxed text-muted">{j.body}</p>
            </motion.li>
          ))}
        </ol>

        <blockquote className="border-l-2 border-flame pl-4 font-display text-lg font-medium leading-snug lg:hidden">
          Curiosity isn&apos;t just about asking questions. It&apos;s having the courage to explore the answers, and the
          ability to build something from what you discover.
        </blockquote>
      </div>
    </section>
  )
}

export function Credentials() {
  return (
    <section id="credentials" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-24 pt-4 sm:px-6">
      <Reveal className="mb-10">
        <div className="label mb-3 text-flame">Credentials & recognition</div>
        <h2 className="max-w-[18ch] font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.02] tracking-[-0.03em]">
          Education, wins and responsibility.
        </h2>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-[1fr_1.15fr]">
        <Reveal className="flex flex-col gap-4">
          {education.map((e) => (
            <div key={e.school} className="rounded-3xl border border-line bg-surface p-6">
              <div className="font-mono text-xs text-muted">{e.when}</div>
              <div className="mt-2 font-display text-xl font-bold leading-tight">{e.school}</div>
              <div className="mt-1 text-[15px] text-muted">{e.detail}</div>
            </div>
          ))}
          <div className="relative overflow-hidden rounded-3xl bg-ink p-6 text-white">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-flame/40 blur-[70px]" />
            <div className="label relative mb-4 text-[11px] text-white/50">Selected achievements</div>
            <ul className="relative grid gap-3">
              {achievements.map((a) => (
                <li key={a.title} className="flex gap-3">
                  <span className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flame text-[10px]">★</span>
                  <div>
                    <div className="font-medium leading-snug">{a.title}</div>
                    <div className="text-sm text-white/50">{a.where}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-4">
          <div className="label px-1 pt-1 text-[11px] text-muted">Leadership & contribution</div>
          {leadership.map((l) => (
            <div key={l.role} className="rounded-3xl border border-line bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <div className="font-display text-xl font-bold leading-tight">{l.role}</div>
                <div className="font-mono text-xs text-flame">{l.org}</div>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{l.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
