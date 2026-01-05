"use client"

import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
  const stored = localStorage.getItem("theme")
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  const shouldBeDark = stored ? stored === "dark" : prefersDark

  document.documentElement.classList.toggle("dark", shouldBeDark)
  setIsDark(shouldBeDark)
}, [])

const toggleTheme = () => {
  const newTheme = !isDark
  setIsDark(newTheme)
  document.documentElement.classList.toggle("dark", newTheme)
  localStorage.setItem("theme", newTheme ? "dark" : "light")
}

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
      aria-label="Toggle theme"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  )
}
