import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, MapPin, Megaphone, Star, Users } from 'lucide-react'

const BENEFITS = [
  {
    icon: Users,
    title: 'Clientes que ya te buscan',
    description:
      'Llega a personas con un problema concreto justo en el momento en que lo necesitan resolver.',
  },
  {
    icon: MapPin,
    title: 'Tu zona, tu mercado',
    description:
      'Aparece cuando alguien busca cerca de ti. Nada de gastar en clientes que están a 100 km.',
  },
  {
    icon: Star,
    title: 'Reseñas que te diferencian',
    description:
      'Tus clientes contentos hacen el trabajo de marketing. Visibilidad basada en confianza real.',
  },
  {
    icon: BarChart3,
    title: 'Mide lo que importa',
    description:
      'Sabe cuántas personas te ven, te llaman y te contactan. Sin humo.',
  },
]

export function ForBusinessesPage() {
  return (
    <>
      <section className="bg-ink-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20">
                <Megaphone size={14} /> Para empresas de servicios
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                Consigue clientes en tu zona.
              </h1>
              <p className="mt-4 max-w-lg text-base text-white/70 md:text-lg">
                Aparece en wortek cuando alguien tenga un atasco, una avería o
                quiera reformar su casa. Sin comisiones por trabajo: pagas por
                visibilidad.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/registro" className="btn-primary">
                  Aparecer en wortek
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="#planes"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Ver planes
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <div className="text-xs uppercase tracking-wide text-white/60">
                Resumen del mes
              </div>
              <div className="mt-2 text-4xl font-bold">142 contactos</div>
              <div className="mt-1 text-sm text-white/70">
                +28 % respecto al mes anterior
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
                <Stat label="Visitas" value="3.2k" />
                <Stat label="Llamadas" value="89" />
                <Stat label="Mensajes" value="53" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900 md:text-3xl">
            ¿Por qué wortek?
          </h2>
          <p className="mt-2 text-sm text-ink-600">
            Una forma sencilla de conseguir trabajo sin depender del boca a
            boca.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {BENEFITS.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className="rounded-2xl border border-ink-900/5 bg-white p-6"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-900">
                  {b.title}
                </h3>
                <p className="mt-1 text-sm text-ink-600">{b.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section id="planes" className="bg-ink-900/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-ink-900 md:text-3xl">
              Empieza hoy
            </h2>
            <p className="mt-2 text-sm text-ink-600">
              Hablamos contigo, entendemos tu negocio y te ayudamos a configurar
              tu perfil.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Link to="/registro" className="btn-primary">
              Crear cuenta de empresa
              <ArrowRight size={16} />
            </Link>
            <p className="text-xs text-ink-500">
              Planes y precios próximamente. Sin permanencia.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/[0.06] p-3">
      <div className="text-base font-semibold">{value}</div>
      <div className="text-[11px] text-white/60">{label}</div>
    </div>
  )
}
