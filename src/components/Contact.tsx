import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data/portfolio'

type Status = 'idle' | 'sent'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <Reveal>
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-heading mt-3 max-w-xl">Let&apos;s build something worth shipping</h2>
        <p className="mt-4 max-w-lg text-sm text-ink-muted sm:text-base">
          Open to internship and placement conversations. The fastest way to reach me is email —
          the form below opens a message ready to send.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-[0.9fr_1.1fr]">
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-between gap-8 rounded-3xl glass p-7">
            <div className="flex flex-col gap-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-cyan"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.04]">
                  <Mail size={16} />
                </span>
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-cyan"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.04]">
                  <Github size={16} />
                </span>
                github.com/Mythili-cse
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-cyan"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.04]">
                  <Linkedin size={16} />
                </span>
                linkedin.com/in/mythili-l
              </a>
              <div className="flex items-center gap-3 text-sm text-ink-muted">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.04]">
                  <MapPin size={16} />
                </span>
                {profile.location}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-3xl glass p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-mono text-xs text-ink-faint">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-ink-primary outline-none transition-colors focus:border-cyan/50"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-xs text-ink-faint">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-ink-primary outline-none transition-colors focus:border-cyan/50"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-xs text-ink-faint">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-ink-primary outline-none transition-colors focus:border-cyan/50"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary mt-2 justify-center"
            >
              Send Message <Send size={15} />
            </motion.button>
            {status === 'sent' && (
              <p className="text-center font-mono text-xs text-cyan">
                Your email client should be open — thanks for reaching out.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
