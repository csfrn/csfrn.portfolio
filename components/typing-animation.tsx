"use client"

import { useEffect, useState } from "react"

export function TypingAnimation() {
  const [text, setText] = useState("")
  const fullText = "CSFRN"
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let index = isDeleting ? fullText.length : 0

    const timer = setInterval(
      () => {
        if (!isDeleting) {
          if (index <= fullText.length) {
            setText(fullText.slice(0, index))
            index++
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (index >= 0) {
            setText(fullText.slice(0, index))
            index--
          } else {
            setTimeout(() => setIsDeleting(false), 500)
          }
        }
      },
      isDeleting ? 100 : 150,
    )

    return () => clearInterval(timer)
  }, [isDeleting])

  return (
    <div className="font-extrabold text-2xl md:text-3xl tracking-tight">
      {text}
      <span className="animate-pulse">_</span>
    </div>
  )
}
