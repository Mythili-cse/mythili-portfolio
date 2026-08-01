import { motion } from 'framer-motion'
import { Award, BrainCircuit, ScrollText, type LucideIcon } from 'lucide-react'
import Reveal from './Reveal'
import { certifications } from '../data/portfolio'

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  'brain-circuit': BrainCircuit,
  certificate: ScrollText,
}

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <Reveal>
        <p className="section-eyebrow">Certifications</p>
        <h2 className="section-heading mt-3 max-w-xl">Learning, formalized</h2>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const Icon = iconMap[cert.icon] ?? Award
          return (
            <Reveal key={cert.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(63,224,208,0.4)' }}
                className="flex h-full items-start gap-4 rounded-2xl glass p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet/20 to-cyan/20 text-cyan">
                  <Icon size={17} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold leading-snug text-ink-primary">
                    {cert.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-ink-muted">{cert.issuer}</p>
                </div>
              </motion.div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
