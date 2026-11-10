"use client"

import { motion } from "framer-motion"
import { education, record, roles } from "@/lib/content"
import { Reveal } from "./motion"

export function Record() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal className="mb-12">
        <div className="label mb-3 text-flame">Track record</div>
        <h2 className="max-w-[18ch] font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.02] tracking-[-0.03em]">
          Tested against the best, and usually on top.
        </h2>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {record.map((y, yi) => (
          <Reveal key={y.year} delay={yi * 0.08}>
            <div className="h-full rounded-3xl border border-line bg-surface p-6">
              <div className="mb-5 flex items-baseline justify-between">
                <span className="font-display text-4xl font-bold tracking-tight text-ink/90">{y.year}</span>
                {y.items.some((i) => "win" in i && i.win) && (
                  <span className="font-mono text-xs text-muted">
                    {y.items.filter((i) => "win" in i && i.win).length} × 1st
                  </span>
                )}
              </div>
              <ul className="flex flex-col gap-4">
                {y.items.map((it) => (
                  <li key={it.title} className="flex gap-3">
                    <span
                      className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] ${
                        "win" in it && it.win ? "bg-flame text-white" : "bg-paper text-muted"
                      }`}
                    >
                      {"win" in it && it.win ? "1" : "•"}
                    </span>
                    <div>
                      <div className="font-medium leading-snug">{it.title}</div>
                      <div className="text-sm text-muted">{it.where}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <div className="label mb-3 text-flame">About me</div>
          <h2 className="font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.02] tracking-[-0.03em]">
            Hi, I&apos;m Sachit.
          </h2>
          <div className="mt-6 flex max-w-[52ch] flex-col gap-4 text-[17px] leading-relaxed text-muted">
            <p>
              I study engineering at IIT Mandi, specialising in AI and robotics, and I&apos;m spending this semester on
              exchange at Leibniz University Hannover in Germany.
            </p>
            <p>
              I&apos;ve been building since 2018: over 100 projects, and these days most of them are AI agents and
              automations, plus the websites and cloud that run them. What I enjoy most is the whole journey: understanding the problem, building it properly,
              and getting it into people&apos;s hands.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {education.map((e) => (
              <div key={e.school} className="flex flex-wrap items-baseline justify-between gap-x-4 rounded-2xl border border-line bg-surface px-5 py-4">
                <div>
                  <div className="font-medium">{e.school}</div>
                  <div className="text-sm text-muted">{e.detail}</div>
                </div>
                <div className="font-mono text-xs text-muted">{e.when}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="label mb-5 text-muted">Experience &amp; roles</div>
          <ol className="relative flex flex-col border-l-2 border-line pl-7">
            {roles.map((r, i) => (
              <motion.li
                key={r.title}
                className="relative pb-8 last:pb-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className={`absolute -left-[35px] top-1.5 h-3 w-3 rounded-full border-2 ${i === 0 ? "border-flame bg-flame" : "border-ink bg-paper"}`} />
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-display text-xl font-bold">{r.title}</h3>
                  <span className="text-muted">· {r.org}</span>
                </div>
                {r.when && <div className="mt-0.5 font-mono text-xs text-muted">{r.when}</div>}
                <p className="mt-2 text-muted">{r.body}</p>
              </motion.li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
