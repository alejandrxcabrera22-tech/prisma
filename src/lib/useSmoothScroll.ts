import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Hook que monta Lenis y lo conecta al ticker de GSAP para que
// ScrollTrigger se actualice sin desincronización.
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      // No interceptamos touch en móvil para que el scroll nativo se sienta bien.
      syncTouch: false,
    })

    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)

    const tick = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    // Re-evaluar posiciones cuando termina la fuente y carga inicial.
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    if (document.fonts?.ready) {
      document.fonts.ready.then(refresh).catch(() => {})
    }

    return () => {
      lenis.off('scroll', onScroll)
      lenis.destroy()
      gsap.ticker.remove(tick)
      window.removeEventListener('load', refresh)
    }
  }, [])
}
