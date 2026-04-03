import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GameTech.AI — Domine Inteligência Artificial na Prática',
  description: 'O único método 100% gamificado de IA do Brasil. Aprenda IA com missões reais, ganhe badges e transforme sua carreira. +12.000 profissionais já transformaram suas carreiras.',
  keywords: 'inteligência artificial, IA, aprender IA, gamificação, cursos IA, ChatGPT, machine learning',
  openGraph: {
    title: 'GameTech.AI — Domine Inteligência Artificial na Prática',
    description: 'O único método 100% gamificado de IA do Brasil.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="bg-bg text-white antialiased">
        {children}
      </body>
    </html>
  )
}
