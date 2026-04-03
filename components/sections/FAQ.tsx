'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { FAQ_ITEMS } from '@/lib/data'

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <AnimatedSection delay={index * 0.07}>
      <div className="border-b border-white/[0.07] last:border-0">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        >
          <span className="font-semibold text-white/90 text-sm sm:text-base group-hover:text-white transition-colors duration-200">
            {q}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-light border border-white/[0.12] text-muted group-hover:border-accent/50 group-hover:text-accent transition-all"
          >
            +
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="text-muted text-sm leading-relaxed pb-5 pr-8">
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section-pad">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Perguntas{' '}
            <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-muted text-lg">
            Tire suas dúvidas sobre a plataforma.
          </p>
        </AnimatedSection>

        <div className="glass-card border border-white/[0.08] px-6 sm:px-10 py-4 rounded-2xl">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={i} q={item.question} a={item.answer} index={i} />
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-8">
          <p className="text-muted text-sm">
            Ainda tem dúvidas?{' '}
            <a href="#" className="text-accent hover:underline font-medium">
              Fale com nossa equipe →
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
