"use client"

import { useInView } from "react-intersection-observer"
import { Target, Lightbulb, Rocket, Award } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  { value: "100%", label: "Clients satisfaits" },
  { value: "2+", label: "Années d'expertise" },
  { value: "24/7", label: "Support technique" },
]

const values = [
  {
    icon: Target,
    title: "Précision",
    description: "Chaque ligne de code est écrite avec une attention méticuleuse aux détails.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous utilisons les technologies les plus avancées pour créer des solutions d'avenir.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Des applications rapides, optimisées et scalables pour supporter votre croissance.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Un engagement total envers la qualité et la satisfaction de nos clients.",
  },
]

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4 block">A propos de nous</span>
          <h2
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 transition-all duration-700 text-balance",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            {"La ou la technologie profonde"}
            <span className="text-primary"> rencontre la vision humaine</span>
          </h2>
          <p
            className={cn(
              "text-muted-foreground text-lg leading-relaxed transition-all duration-700 delay-150",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            Power Digitalisation est une entreprise spécialisée dans la transformation digitale et le développement
            logiciel full-stack. Nous accompagnons les entreprises ambitieuses dans leur transition numérique avec des
            solutions sur-mesure.
          </p>
        </div>

        {/* Stats */}
        <div
          className={cn(
            "grid grid-cols-3 gap-3 sm:gap-8 mb-12 sm:mb-20 transition-all duration-700 delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-xs sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={cn(
                "group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card/30 border border-border/50 hover:border-primary/50 hover:bg-card/50 transition-all duration-500",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
