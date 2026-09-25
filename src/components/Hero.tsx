import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

const headline = ['Building intelligent', 'systems for', 'real-world problems.']

const meta = [
  { value: 'Amravati, India', hint: 'Based in' },
  { value: 'AI & Data Science', hint: 'B.Tech' },
  { value: '12 Projects', hint: 'Built' },
  { value: '6 Deployed Applications', hint: 'Live' },
]

export default function Hero() {
  const { scrollY } = useScroll()
  const ringY = useTransform(scrollY, [0, 900], [0, 140])

  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-10 pt-32">
      {/* Backdrop: fine concentric rings and one soft glow */}
      <motion.div style={{ y: ringY }} aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-18%] top-[6%] h-[70vw] max-h-[900px] w-[70vw] max-w-[900px] rounded-full bg-accent/[0.06] blur-3xl" />
        <svg viewBox="0 0 800 800" className="absolute right-[-12%] top-[2%] h-[64vw] max-h-[820px] w-[64vw] max-w-[820px] text-paper">
          {[380, 300, 220, 140, 60].map((r) => (
            <circle key={r} cx="400" cy="400" r={r} fill="none" stroke="currentColor" strokeOpacity="0.08" />
          ))}
          <line x1="20" y1="400" x2="780" y2="400" stroke="currentColor" strokeOpacity="0.08" />
          <line x1="400" y1="20" x2="400" y2="780" stroke="currentColor" strokeOpacity="0.08" />
          <circle cx="400" cy="20" r="4" fill="#cfae6f" />
          <circle cx="620" cy="400" r="3" fill="#cfae6f" fillOpacity="0.7" />
          <circle cx="180" cy="400" r="3" fill="currentColor" fillOpacity="0.4" />
        </svg>
      </motion.div>

      <div className="container-x relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="label mb-8"
        >
          AI / GenAI / ML Engineering
        </motion.p>

        <h1 className="font-display text-[clamp(2.8rem,8vw,8rem)] font-light leading-[0.98] tracking-[-0.03em]">
          {headline.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.15, delay: 0.3 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 max-w-3xl"
        >
          <p className="text-xl leading-snug md:text-2xl font-light text-paper">
            AI &amp; Data Science engineer building practical AI, GenAI, ML and full-stack applications.
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-mute">
            B.Tech student focused on Artificial Intelligence, Generative AI, Machine Learning, data analytics,
            backend APIs, and intelligent user experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Projects
              <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-4 text-sm transition-colors duration-300 hover:border-paper"
            >
              Let&apos;s Connect
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16 grid grid-cols-2 border-t border-line md:grid-cols-4"
        >
          {meta.map((m) => (
            <div key={m.value} className="py-5 md:border-l md:border-line md:pl-5 md:first:border-l-0 md:first:pl-0">
              <dt className="text-xs text-mute">{m.hint}</dt>
              <dd className="mt-1 text-sm md:text-base">{m.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div aria-hidden className="absolute bottom-10 right-6 hidden flex-col items-center gap-3 md:right-12 md:flex">
        <span className="text-xs text-mute [writing-mode:vertical-rl]">Scroll</span>
        <span className="relative block h-12 w-px bg-line">
          <span className="scroll-dot absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent" />
        </span>
      </div>
    </section>
  )
}
