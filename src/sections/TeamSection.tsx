import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionLabel } from '../components/SectionLabel'
import { TeamCard } from '../components/TeamCard'
import { TEAM } from '../data/business'
import { animateHeading, clipReveal, fadeUp } from '../lib/animations'

gsap.registerPlugin(ScrollTrigger)

export function TeamSection() {
  const labelRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const introRef = useRef<HTMLParagraphElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cleanups: Array<() => void> = []
    if (labelRef.current) cleanups.push(fadeUp(labelRef.current, { y: 16 }))
    if (headingRef.current)
      cleanups.push(animateHeading(headingRef.current, { delay: 0.05 }))
    if (introRef.current) cleanups.push(fadeUp(introRef.current, { delay: 0.2 }))

    if (gridRef.current) {
      const cards = Array.from(gridRef.current.children) as HTMLElement[]
      cards.forEach((card, i) => {
        cleanups.push(clipReveal(card, { delay: i * 0.08 }))
      })
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <section
      id="equipo"
      className="relative bg-black px-6 md:px-10 py-32 md:py-44"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div ref={labelRef}>
              <SectionLabel number="04">Equipo</SectionLabel>
            </div>
            <h2
              ref={headingRef}
              className="mt-6 font-heading italic text-4xl sm:text-5xl md:text-6xl text-white leading-[1.02] tracking-[-0.01em]"
            >
              Las manos detrás del estudio.
            </h2>
          </div>
          <p
            ref={introRef}
            className="text-sm md:text-base font-body font-light text-white/55 max-w-sm leading-relaxed"
          >
            Cada barbero tiene su firma. Reserva con el que te encaje en
            Booksy.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl"
        >
          {TEAM.map((m) => (
            <TeamCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>
  )
}
