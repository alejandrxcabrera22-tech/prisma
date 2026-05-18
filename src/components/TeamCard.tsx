type TeamCardProps = {
  name: string
  role: string
  bio: string
  instagram: string
  photo: string
}

export function TeamCard({ name, role, bio, instagram, photo }: TeamCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white/[0.02]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-[10px] font-body uppercase tracking-[0.25em] text-white/55 mb-2">
          {role}
        </p>
        <h3 className="font-heading italic text-3xl md:text-4xl text-white leading-none mb-3">
          {name}
        </h3>
        <p className="text-sm font-body font-light text-white/70 max-w-xs leading-relaxed mb-3">
          {bio}
        </p>
        {instagram && (
          <a
            href={`https://www.instagram.com/${instagram.replace('@', '')}/`}
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs font-body text-white/60 hover:text-white transition-colors"
          >
            {instagram} ↗
          </a>
        )}
      </div>
    </article>
  )
}
