"use client"

import { useInView } from "react-intersection-observer"
import { Globe, Code2, Server, Puzzle, Cloud, Cog, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Globe,
    title: "Sites Vitrines Premium",
    description:
      "Des sites web élégants et performants qui reflètent l'excellence de votre marque et convertissent vos visiteurs.",
    features: ["Design sur-mesure", "SEO optimisé", "Performance maximale"],
  },
  {
    icon: Code2,
    title: "Applications Web Complexes",
    description:
      "Développement d'applications web métiers robustes, des plateformes SaaS aux outils de gestion internes.",
    features: ["Architecture scalable", "UX/UI moderne", "Tests automatisés"],
  },
  {
    icon: Server,
    title: "Développement Full-Stack",
    description: "Expertise complète du frontend au backend, avec les technologies les plus performantes du marché.",
    features: ["React & Next.js", "Node.js & APIs", "Bases de données"],
  },
  {
    icon: Puzzle,
    title: "Intégration d'APIs",
    description: "Connexion de vos systèmes avec des APIs tierces : paiement, IA, ERP, SMS, et services cloud.",
    features: ["Stripe & PayPal", "OpenAI & GPT", "Webhooks & REST"],
  },
  {
    icon: Cloud,
    title: "Déploiement Cloud",
    description: "Infrastructure cloud moderne avec CI/CD, monitoring et haute disponibilité pour vos applications.",
    features: ["AWS & Vercel", "Docker & K8s", "Monitoring 24/7"],
  },
  {
    icon: Cog,
    title: "Automatisation Métier",
    description: "Automatisation des processus répétitifs et développement de systèmes métiers sur-mesure.",
    features: ["Workflows custom", "Intégrations", "Tableaux de bord"],
  },
]

export function ServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/20" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4 block">Nos services</span>
          <h2
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 transition-all duration-700 text-balance",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            Des solutions digitales
            <span className="text-primary"> à chaque étape</span>
          </h2>
          <p
            className={cn(
              "text-muted-foreground text-lg leading-relaxed transition-all duration-700 delay-150",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            Notre gamme complète de services couvre tous les besoins de votre transformation digitale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
