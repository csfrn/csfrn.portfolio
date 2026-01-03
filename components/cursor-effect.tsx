"use client"

import { useEffect, useRef } from "react"

export function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    const ripples: Array<{ x: number; y: number; radius: number; maxRadius: number; opacity: number }> = []

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Create multiple ripples for more intensity
      ripples.push({
        x: mouseX,
        y: mouseY,
        radius: 0,
        maxRadius: 150,
        opacity: 1,
      })

      // Limit ripples array size
      if (ripples.length > 30) {
        ripples.shift()
      }
    }

    // Create intense distortion effect
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i]

        // Update ripple - faster expansion
        ripple.radius += 5
        ripple.opacity -= 0.012

        if (ripple.opacity <= 0) {
          ripples.splice(i, 1)
          continue
        }

        // Draw multiple distortion layers for intensity
        // Outer ring
        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(15, 16, 17, ${ripple.opacity * 0.6})`
        ctx.lineWidth = 3
        ctx.stroke()

        // Middle ring
        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius * 0.7, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(15, 16, 17, ${ripple.opacity * 0.4})`
        ctx.lineWidth = 2
        ctx.stroke()

        // Inner glow
        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius * 0.4, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(15, 16, 17, ${ripple.opacity * 0.3})`
        ctx.lineWidth = 2
        ctx.stroke()

        // Central dot
        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(15, 16, 17, ${ripple.opacity * 0.8})`
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: "difference" }}
    />
  )
}
