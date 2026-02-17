"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

const technologies = {
  frontend: [
    { name: "React", color: "from-cyan-400 to-cyan-600" },
    { name: "Next.js", color: "from-neutral-400 to-neutral-600" },
    { name: "TypeScript", color: "from-blue-400 to-blue-600" },
    { name: "Tailwind CSS", color: "from-teal-400 to-teal-600" },
  ],
  backend: [
    { name: "Node.js", color: "from-green-400 to-green-600" },
    { name: "Python", color: "from-yellow-400 to-yellow-600" },
    { name: "PostgreSQL", color: "from-blue-400 to-blue-700" },
    { name: "MongoDB", color: "from-green-500 to-green-700" },
  ],
  cloud: [
    { name: "AWS", color: "from-orange-400 to-orange-600" },
    { name: "Vercel", color: "from-neutral-300 to-neutral-500" },
    { name: "Docker", color: "from-blue-400 to-blue-600" },
    { name: "Kubernetes", color: "from-blue-500 to-blue-700" },
  ],
  tools: [
    { name: "Git", color: "from-orange-500 to-red-500" },
    { name: "CI/CD", color: "from-purple-400 to-purple-600" },
    { name: "REST APIs", color: "from-emerald-400 to-emerald-600" },
    { name: "GraphQL", color: "from-pink-400 to-pink-600" },
  ],
}

const categories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "cloud", label: "Cloud & DevOps" },
  { key: "tools", label: "Outils & APIs" },
]

export function TechStackSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="tech" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-background" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4 block">Technologies</span>
          <h2
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            Notre stack
            <span className="text-primary"> technique</span>
          </h2>
          <p
            className={cn(
              "text-muted-foreground text-lg leading-relaxed transition-all duration-700 delay-150",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            Nous maîtrisons les technologies les plus modernes pour créer des solutions performantes et évolutives.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-8">
          {categories.map((category, catIndex) => (
            <div
              key={category.key}
              className={cn(
                "p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-card/30 border border-border/50 transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${300 + catIndex * 100}ms` }}
            >
              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-4">{category.label}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {technologies[category.key as keyof typeof technologies].map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group relative px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-secondary/50 border border-border/30 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                  >
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                        tech.color,
                      )}
                    />
                    <span className="relative z-10 text-xs sm:text-sm font-medium text-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
