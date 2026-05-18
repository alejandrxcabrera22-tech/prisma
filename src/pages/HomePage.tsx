import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Search, ShieldCheck, Sparkles, Star } from 'lucide-react'
import { CATEGORIES } from '../lib/categories'

const STEPS = [
  {
    title: 'Cuéntanos tu problema',
    description:
      'Describe qué necesitas y dónde estás. Cuanto más concreto, mejor.',
  },
  {
    title: 'Te mostramos las mejores',
    description:
      'Filtramos por cercanía y reseñas reales para que veas opciones que merecen la pena.',
  },
  {
    title: 'Elige y contacta',
    description:
      'Llama o escribe a la empresa directamente. Sin intermediarios ni comisiones.',
  },
]

export function HomePage() {
  const navigate = useNavigate()
  const [problem, setProblem] = useState('')
  const [location, setLocation] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (problem) params.set('q', problem)
    if (location) params.set('loc', location)
    navigate(`/resultados?${params.toString()}`)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 to-white" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-brand-700 ring-1 ring-brand-200">
              <Sparkles size={14} /> Nuevo · Encuentra ayuda en minutos
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 md:text-6xl">
              La empresa que necesitas,{' '}
              <span className="text-brand-600">cerca de ti</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-ink-600 md:text-lg">
              ¿Atasco, reforma, avería? Te ayudamos a encontrar las mejores
              empresas por cercanía y reseñas reales.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-3xl rounded-2xl border border-ink-900/5 bg-white p-3 shadow-lg shadow-brand-900/5"
          >
            <div className="grid gap-2 md:grid-cols-[1fr_1fr_auto]">
              <label className="flex items-center gap-3 rounded-xl bg-ink-900/[0.03] px-4">
                <Search size={18} className="text-ink-500" />
                <input
                  type="text"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  placeholder="¿Qué necesitas? (ej. atasco en cocina)"
                  className="w-full bg-transparent py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
                />
              </label>
              <label className="flex items-center gap-3 rounded-xl bg-ink-900/[0.03] px-4">
                <MapPin size={18} className="text-ink-500" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ciudad o código postal"
                  className="w-full bg-transparent py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
                />
              </label>
              <button type="submit" className="btn-primary md:px-6">
                Buscar
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.form>

          {/* Trust row */}
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-brand-600" /> Empresas
              verificadas
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star size={14} className="text-brand-600" /> Reseñas reales
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-brand-600" /> Cerca de ti
            </span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink-900 md:text-3xl">
              Categorías populares
            </h2>
            <p className="mt-2 text-sm text-ink-600">
              Elige la que más se parezca a tu problema.
            </p>
          </div>
          <Link
            to="/buscar"
            className="hidden text-sm font-medium text-brand-600 hover:text-brand-700 md:inline"
          >
            Ver todas →
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.slug}
                to={`/resultados?cat=${cat.slug}`}
                className="group rounded-2xl border border-ink-900/5 bg-white p-4 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-600 transition group-hover:bg-brand-100">
                  <Icon size={20} />
                </span>
                <div className="mt-3 text-sm font-semibold text-ink-900">
                  {cat.label}
                </div>
                <div className="mt-0.5 text-xs text-ink-500">
                  {cat.description}
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-ink-900/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-ink-900 md:text-3xl">
              Cómo funciona
            </h2>
            <p className="mt-2 text-sm text-ink-600">
              Resolver un problema del hogar no debería ser complicado.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-ink-900/5 bg-white p-6"
              >
                <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-ink-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA empresas */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="overflow-hidden rounded-3xl bg-ink-900 p-8 md:p-12">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                ¿Tienes una empresa de servicios?
              </h2>
              <p className="mt-3 max-w-md text-sm text-white/70 md:text-base">
                Consigue nuevos clientes en tu zona. Aparece en wortek y
                conecta con personas que necesitan exactamente lo que ofreces.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <Link to="/empresas" className="btn-primary">
                Quiero aparecer
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/empresas"
                className="text-sm font-medium text-white/80 hover:text-white"
              >
                Saber más →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
