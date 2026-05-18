import { SectionLabel } from '../components/SectionLabel'
import { TestimonialCard } from '../components/TestimonialCard'
import { TESTIMONIALS } from '../data/business'

export function TestimonialsSection() {
  return (
    <section className="relative bg-black px-6 md:px-10 py-32 md:py-44">
      <div className="max-w-6xl mx-auto">
        <SectionLabel number="06">Reseñas</SectionLabel>
        <h2 className="mt-6 mb-16 md:mb-20 font-heading italic text-5xl sm:text-6xl md:text-7xl text-white leading-[0.95] max-w-3xl">
          Lo que dicen quienes ya pasaron por la silla.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
