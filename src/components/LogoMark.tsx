type LogoMarkProps = {
  className?: string
}

export function LogoMark({ className = 'h-7 w-auto' }: LogoMarkProps) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.jpeg`}
      alt="Z barber studio"
      className={`${className} block`}
      draggable={false}
    />
  )
}
