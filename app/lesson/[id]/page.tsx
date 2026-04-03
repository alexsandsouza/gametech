'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LessonPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-[#020B18] text-white flex flex-col font-sans">
      
      {/* Header Platform */}
      <header className="h-16 border-b border-white/[0.06] bg-bg/95 flex items-center px-4 sm:px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4 w-full max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-bg font-black text-sm"
              style={{ background: 'linear-gradient(135deg, #00E5A0, #00B4FF)' }}>
              G
            </div>
            <span className="font-bold text-sm tracking-tight hidden sm:block">
              <span className="gradient-text">GameTech</span>
              <span className="text-white">.AI</span>
            </span>
          </Link>

          <div className="mx-4 h-6 w-px bg-white/[0.1]"></div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted">Módulo 1</span>
            <span className="text-muted">/</span>
            <span className="font-semibold text-white">Lição {params.id}</span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold">
              <span className="text-accent">🚀 Nível 1</span>
              <span className="text-muted">• 0/100 XP</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="flex-1 flex flex-col lg:flex-row w-full max-w-7xl mx-auto overflow-hidden">
        
        {/* Left Side: Lesson Content / Video */}
        <div className="w-full lg:w-[60%] border-r border-white/[0.06] flex flex-col p-6 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-4" 
              style={{ background: 'rgba(0,180,255,0.1)', color: '#00B4FF' }}>
              Missão Prática
            </div>
            <h1 className="text-2xl sm:text-3xl font-black mb-4 leading-tight">
              Sua primeira automação com Inteligência Artificial
            </h1>
            <p className="text-muted leading-relaxed">
              Nesta lição, vamos focar nos conceitos básicos para dominar a ferramenta.
              Esta página vai receber a reconstrução do laboratório interativo!
            </p>
          </motion.div>

          <div className="aspect-video w-full rounded-2xl border border-white/[0.1] bg-black/40 flex items-center justify-center relative overflow-hidden">
             {/* Placeholder for Video Player / Presentation */}
             <div className="text-center">
               <span className="text-4xl mb-3 block">🎬</span>
               <span className="text-sm font-semibold text-muted">Apresentação Interativa</span>
             </div>
             
             {/* Glow effect */}
             <div className="absolute inset-0 pointer-events-none opacity-20" 
                style={{ background: 'radial-gradient(circle at 50% 50%, #00B4FF 0%, transparent 60%)' }} />
          </div>
        </div>

        {/* Right Side: Chat / Interactive Lab */}
        <div className="w-full lg:w-[40%] flex flex-col h-[500px] lg:h-[calc(100vh-64px)] bg-black/20">
          
          <div className="p-4 border-b border-white/[0.06] flex justify-between items-center bg-white/[0.02]">
            <h3 className="font-bold text-sm tracking-wide">LAB INTERATIVO</h3>
            <span className="text-xs font-medium text-accent px-2 py-1 bg-accent/10 rounded-md">
              Aguardando prompt...
            </span>
          </div>

          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
             {/* Chat Bubble System */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="self-start max-w-[85%] rounded-2xl rounded-tl-sm p-4 text-sm font-medium leading-relaxed glass-card border border-white/[0.05]"
             >
               Olá! Eu sou o seu Mentor de IA. Vamos iniciar a Lição {params.id}. Está pronto para o desafio prático?
             </motion.div>
          </div>

          {/* Prompt input area */}
          <div className="p-4 bg-white/[0.02] border-t border-white/[0.06]">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Digite sua resposta aqui..." 
                className="w-full bg-[#020B18] border border-white/[0.1] rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-accent text-white placeholder-white/30 transition-colors"
                disabled
              />
              <button disabled className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-white/40 hover:bg-white/[0.1] hover:text-white transition-colors">
                <span className="text-sm font-bold text-accent">↑</span>
              </button>
            </div>
          </div>

        </div>

      </main>
    </div>
  )
}
