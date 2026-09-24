import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const steps = [
  { title: 'Problem', text: 'Traffic risk and police coverage across Nagpur.' },
  { title: 'Risk Analysis', text: 'Risk scoring, heatmaps and high-risk location ranking.' },
  { title: 'Deployment Decision', text: 'Unmanned-zone detection and personnel allocation with explainable recommendations.' },
  { title: 'Simulation', text: 'Dynamic redeployment, baseline vs recommended comparison.' },
  { title: 'Citizen Awareness', text: 'Citizen interface, traffic-risk awareness and reporting.' },
]

export default function Hackathon() {
  return (
    <section id="hackathon" className="border-y border-line bg-[#0e0e0f] py-28 md:py-40">
      <div className="container-x">
        <SectionHeader label="04 — Hackathon" title="From idea to deployed intelligence." />

        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="font-display text-3xl font-light leading-tight md:text-4xl">Manthan 4 Yuwa – Vikasit Nagpur</p>
            <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 text-sm">
              <dt className="text-mute">Year</dt>
              <dd>2026</dd>
              <dt className="text-mute">Role</dt>
              <dd>Full-Stack Developer</dd>
              <dt className="text-mute">Project</dt>
              <dd>Nagpur Traffic AI</dd>
            </dl>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-paper/90">
              Built collaboratively to support traffic-risk assessment, police deployment decision support, and
              citizen-facing traffic awareness.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-24">
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-accent/60 lg:block"
          />
          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="relative border-l border-line pl-6 lg:border-l-0 lg:pl-0">
                <Reveal delay={0.15 * i}>
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-accent lg:static lg:mb-8 lg:block" />
                  <p className="text-xs text-mute">Step {i + 1}</p>
                  <h3 className="mt-2 font-display text-2xl font-light">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
