'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function FinalCTA() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0,229,160,0.12) 0%, rgba(0,180,255,0.08) 40%, transparent 65%), rgba(255,255,255,0.01)',
        }}
      />

      {/* Animated border lines */}
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,160,0.4), transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,180,255,0.4), transparent)' }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-8"
            style={{
              background: 'rgba(0,229,160,0.1)',
              border: '1px solid rgba(0,229,160,0.3)',
              color: '#00E5A0',
            }}
          >
            🚀 Vagas limitadas para mentoria ao vivo
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            Comece sua jornada na{' '}
            <span className="gradient-text">IA</span>
            {' '}hoje.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            Junte-se a <span className="text-white font-semibold">+12.000 profissionais</span> que já estão na vanguarda da Inteligência Artificial. Grátis para começar — resultados desde o primeiro dia.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(0,229,160,0.45)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/lesson/1" className="btn-gradient flex w-full h-full items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg font-black">
                <span className="text-xl">⚡</span>
                Criar minha conta grátis agora
              </Link>
            </motion.div>
          </div>

          <p className="mt-5 text-muted text-sm flex items-center justify-center gap-4 flex-wrap">
            <span>✓ 100% gratuito para começar</span>
            <span>·</span>
            <span>✓ Sem cartão de crédito</span>
            <span>·</span>
            <span>✓ Resultados em 7 dias</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
