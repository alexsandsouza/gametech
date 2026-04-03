'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { PRICING_PLANS } from '@/lib/data'

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="precos" className="section-pad" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Preços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Invista em você.{' '}
            <span className="gradient-text">Sem surpresas.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-8">
            Comece grátis e evolua quando quiser. Cancele a qualquer momento.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 glass-card rounded-xl border border-white/[0.08]">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                !annual ? 'text-bg' : 'text-muted hover:text-white'
              }`}
              style={!annual ? { background: 'linear-gradient(135deg, #00E5A0, #00B4FF)' } : {}}
            >
              Mensal
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                annual ? 'text-bg' : 'text-muted hover:text-white'
              }`}
              style={annual ? { background: 'linear-gradient(135deg, #00E5A0, #00B4FF)' } : {}}
            >
              Anual
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-bold ${annual ? 'bg-black/20 text-bg' : 'text-accent'}`}
                style={annual ? {} : { background: 'rgba(0,229,160,0.15)' }}
              >
                -30%
              </span>
            </button>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PRICING_PLANS.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.12}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative glass-card border p-8 h-full flex flex-col"
                style={{
                  borderColor: plan.highlight ? 'rgba(0,229,160,0.4)' : 'rgba(255,255,255,0.08)',
                  boxShadow: plan.highlight ? '0 0 40px rgba(0,229,160,0.12)' : 'none',
                }}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full text-xs font-black text-bg whitespace-nowrap"
                    style={{ background: 'linear-gradient(135deg, #00E5A0, #00B4FF)' }}
                  >
                    ⭐ {plan.badge}
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <div className="text-muted text-sm font-semibold uppercase tracking-wider mb-2">{plan.name}</div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-black text-white">
                      {plan.price.monthly === 0
                        ? 'Grátis'
                        : `R$${annual ? Math.round(plan.price.annual / 12) : plan.price.monthly}`}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-muted text-sm mb-2">/mês</span>
                    )}
                  </div>
                  {annual && plan.price.annual > 0 && (
                    <div className="text-xs text-accent font-semibold">
                      R${plan.price.annual}/ano · 2 meses de brinde!
                    </div>
                  )}
                  <p className="text-muted text-sm mt-2">{plan.description}</p>
                </div>

                {/* CTA */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="#"
                  className={`w-full py-3.5 rounded-xl text-sm font-bold text-center block mb-7 transition-all duration-200 ${
                    plan.highlight
                      ? 'btn-gradient'
                      : 'border border-white/20 text-white hover:border-accent/50 hover:text-accent'
                  }`}
                >
                  {plan.cta} →
                </motion.a>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                      <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                  {plan.missing.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted line-through">
                      <span className="flex-shrink-0 mt-0.5 opacity-40">✕</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-8">
          <p className="text-muted text-sm flex items-center justify-center gap-4 flex-wrap">
            <span>✓ Garantia de 30 dias</span>
            <span>·</span>
            <span>✓ Cancele a qualquer momento</span>
            <span>·</span>
            <span>✓ Sem fidelidade</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
