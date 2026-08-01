import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Github } from 'lucide-react'
import Reveal from './Reveal'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <Reveal>
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-heading mt-3 max-w-xl">Selected work</h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:mt-16">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.1}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl glass p-7 sm:p-10"
            >
              <div
                className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-25"
                style={{ background: 'radial-gradient(circle, #3FE0D0, transparent 70%)' }}
              />

              <div className="relative grid gap-8 sm:grid-cols-[1.1fr_0.9fr]">
                <div>
                  {project.featured && (
                    <span className="section-eyebrow">Featured Project</span>
                  )}
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink-primary sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost !py-2.5 !text-xs"
                      >
                        <Github size={15} /> View Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="btn-primary !py-2.5 !text-xs">
                        Live Demo <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <ul className="flex flex-col gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink-muted">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
