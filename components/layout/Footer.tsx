export default function Footer() {
  const year = new Date().getFullYear()

  const links = {
    Produto: ['Como Funciona', 'Recursos', 'Trilhas', 'Certificados', 'Preços'],
    Empresa: ['Sobre nós', 'Blog', 'Carreiras', 'Imprensa', 'Contato'],
    Legal: ['Termos de Uso', 'Privacidade', 'Cookies'],
  }

  const socials = [
    { name: 'LinkedIn', icon: 'in', href: '#' },
    { name: 'Instagram', icon: '▣', href: '#' },
    { name: 'YouTube', icon: '▶', href: '#' },
  ]

  return (
    <footer className="border-t border-white/[0.06] bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-lg text-bg"
                style={{ background: 'linear-gradient(135deg, #00E5A0, #00B4FF)' }}>
                G
              </div>
              <span className="font-bold text-lg">
                <span className="gradient-text">GameTech</span>
                <span className="text-white">.AI</span>
              </span>
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              O único método 100% gamificado de aprendizado em Inteligência Artificial do Brasil. Transforme sua carreira com missões reais e conquistas verificáveis.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-muted hover:text-white hover:border-accent/40 transition-all duration-200 text-sm font-bold"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted text-sm hover:text-white transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © {year} GameTech.AI. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted">
            <span>Feito com</span>
            <span className="text-red-400 mx-0.5">♥</span>
            <span>no Brasil 🇧🇷</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
