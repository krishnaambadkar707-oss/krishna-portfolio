import { ArrowUpRight } from 'lucide-react'
import { experiments, featuredProjects } from '../data/projects'
import { DeployedBadge } from './ProjectCard'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-28 md:py-40">
      <div className="container-x">
        <SectionHeader
          label="03 — Selected Work"
          title="Four projects, built end to end."
          intro="Twelve projects in total, six of them deployed. These four show the range: retrieval, computer vision, conversational AI and decision support."
        />

        <div className="space-y-8 md:space-y-12">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mt-32 md:mt-44">
          <Reveal>
            <h3 className="font-display text-4xl font-light md:text-6xl">More Experiments</h3>
          </Reveal>

          <ul className="mt-14 border-t border-line">
            {experiments.map((p, i) => {
              const inner = (
                <>
                  <span className="font-display text-2xl text-mute transition-colors duration-500 group-hover:text-accent md:col-span-1">{p.number}</span>
                  <div className="md:col-span-4">
                    <h4 className="font-display text-2xl font-light transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">{p.title}</h4>
                    {p.subtitle && <p className="mt-1 text-sm text-mute transition-transform duration-500 group-hover:translate-x-2">{p.subtitle}</p>}
                    <p className="label mt-3">{p.category}</p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="leading-relaxed text-mute transition-colors duration-500 group-hover:text-paper/90">{p.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-paper/70">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-start justify-between gap-4 md:col-span-2 md:justify-end">
                    {p.deployed && <DeployedBadge />}
                    <ArrowUpRight size={22} aria-hidden className="text-mute transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                  </div>
                </>
              )
              const cls = 'group relative grid gap-5 border-b border-line py-9 transition-colors duration-500 hover:bg-white/[0.02] md:grid-cols-12 md:gap-8 md:px-4'
              return (
                <li key={p.id} className="list-none">
                  <Reveal delay={(i % 4) * 0.05}>
                    {p.github ? (
                      <a href={p.github} target="_blank" rel="noreferrer" className={cls}>
                        {inner}
                      </a>
                    ) : (
                      <div className={cls}>{inner}</div>
                    )}
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
