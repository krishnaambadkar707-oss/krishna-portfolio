import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionHeaderProps {
  label: string
  title: ReactNode
  intro?: string
}

export default function SectionHeader({ label, title, intro }: SectionHeaderProps) {
  return (
    <header className="mb-14 md:mb-20">
      <Reveal>
        <p className="label">{label}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 max-w-5xl font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">{intro}</p>
        </Reveal>
      )}
    </header>
  )
}
