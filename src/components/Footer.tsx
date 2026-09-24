import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col items-start justify-between gap-6 text-sm text-mute md:flex-row md:items-center">
        <p>
          <span className="font-display text-lg text-paper">
            Krishna Ambadkar<span className="text-accent">.</span>
          </span>{' '}
          &copy; {new Date().getFullYear()} Krishna Sunil Ambadkar. Amravati, Maharashtra, India.
        </p>
        <a href="#home" className="group inline-flex items-center gap-2 transition-colors hover:text-paper">
          Back to top
          <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-1" />
        </a>
      </div>
    </footer>
  )
}
