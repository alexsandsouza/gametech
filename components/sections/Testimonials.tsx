'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { TESTIMONIALS } from '@/lib/data'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-base">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            O que nossos{' '}
            <span className="gradient-text">alunos dizem</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Mais de 12.000 profissionais já transformaram suas carreiras. Veja o que eles falam.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, borderColor: `${t.color}35` }}
                className="glass-card card-hover border border-white/[0.08] p-7 h-full flex flex-col"
              >
                {/* Stars */}
                <Stars count={t.stars} />

                {/* Quote */}
                <blockquote className="text-white/85 text-sm leading-relaxed mt-4 mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Profile */}
                <div className="flex items-center gap-3 mt-auto pt-5 border-t border-white/[0.06]">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-black text-bg flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-muted text-xs">{t.role} · {t.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Summary stats */}
        <AnimatedSection delay={0.3}>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '12.000+', label: 'Profissionais formados' },
              { value: '87%', label: 'Promovidos em 6 meses' },
              { value: '4.9★', label: 'Avaliação média' },
              { value: '300+', label: 'Empresas parceiras' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
                <div className="text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
