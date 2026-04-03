'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export type Slide = {
  id: string
  title: string
  content: string
  duration: number // in seconds
  icon: string
}

interface SlidePlayerProps {
  slides: Slide[]
  onComplete?: () => void
}

export default function SlidePlayer({ slides, onComplete }: SlidePlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0) // 0 to 100
  
  const lastTimeRef = useRef<number>(0)
  const rafRef = useRef<number>()
  const timeElapsed = useRef<number>(0)

  useEffect(() => {
    if (!isPlaying) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      return
    }

    const currentSlideDuration = slides[currentIndex]?.duration * 1000 || 5000

    const tick = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time
      const deltaTime = time - lastTimeRef.current
      lastTimeRef.current = time

      timeElapsed.current += deltaTime
      const newProgress = (timeElapsed.current / currentSlideDuration) * 100

      if (newProgress >= 100) {
        // Slide finished
        if (currentIndex < slides.length - 1) {
          setCurrentIndex(prev => prev + 1)
          timeElapsed.current = 0
          setProgress(0)
        } else {
          // All slides finished
          setIsPlaying(false)
          setProgress(100)
          onComplete?.()
          return
        }
      } else {
        setProgress(newProgress)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      lastTimeRef.current = 0
    }
  }, [currentIndex, isPlaying, slides, onComplete])

  const currentSlide = slides[currentIndex]

  const handleSeek = (index: number) => {
    setCurrentIndex(index)
    timeElapsed.current = 0
    setProgress(0)
    setIsPlaying(true)
  }

  const togglePlay = () => {
    if (!isPlaying && progress >= 100 && currentIndex === slides.length - 1) {
      // Restart from beginning if finished
      setCurrentIndex(0)
      timeElapsed.current = 0
      setProgress(0)
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="w-full aspect-video bg-[#050C17] rounded-2xl border border-white/[0.08] relative overflow-hidden flex flex-col group shadow-2xl">
      
      {/* Background ambient glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-1000" 
        style={{ 
          background: `radial-gradient(ellipse at center, ${isPlaying ? '#00B4FF' : '#4B5563'} 0%, transparent 70%)` 
        }} 
      />

      {/* Main Content Area */}
      <div className="flex-1 relative flex items-center justify-center p-8 sm:p-12 z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          {currentSlide && (
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center text-center max-w-2xl"
            >
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 12, delay: 0.2 }}
                className="w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-white/[0.03] border border-white/[0.08] shadow-[0_0_30px_rgba(0,180,255,0.15)] backdrop-blur-md"
              >
                <span className="text-4xl">{currentSlide.icon}</span>
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight drop-shadow-md">
                {currentSlide.title}
              </h2>
              
              <p className="text-lg sm:text-xl text-muted leading-relaxed drop-shadow-sm">
                {currentSlide.content}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Controls Overlay (appears on hover) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-4 sm:p-6 pb-8">
        
        {/* Play/Pause Button centered when paused */}
        {!isPlaying && (
           <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
             <button 
               onClick={togglePlay}
               className="w-20 h-20 rounded-full bg-accent text-[#020B18] flex items-center justify-center shadow-[0_0_40px_rgba(0,229,160,0.4)] hover:scale-105 transition-transform"
             >
               <span className="text-3xl ml-2">▶</span>
             </button>
           </div>
        )}

      </div>

      {/* Bottom Control Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/40 backdrop-blur-md border-t border-white/[0.06] flex flex-col justify-end z-30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        
        <div className="flex-1 flex items-center px-4 gap-4">
          <button 
            onClick={togglePlay}
            className="w-8 h-8 flex items-center justify-center text-white hover:text-accent transition-colors"
          >
            {isPlaying ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            )}
          </button>

          <div className="text-xs font-semibold text-muted font-mono w-12 blur-[0.3px]">
            {String(currentIndex + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
          </div>
        </div>

        {/* Global Segments Progress Bar */}
        <div className="flex gap-1 h-1.5 w-full bg-white/[0.02]">
          {slides.map((_, idx) => (
            <div 
              key={idx} 
              className="flex-1 h-full bg-white/[0.1] relative cursor-pointer overflow-hidden group/bar"
              onClick={() => handleSeek(idx)}
            >
              <div 
                className={`absolute inset-y-0 left-0 bg-accent transition-all duration-75`}
                style={{ 
                  width: idx < currentIndex ? '100%' : idx === currentIndex ? `${progress}%` : '0%',
                  boxShadow: idx === currentIndex ? '0 0 10px rgba(0,229,160,0.5)' : 'none'
                }}
              />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/bar:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}
