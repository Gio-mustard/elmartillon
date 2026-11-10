import type { Brand } from '../../data/catalog'

interface BrandTileProps {
  brand: Brand
}

export function BrandTile({ brand }: BrandTileProps) {
  return (
    <a
      href="#catalogo"
      style={{ backgroundColor: brand.background, color: brand.foreground }}
      className="flex aspect-6/5 flex-col items-center justify-center gap-1 rounded-md px-2 text-center transition hover:brightness-110"
    >
      <span className="text-lg font-extrabold tracking-tight">{brand.name}</span>
      {brand.tagline ? (
        <span className="text-[7px] font-semibold tracking-[0.08em] uppercase opacity-90">
          {brand.tagline}
        </span>
      ) : null}
    </a>
  )
}
