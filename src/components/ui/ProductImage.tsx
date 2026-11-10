import { placeholderImage } from '../../lib/placeholder'

interface ProductImageProps {
  /** Ruta definida en los datos; si es null se usa el placeholder. */
  src: string | null
  alt: string
  /** Semilla para el color del placeholder (normalmente el id o el nombre). */
  seed: string
  label?: string | null
  className?: string
  width?: number
  height?: number
}

/**
 * Imagen de producto con respaldo automático: si no hay ruta definida —o si la
 * ruta existe pero falla al cargar— se pinta un placeholder generado.
 */
export function ProductImage({
  src,
  alt,
  seed,
  label = null,
  className,
  width = 480,
  height = 400,
}: ProductImageProps) {
  const fallback = placeholderImage(seed, { width, height, label })

  return (
    <img
      src={src ?? fallback}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onError={(event) => {
        const image = event.currentTarget
        if (image.src !== fallback) {
          image.onerror = null
          image.src = fallback
        }
      }}
    />
  )
}
