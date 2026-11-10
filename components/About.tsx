"use client"

import { motion } from "framer-motion"
import { cooking, education, record } from "@/lib/content"
import { Reveal, Tilt } from "./motion"

const now: [string, string][] = [
  ["Based in", "Hannover, Germany, until March 2027. Home is India."],
  ["Studying", "Computer Science & AI, exchange at Leibniz Universität Hannover"],
  ["Building", cooking[0].charAt(0).toUpperCase() + cooking[0].slice(1)],
  ["Open to", "Freelance projects, internships and Werkstudent roles"],
]

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
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
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
          <Tilt max={4}>
            <div className="relative overflow-hidden rounded-3xl bg-ink p-7 text-white sm:p-9">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cobalt/40 blur-[80px]" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-flame/30 blur-[80px]" />
              <div className="relative">
                <div className="mb-6 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-mint" style={{ animation: "pulse-ring 2s infinite" }} />
                  <span className="label text-[11px] text-white/70">Right now</span>
                </div>
                <dl className="grid gap-5">
                  {now.map(([k, v]) => (
                    <div key={k} className="grid gap-1 border-b border-white/10 pb-5 last:border-0 last:pb-0 sm:grid-cols-[130px_1fr] sm:gap-4">
                      <dt className="font-mono text-xs uppercase tracking-wider text-white/45">{k}</dt>
                      <dd className="text-white/90">{v}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-flame px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.03]"
                >
                  Start a project →
                </a>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  )
}
