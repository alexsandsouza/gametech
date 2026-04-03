'use client'

import { motion } from 'framer-motion'
import StarParticles from '@/components/ui/StarParticles'
import TypewriterText from '@/components/ui/TypewriterText'
import ImageSequencePlayer from '@/components/ui/ImageSequencePlayer'

const AVATARS = [
  { initials: 'CR', color: '#00E5A0' },
  { initials: 'MS', color: '#00B4FF' },
  { initials: 'AJ', color: '#7C3AED' },
  { initials: 'LP', color: '#F59E0B' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 65% 40%, rgba(0,229,160,0.10) 0%, transparent 55%), radial-gradient(ellipse at 15% 75%, rgba(0,180,255,0.08) 0%, transparent 55%), #020B18' }}
    >
      <StarParticles count={70} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Left col — text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={item} className="inline-flex">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                style={{
                  background: 'rgba(0,229,160,0.1)',
                  border: '1px solid rgba(0,229,160,0.3)',
                  color: '#00E5A0',
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse-slow" style={{ background: '#00E5A0' }} />
                🇧🇷 O único método 100% gamificado do Brasil
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
              Domine{' '}
              <span className="gradient-text">Inteligência Artificial</span>{' '}
              na Prática - e Saia na Frente
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={item} className="h-8 flex items-center mb-8">
              <TypewriterText />
            </motion.div>

            {/* Social proof */}
            <motion.div variants={item} className="flex items-center gap-3 mb-10">
              <div className="flex items-center">
                {AVATARS.map((av, i) => (
                  <div
                    key={av.initials}
                    className="w-9 h-9 rounded-full border-2 border-bg flex items-center justify-center text-xs font-bold text-bg"
                    style={{
                      marginLeft: i > 0 ? '-10px' : '0',
                      background: av.color,
                      zIndex: AVATARS.length - i,
                      position: 'relative',
                    }}
                  >
                    {av.initials}
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted">
                <span className="text-white font-semibold">+12.000 profissionais</span>
                <br />
                <span>já transformaram sua carreira</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(0,229,160,0.4)' }}
                whileTap={{ scale: 0.98 }}
                href="#precos"
                className="btn-gradient flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold"
              >
                <span className="text-lg">▶</span>
                Começar grátis agora
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#como-funciona"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-medium text-muted hover:text-white glass-card border border-white/[0.08] hover:border-white/20 transition-all duration-200"
              >
                Ver como funciona
                <span>→</span>
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted">
              <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Grátis para começar</span>
              <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Sem cartão de crédito</span>
              <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Cancele quando quiser</span>
            </motion.div>
          </motion.div>

          {/* Right col — image sequence + floating badges */}
          <div className="flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-[520px]">
              <ImageSequencePlayer fps={24} />

              {/* Floating XP badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 -right-4 glass-card px-3 py-2 shadow-lg z-10"
                style={{ border: '1px solid rgba(0,229,160,0.35)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">🎉</span>
                  <div>
                    <div className="text-xs font-semibold text-white whitespace-nowrap">+150 XP ganhos!</div>
                    <div className="text-xs text-muted">Missão completa</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge unlock */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-6 -left-4 glass-card px-3 py-2 shadow-lg z-10"
                style={{ border: '1px solid rgba(0,180,255,0.35)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">🏅</span>
                  <div>
                    <div className="text-xs font-semibold text-white whitespace-nowrap">Badge desbloqueado!</div>
                    <div className="text-xs" style={{ color: '#00B4FF' }}>AI Expert</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #020B18)' }} />
    </section>
  )
}
