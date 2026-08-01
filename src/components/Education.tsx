import { GraduationCap, Trophy } from 'lucide-react'
import Reveal from './Reveal'
import { education, achievements } from '../data/portfolio'

export default function Education() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="grid gap-6 sm:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl glass p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet/20 to-cyan/20 text-cyan">
              <GraduationCap size={20} />
            </div>
            <p className="section-eyebrow mt-6">Education</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-ink-primary">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-violet-soft">{education.field}</p>
            <p className="mt-4 text-sm text-ink-muted">{education.college}</p>
            <p className="text-sm text-ink-muted">{education.location}</p>
            <p className="mt-4 font-mono text-xs text-cyan">{education.graduation}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-3xl glass p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet/20 to-cyan/20 text-cyan">
              <Trophy size={20} />
            </div>
            <p className="section-eyebrow mt-6">Achievements</p>
            <ul className="mt-4 flex flex-col gap-3">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-sm text-ink-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
