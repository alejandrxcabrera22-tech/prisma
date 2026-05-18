import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'glass'

type Common = {
  variant?: Variant
  children: ReactNode
  className?: string
}

type AsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    as?: 'button'
  }

type AsAnchor = Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    as: 'a'
    href: string
  }

type PillButtonProps = AsButton | AsAnchor

const baseClasses =
  'group relative inline-flex items-center justify-center text-sm font-body font-medium rounded px-6 py-3 overflow-hidden transition-all duration-200 active:scale-[0.97]'

const primaryClasses =
  'bg-white text-black shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.25)] hover:scale-[1.03]'

const glassClasses =
  'liquid-glass text-white hover:scale-[1.03] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_20px_2px_rgba(255,255,255,0.07)]'

export function PillButton(props: PillButtonProps) {
  const { variant = 'primary', children, className = '' } = props
  const classes = `${baseClasses} ${variant === 'primary' ? primaryClasses : glassClasses} ${className}`

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-b from-white to-white/85 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      )}
    </>
  )

  if (props.as === 'a') {
    const { variant: _v, as: _a, children: _c, className: _cn, ...rest } = props
    return (
      <a className={classes} {...rest}>
        {content}
      </a>
    )
  }

  const { variant: _v, as: _a, children: _c, className: _cn, ...rest } = props as AsButton
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
