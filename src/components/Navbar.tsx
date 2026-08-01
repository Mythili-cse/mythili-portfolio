import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
            scrolled ? 'glass shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : ''
          }`}
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="font-display text-lg font-semibold tracking-tight"
          >
            <span className="text-ink-primary">Mythili</span>
            <span className="text-cyan">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-8 font-body text-sm text-ink-muted">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleClick(l.href)}
                  className="transition-colors hover:text-ink-primary"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleClick('#contact')}
            className="hidden md:inline-flex btn-primary !py-2 !px-5 !text-xs"
          >
            Let&apos;s Talk
          </button>

          <button
            className="md:hidden text-ink-primary"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-6 mt-2 overflow-hidden rounded-2xl glass md:hidden"
          >
            <ul className="flex flex-col gap-1 p-3 font-body text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleClick(l.href)}
                    className="block w-full rounded-lg px-3 py-2.5 text-left text-ink-muted transition-colors hover:bg-white/5 hover:text-ink-primary"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
