import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionLabel } from '../components/SectionLabel'
import { TestimonialCard } from '../components/TestimonialCard'
import { TESTIMONIALS } from '../data/business'
import { animateHeading, fadeUp } from '../lib/animations'

gsap.registerPlugin(ScrollTrigger)

export function TestimonialsSection() {
  const labelRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cleanups: Array<() => void> = []
    if (labelRef.current) cleanups.push(fadeUp(labelRef.current, { y: 16 }))
    if (headingRef.current)
      cleanups.push(animateHeading(headingRef.current, { delay: 0.05 }))
    if (gridRef.current) {
      const cards = Array.from(gridRef.current.children) as HTMLElement[]
      cleanups.push(fadeUp(cards, { y: 30, stagger: 0.12 }))
    }
    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <section className="relative bg-black px-6 md:px-10 py-32 md:py-44">
      <div className="max-w-6xl mx-auto">
        <div ref={labelRef}>
          <SectionLabel number="06">Reseñas</SectionLabel>
        </div>
        <h2
          ref={headingRef}
          className="mt-6 mb-16 md:mb-20 font-heading italic text-4xl sm:text-5xl md:text-6xl text-white leading-[1.02] tracking-[-0.01em] max-w-3xl"
        >
          Lo que dicen quienes ya pasaron por la silla.
        </h2>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
