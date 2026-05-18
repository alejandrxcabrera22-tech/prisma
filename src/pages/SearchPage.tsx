import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Search } from 'lucide-react'
import { CATEGORIES } from '../lib/categories'

export function SearchPage() {
  const navigate = useNavigate()
  const [problem, setProblem] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (problem) params.set('q', problem)
    if (location) params.set('loc', location)
    if (category) params.set('cat', category)
    navigate(`/resultados?${params.toString()}`)
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-20">
      <h1 className="text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
        Cuéntanos qué necesitas
      </h1>
      <p className="mt-2 text-sm text-ink-600 md:text-base">
        Te enseñamos las empresas más cercanas y mejor valoradas.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="problem"
            className="block text-sm font-medium text-ink-900"
          >
            ¿Cuál es el problema?
          </label>
          <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-ink-900/10 bg-white px-4 focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-100">
            <Search size={18} className="text-ink-500" />
            <input
              id="problem"
              type="text"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="ej. fuga de agua en el baño"
              className="w-full bg-transparent py-3 text-sm placeholder:text-ink-400 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-ink-900"
          >
            ¿Dónde estás?
          </label>
          <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-ink-900/10 bg-white px-4 focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-100">
            <MapPin size={18} className="text-ink-500" />
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Ciudad o código postal"
              className="w-full bg-transparent py-3 text-sm placeholder:text-ink-400 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <span className="block text-sm font-medium text-ink-900">
            Categoría (opcional)
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              const active = category === cat.slug
              return (
                <button
                  type="button"
                  key={cat.slug}
                  onClick={() => setCategory(active ? null : cat.slug)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${
                    active
                      ? 'border-brand-600 bg-brand-50 text-brand-700'
                      : 'border-ink-900/10 bg-white text-ink-600 hover:border-ink-900/20'
                  }`}
                >
                  <Icon size={14} />
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        <button type="submit" className="btn-primary w-full md:w-auto">
          Ver empresas cercanas
        </button>
      </form>
    </section>
  )
}
