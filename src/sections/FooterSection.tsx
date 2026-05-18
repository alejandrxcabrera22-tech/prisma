import { LogoMark } from '../components/LogoMark'
import { BUSINESS, NAV_LINKS } from '../data/business'

export function FooterSection() {
  return (
    <footer className="relative bg-black px-6 md:px-10 pt-32 pb-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 pb-20">
          <div className="max-w-xl">
            <LogoMark className="h-10 w-auto mb-8" />
            <p className="font-heading italic text-3xl md:text-4xl text-white leading-[1.05]">
              ¿Reservamos tu hueco?
            </p>
            <a
              href={BUSINESS.booksyUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center justify-center bg-white text-black text-sm font-body font-medium rounded px-6 py-3 transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.25)] active:scale-[0.97]"
            >
              Reservar en Booksy
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div>
              <p className="text-[10px] font-body uppercase tracking-[0.3em] text-white/40 mb-4">
                Navegación
              </p>
              <ul className="flex flex-col gap-2 text-sm font-body font-light text-white/75">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-body uppercase tracking-[0.3em] text-white/40 mb-4">
                Contacto
              </p>
              <ul className="flex flex-col gap-2 text-sm font-body font-light text-white/75">
                <li>{BUSINESS.address.street}</li>
                <li>
                  {BUSINESS.address.postal} {BUSINESS.address.city}
                </li>
                <li>
                  <a
                    href={`tel:${BUSINESS.phone.replace(/\s+/g, '')}`}
                    className="hover:text-white transition-colors"
                  >
                    {BUSINESS.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={BUSINESS.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-white transition-colors"
                  >
                    {BUSINESS.instagramHandle}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-xs font-body text-white/40">
            © {new Date().getFullYear()} {BUSINESS.name}. Todos los derechos
            reservados.
          </p>
          <p className="text-xs font-body text-white/40">
            Hecho en Elche · Plaza Castilla
          </p>
        </div>
      </div>
    </footer>
  )
}
