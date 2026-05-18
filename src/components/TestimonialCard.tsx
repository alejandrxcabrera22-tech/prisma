type TestimonialCardProps = {
  quote: string
  author: string
  source: string
}

export function TestimonialCard({ quote, author, source }: TestimonialCardProps) {
  return (
    <figure className="flex flex-col gap-6 p-8 md:p-10 rounded-2xl liquid-glass">
      <p className="font-heading italic text-2xl md:text-3xl text-white leading-snug">
        “{quote}”
      </p>
      <figcaption className="flex flex-col gap-1">
        <span className="text-sm font-body text-white">{author}</span>
        <span className="text-[10px] font-body uppercase tracking-[0.25em] text-white/40">
          {source}
        </span>
      </figcaption>
    </figure>
  )
}
