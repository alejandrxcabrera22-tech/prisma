import { SectionLabel } from '../components/SectionLabel'
import { TeamCard } from '../components/TeamCard'
import { TEAM } from '../data/business'

export function TeamSection() {
  return (
    <section
      id="equipo"
      className="relative bg-black px-6 md:px-10 py-32 md:py-44"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <SectionLabel number="04">Equipo</SectionLabel>
            <h2 className="mt-6 font-heading italic text-5xl sm:text-6xl md:text-7xl text-white leading-[0.95]">
              Las manos detrás del estudio.
            </h2>
          </div>
          <p className="text-sm md:text-base font-body font-light text-white/55 max-w-sm leading-relaxed">
            Cada barbero tiene su firma. Reserva con el que te encaje en
            Booksy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
          {TEAM.map((m) => (
            <TeamCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>
  )
}
