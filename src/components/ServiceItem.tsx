type ServiceItemProps = {
  number: string
  name: string
  duration: string
  price: string
  description: string
}

export function ServiceItem({
  number,
  name,
  duration,
  price,
  description,
}: ServiceItemProps) {
  return (
    <article className="group grid grid-cols-12 gap-4 py-8 border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.015]">
      <div className="col-span-1 text-white/30 text-xs font-body tracking-widest pt-1">
        {number}
      </div>
      <div className="col-span-7 md:col-span-6">
        <h3 className="font-heading text-2xl md:text-3xl text-white leading-none mb-2">
          {name}
        </h3>
        <p className="text-sm font-body font-light text-white/55 max-w-md leading-relaxed">
          {description}
        </p>
      </div>
      <div className="col-span-2 text-xs font-body uppercase tracking-[0.2em] text-white/45 pt-2">
        {duration}
      </div>
      <div className="col-span-2 md:col-span-3 text-right font-heading italic text-2xl md:text-3xl text-white">
        {price}
      </div>
    </article>
  )
}
