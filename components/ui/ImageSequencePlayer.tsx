'use client'

import { useEffect, useRef, useState } from 'react'

const FRAME_COUNT = 80
const BASE = '/Woman_reading_glowing/Woman_reading_glowing_202604031050_'

const frames = Array.from(
  { length: FRAME_COUNT },
  (_, i) => `${BASE}${String(i).padStart(3, '0')}.jpg`
)

interface Props {
  fps?: number
}

export default function ImageSequencePlayer({ fps = 20 }: Props) {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const frameRef  = useRef(0)
  const rafRef    = useRef<number>()
  const lastRef   = useRef<number>()
  const loadedRef = useRef(0)
  const interval  = Math.round(1000 / fps)

  // Preload all frames once on mount
  useEffect(() => {
    let cancelled = false
    frames.forEach((src) => {
      const img = new window.Image()
      img.src   = src
      const done = () => {
        if (cancelled) return
        loadedRef.current += 1
        if (loadedRef.current >= frames.length) setLoaded(true)
      }
      img.onload  = done
      img.onerror = done
    })
    return () => { cancelled = true }
  }, [])

  // rAF loop — starts when loaded, never stops
  useEffect(() => {
    if (!loaded) return

    const tick = (ts: number) => {
      if (lastRef.current === undefined) lastRef.current = ts

      if (ts - lastRef.current >= interval) {
        lastRef.current = ts
        frameRef.current = (frameRef.current + 1) % FRAME_COUNT
        setCurrentFrame(frameRef.current)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [loaded, interval])

  return (
    <div className="relative w-full max-w-[520px] mx-auto select-none">
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none blur-3xl opacity-25"
        style={{
          background:
            'radial-gradient(ellipse, #00E5A0 0%, #00B4FF 60%, transparent 80%)',
        }}
      />

      {/* Frame container */}
      <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '1/1' }}>

        {/* Loading dots */}
        {!loaded && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <div className="flex gap-2">
              {[0, 1, 2].map((_, idx) => (
                <div
                  key={idx}
                  className="w-2.5 h-2.5 rounded-full animate-bounce"
                  style={{ background: '#00E5A0', animationDelay: `${idx * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Current frame */}
        {loaded && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={frames[currentFrame]}
            alt="GameTech.AI"
            className="w-full h-full object-cover"
            draggable={false}
          />
        )}

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 55%, rgba(2,11,24,0.55) 100%)',
          }}
        />
      </div>
    </div>
  )
}
