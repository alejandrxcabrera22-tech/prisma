import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionLabel } from '../components/SectionLabel'
import { ServiceItem } from '../components/ServiceItem'
import { SERVICES, BUSINESS } from '../data/business'
import { animateHeading, fadeUp } from '../lib/animations'

gsap.registerPlugin(ScrollTrigger)

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLParagraphElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!headingRef.current) return
    const cleanups: Array<() => void> = []

    if (labelRef.current) cleanups.push(fadeUp(labelRef.current, { y: 16 }))
    cleanups.push(animateHeading(headingRef.current, { delay: 0.05 }))
    if (introRef.current) cleanups.push(fadeUp(introRef.current, { delay: 0.2 }))

    if (listRef.current) {
      const items = Array.from(listRef.current.children) as HTMLElement[]
      cleanups.push(
        fadeUp(items, {
          y: 30,
          stagger: 0.08,
          start: 'top 88%',
        }),
      )
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="relative bg-black px-6 md:px-10 py-32 md:py-44"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div ref={labelRef}>
              <SectionLabel number="01">Servicios</SectionLabel>
            </div>
            <h2
              ref={headingRef}
              className="mt-6 font-heading italic text-4xl sm:text-5xl md:text-6xl text-white leading-[1.02] tracking-[-0.01em]"
            >
              Tres herramientas, un ritual.
            </h2>
          </div>
          <p
            ref={introRef}
            className="text-sm md:text-base font-body font-light text-white/55 max-w-sm leading-relaxed"
          >
            Cada servicio tiene su tiempo asignado para que nadie corte con
            prisa. Reserva online a través de Booksy.
          </p>
        </div>

        <div ref={listRef} className="border-t border-white/10">
          {SERVICES.map((service) => (
            <ServiceItem key={service.number} {...service} />
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <a
            href={BUSINESS.booksyUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 text-sm font-body text-white hover:opacity-70 transition-opacity"
          >
            Ver disponibilidad en Booksy
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
