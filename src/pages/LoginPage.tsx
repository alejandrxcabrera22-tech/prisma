import { useState } from 'react'
import { Link } from 'react-router-dom'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: conectar con el backend cuando esté listo
    alert(`(placeholder) Entrar como ${email}`)
  }

  return (
    <section className="mx-auto flex max-w-md flex-col px-4 py-16 md:px-8 md:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-ink-900">
        Entra en wortek
      </h1>
      <p className="mt-2 text-sm text-ink-600">
        Accede para gestionar tu cuenta o tu empresa.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink-900">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-base mt-1.5"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-ink-900"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-base mt-1.5"
            placeholder="••••••••"
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          Entrar
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-ink-600">
        ¿Aún no tienes cuenta?{' '}
        <Link to="/registro" className="font-medium text-brand-600 hover:text-brand-700">
          Crea una
        </Link>
      </p>
    </section>
  )
}
