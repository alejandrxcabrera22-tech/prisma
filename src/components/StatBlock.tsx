type StatBlockProps = {
  value: string | number
  label: string
  detail?: string
  children?: React.ReactNode
}

export function StatBlock({ value, label, detail, children }: StatBlockProps) {
  return (
    <div className="flex flex-col gap-4 py-10 border-t border-white/10">
      <p className="text-[10px] font-body uppercase tracking-[0.3em] text-white/45">
        {label}
      </p>
      <p className="font-heading italic text-white text-[80px] sm:text-[96px] md:text-[120px] leading-[0.85]">
        {value}
      </p>
      {detail && (
        <p className="text-sm font-body font-light text-white/60 max-w-xs leading-relaxed">
          {detail}
        </p>
      )}
      {children}
    </div>
  )
}
