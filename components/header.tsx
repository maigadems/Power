"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#tech", label: "Technologies" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-4">
      <header
        className={cn(
          "w-full max-w-6xl rounded-2xl transition-all duration-500 border",
          isScrolled
            ? "bg-background/40 backdrop-blur-2xl border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-white/[0.03] backdrop-blur-md border-white/[0.05]",
        )}
      >
        <div className="px-3 sm:px-4 lg:px-6">
          <nav className="flex items-center justify-between h-14 lg:h-16">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
              <Image
                src="/images/logo.png"
                alt="Power Digitalisation"
                width={36}
                height={36}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <span className="font-bold text-sm sm:text-lg tracking-tight text-foreground">
                Power<span className="text-primary">Digitalisation</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                <Link href="#contact">Demarrer un projet</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/[0.06]">
            <div className="px-4 py-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded-lg hover:bg-white/[0.05]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Demarrer un projet
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
