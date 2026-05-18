import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center md:px-8">
      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
        404
      </span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink-900">
        Esta página no existe
      </h1>
      <p className="mt-2 text-sm text-ink-600">
        Puede que la dirección esté mal escrita o que la hayamos movido.
      </p>
      <Link to="/" className="btn-primary mt-6">
        Volver al inicio
      </Link>
    </section>
  )
}
