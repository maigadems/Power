import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"

import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Power Digitalisation | Transformation Digitale & Développement Full-Stack",
  description:
    "Power Digitalisation - Votre partenaire expert en transformation digitale, développement web full-stack, applications complexes et solutions cloud scalables.",
  keywords: [
    "digitalisation",
    "développement web",
    "full-stack",
    "react",
    "next.js",
    "cloud",
    "api",
    "transformation digitale",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.ico",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  
}


