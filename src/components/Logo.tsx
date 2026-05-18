import { Link } from 'react-router-dom'

type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2 ${className}`}>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">
        <span className="text-base font-extrabold leading-none">w</span>
      </span>
      <span className="text-lg font-extrabold tracking-tight text-ink-900">
        wortek
      </span>
    </Link>
  )
}
