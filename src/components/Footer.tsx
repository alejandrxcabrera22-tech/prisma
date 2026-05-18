import { Link } from 'react-router-dom'
import { Logo } from './Logo'

const FOOTER_LINKS = [
  {
    title: 'Producto',
    links: [
      { to: '/buscar', label: 'Buscar servicio' },
      { to: '/empresas', label: 'Para empresas' },
    ],
  },
  {
    title: 'Cuenta',
    links: [
      { to: '/login', label: 'Entrar' },
      { to: '/registro', label: 'Crear cuenta' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-ink-900/5 bg-ink-900/[0.02]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-ink-600">
            Conectamos personas con las mejores empresas locales para resolver
            cualquier problema del hogar.
          </p>
        </div>

        {FOOTER_LINKS.map((group) => (
          <div key={group.title}>
            <h4 className="text-sm font-semibold text-ink-900">{group.title}</h4>
            <ul className="mt-3 space-y-2">
              {group.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-600 transition hover:text-ink-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ink-900/5">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-ink-500 md:flex-row md:items-center md:px-8">
          <span>© {new Date().getFullYear()} wortek. Todos los derechos reservados.</span>
          <span>Hecho para resolver tus problemas del hogar.</span>
        </div>
      </div>
    </footer>
  )
}
