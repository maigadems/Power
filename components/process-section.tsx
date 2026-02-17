"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Découverte",
    description: "Nous analysons vos besoins, objectifs et contraintes pour définir une stratégie digitale adaptée.",
  },
  {
    number: "02",
    title: "Conception",
    description: "Création des wireframes, maquettes et architecture technique en collaboration étroite avec vous.",
  },
  {
    number: "03",
    title: "Développement",
    description: "Développement agile avec sprints réguliers, revues de code et tests automatisés.",
  },
  {
    number: "04",
    title: "Déploiement",
    description: "Mise en production sécurisée, formation et accompagnement pour une adoption réussie.",
  },
]

export function ProcessSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="process" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-background to-card/20" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4 block">Notre processus</span>
          <h2
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            Une méthode
            <span className="text-primary"> éprouvée</span>
          </h2>
          <p
            className={cn(
              "text-muted-foreground text-lg leading-relaxed transition-all duration-700 delay-150",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            Un processus structuré pour transformer vos idées en solutions digitales performantes.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "relative group transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card/30 border border-border/50 hover:border-primary/50 hover:bg-card/50 transition-all duration-300">
                <div className="text-4xl sm:text-6xl font-bold text-primary/20 mb-2 sm:mb-4 group-hover:text-primary/30 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-base sm:text-xl font-semibold text-foreground mb-1.5 sm:mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
