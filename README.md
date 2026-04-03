# GameTech.AI — Landing Page

Landing page de alta conversão para a plataforma GameTech.AI, construída com Next.js 14, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Setup

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
npm start
```

Acesse em: **http://localhost:3000**

## 🗂 Estrutura

```
├── app/
│   ├── layout.tsx       → Root layout (meta, fonts)
│   └── page.tsx         → Monta todas as seções
├── components/
│   ├── layout/          → Navbar, Footer
│   ├── sections/        → Hero, SocialProofBar, HowItWorks,
│   │                      Features, Testimonials, Pricing,
│   │                      FAQ, FinalCTA
│   └── ui/              → TypewriterText, LiveCounter,
│                          AnimatedSection, StarParticles
├── lib/
│   └── data.ts          → Todos os dados mockados
└── tailwind.config.ts   → Tokens de design
```

## 🎨 Design System

| Token | Valor |
|---|---|
| Background | `#020B18` |
| Accent (verde) | `#00E5A0` |
| Blue | `#00B4FF` |
| Texto muted | `#8B9AB3` |
| Cards | `rgba(255,255,255,0.04)` |

## ✨ Funcionalidades

- ✅ Navbar sticky com backdrop blur ao scroll
- ✅ Hero com efeito typewriter (3 frases)
- ✅ LiveCounter pulsante (varia ±5 a cada 4-8s)
- ✅ Mockup CSS animado da plataforma
- ✅ Marquee infinito de logos corporativos
- ✅ Seção "Como Funciona" com 3 passos
- ✅ Bento grid de recursos (6 cards)
- ✅ Depoimentos com estatísticas
- ✅ Pricing com toggle mensal/anual
- ✅ FAQ accordion animado (AnimatePresence)
- ✅ Banner Final CTA
- ✅ Footer completo
- ✅ 100% responsivo (mobile-first)
- ✅ Animações fade-up em todas as seções (Framer Motion)
- ✅ Dark mode only
- ✅ Português Brasileiro

## 🛠 Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Inter** (Google Fonts)
