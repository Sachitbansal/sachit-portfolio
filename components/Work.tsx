"use client"

import { projects } from "@/lib/content"
import { Reveal, Tilt } from "./motion"
import { ProjectVisual } from "./Visuals"

export function Work() {
  return (
    <section id="work" data-dark className="scroll-mt-16 rounded-b-[32px] bg-night text-white sm:rounded-b-[56px]">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="label mb-3 text-flame">Projects</div>
            <h2 className="max-w-[16ch] font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.02] tracking-[-0.03em]">
              Selected engineering work.
            </h2>
          </div>
          <p className="max-w-[44ch] text-white/60">
            Case studies, not thumbnails: the challenge, what I engineered, how it was validated and what it shows.
            Academic, competition and production work are labelled as such.
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
                  <span className="font-mono text-xs text-white/40">{p.kind} · {p.when}</span>
                  {p.badge && (
                    <span className="rounded-full bg-flame/15 px-2.5 py-0.5 text-xs font-medium text-flame">{p.badge}</span>
                  )}
                </div>
                <h3 className="font-display text-4xl font-bold tracking-tight">{p.name}</h3>
                <p className="mt-2 font-display text-xl leading-snug text-white/85">{p.headline}</p>

                <dl className="mt-6 grid gap-5">
                  <div className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-4">
                    <dt className="label text-[11px] text-white/40">The challenge</dt>
                    <dd className="leading-relaxed text-white/70">{p.challenge}</dd>
                  </div>
                  <div className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-4">
                    <dt className="label text-[11px] text-white/40">What I engineered</dt>
                    <dd>
                      <p className="leading-relaxed text-white/70">{p.engineered}</p>
                      <ul className="mt-3 grid gap-x-4 gap-y-1.5 sm:grid-cols-2">
                        {p.components.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-[13px] leading-snug text-white/75">
                            <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-cobalt" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  {p.validation && (
                    <div className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-4">
                      <dt className="label text-[11px] text-mint">Validation</dt>
                      <dd className="flex flex-wrap gap-2">
                        {p.validation.map((v) => (
                          <span key={v} className="rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-[13px] text-white">
                            {v}
                          </span>
                        ))}
                      </dd>
                    </div>
                  )}
                  <div className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-4">
                    <dt className="label text-[11px] text-white/40">What it shows</dt>
                    <dd className="leading-relaxed text-white">{p.demonstrates}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-night-line pt-4">
                  <span className="font-mono text-[11px] text-white/40">{p.tools}</span>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto rounded-full border border-white/15 px-4 py-2 text-sm text-white/85 transition-colors hover:border-flame hover:text-white"
                    >
                      {p.cta ?? "View project"} ↗
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
