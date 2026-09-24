import { journey } from '../data/journey'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Journey() {
  return (
    <section id="journey" className="py-28 md:py-40">
      <div className="container-x">
        <SectionHeader label="05 — Journey" title="The path so far." />

        <ol className="border-t border-line">
          {journey.map((j, i) => (
            <li key={`${j.when}-${j.title}`}>
              <Reveal delay={0.04 * i}>
                <div className="group grid gap-2 border-b border-line py-8 transition-colors duration-500 hover:bg-white/[0.02] md:grid-cols-12 md:gap-8 md:px-4 md:py-10">
                  <p className="font-display text-2xl font-light text-accent md:col-span-3 md:text-3xl">{j.when}</p>
                  <h3 className="text-xl transition-transform duration-500 group-hover:translate-x-2 md:col-span-5 md:text-2xl">{j.title}</h3>
                  {j.detail && <p className="text-mute md:col-span-4">{j.detail}</p>}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
