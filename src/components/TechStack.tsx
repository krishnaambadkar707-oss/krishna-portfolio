import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { skillCategories, skills, type SkillCategory } from '../data/skills'
import SectionHeader from './SectionHeader'

type Filter = 'All' | SkillCategory

function Marquee({ reverse = false }: { reverse?: boolean }) {
  const list = reverse ? [...skills].reverse() : skills
  const row = [...list, ...list]
  return (
    <div className="marquee overflow-hidden" aria-hidden>
      <div className={`flex w-max gap-10 whitespace-nowrap py-3 ${reverse ? 'marquee-track-rev' : 'marquee-track'}`}>
        {row.map((s, i) => (
          <span key={`${s.name}-${i}`} className="flex items-center gap-10 font-display text-4xl font-light text-paper/80 md:text-6xl">
            {s.name}
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  const [filter, setFilter] = useState<Filter>('All')
  const filters: Filter[] = ['All', ...skillCategories]
  const visible = filter === 'All' ? skills : skills.filter((s) => s.category === filter)

  return (
    <section id="stack" className="py-28 md:py-40">
      <div className="container-x">
        <SectionHeader label="02 — Technology" title="The tools behind the work." />
      </div>

      <div className="mb-20 space-y-2 border-y border-line py-6">
        <Marquee />
        <Marquee reverse />
      </div>

      <div className="container-x">
        <div role="tablist" aria-label="Filter technologies by category" className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                filter === f ? 'text-ink' : 'text-mute hover:text-paper'
              }`}
            >
              {filter === f && (
                <motion.span layoutId="stack-tab" className="absolute inset-0 rounded-full bg-accent" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>

        <motion.ul layout className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((s) => (
              <motion.li
                layout
                key={s.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden bg-ink p-6 md:p-8"
              >
                <span className="absolute inset-x-0 bottom-0 h-0 bg-accent/10 transition-all duration-500 group-hover:h-full" aria-hidden />
                <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" aria-hidden />
                <p className="relative text-xs text-mute">{s.category}</p>
                <p className="relative mt-6 font-display text-2xl font-light transition-transform duration-500 group-hover:translate-x-1.5 md:text-3xl">
                  {s.name}
                </p>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  )
}
