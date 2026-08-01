import Reveal from './Reveal'
import { summary } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <Reveal>
        <p className="section-eyebrow">{summary.eyebrow}</p>
        <h2 className="section-heading mt-3 max-w-xl">{summary.heading}</h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:mt-14">
        {summary.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p className="max-w-3xl text-balance text-base leading-relaxed text-ink-muted sm:text-lg">
              {p}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
