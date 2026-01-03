"use client"

import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
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
