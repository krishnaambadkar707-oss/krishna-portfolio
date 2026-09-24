import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { links } from '../data/journey'
import Reveal from './Reveal'

/**
 * Connect the form by setting VITE_FORM_ENDPOINT (see .env.example), for example a Formspree URL:
 *   VITE_FORM_ENDPOINT=https://formspree.io/f/your-form-id
 * EmailJS / Resend / a custom API: replace the fetch() inside handleSubmit.
 * Until an endpoint is set, the form does not pretend to send anything.
 */
const ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? ''

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'unconfigured'

const contactLinks = [
  { label: 'GitHub', href: links.github, icon: Github, external: true },
  { label: 'LinkedIn', href: links.linkedin.startsWith('http') ? links.linkedin : `https://${links.linkedin}`, icon: Linkedin, external: true },
  { label: 'Email', href: `mailto:${links.email}`, icon: Mail, external: false },
]

const field =
  'w-full border-0 border-b border-line bg-transparent py-3 text-lg text-paper placeholder:text-mute/60 transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-0'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [draft, setDraft] = useState({ name: '', email: '', message: '' })

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!ENDPOINT) {
      setStatus('unconfigured')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(draft),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('sent')
      setDraft({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const mailto = `mailto:${links.email}?subject=${encodeURIComponent(`Hello from ${draft.name || 'your portfolio'}`)}&body=${encodeURIComponent(draft.message)}`

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-28 md:py-40">
      <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-3xl" />
      <div className="container-x relative">
        <Reveal>
          <p className="label">Contact</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-display text-[clamp(2.8rem,8.5vw,8rem)] font-light leading-[0.98] tracking-[-0.03em]">
            Let&apos;s build
            <br />
            something intelligent.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-xl text-lg text-mute">
            Have an AI idea, project opportunity, internship opportunity, or collaboration in mind?
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-4">
          {contactLinks.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="group inline-flex items-center gap-3 rounded-full border border-line px-6 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <Icon size={18} />
              {label}
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-24 max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-10" noValidate={false}>
            <div className="grid gap-10 md:grid-cols-2">
              <label className="block">
                <span className="text-sm text-mute">Name</span>
                <input required name="name" autoComplete="name" value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} className={field} placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-sm text-mute">Email</span>
                <input required type="email" name="email" autoComplete="email" value={draft.email} onChange={(e) => setDraft({ ...draft, email: e.target.value })} className={field} placeholder="you@example.com" />
              </label>
            </div>
            <label className="block">
              <span className="text-sm text-mute">Message</span>
              <textarea required name="message" rows={4} value={draft.message} onChange={(e) => setDraft({ ...draft, message: e.target.value })} className={`${field} resize-none`} placeholder="Tell me about your idea or opportunity" />
            </label>

            <div className="flex flex-wrap items-center gap-6">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>

              <p role="status" aria-live="polite" className="text-sm text-mute">
                {status === 'sent' && 'Message sent. Thank you, I will reply soon.'}
                {status === 'error' && 'Could not send the message. Please try again or use email.'}
                {status === 'unconfigured' && (
                  <>
                    This form is not connected to an email service yet.{' '}
                    <a href={mailto} className="text-accent underline underline-offset-4">
                      Send it from your email app instead
                    </a>
                    .
                  </>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
