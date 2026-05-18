import { useSearchParams, Link } from 'react-router-dom'
import { MapPin, Phone, Star } from 'lucide-react'
import { CATEGORIES } from '../lib/categories'

type Company = {
  id: string
  name: string
  category: string
  rating: number
  reviews: number
  distanceKm: number
  city: string
  blurb: string
  sponsored?: boolean
}

const MOCK_COMPANIES: Company[] = [
  {
    id: '1',
    name: 'Fontanería Martín',
    category: 'fontaneria',
    rating: 4.9,
    reviews: 187,
    distanceKm: 1.2,
    city: 'Madrid centro',
    blurb: 'Urgencias 24 h · 15 años de experiencia',
    sponsored: true,
  },
  {
    id: '2',
    name: 'Reformas García & Hijos',
    category: 'reformas',
    rating: 4.8,
    reviews: 92,
    distanceKm: 2.4,
    city: 'Chamberí',
    blurb: 'Reformas integrales con presupuesto cerrado',
  },
  {
    id: '3',
    name: 'Electric Pro',
    category: 'electricidad',
    rating: 4.7,
    reviews: 64,
    distanceKm: 3.1,
    city: 'Salamanca',
    blurb: 'Boletines, instalaciones y averías',
  },
  {
    id: '4',
    name: 'Climatec',
    category: 'climatizacion',
    rating: 4.6,
    reviews: 58,
    distanceKm: 4.5,
    city: 'Tetuán',
    blurb: 'Aire acondicionado y calefacción',
  },
]

export function ResultsPage() {
  const [params] = useSearchParams()
  const q = params.get('q') ?? ''
  const loc = params.get('loc') ?? ''
  const cat = params.get('cat')

  const filtered = cat
    ? MOCK_COMPANIES.filter((c) => c.category === cat)
    : MOCK_COMPANIES

  const categoryLabel = CATEGORIES.find((c) => c.slug === cat)?.label

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-ink-900 md:text-3xl">
            {filtered.length} empresas {loc ? `en ${loc}` : 'cerca de ti'}
          </h1>
          <p className="mt-1 text-sm text-ink-600">
            {q && <>Resultados para "{q}". </>}
            {categoryLabel && <>Categoría: {categoryLabel}. </>}
            Ordenadas por cercanía y reseñas.
          </p>
        </div>
        <Link to="/buscar" className="btn-secondary">
          Cambiar búsqueda
        </Link>
      </div>

      <div className="mt-8 grid gap-4">
        {filtered.map((c) => (
          <CompanyCard key={c.id} company={c} />
        ))}

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-ink-900/10 bg-white p-10 text-center">
            <p className="text-sm text-ink-600">
              No encontramos empresas para esta búsqueda.
            </p>
            <Link to="/buscar" className="mt-3 inline-block text-sm font-medium text-brand-600">
              Probar otra búsqueda →
            </Link>
          </div>
        )}
      </div>

      <p className="mt-6 text-xs text-ink-500">
        * Datos de ejemplo. Próximamente, resultados reales basados en tu
        ubicación y reseñas verificadas.
      </p>
    </section>
  )
}

function CompanyCard({ company }: { company: Company }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-ink-900/5 bg-white p-5 transition hover:border-brand-200 hover:shadow-md md:flex-row md:items-center md:justify-between">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 font-bold text-brand-700">
          {company.name.charAt(0)}
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-ink-900">
              {company.name}
            </h3>
            {company.sponsored && (
              <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-700">
                Destacada
              </span>
            )}
          </div>
          <p className="mt-0.5 text-sm text-ink-600">{company.blurb}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-500">
            <span className="inline-flex items-center gap-1 text-ink-900">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <strong>{company.rating}</strong>
              <span className="text-ink-500">({company.reviews})</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin size={14} />
              {company.city} · {company.distanceKm} km
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 md:shrink-0">
        <button type="button" className="btn-secondary">
          Ver perfil
        </button>
        <button type="button" className="btn-primary">
          <Phone size={14} />
          Contactar
        </button>
      </div>
    </article>
  )
}
