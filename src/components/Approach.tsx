import { principles } from '../data/journey'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Approach() {
  return (
    <section id="approach" className="border-t border-line py-28 md:py-40">
      <div className="container-x">
        <SectionHeader label="07 — Approach" title="How I work." />

        <ol className="border-t border-line">
          {principles.map((p, i) => (
            <li key={p.number}>
              <Reveal delay={i * 0.05}>
                <div className="group grid items-baseline gap-2 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
                  <span className="text-sm text-accent md:col-span-1">{p.number}</span>
                  <h3 className="font-display text-4xl font-light transition-transform duration-500 group-hover:translate-x-3 md:col-span-6 md:text-6xl">{p.title}</h3>
                  <p className="text-mute md:col-span-5 md:text-lg">{p.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
