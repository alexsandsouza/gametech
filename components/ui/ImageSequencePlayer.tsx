'use client'

import { useEffect, useRef, useState } from 'react'

const FRAME_COUNT = 80
const BASE = '/Woman_reading_glowing/Woman_reading_glowing_202604031050_'
const frames = Array.from(
  { length: FRAME_COUNT },
  (_, i) => `${BASE}${String(i).padStart(3, '0')}.jpg`
)

export default function ImageSequencePlayer({ fps = 20 }: { fps?: number }) {
  const [loaded, setLoaded] = useState(false)

  // Refs — never trigger re-renders
  const imgRef    = useRef<HTMLImageElement>(null)
  const frameRef  = useRef(0)
  const interval  = 1000 / fps

  /* ── Preload all frames ─────────────────────────────── */
  useEffect(() => {
    let count = 0
    frames.forEach((src) => {
      const img = new window.Image()
      img.src = src
      const done = () => { if (++count >= frames.length) setLoaded(true) }
      img.onload  = done
      img.onerror = done
    })
  }, [])

  /* ── Animation loop — direct DOM mutation ────────── */
  useEffect(() => {
    if (!loaded) return

    const timer = setInterval(() => {
      frameRef.current = (frameRef.current + 1) % FRAME_COUNT
      if (imgRef.current) {
        imgRef.current.src = frames[frameRef.current]
      }
    }, interval)

    return () => clearInterval(timer)
  }, [loaded, interval])

  return (
    <div className="relative w-full max-w-[520px] mx-auto select-none">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none blur-3xl opacity-25"
        style={{
          background:
            'radial-gradient(ellipse, #00E5A0 0%, #00B4FF 60%, transparent 80%)',
        }}
      />

      {/* Frame container */}
      <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '1/1' }}>

        {/* Loading skeleton */}
        {!loaded && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <div className="flex gap-2">
              {[0, 1, 2].map((_, i) => (
                <div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full animate-bounce"
                  style={{ background: '#00E5A0', animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Single <img> — src swapped directly via ref, zero React state */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={frames[0]}
          alt="GameTech.AI"
          className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          draggable={false}
        />

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
