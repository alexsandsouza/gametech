'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import SlidePlayer from '@/components/ui/SlidePlayer'

type Message = {
  id: string
  sender: 'bot' | 'user'
  text: string
  isTyping?: boolean
}

export default function LessonPage({ params }: { params: { id: string } }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: `Olá! Eu sou o seu Mentor de IA. Vamos iniciar a Missão ${params.id}. O seu objetivo aqui é fazer sua primeira "engenharia de prompt" com sucesso. Está pronto? (Digite "sim" para começar)`
    }
  ])
  const [input, setInput] = useState('')
  const [isBotTyping, setIsBotTyping] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom every time messages update or typing state changes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isBotTyping])

  const handleSend = () => {
    const text = input.trim()
    if (!text) return

    // Add User Message
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsBotTyping(true)

    // Simulate Bot Thinking & Response
    setTimeout(() => {
      let botResponse = ''
      const lowerReq = text.toLowerCase()

      if (lowerReq.includes('sim') || lowerReq.includes('pronto')) {
        botResponse = 'Excelente! 🚀 Sua tarefa é pedir para mim uma sugestão de "título de um livro sobre Inteligência Artificial". Tente ser criativo no pedido!'
      } else if (lowerReq.includes('livro') || lowerReq.includes('título')) {
        botResponse = 'Muito bem! 🎉 Você mandou seu primeiro prompt. Que tal "A Fronteira do Amanhã: Uma Jornada pela IA"? \n\nParabéns! Você ganhou +150 XP pela missão concluída!'
      } else {
        botResponse = 'Interessante... Mas vamos focar na missão. Lembre-se, você precisa criar um comando pedindo um título de livro sobre IA.'
      }

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: 'bot', text: botResponse }
      ])
      setIsBotTyping(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSend()
    }
  }

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
            <span className="font-semibold text-white">Missão {params.id}</span>
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
        <div className="w-full lg:w-[60%] border-b lg:border-b-0 lg:border-r border-white/[0.06] flex flex-col p-4 sm:p-6 pb-2 sm:pb-6 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-4" 
              style={{ background: 'rgba(0,180,255,0.1)', color: '#00B4FF' }}>
              Trilha de Base
            </div>
            <h1 className="text-2xl sm:text-3xl font-black mb-3 leading-tight">
              Sua primeira interação com Inteligência Artificial
            </h1>
            <p className="text-muted leading-relaxed text-sm">
              Assista os slides da aula à esquerda. Em seguida, interaja com o Laboratório Prático à direita.
            </p>
          </motion.div>

          <SlidePlayer slides={[
            { id: '1', title: 'O que é IA Generativa?', content: 'IA Generativa se refere aos algoritmos que processam dados massivos para conseguir criar conteúdo novo — seja texto, imagem ou código. É diferente das velhas IAs que apenas classificavam dados.', duration: 7, icon: '🧠' },
            { id: '2', title: 'A Revolução do Prompt', content: 'Sua forma de se comunicar com a IA muda tudo. A Engenharia de Prompt, como é chamada, é a arte criativa de guiar o modelo cognitivo para as respostas exatas que você procura.', duration: 8, icon: '⚡' },
            { id: '3', title: 'O Lab Prático', content: 'Chega de teoria! No painel à direita, o Mentor de IA está pronto para o seu primeiro desafio. Você completará missões reais ganhando XP. Pode mostrar do que é capaz?', duration: 6, icon: '🎯' },
          ]} />
        </div>

        {/* Right Side: Chat / Interactive Lab */}
        <div className="w-full lg:w-[40%] flex flex-col h-[600px] lg:h-[calc(100vh-64px)] bg-black/20">
          
          <div className="p-4 border-b border-white/[0.06] flex justify-between items-center bg-white/[0.02]">
            <h3 className="font-bold text-sm tracking-wide">LAB INTERATIVO</h3>
            <span className="flex items-center gap-2 text-xs font-medium text-accent px-2.5 py-1 bg-accent/10 rounded-md border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Online
            </span>
          </div>

          <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-5 custom-scrollbar">
            
             <AnimatePresence initial={false}>
               {messages.map((msg) => (
                  <motion.div 
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex flex-col w-full max-w-[85%] ${msg.sender === 'user' ? 'self-end' : 'self-start'}`}
                  >
                    <span className={`text-[10px] uppercase font-bold text-white/30 tracking-wider mb-1 px-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                      {msg.sender === 'user' ? 'Você' : 'Mentor AI'}
                    </span>
                    <div 
                      className={`p-4 text-sm font-medium leading-relaxed shadow-sm whitespace-pre-wrap ${
                        msg.sender === 'user' 
                        ? 'bg-accent/10 border border-accent/20 text-[#00E5A0] rounded-2xl rounded-tr-sm' 
                        : 'glass-card border border-white/[0.05] rounded-2xl rounded-tl-sm text-white/90'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
               ))}
               
               {isBotTyping && (
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   className="self-start max-w-[85%] flex items-center gap-1.5 glass-card border border-white/[0.05] rounded-2xl rounded-tl-sm p-4"
                 >
                   <motion.div animate={{ y: [0,-4,0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                   <motion.div animate={{ y: [0,-4,0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.15 }} className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                   <motion.div animate={{ y: [0,-4,0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.3 }} className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                 </motion.div>
               )}
             </AnimatePresence>
             
             {/* Invisible div to scroll to bottom */}
             <div ref={chatEndRef} />
          </div>

          {/* Prompt input area */}
          <div className="p-4 bg-white/[0.01] border-t border-white/[0.06] shrink-0">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Resposta..." 
                className="w-full bg-[#020B18] border border-white/[0.1] rounded-xl pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:border-accent text-white placeholder-white/30 transition-all shadow-inner"
                disabled={isBotTyping}
              />
              <button 
                onClick={handleSend}
                disabled={isBotTyping || !input.trim()} 
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                  input.trim() && !isBotTyping 
                    ? 'bg-accent text-[#020B18] shadow-[0_0_15px_rgba(0,229,160,0.4)] cursor-pointer' 
                    : 'bg-white/[0.05] text-white/40 cursor-not-allowed'
                }`}
              >
                <span className="text-sm font-black">↑</span>
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-white/20 font-medium">Mentor AI pode cometer erros. Considere verificar.</span>
            </div>
          </div>

        </div>

      </main>

      {/* Global Style overrides for scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </div>
  )
}
