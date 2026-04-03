'use client'

import { useEffect, useState, useRef } from 'react'

// Build the list of 80 frames: _000.jpg → _079.jpg
const FRAME_COUNT = 80
const BASE = '/Woman_reading_glowing/Woman_reading_glowing_202604031050_'

const frames = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `${BASE}${String(i).padStart(3, '0')}.jpg`  // 000, 001, 002 … 079
)

interface Props {
  fps?: number
}

export default function ImageSequencePlayer({ fps = 24 }: Props) {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded]   = useState(false)
  const loadedCount = useRef(0)
  const interval    = useRef<ReturnType<typeof setInterval>>()

  // Preload all frames
  useEffect(() => {
    frames.forEach((src) => {
      const img = new window.Image()
      img.src = src
      img.onload = () => {
        loadedCount.current += 1
        if (loadedCount.current >= frames.length) setLoaded(true)
      }
      img.onerror = () => {
        loadedCount.current += 1
        if (loadedCount.current >= frames.length) setLoaded(true)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Start animation once loaded
  useEffect(() => {
    if (!loaded) return
    const ms = Math.round(1000 / fps)
    interval.current = setInterval(() => {
      setCurrent((c) => (c + 1) % frames.length)
    }, ms)
    return () => clearInterval(interval.current)
  }, [loaded, fps])

  return (
    <div className="relative w-full max-w-[520px] mx-auto select-none">
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(ellipse, #00E5A0 0%, #00B4FF 60%, transparent 80%)',
        }}
      />

      {/* Frame container */}
      <div className="relative rounded-2xl overflow-hidden"
        style={{ aspectRatio: '1/1' }}
      >
        {/* Loading skeleton */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div className="flex gap-2">
              {[0,1,2].map((_, idx) => (
                <div
                  key={idx}
                  className="w-2.5 h-2.5 rounded-full animate-bounce"
                  style={{
                    background: '#00E5A0',
                    animationDelay: `${idx * 0.15}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Frames — only the current one is visible */}
        {loaded && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={frames[current]}
            alt="Woman reading glowing"
            className="w-full h-full object-cover"
            draggable={false}
          />
        )}

        {/* Subtle vignette overlay */}
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
