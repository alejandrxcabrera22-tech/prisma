import { useState } from 'react'
import { Link } from 'react-router-dom'

type AccountType = 'user' | 'business'

export function RegisterPage() {
  const [type, setType] = useState<AccountType>('user')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: conectar con el backend cuando esté listo
    alert(`(placeholder) Crear cuenta ${type} para ${name}`)
  }

  return (
    <section className="mx-auto flex max-w-md flex-col px-4 py-16 md:px-8 md:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-ink-900">
        Crea tu cuenta
      </h1>
      <p className="mt-2 text-sm text-ink-600">
        Tarda menos de un minuto.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-2 rounded-xl bg-ink-900/[0.04] p-1">
        <button
          type="button"
          onClick={() => setType('user')}
          className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
            type === 'user' ? 'bg-white shadow-sm text-ink-900' : 'text-ink-600'
          }`}
        >
          Soy un usuario
        </button>
        <button
          type="button"
          onClick={() => setType('business')}
          className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
            type === 'business'
              ? 'bg-white shadow-sm text-ink-900'
              : 'text-ink-600'
          }`}
        >
          Soy una empresa
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink-900">
            {type === 'business' ? 'Nombre de la empresa' : 'Tu nombre'}
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-base mt-1.5"
            placeholder={type === 'business' ? 'Fontanería Martín' : 'Lucía García'}
          />
        </div>
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
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-base mt-1.5"
            placeholder="Mínimo 8 caracteres"
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          Crear cuenta
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-ink-600">
        ¿Ya tienes cuenta?{' '}
        <Link to="/login" className="font-medium text-brand-600 hover:text-brand-700">
          Entra
        </Link>
      </p>
    </section>
  )
}
