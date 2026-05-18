import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionLabel } from '../components/SectionLabel'
import { GALLERY } from '../data/business'
import { animateHeading, fadeUp } from '../lib/animations'

gsap.registerPlugin(ScrollTrigger)

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)

  // Entrance animations on title.
  useEffect(() => {
    if (!headingRef.current) return
    const cleanups: Array<() => void> = []
    if (labelRef.current) cleanups.push(fadeUp(labelRef.current, { y: 16 }))
    cleanups.push(animateHeading(headingRef.current, { delay: 0.05 }))
    return () => cleanups.forEach((fn) => fn())
  }, [])

  // Horizontal pinned scroll for the gallery track.
  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const ctx = gsap.context(() => {
      const setupAnimation = () => {
        const trackWidth = track.scrollWidth
        const viewportWidth = window.innerWidth
        const distance = trackWidth - viewportWidth
        if (distance <= 0) return null

        return gsap.to(track, {
          x: -distance,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${distance}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
      }

      const animation = setupAnimation()
      return () => {
        animation?.scrollTrigger?.kill()
        animation?.kill()
      }
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="galeria"
      ref={containerRef}
      className="relative bg-black h-screen overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 z-10 px-6 md:px-10 pt-32 md:pt-40 pointer-events-none">
        <div ref={labelRef}>
          <SectionLabel number="02">Galería</SectionLabel>
        </div>
        <h2
          ref={headingRef}
          className="mt-6 font-heading italic text-4xl sm:text-5xl md:text-6xl text-white leading-[1.02] tracking-[-0.01em] max-w-2xl"
        >
          Trabajos del estudio.
        </h2>
      </div>

      <div className="absolute inset-0 flex items-center">
        <div
          ref={trackRef}
          className="flex items-center gap-4 md:gap-6 pl-6 md:pl-10 pr-[40vw] will-change-transform"
        >
          {GALLERY.map((src, i) => {
            const isWide = i % 3 === 1
            return (
              <figure
                key={src + i}
                className={`relative shrink-0 overflow-hidden rounded-2xl ${
                  isWide
                    ? 'w-[80vw] sm:w-[60vw] md:w-[44vw] h-[55vh]'
                    : 'w-[60vw] sm:w-[40vw] md:w-[28vw] h-[55vh]'
                }`}
              >
                <img
                  src={src}
                  alt={`Trabajo ${i + 1}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 text-[10px] font-body uppercase tracking-[0.25em] text-white/70">
                  {String(i + 1).padStart(2, '0')} /{' '}
                  {String(GALLERY.length).padStart(2, '0')}
                </div>
              </figure>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-10 right-6 md:right-10 z-10 text-[10px] font-body uppercase tracking-[0.25em] text-white/40 pointer-events-none">
        Scroll →
      </div>
    </section>
  )
}
