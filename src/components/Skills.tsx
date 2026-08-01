import { motion } from 'framer-motion'
import { Code2, Sparkles, Terminal, type LucideIcon } from 'lucide-react'
import Reveal from './Reveal'
import { skills } from '../data/portfolio'

const iconMap: Record<string, LucideIcon> = {
  'code-2': Code2,
  sparkles: Sparkles,
  terminal: Terminal,
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <Reveal>
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-heading mt-3 max-w-xl">A toolkit built for building</h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = iconMap[group.icon] ?? Code2
          return (
            <Reveal key={group.category} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl glass p-6"
              >
                <div
                  className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: 'radial-gradient(circle, #7C6CF6, transparent 70%)' }}
                />
                <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet/20 to-cyan/20 text-cyan">
                  <Icon size={20} />
                </div>
                <h3 className="relative font-display text-base font-semibold text-ink-primary">
                  {group.category}
                </h3>
                <div className="relative mt-4 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-ink-muted transition-colors group-hover:text-ink-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
