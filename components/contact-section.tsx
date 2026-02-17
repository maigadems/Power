"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "maiga.projets@gmail.com",
    href: "mailto:maiga.projets@gmail.com",
  },
  {
    icon: Phone,
    label: "Telephone",
    value: "+221 78 193 26 83",
    href: "tel:+221781932683",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Discutons sur WhatsApp",
    href: "https://wa.me/221781932683",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Dakar, Senegal",
    href: "#contact",
  },
]

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-background" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4 block">Contact</span>
          <h2
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            Parlons de
            <span className="text-primary"> votre projet</span>
          </h2>
          <p
            className={cn(
              "text-muted-foreground text-lg leading-relaxed transition-all duration-700 delay-150",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            Prêt à transformer votre vision en réalité digitale ? Contactez-nous dès aujourd'hui.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div
            className={cn(
              "space-y-8 transition-all duration-700 delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Commençons une conversation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Que vous ayez un projet concret ou simplement des questions, notre équipe est là pour vous accompagner
                dans votre transformation digitale.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="text-foreground font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              "transition-all duration-700 delay-300",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card/50 border border-border/50 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Nom</label>
                  <Input placeholder="Votre nom" className="bg-input border-border focus:border-primary" required />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    className="bg-input border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Sujet</label>
                <Input
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="bg-input border-border focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                <Textarea
                  placeholder="Décrivez votre projet ou posez vos questions..."
                  className="bg-input border-border focus:border-primary min-h-32 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2 w-5 h-5" />
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
