import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

const CODE_LINE = `const engineer = { name: "Mythili L", focus: "AI + Full Stack" };`

function useTypewriter(text: string, speed = 32, startDelay = 400) {
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let timeout: ReturnType<typeof setTimeout>
    const startTimer = setTimeout(() => {
      const tick = () => {
        i += 1
        setOutput(text.slice(0, i))
        if (i < text.length) {
          timeout = setTimeout(tick, speed)
        } else {
          setDone(true)
        }
      }
      tick()
    }, startDelay)
    return () => {
      clearTimeout(startTimer)
      clearTimeout(timeout)
    }
  }, [text, speed, startDelay])

  return { output, done }
}

export default function Hero() {
  const { output, done } = useTypewriter(CODE_LINE)

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pt-28 pb-20"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs text-ink-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          Open to Internships &amp; Placements
        </motion.div>

        <div className="mb-6 h-6 font-mono text-xs sm:text-sm text-ink-muted">
          <span className="text-violet-soft">$</span>{' '}
          <span>{output}</span>
          <span className={done ? 'animate-blink' : ''}>_</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-5 font-display text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-violet-soft to-cyan sm:text-2xl"
        >
          {profile.title} · {profile.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="mt-6 max-w-xl text-balance text-base text-ink-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary" onClick={(e) => {
            e.preventDefault()
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            View Projects
          </a>
          <a href={profile.resumeUrl} download className="btn-ghost">
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex items-center gap-5 text-ink-muted"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-cyan"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-cyan"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:text-cyan"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 text-ink-faint transition-colors hover:text-cyan"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  )
}
