import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <nav
          aria-label="Primary"
          className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 md:px-6 ${
            scrolled ? 'border-line bg-ink/60 backdrop-blur-md' : 'border-transparent bg-transparent'
          }`}
        >
          <a href="#home" className="font-display text-xl tracking-tight whitespace-nowrap" aria-label="Krishna Ambadkar, home">
            Krishna Ambadkar<span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-mute transition-colors duration-300 hover:text-paper">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group hidden items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm transition-colors duration-300 hover:border-accent hover:text-accent md:inline-flex"
            >
              Let&apos;s Talk
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative h-9 w-9 md:hidden"
            >
              <motion.span
                className="absolute left-2 right-2 top-[13px] h-px bg-paper"
                animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="absolute bottom-[13px] left-2 right-2 h-px bg-paper"
                animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-8 md:hidden"
          >
            <ul className="space-y-2">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a href={item.href} onClick={() => setOpen(false)} className="block font-display text-5xl font-light leading-tight">
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
