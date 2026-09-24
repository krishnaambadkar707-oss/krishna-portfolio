import Counter from './Counter'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const stats = [
  { node: <Counter to={12} suffix="+" />, label: 'Projects' },
  { node: <Counter to={6} />, label: 'Deployed Applications' },
  { node: <Counter to={8.55} decimals={2} />, label: 'CGPA through 2nd year' },
  { node: <Counter to={2026} from={2000} duration={1.4} />, label: 'Hackathon' },
]

export default function About() {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="container-x">
        <SectionHeader label="01 — About" title="I build systems that turn intelligence into useful experiences." />

        <div className="grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-5 md:col-start-2">
            <p className="text-lg leading-relaxed">
              Krishna Sunil Ambadkar is a third-year B.Tech student specializing in Artificial Intelligence &amp; Data
              Science, with hands-on experience building AI/ML, Generative AI, RAG, backend API, data analytics, and
              interactive full-stack applications.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="text-lg leading-relaxed text-mute">
              His project work spans document intelligence, LLM applications, AI companions, computer vision, traffic
              intelligence, predictive analytics, signal processing, and data-driven applications.
            </p>
          </Reveal>
        </div>

        <dl className="mt-24 grid grid-cols-2 gap-y-12 border-t border-line pt-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <dd className="font-display text-6xl font-light tracking-tight md:text-7xl">{s.node}</dd>
              <dt className="mt-3 text-sm text-mute">{s.label}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
