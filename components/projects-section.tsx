"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { ExternalLink, ChevronLeft, ChevronRight, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "PAM Immo",
    category: "Gestion Immobiliere",
    description:
      "Site web complet pour une entreprise de gestion immobiliere. Presentation des biens, gestion des annonces et interface moderne pour faciliter la recherche de proprietes.",
    url: "https://pam-immo.com/",
    technologies: ["Next.js", "API NestJS", "PostgreSQL", "Cloudinary", "Hostinger", "SEO"],
  },
  {
    title: "West Afrecords",
    category: "Reservation Studio",
    description:
      "Plateforme de gestion de reservations pour un studio d'enregistrement. Systeme de booking en ligne, calendrier interactif et gestion des sessions.",
    url: "https://westafrecords.com/",
    technologies: ["React", "API Paytech", "Python", "Booking"],
  },
  {
    title: "MIMS Dakar",
    category: "Site Vitrine Restaurant",
    description:
      "Site vitrine elegant pour un restaurant a Dakar. Presentation du menu, galerie photo immersive et systeme de reservation en ligne.",
    url: "https://mims-dakar.com/",
    technologies: ["Next.js", "Design", "UX"],
  },
]

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const activeProject = projects[activeIndex]

  const goTo = (index: number) => {
    setActiveIndex(Math.max(0, Math.min(index, projects.length - 1)))
  }

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4 block">
            Nos realisations
          </span>
          <h2
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            Projets qui
            <span className="text-primary"> inspirent</span>
          </h2>
          <p
            className={cn(
              "text-muted-foreground text-lg leading-relaxed transition-all duration-700 delay-150",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            {"Decouvrez quelques-unes de nos realisations qui demontrent notre expertise technique."}
          </p>
        </div>

        {/* Live Preview - On top */}
        <div
          className={cn(
            "relative rounded-2xl overflow-hidden border border-border/50 bg-card/30 transition-all duration-700 mb-10",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 bg-card/60 border-b border-border/50">
            <div className="flex gap-1 sm:gap-1.5">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 flex items-center justify-center min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1 sm:py-1.5 rounded-lg bg-background/60 border border-border/50 text-[10px] sm:text-xs text-muted-foreground max-w-md w-full">
                <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                <span className="truncate">{activeProject.url}</span>
              </div>
            </div>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary h-8 gap-1.5"
            >
              <a href={activeProject.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-xs">Ouvrir</span>
              </a>
            </Button>
          </div>

          {/* Iframe Preview */}
          <div className="relative w-full" style={{ height: "clamp(280px, 50vh, 700px)" }}>
            {projects.map((project, index) => (
              <iframe
                key={project.url}
                src={project.url}
                title={`Apercu de ${project.title}`}
                className={cn(
                  "absolute inset-0 w-full h-full transition-opacity duration-500",
                  activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0",
                )}
                sandbox="allow-scripts allow-same-origin allow-popups"
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows + Dots */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Projet precedent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  activeIndex === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
                )}
                aria-label={`Voir projet ${index + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === projects.length - 1}
            className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Projet suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Active Project Details - Single card */}
        <div className="relative overflow-hidden">
          {projects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-500",
                activeIndex === index
                  ? "opacity-100 translate-y-0 relative"
                  : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none",
              )}
            >
              <div className="max-w-3xl mx-auto rounded-xl sm:rounded-2xl border border-border/50 bg-card/50 p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Visiter le site <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
