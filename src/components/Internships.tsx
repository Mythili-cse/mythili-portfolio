import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import Reveal from './Reveal'
import { internships } from '../data/portfolio'

export default function Internships() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <Reveal>
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-heading mt-3 max-w-xl">Where I&apos;ve put it into practice</h2>
      </Reveal>

      <div className="relative mt-14 sm:mt-20">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-soft via-cyan to-transparent sm:left-[19px]" />

        <ol className="flex flex-col gap-10 sm:gap-14">
          {internships.map((item, i) => (
            <li key={item.company} className="relative pl-10 sm:pl-14">
              <Reveal delay={i * 0.12} y={16}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 + 0.1, type: 'spring' }}
                  className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full glass text-cyan sm:h-10 sm:w-10"
                >
                  <Briefcase size={15} />
                </motion.div>

                <div className="rounded-2xl glass p-6 transition-colors hover:border-violet-soft/30">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-ink-primary">
                      {item.company}
                    </h3>
                    <span className="font-mono text-xs text-cyan">{item.duration}</span>
                  </div>
                  {item.domain && (
                    <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-faint">
                      {item.domain}
                    </p>
                  )}
                  {item.project && (
                    <p className="mt-3 text-sm text-violet-soft">Project — {item.project}</p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
