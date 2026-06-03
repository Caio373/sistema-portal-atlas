import Link from "next/link"
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

const footerLinks = {
  sections: [
    { label: "Política", href: "#congresso-agenda-digital" },
    { label: "Economia", href: "#economia-global-transformacao" },
    { label: "Tecnologia", href: "#ia-medicina" },
    { label: "Cultura", href: "#streaming-cultura" },
    { label: "Mundo", href: "#diplomacia-seculo-xxi" },
    { label: "Destaques", href: "#destaques" },
  ],
  company: [
    { label: "Sobre nós", href: "#destaque" },
    { label: "Redação", href: "#destaques" },
    { label: "Contato", href: "mailto:redacao@atlas.example" },
    { label: "Trabalhe conosco", href: "mailto:talentos@atlas.example" },
  ],
  legal: [
    { label: "Termos de uso", href: "#" },
    { label: "Política de privacidade", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Twitter", href: "https://x.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-24 grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <span 
                className="text-5xl"
                style={{ fontFamily: 'var(--font-great-vibes), cursive' }}
              >
                Atlas
              </span>
            </Link>
            <p className="text-sm text-foreground/50 leading-relaxed max-w-xs mb-8">
              Jornalismo premium com experiência de leitura imersiva. 
              Informação de qualidade, sem distrações.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {/* Seções */}
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-6">
                Seções
              </h3>
              <ul className="space-y-4">
                {footerLinks.sections.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-6">
                Empresa
              </h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-6">
                Legal
              </h3>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/40">
            © 2026 Atlas. Todos os direitos reservados.
          </p>
          <p className="text-xs text-foreground/40">
            Feito com excelência em jornalismo
          </p>
        </div>
      </div>
    </footer>
  )
}
