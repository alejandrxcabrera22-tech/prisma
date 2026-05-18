import { SectionLabel } from '../components/SectionLabel'
import { StatBlock } from '../components/StatBlock'
import { BUSINESS, TRAJECTORY } from '../data/business'

export function TrajectorySection() {
  return (
    <section
      id="trayectoria"
      className="relative bg-black px-6 md:px-10 py-32 md:py-44"
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel number="03">Trayectoria</SectionLabel>

        <p className="mt-10 font-heading italic text-white text-3xl sm:text-4xl md:text-5xl leading-[1.05] max-w-4xl">
          {TRAJECTORY.manifesto}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 mt-24 md:mt-32">
          <StatBlock
            value={BUSINESS.yearsOfCraft}
            label="Años de oficio"
            detail="Abriendo persiana en Plaza Castilla, Elche, desde la primera tarde."
          />
          <StatBlock
            value={BUSINESS.formationsGiven}
            label="Formaciones impartidas"
            detail="Workshops y master classes para otros barberos en Alicante, Murcia y Elche."
          >
            <ul className="flex flex-col gap-3 mt-2">
              {TRAJECTORY.formations.map((f) => (
                <li
                  key={f.title}
                  className="text-sm font-body font-light text-white/65 leading-snug"
                >
                  <span className="text-white/40 mr-2">{f.year}</span>
                  {f.title} <span className="text-white/35">· {f.location}</span>
                </li>
              ))}
            </ul>
          </StatBlock>
          <StatBlock
            value={BUSINESS.recognitions}
            label="Reconocimientos"
            detail="Menciones de medios locales, comunidad y plataformas de reserva."
          >
            <ul className="flex flex-col gap-3 mt-2">
              {TRAJECTORY.awards.map((a) => (
                <li
                  key={a}
                  className="text-sm font-body font-light text-white/65 leading-snug"
                >
                  · {a}
                </li>
              ))}
            </ul>
          </StatBlock>
        </div>
      </div>
    </section>
  )
}
