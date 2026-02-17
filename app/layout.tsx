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
  icons: {
    shortcut: "/favicon.ico", // favicon standard
    icon: "/favicon.ico",     // favicon moderne
    apple: "/favicon.ico",    // pour iOS
  },
}


