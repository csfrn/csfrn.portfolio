"use client"

import { useEffect, useRef } from "react"

type Ripple = {
  x: number
  y: number
  r: number
  life: number // 1 -> 0
}

export function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0) // draw in CSS pixels
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const ripples: Ripple[] = []

    // Smooth spawning control
    let lastSpawn = 0
    let lastX = window.innerWidth / 2
    let lastY = window.innerHeight / 2
    const minSpawnMs = 18 // ~55 spawns/sec max
    const minDist = 10 // px

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now()
      const x = e.clientX
      const y = e.clientY

      const dx = x - lastX
      const dy = y - lastY
      const dist = Math.hypot(dx, dy)

      if (now - lastSpawn < minSpawnMs || dist < minDist) return

      lastSpawn = now
      lastX = x
      lastY = y

      ripples.push({ x, y, r: 0, life: 1 })

      // Keep it bounded
      if (ripples.length > 40) ripples.shift()
    }

    document.addEventListener("mousemove", handleMouseMove, { passive: true })

    // Easing helpers
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    let lastTime = performance.now()
    let raf = 0

    const animate = (t: number) => {
      const dt = Math.min((t - lastTime) / 1000, 0.033) // seconds, clamp
      lastTime = t

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // optional: a tiny bit of blur for smoothness
      ctx.lineJoin = "round"
      ctx.lineCap = "round"

      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i]

        // Time-based updates
        rp.r += 520 * dt // expansion speed (px/sec)
        rp.life -= 1.25 * dt // fade speed (life/sec)

        if (rp.life <= 0) {
          ripples.splice(i, 1)
          continue
        }

        const progress = 1 - rp.life // 0 -> 1
        const e = easeOutCubic(progress)

        const maxR = 160
        const r = Math.min(rp.r * (0.85 + 0.15 * e), maxR)

        const baseAlpha = rp.life
        const col = (a: number) => `rgba(15, 16, 17, ${a})`

        // If you want it even smoother, uncomment:
        // ctx.shadowBlur = 10
        // ctx.shadowColor = col(baseAlpha * 0.35)

        // Outer ring
        ctx.beginPath()
        ctx.arc(rp.x, rp.y, r, 0, Math.PI * 2)
        ctx.strokeStyle = col(baseAlpha * 0.45)
        ctx.lineWidth = 2.25
        ctx.stroke()

        // Middle ring
        ctx.beginPath()
        ctx.arc(rp.x, rp.y, r * 0.68, 0, Math.PI * 2)
        ctx.strokeStyle = col(baseAlpha * 0.28)
        ctx.lineWidth = 1.6
        ctx.stroke()

        // Inner ring
        ctx.beginPath()
        ctx.arc(rp.x, rp.y, r * 0.38, 0, Math.PI * 2)
        ctx.strokeStyle = col(baseAlpha * 0.22)
        ctx.lineWidth = 1.2
        ctx.stroke()

        // Center dot
        ctx.beginPath()
        ctx.arc(rp.x, rp.y, 2.2, 0, Math.PI * 2)
        ctx.fillStyle = col(baseAlpha * 0.6)
        ctx.fill()

        // ctx.shadowBlur = 0
      }

      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf)
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
