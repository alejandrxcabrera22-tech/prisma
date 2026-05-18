import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionLabel } from '../components/SectionLabel'
import { BUSINESS, TRAJECTORY } from '../data/business'
import { animateHeading, countUp, fadeUp } from '../lib/animations'

gsap.registerPlugin(ScrollTrigger)

export function TrajectorySection() {
  const labelRef = useRef<HTMLDivElement>(null)
  const manifestoRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cleanups: Array<() => void> = []
    if (labelRef.current) cleanups.push(fadeUp(labelRef.current, { y: 16 }))
    if (manifestoRef.current) {
      cleanups.push(animateHeading(manifestoRef.current, { delay: 0.05 }))
    }

    if (statsRef.current) {
      const blocks = Array.from(statsRef.current.children) as HTMLElement[]
      cleanups.push(fadeUp(blocks, { y: 36, stagger: 0.12, start: 'top 85%' }))

      // Hook the countUp into each big number.
      const targets = [
        BUSINESS.yearsOfCraft,
        BUSINESS.formationsGiven,
        BUSINESS.recognitions,
      ]
      blocks.forEach((block, i) => {
        const numberEl = block.querySelector<HTMLElement>('[data-counter]')
        if (numberEl && typeof targets[i] === 'number') {
          numberEl.textContent = '0'
          cleanups.push(
            countUp(numberEl, targets[i] as number, { start: 'top 85%' }),
          )
        }
      })
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <section
      id="trayectoria"
      className="relative bg-black px-6 md:px-10 py-32 md:py-44"
    >
      <div className="max-w-6xl mx-auto">
        <div ref={labelRef}>
          <SectionLabel number="03">Trayectoria</SectionLabel>
        </div>

        <p
          ref={manifestoRef}
          className="mt-10 font-heading italic text-white text-2xl sm:text-3xl md:text-4xl leading-[1.18] max-w-4xl tracking-[-0.005em]"
        >
          {TRAJECTORY.manifesto}
        </p>

        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-12 mt-24 md:mt-32"
        >
          <div className="flex flex-col gap-4 py-10 border-t border-white/10">
            <p className="text-[10px] font-body uppercase tracking-[0.3em] text-white/45">
              Años de oficio
            </p>
            <p
              data-counter
              className="font-heading italic text-white text-[80px] sm:text-[96px] md:text-[120px] leading-[0.85]"
            >
              0
            </p>
            <p className="text-sm font-body font-light text-white/60 max-w-xs leading-relaxed">
              Abriendo persiana en Plaza Castilla, Elche, desde la primera
              tarde.
            </p>
          </div>

          <div className="flex flex-col gap-4 py-10 border-t border-white/10">
            <p className="text-[10px] font-body uppercase tracking-[0.3em] text-white/45">
              Formaciones impartidas
            </p>
            <p
              data-counter
              className="font-heading italic text-white text-[80px] sm:text-[96px] md:text-[120px] leading-[0.85]"
            >
              0
            </p>
            <p className="text-sm font-body font-light text-white/60 max-w-xs leading-relaxed">
              Workshops y master classes para otros barberos en Alicante,
              Murcia y Elche.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              {TRAJECTORY.formations.map((f) => (
                <li
                  key={f.title}
                  className="text-sm font-body font-light text-white/65 leading-snug"
                >
                  <span className="text-white/40 mr-2">{f.year}</span>
                  {f.title}{' '}
                  <span className="text-white/35">· {f.location}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 py-10 border-t border-white/10">
            <p className="text-[10px] font-body uppercase tracking-[0.3em] text-white/45">
              Reconocimientos
            </p>
            <p
              data-counter
              className="font-heading italic text-white text-[80px] sm:text-[96px] md:text-[120px] leading-[0.85]"
            >
              0
            </p>
            <p className="text-sm font-body font-light text-white/60 max-w-xs leading-relaxed">
              Menciones de medios locales, comunidad y plataformas de reserva.
            </p>
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
          </div>
        </div>
      </div>
    </section>
  )
}
