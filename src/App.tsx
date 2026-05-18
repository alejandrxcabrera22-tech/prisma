import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const NAV_LINKS = ['Servicios', 'Galería', 'Equipo', 'Precios', 'Blog']
const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_080827_a9e5ad52-b6ee-4e79-b393-d936f179cfd7.mp4'

function LogoMark() {
  return (
    <img
      src="/logo.jpeg"
      alt="Z barber studio"
      className="h-7 w-auto block"
      draggable={false}
    />
  )
}

type RVFCVideo = HTMLVideoElement & {
  requestVideoFrameCallback?: (cb: () => void) => number
  cancelVideoFrameCallback?: (id: number) => void
}

export default function App() {
  const [mounted, setMounted] = useState(false)
  const [framesReady, setFramesReady] = useState(false)

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const videoBgRef = useRef<HTMLDivElement | null>(null)
  const displayCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const framesRef = useRef<HTMLCanvasElement[]>([])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Effect 1 — capture frames into an offscreen buffer for boomerang playback
  useEffect(() => {
    const video = videoRef.current as RVFCVideo | null
    if (!video) return

    let capturing = true
    let lastTime = -1
    let rafId = 0
    let rvfcId = 0
    const MAX_WIDTH = 960
    const frames: HTMLCanvasElement[] = []

    const captureFrame = () => {
      if (!capturing) return
      if (video.readyState < 2) {
        scheduleNext()
        return
      }
      if (video.currentTime === lastTime) {
        scheduleNext()
        return
      }
      lastTime = video.currentTime

      const scale = Math.min(1, MAX_WIDTH / video.videoWidth)
      const w = Math.floor(video.videoWidth * scale)
      const h = Math.floor(video.videoHeight * scale)
      if (w === 0 || h === 0) {
        scheduleNext()
        return
      }
      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(video, 0, 0, w, h)
        frames.push(canvas)
      }
      scheduleNext()
    }

    const scheduleNext = () => {
      if (!capturing) return
      if (typeof video.requestVideoFrameCallback === 'function') {
        rvfcId = video.requestVideoFrameCallback(captureFrame)
      } else {
        rafId = requestAnimationFrame(captureFrame)
      }
    }

    const onEnded = () => {
      capturing = false
      framesRef.current = frames
      setFramesReady(true)
    }

    const onLoaded = () => {
      video.play().catch(() => {})
      scheduleNext()
    }

    video.addEventListener('loadedmetadata', onLoaded)
    video.addEventListener('ended', onEnded)
    if (video.readyState >= 1) onLoaded()

    return () => {
      capturing = false
      video.removeEventListener('loadedmetadata', onLoaded)
      video.removeEventListener('ended', onEnded)
      if (rafId) cancelAnimationFrame(rafId)
      if (rvfcId && typeof video.cancelVideoFrameCallback === 'function') {
        video.cancelVideoFrameCallback(rvfcId)
      }
    }
  }, [])

  // Effect 2 — boomerang render loop on display canvas
  useEffect(() => {
    if (!framesReady) return
    const canvas = displayCanvasRef.current
    const frames = framesRef.current
    if (!canvas || frames.length === 0) return

    canvas.width = frames[0].width
    canvas.height = frames[0].height
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let index = 0
    let direction = 1
    let last = performance.now()
    const interval = 1000 / 30
    let rafId = 0

    const render = (now: number) => {
      if (now - last >= interval) {
        ctx.drawImage(frames[index], 0, 0)
        index += direction
        if (index >= frames.length - 1) {
          index = frames.length - 1
          direction = -1
        } else if (index <= 0) {
          index = 0
          direction = 1
        }
        last = now
      }
      rafId = requestAnimationFrame(render)
    }
    rafId = requestAnimationFrame(render)

    return () => cancelAnimationFrame(rafId)
  }, [framesReady])

  // Effect 3 — parallax mouse tracking via gsap
  useEffect(() => {
    const el = videoBgRef.current
    if (!el) return

    const strength = 20
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let rafId = 0

    const onMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      targetX = ((e.clientX - cx) / cx) * strength
      targetY = ((e.clientY - cy) / cy) * strength
    }

    const tick = () => {
      currentX += (targetX - currentX) * 0.06
      currentY += (targetY - currentY) * 0.06
      gsap.set(el, { x: currentX, y: currentY })
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-body overflow-x-hidden">
      {/* Video background */}
      <div
        ref={videoBgRef}
        className="fixed top-0 left-0 w-full h-full z-0 scale-[1.08] origin-center"
      >
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          className="w-full h-full object-cover"
          style={{ display: framesReady ? 'none' : 'block' }}
        />
        <canvas
          ref={displayCanvasRef}
          className="w-full h-full object-cover"
          style={{ display: framesReady ? 'block' : 'none' }}
        />
      </div>

      {/* Hero title */}
      <div
        className={`fixed left-0 right-0 z-20 w-full px-4 transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ top: '126px' }}
      >
        <h1 className="hero-title select-none">Z barber studio</h1>
      </div>

      {/* Nav */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap">
        <div className="liquid-glass flex items-center gap-6 rounded px-4 py-2.5">
          <LogoMark />
          <div className="flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-body font-light text-white/70 hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 ml-4">
            <a
              href="#"
              className="text-sm font-body font-light text-white/70 hover:text-white transition-colors duration-200"
            >
              Acceder
            </a>
            <a
              href="#"
              className="liquid-glass-strong text-sm font-body font-medium text-white rounded px-4 py-1.5 transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_16px_2px_rgba(255,255,255,0.12)] active:scale-[0.97]"
            >
              Reservar
            </a>
          </div>
        </div>
      </nav>

      {/* Bottom row */}
      <div
        className={`fixed bottom-12 left-0 right-0 px-10 flex items-end justify-between z-20 transition-all duration-1000 delay-300 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="text-sm font-body font-light text-white/75 max-w-[220px] leading-relaxed">
          Tres años cortando en Plaza Castilla, Elche. Oficio, navaja y café para
          quien entiende el corte como un ritual.
        </p>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center gap-3">
          <button className="group relative bg-white text-black text-sm font-body font-medium rounded px-6 py-3 overflow-hidden active:scale-[0.97] transition-all duration-200 shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.25)] hover:scale-[1.03]">
            <span className="relative z-10">Reservar cita</span>
            <span className="absolute inset-0 bg-gradient-to-b from-white to-white/85 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>
          <button className="liquid-glass group text-white text-sm font-body font-medium rounded px-6 py-3 active:scale-[0.97] transition-all duration-200 hover:scale-[1.03] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_20px_2px_rgba(255,255,255,0.07)]">
            Ver servicios
          </button>
        </div>

        <p className="text-sm font-body font-light text-white/75 max-w-[220px] leading-relaxed text-right">
          Corte clásico, fade, barba al detalle. Reserva online y entra a que te
          afeiten en silencio.
        </p>
      </div>
    </div>
  )
}
