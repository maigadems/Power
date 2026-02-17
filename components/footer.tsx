import Link from "next/link"
import Image from "next/image"
import { Linkedin, Github, MessageCircle } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Sites Vitrines", href: "#services" },
    { label: "Applications Web", href: "#services" },
    { label: "APIs & Intégrations", href: "#services" },
    { label: "Cloud & DevOps", href: "#services" },
  ],
  company: [
    { label: "À propos", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Technologies", href: "#tech" },
    { label: "Projets", href: "#projects" },
  ],
  contact: [
    { label: "maiga.projets@gmail.com", href: "mailto:maiga.projets@gmail.com" },
    { label: "+221 78 193 26 83", href: "tel:+221781932683" },
    { label: "WhatsApp", href: "https://wa.me/221781932683" },
    { label: "Dakar, Senegal", href: "#contact" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/abdoul-karim-maiga", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/maigadems", label: "GitHub" },
  { icon: MessageCircle, href: "https://wa.me/221781932683", label: "WhatsApp" },
]

export function Footer() {
  return (
    <footer className="py-16 border-t border-border bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="Power Digitalisation"
                width={44}
                height={44}
                className="w-11 h-11 object-contain"
              />
              <span className="font-bold text-lg text-foreground">
                Power<span className="text-primary">Digitalisation</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Votre partenaire pour une transformation digitale réussie et des solutions logicielles sur-mesure.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") || link.href.startsWith("mailto") || link.href.startsWith("tel") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Power Digitalisation. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
