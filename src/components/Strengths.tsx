import { strengths } from '../data/skills'
import Reveal from './Reveal'

export default function Strengths() {
  return (
    <section id="strengths" className="py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="label mb-10">Core strengths</p>
        </Reveal>
        <ul className="flex flex-wrap gap-x-10 gap-y-4">
          {strengths.map((s, i) => (
            <li key={s}>
              <Reveal delay={i * 0.05}>
                <span className="cursor-default font-display text-3xl font-light text-paper/60 transition-colors duration-300 hover:text-accent md:text-5xl">
                  {s}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
