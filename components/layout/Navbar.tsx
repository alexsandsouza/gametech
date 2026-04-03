'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/lib/data'

// Smooth scroll to section with navbar offset
function scrollTo(href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return
  const navHeight = 72
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href: string) => {
    setMenuOpen(false)
    // small delay so drawer closes before scroll kicks in
    setTimeout(() => scrollTo(href), 150)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-bg font-black text-lg"
                style={{ background: 'linear-gradient(135deg, #00E5A0, #00B4FF)' }}>
                G
              </div>
              <span className="font-bold text-lg tracking-tight">
                <span className="gradient-text">GameTech</span>
                <span className="text-white">.AI</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-2 text-sm font-medium text-muted hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Burger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollTo('#precos')}
                className="hidden sm:flex btn-gradient px-5 py-2.5 rounded-xl text-sm font-bold items-center gap-2"
              >
                <span>⚡</span>
                Começar grátis
              </button>

              {/* Burger */}
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="md:hidden p-2 rounded-lg text-muted hover:text-white hover:bg-white/[0.06] transition-all"
                aria-label="Menu"
              >
                <div className="w-5 flex flex-col gap-1.5">
                  <motion.span
                    animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="block h-0.5 bg-current rounded-full"
                  />
                  <motion.span
                    animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="block h-0.5 bg-current rounded-full"
                  />
                  <motion.span
                    animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="block h-0.5 bg-current rounded-full"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-white/[0.06] bg-bg/95 backdrop-blur-xl"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleLink(link.href)}
                    className="px-4 py-3 text-sm font-medium text-muted hover:text-white rounded-xl hover:bg-white/[0.06] transition-all duration-200 text-left"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="mt-2 pt-3 border-t border-white/[0.06]">
                  <button
                    onClick={() => handleLink('#precos')}
                    className="flex btn-gradient px-5 py-3 rounded-xl text-sm font-bold items-center justify-center gap-2 w-full"
                  >
                    <span>⚡</span>
                    Começar grátis
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
