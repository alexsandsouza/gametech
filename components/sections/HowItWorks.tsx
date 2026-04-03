'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { HOW_IT_WORKS } from '@/lib/data'

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Aprenda, Pratique e{' '}
            <span className="gradient-text">Conquiste</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Nossa metodologia transforma aprendizado em uma jornada gamificada com resultados reais e mensuráveis.
          </p>
        </AnimatedSection>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px"
            style={{
              background: 'repeating-linear-gradient(90deg, rgba(0,229,160,0.3) 0px, rgba(0,229,160,0.3) 8px, transparent 8px, transparent 16px)'
            }}
          />

          {HOW_IT_WORKS.map((step, i) => (
            <AnimatedSection key={step.step} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.03, borderColor: 'rgba(0,229,160,0.4)' }}
                className="glass-card p-8 text-center relative card-hover border border-white/[0.08]"
              >
                {/* Step number */}
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-bg"
                  style={{ background: 'linear-gradient(135deg, #00E5A0, #00B4FF)' }}
                >
                  {step.step}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-5 mt-2">{step.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-black mb-3 text-white">{step.title}</h3>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
