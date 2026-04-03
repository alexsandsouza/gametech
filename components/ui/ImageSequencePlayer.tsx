'use client'

import { useEffect, useRef, useState } from 'react'

const FRAME_COUNT = 80
const BASE = '/Woman_reading_glowing/Woman_reading_glowing_202604031050_'

const frames = Array.from(
  { length: FRAME_COUNT },
  (_, i) => `${BASE}${String(i).padStart(3, '0')}.jpg`
)

export default function ImageSequencePlayer({ fps = 24 }: { fps?: number }) {
  const [loaded, setLoaded] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const frameRef = useRef(0)

  // Preload and store image objects in memory
  useEffect(() => {
    let loadedCount = 0
    const imgObjs: HTMLImageElement[] = []

    frames.forEach((src, idx) => {
      const img = new window.Image()
      img.src = src
      img.onload = () => {
        loadedCount++
        imgObjs[idx] = img
        if (loadedCount === frames.length) {
          imagesRef.current = imgObjs
          setLoaded(true)
        }
      }
      img.onerror = () => {
        loadedCount++
        imgObjs[idx] = img
        if (loadedCount === frames.length) {
          imagesRef.current = imgObjs
          setLoaded(true)
        }
      }
    })
  }, [])

  // Canvas paint loop
  useEffect(() => {
    if (!loaded) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let lastTime = 0
    let rafId: number
    const interval = 1000 / fps

    const tick = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp
      const deltaTime = timestamp - lastTime

      if (deltaTime >= interval) {
        lastTime = timestamp
        frameRef.current = (frameRef.current + 1) % FRAME_COUNT

        const img = imagesRef.current[frameRef.current]
        if (img && img.complete) {
          // Clear and draw the current frame to the canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        }
      }
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [loaded, fps])

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

        {/* Canvas for High-Performance rendering */}
        <canvas
          ref={canvasRef}
          width={1024}
          height={1024}
          className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
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
