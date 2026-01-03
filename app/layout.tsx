import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { MagneticCursor } from "@/components/magnetic-cursor"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <MagneticCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
