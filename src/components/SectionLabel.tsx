type SectionLabelProps = {
  number?: string
  children: React.ReactNode
}

export function SectionLabel({ number, children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-body uppercase tracking-[0.25em] text-white/50">
      {number && <span className="text-white/30">{number}</span>}
      <span className="h-px w-8 bg-white/20" />
      <span>{children}</span>
    </span>
  )
}
