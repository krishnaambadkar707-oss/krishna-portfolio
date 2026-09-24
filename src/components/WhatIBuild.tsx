import { buildAreas } from '../data/journey'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function WhatIBuild() {
  return (
    <section id="build" className="py-28 md:py-40">
      <div className="container-x">
        <SectionHeader label="06 — What I Build" title="Four areas I work in." />

        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          {buildAreas.map((a, i) => (
            <Reveal key={a.number} delay={(i % 2) * 0.1} className="bg-ink">
              <article className="group relative h-full min-h-[320px] overflow-hidden p-8 md:p-12">
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-0 bg-accent/[0.07] transition-all duration-700 group-hover:h-full" />
                <p className="outline-text relative font-display text-7xl font-light leading-none transition-transform duration-700 group-hover:-translate-y-1 md:text-8xl">
                  {a.number}
                </p>
                <h3 className="relative mt-16 font-display text-3xl font-light leading-tight md:text-4xl">{a.title}</h3>
                <p className="relative mt-4 max-w-md leading-relaxed text-mute">{a.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
