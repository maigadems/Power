import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Power Digitalisation | Transformation Digitale & Développement Full-Stack",
  description:
    "Power Digitalisation - Votre partenaire expert en transformation digitale, développement web full-stack, applications complexes et solutions cloud scalables.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
