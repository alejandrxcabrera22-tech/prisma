import { SectionLabel } from '../components/SectionLabel'
import { BUSINESS } from '../data/business'

export function LocationSection() {
  return (
    <section
      id="ubicacion"
      className="relative bg-black px-6 md:px-10 py-32 md:py-44"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20">
          <SectionLabel number="05">Visítanos</SectionLabel>
          <h2 className="mt-6 font-heading italic text-5xl sm:text-6xl md:text-7xl text-white leading-[0.95] max-w-3xl">
            {BUSINESS.address.street},<br />
            <span className="text-white/55">{BUSINESS.address.city}.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[520px] bg-white/5">
            <iframe
              title="Mapa Z barber studio"
              src={BUSINESS.mapsEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale contrast-[1.1] brightness-[0.85]"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(0.85) invert(0.92) hue-rotate(180deg)' }}
            />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <p className="text-[10px] font-body uppercase tracking-[0.3em] text-white/40 mb-3">
                Dirección
              </p>
              <p className="font-heading italic text-2xl md:text-3xl text-white leading-snug">
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.postal} {BUSINESS.address.city}
                <br />
                {BUSINESS.address.province}
              </p>
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-2 text-sm font-body text-white/70 hover:text-white transition-colors"
              >
                Cómo llegar
                <span>→</span>
              </a>
            </div>

            <div>
              <p className="text-[10px] font-body uppercase tracking-[0.3em] text-white/40 mb-3">
                Horario
              </p>
              <ul className="flex flex-col gap-2 text-sm font-body font-light text-white/80">
                {BUSINESS.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between gap-6 border-b border-white/[0.06] pb-2"
                  >
                    <span className="text-white/55">{h.day}</span>
                    <span className="text-right">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] font-body uppercase tracking-[0.3em] text-white/40 mb-3">
                Contacto
              </p>
              <div className="flex flex-col gap-2 text-sm font-body text-white/80">
                <a
                  href={`tel:${BUSINESS.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS.phone}
                </a>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white transition-colors"
                >
                  Instagram {BUSINESS.instagramHandle}
                </a>
                <a
                  href={BUSINESS.booksyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white transition-colors"
                >
                  Booksy ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
