// ══════════════════════════════════════════════
// GameTech.AI — Mock Data
// ══════════════════════════════════════════════

export const NAV_LINKS = [
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Preços', href: '#precos' },
  { label: 'Depoimentos', href: '#depoimentos' },
]

export const TYPEWRITER_PHRASES = [
  'Aprenda com missões reais e desafios práticos',
  'Ganhe badges, XP e acelere sua carreira',
  'Do zero ao profissional em 90 dias',
]

export const COMPANY_LOGOS = [
  'Nexus Tech',
  'Starlight',
  'OmniData',
  'ACME Corp',
  'CyberShield',
  'CloudArc',
  'Nexus Tech',
  'Starlight',
  'OmniData',
  'ACME Corp',
  'CyberShield',
  'CloudArc',
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    icon: '🎯',
    title: 'Missão',
    description: 'Receba desafios práticos baseados em cenários reais do mercado de trabalho.',
  },
  {
    step: '02',
    icon: '⚡',
    title: 'Prática',
    description: 'Use ferramentas de IA como ChatGPT, Gemini e Midjourney para completar tarefas.',
  },
  {
    step: '03',
    icon: '🏆',
    title: 'Conquista',
    description: 'Ganhe XP, badges exclusivos e certificados reconhecidos pelo mercado.',
  },
]

export const FEATURES = [
  {
    id: 'gamification',
    icon: '🎮',
    title: 'Gamificação Total',
    description: 'Sistema completo de XP, níveis, ranking global e recompensas. Aprender virou um jogo onde todos ganham.',
    accent: '#00E5A0',
    large: true,
    stat: '+340% mais engajamento',
  },
  {
    id: 'badges',
    icon: '🏅',
    title: 'Badges & Certificados',
    description: 'Conquistas verificáveis que são valorizadas por recrutadores e empresas líderes.',
    accent: '#00B4FF',
    large: false,
  },
  {
    id: 'missions',
    icon: '🚀',
    title: 'Missões Reais',
    description: 'Projetos baseados em casos reais da indústria. Construa portfólio enquanto aprende.',
    accent: '#7C3AED',
    large: false,
  },
  {
    id: 'tools',
    icon: '🤖',
    title: 'Ferramentas de IA',
    description: 'ChatGPT, Gemini, Midjourney e mais de 20 ferramentas integradas na plataforma.',
    accent: '#F59E0B',
    large: false,
  },
  {
    id: 'community',
    icon: '👥',
    title: 'Comunidade Ativa',
    description: '+12.000 profissionais trocando experiências, projetos e oportunidades diariamente.',
    accent: '#EC4899',
    large: false,
  },
  {
    id: 'career',
    icon: '📈',
    title: 'Resultados de Carreira',
    description: '87% dos alunos Pro relatam promoção ou aumento salarial em até 6 meses.',
    accent: '#00E5A0',
    large: false,
  },
]

export const TESTIMONIALS = [
  {
    name: 'Carla Mendonça',
    role: 'Analista de Marketing',
    company: 'Nexus Tech',
    initials: 'CM',
    color: '#00E5A0',
    stars: 5,
    quote: 'Em 3 meses passei de zero a criar automações com IA que economizam 15 horas por semana na minha equipe. A gamificação me fez querer aprender mais e mais!',
  },
  {
    name: 'Rafael Souza',
    role: 'Gerente de Projetos',
    company: 'OmniData',
    initials: 'RS',
    color: '#00B4FF',
    stars: 5,
    quote: 'Os badges e certificados da GameTech.AI eram os mais pedidos nas vagas que eu aplicava. Consegui minha promoção mostrando projetos reais que fiz na plataforma.',
  },
  {
    name: 'Juliana Ferreira',
    role: 'Desenvolvedora Full Stack',
    company: 'CyberShield',
    initials: 'JF',
    color: '#7C3AED',
    stars: 5,
    quote: 'Nunca achei que aprender IA pudesse ser tão divertido. Completei 8 trilhas em 2 meses porque simplesmente não queria parar. A metodologia é incrível!',
  },
]

export const PRICING_PLANS = [
  {
    name: 'Gratuito',
    price: { monthly: 0, annual: 0 },
    description: 'Comece sua jornada na IA agora mesmo, sem cartão.',
    highlight: false,
    cta: 'Começar grátis',
    features: [
      '3 trilhas de aprendizado',
      'Badges básicos',
      'Acesso à comunidade',
      'Lab interativo básico',
      '5 missões por mês',
      'Certificado de conclusão',
    ],
    missing: ['Trilhas avançadas', 'Mentoria ao vivo', 'Projetos profissionais'],
  },
  {
    name: 'Pro',
    price: { monthly: 47, annual: 397 },
    description: 'Para profissionais que querem resultados reais e rápidos.',
    highlight: true,
    cta: 'Começar Pro agora',
    badge: 'MAIS POPULAR',
    features: [
      'Trilhas ilimitadas',
      'Todos os badges e certificados',
      'Comunidade VIP',
      'Lab interativo avançado',
      'Missões ilimitadas',
      'Certificados verificáveis',
      'Mentoria ao vivo mensal',
      'Projetos profissionais',
      'Acesso vitalício ao conteúdo',
    ],
    missing: [],
  },
]

export const FAQ_ITEMS = [
  {
    question: 'Preciso saber programar para usar a plataforma?',
    answer: 'Não! A GameTech.AI foi desenvolvida para todos os níveis. Começamos do zero e evoluímos progressivamente. Você aprenderá a usar ferramentas de IA sem precisar escrever código — e se quiser aprender programação, temos trilhas específicas para isso também.',
  },
  {
    question: 'Quanto tempo leva para completar uma trilha?',
    answer: 'Cada trilha leva em média 4 a 8 semanas com dedicação de 1 hora por dia. Mas não tem prazo — você estuda no seu ritmo. O sistema de gamificação ajuda a manter consistência sem pressão.',
  },
  {
    question: 'Os certificados são reconhecidos pelo mercado?',
    answer: 'Sim! Nossos certificados têm código de verificação único e são reconhecidos por mais de 300 empresas parceiras. Você pode adicioná-los no LinkedIn com apenas um clique e mostrar projetos reais no seu portfólio.',
  },
  {
    question: 'Posso cancelar o plano Pro a qualquer momento?',
    answer: 'Claro! Não há fidelidade. Você pode cancelar a qualquer momento pelo painel do estudante, sem burocracia. Após o cancelamento, você mantém acesso até o final do período pago.',
  },
  {
    question: 'Existe alguma garantia?',
    answer: 'Sim! Oferecemos garantia incondicional de 30 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do valor pago — sem perguntas, sem complicações.',
  },
  {
    question: 'A plataforma funciona no celular?',
    answer: 'Perfeitamente! A GameTech.AI é 100% responsiva. Você pode aprender, completar missões e ganhar badges pelo celular, tablet ou computador. O progresso sincroniza em tempo real entre todos os dispositivos.',
  },
]
