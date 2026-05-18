import { SectionLabel } from '../components/SectionLabel'
import { ServiceItem } from '../components/ServiceItem'
import { SERVICES, BUSINESS } from '../data/business'

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative bg-black px-6 md:px-10 py-32 md:py-44"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <SectionLabel number="01">Servicios</SectionLabel>
            <h2 className="mt-6 font-heading italic text-5xl sm:text-6xl md:text-7xl text-white leading-[0.95]">
              Tres herramientas, un ritual.
            </h2>
          </div>
          <p className="text-sm md:text-base font-body font-light text-white/55 max-w-sm leading-relaxed">
            Cada servicio tiene su tiempo asignado para que nadie corte con
            prisa. Reserva online a través de Booksy.
          </p>
        </div>

        <div className="border-t border-white/10">
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
