import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-5">
            <div className="font-mono text-sm text-ink-muted">
              <span className="text-violet-soft">const</span>{' '}
              <span className="text-cyan">engineer</span> <span className="text-ink-faint">=</span>{' '}
              <span className="text-ink-primary">init()</span>
              <span className="animate-blink text-cyan">_</span>
            </div>
            <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-soft to-cyan"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
