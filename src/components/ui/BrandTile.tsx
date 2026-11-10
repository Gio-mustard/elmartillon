import { useState } from 'react'
import type { Brand } from '../../data/catalog'

interface BrandTileProps {
  brand: Brand
}

/**
 * Pastilla de marca destacada. Usa el logo de `public/ferreterias/`, que ya
 * viene como mosaico cuadrado con su fondo de color; si falta, se dibuja la
 * pastilla de texto con los colores del diseño.
 */
export function BrandTile({ brand }: BrandTileProps) {
  const [failed, setFailed] = useState(false)
  const showLogo = brand.logo !== null && !failed

  return (
    <a
      href="#catalogo"
      title={brand.name}
      className="block aspect-6/5 overflow-hidden rounded-md transition hover:brightness-110"
    >
      {showLogo ? (
        <img
          src={brand.logo ?? undefined}
          alt={brand.name}
          loading="lazy"
          className="size-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          style={{ backgroundColor: brand.background, color: brand.foreground }}
          className="flex size-full flex-col items-center justify-center gap-1 px-2 text-center"
        >
          <span className="text-lg font-extrabold tracking-tight">
            {brand.name}
          </span>
          {brand.tagline ? (
            <span className="text-[7px] font-semibold tracking-[0.08em] uppercase opacity-90">
              {brand.tagline}
            </span>
          ) : null}
        </span>
      )}
    </a>
  )
}
