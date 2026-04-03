'use client'

import { COMPANY_LOGOS } from '@/lib/data'

export default function SocialProofBar() {
  return (
    <section className="py-12 border-y border-white/[0.06]" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label */}
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted mb-8">
          Plataforma confiada por equipes inovadoras
        </p>

        {/* Marquee */}
        <div className="overflow-hidden marquee-wrapper">
          <div className="flex animate-marquee gap-0" style={{ width: 'max-content' }}>
            {COMPANY_LOGOS.concat(COMPANY_LOGOS).map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-10 py-2 flex-shrink-0"
              >
                <span
                  className="text-base font-black tracking-tight"
                  style={{ color: 'rgba(255,255,255,0.2)' }}
                >
                  {logo}
                </span>
                <span className="text-white/10 ml-8 text-xl font-thin">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
