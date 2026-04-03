'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { FEATURES } from '@/lib/data'

export default function Features() {
  const [large, rest] = [FEATURES.filter(f => f.large), FEATURES.filter(f => !f.large)]

  return (
    <section id="recursos" className="section-pad" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Recursos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Tudo que você precisa para{' '}
            <span className="gradient-text">dominar IA</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Uma plataforma completa com as ferramentas, metodologia e comunidade para transformar sua carreira.
          </p>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Hero card — full width */}
          <AnimatedSection className="md:col-span-2">
            {large.map((f) => (
              <motion.div
                key={f.id}
                whileHover={{ scale: 1.01, borderColor: 'rgba(0,229,160,0.35)' }}
                className="glass-card card-hover border border-white/[0.08] p-8 h-full relative overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full opacity-10 pointer-events-none"
                  style={{ background: f.accent, filter: 'blur(60px)' }} />

                <div className="text-5xl mb-5">{f.icon}</div>
                <h3 className="text-2xl font-black text-white mb-2">{f.title}</h3>
                <p className="text-muted leading-relaxed mb-6 max-w-md">{f.description}</p>
                {f.stat && (
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                    style={{ background: `${f.accent}15`, color: f.accent, border: `1px solid ${f.accent}30` }}
                  >
                    📈 {f.stat}
                  </div>
                )}
                {/* Mini mockup */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {['Nível 1', 'Nível 5', 'Nível 12'].map((lvl, i) => (
                    <div key={lvl} className="mockup-card p-3 text-center">
                      <div className="text-xl mb-1">{['🌱', '🔥', '🏆'][i]}</div>
                      <div className="text-xs text-muted">{lvl}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatedSection>

          {/* Side card stack */}
          <AnimatedSection className="flex flex-col gap-5" delay={0.1}>
            {rest.slice(0, 2).map((f, i) => (
              <motion.div
                key={f.id}
                whileHover={{ scale: 1.02, borderColor: `${f.accent}40` }}
                className="glass-card card-hover border border-white/[0.08] p-6 relative overflow-hidden flex-1"
                style={{ transition: 'border-color 0.3s' }}
              >
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-10 pointer-events-none"
                  style={{ background: f.accent, filter: 'blur(30px)' }} />
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-black text-white mb-1.5">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </AnimatedSection>

          {/* Bottom row — 3 cards */}
          {rest.slice(2).map((f, i) => (
            <AnimatedSection key={f.id} delay={0.1 + i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02, borderColor: `${f.accent}40` }}
                className="glass-card card-hover border border-white/[0.08] p-6 h-full relative overflow-hidden"
              >
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-10 pointer-events-none"
                  style={{ background: f.accent, filter: 'blur(30px)' }} />
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-black text-white mb-1.5">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
