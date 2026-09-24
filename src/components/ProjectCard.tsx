import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import ProjectVisual from './ProjectVisual'

export function DeployedBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-3 py-1 text-xs text-accent">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      Deployed
    </span>
  )
}

export function ProjectLinks({ project }: { project: Project }) {
  const base = 'inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 text-sm transition-colors duration-300'
  return (
    <div className="flex flex-wrap gap-3">
      {project.github ? (
        <a href={project.github} target="_blank" rel="noreferrer" className={`${base} border-line hover:border-paper`}>
          GitHub <ArrowUpRight size={14} />
        </a>
      ) : (
        <span aria-disabled="true" title="Repository link not added yet" className={`${base} cursor-not-allowed border-dashed border-line text-mute`}>
          GitHub link soon
        </span>
      )}
      {project.deployed &&
        (project.demo ? (
          <a href={project.demo} target="_blank" rel="noreferrer" className={`${base} border-accent bg-accent text-ink hover:bg-transparent hover:text-accent`}>
            Live Demo <ArrowUpRight size={14} />
          </a>
        ) : (
          <span aria-disabled="true" title="Live demo link not added yet" className={`${base} cursor-not-allowed border-dashed border-accent/40 text-accent/70`}>
            Live demo link soon
          </span>
        ))}
    </div>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const flip = index % 2 === 1
  const isHero = project.id === 'nagpur-traffic-ai'

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.005 }}
      className="group relative overflow-hidden border border-line transition-colors duration-500 hover:border-accent/50"
    >
      <span aria-hidden className="absolute inset-x-0 top-0 z-10 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100" />

      <div className="grid lg:grid-cols-12">
        <div className={`relative overflow-hidden bg-[#0f0f10] ${flip ? 'lg:order-2 lg:col-span-6' : 'lg:col-span-7'} ${isHero ? 'min-h-[340px]' : 'min-h-[300px]'}`}>
          <span aria-hidden className="outline-text absolute left-6 top-4 z-10 font-display text-[7rem] font-light leading-none md:text-[10rem]">
            {project.number}
          </span>
          <div className="absolute inset-0 p-6 pt-24 transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:translate-x-2 group-hover:scale-[1.04] md:p-10 md:pt-28">
            {project.visual && <ProjectVisual kind={project.visual} />}
          </div>
          <span className="absolute bottom-4 right-5 text-xs text-mute">Illustration, screenshots to follow</span>
        </div>

        <div className={`flex flex-col justify-between gap-10 p-6 md:p-10 ${flip ? 'lg:col-span-6' : 'lg:col-span-5'}`}>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="label">{project.category}</p>
              {project.deployed && <DeployedBadge />}
            </div>

            <h3 className="mt-5 font-display text-3xl font-light leading-[1.1] transition-transform duration-500 group-hover:translate-x-1.5 md:text-4xl">
              {project.title}
            </h3>
            {project.subtitle && <p className="mt-2 text-mute">{project.subtitle}</p>}

            <p className="mt-6 leading-relaxed text-paper/85">{project.description}</p>

            {project.hackathon && (
              <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-relaxed">
                {project.hackathon.name}, {project.hackathon.year}
                <br />
                <span className="text-mute">Role: {project.hackathon.role}</span>
              </p>
            )}

            <ul className="mt-6 grid gap-x-6 gap-y-2 text-sm text-mute sm:grid-cols-2">
              {project.features.slice(0, isHero ? 6 : 6).map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-2 h-px w-3 shrink-0 bg-accent" />
                  {f}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology">
              {project.tech.map((t) => (
                <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-paper/80">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-end justify-between gap-4">
            <ProjectLinks project={project} />
            <span aria-hidden className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-line transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
              <ArrowUpRight size={20} className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
