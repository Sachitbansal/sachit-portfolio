"use client"

import { projects } from "@/lib/content"
import { Reveal, Tilt } from "./motion"
import { ProjectVisual } from "./Visuals"

export function Work() {
  return (
    <section id="work" className="scroll-mt-16 rounded-t-[40px] bg-night text-white sm:rounded-t-[56px]">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="label mb-3 text-flame">Selected work</div>
            <h2 className="max-w-[16ch] font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.02] tracking-[-0.03em]">
              Things I&apos;ve built and shipped.
            </h2>
          </div>
          <p className="max-w-[44ch] text-white/60">
            Each one started as a real problem. Here is what it was, what I built, and what happened.
          </p>
        </Reveal>

        <div className="flex flex-col gap-20">
          {projects.map((p, i) => (
            <article key={p.id} className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14`}>
              <Reveal className={i % 2 ? "lg:order-2" : ""}>
                <Tilt max={4}>
                  <ProjectVisual id={p.id} />
                </Tilt>
              </Reveal>
              <Reveal delay={0.1} className="min-w-0">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-white/40">{p.kind}</span>
                  {p.badge && (
                    <span className="rounded-full bg-flame/15 px-2.5 py-0.5 text-xs font-medium text-flame">{p.badge}</span>
                  )}
                </div>
                <h3 className="font-display text-4xl font-bold tracking-tight">{p.name}</h3>
                <dl className="mt-6 grid gap-5">
                  {[
                    ["The problem", p.problem],
                    ["What I built", p.built],
                    ["The result", p.result],
                  ].map(([k, v], j) => (
                    <div key={k} className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-4">
                      <dt className={`label text-[11px] ${j === 2 ? "text-mint" : "text-white/40"}`}>{k}</dt>
                      <dd className={`${j === 2 ? "text-white" : "text-white/70"} leading-relaxed`}>{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-night-line pt-4">
                  <span className="font-mono text-[11px] text-white/40">{p.tools}</span>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="ml-auto text-sm text-white/80 underline-offset-4 hover:text-flame hover:underline">
                      View code ↗
                    </a>
                  )}
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
