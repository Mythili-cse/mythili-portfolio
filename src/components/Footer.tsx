import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 pb-10 pt-6">
      <div className="flex flex-col items-center gap-6 border-t border-white/[0.06] pt-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-ink-primary">{profile.name}</p>
          <p className="mt-1 font-mono text-xs text-ink-faint">
            Designed &amp; built with React, TypeScript &amp; Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-5 text-ink-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-cyan">
            <Github size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-cyan">
            <Linkedin size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-cyan">
            <Mail size={17} />
          </a>
        </div>

        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} Mythili L. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
