import { useEffect, useRef, useState } from 'react'

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    setEnabled(isFinePointer)
    if (!isFinePointer) return

    let x = 0
    let y = 0
    let targetX = 0
    let targetY = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const animate = () => {
      x += (targetX - x) * 0.12
      y += (targetY - y) * 0.12
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 100}px, ${y - 100}px, 0)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[200px] w-[200px] rounded-full opacity-[0.12] blur-[60px] will-change-transform"
      style={{ background: 'radial-gradient(circle, #7C6CF6 0%, #3FE0D0 60%, transparent 70%)' }}
      aria-hidden="true"
    />
  )
}
