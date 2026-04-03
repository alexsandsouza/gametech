'use client'

import { useEffect, useState, useRef } from 'react'

const BASE_COUNT = 442

export default function LiveCounter() {
  const [count, setCount] = useState(BASE_COUNT)
  const [displayed, setDisplayed] = useState(BASE_COUNT)
  const animRef = useRef<ReturnType<typeof setTimeout>>()

  // Animate number smoothly
  useEffect(() => {
    const start = displayed
    const end = count
    const diff = end - start
    if (diff === 0) return

    const steps = 20
    let step = 0
    const animate = () => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayed(Math.round(start + diff * eased))
      if (step < steps) {
        animRef.current = setTimeout(animate, 30)
      }
    }
    animate()
    return () => clearTimeout(animRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  // Vary count every 4-8 seconds
  useEffect(() => {
    const schedule = () => {
      const delay = Math.random() * 4000 + 4000
      setTimeout(() => {
        const delta = Math.floor(Math.random() * 10) - 5
        setCount((c) => Math.max(420, Math.min(480, c + delta)))
        schedule()
      }, delay)
    }
    schedule()
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full glass-card border border-white/10 shadow-lg backdrop-blur-xl">
      <span
        className="live-dot w-2.5 h-2.5 rounded-full flex-shrink-0"
        style={{ background: '#00E5A0' }}
      />
      <span className="text-sm font-semibold text-white/90 tabular-nums">
        {displayed.toLocaleString('pt-BR')} estudando agora
      </span>
    </div>
  )
}
