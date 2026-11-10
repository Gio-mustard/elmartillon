import { useState } from 'react'
import type { Category } from '../../data/catalog'

interface CategoryIconProps {
  category: Category
  className?: string
}

/**
 * Ilustración de la categoría. Usa el SVG de `public/categories/` y, si ese
 * archivo todavía no existe, cae al icono de react-icons.
 */
export function CategoryIcon({ category, className = '' }: CategoryIconProps) {
  const [failed, setFailed] = useState(false)
  const { illustration, icon: Icon, name } = category

  if (illustration !== null && !failed) {
    return (
      <img
        src={illustration}
        alt=""
        className={`h-[58%] w-[58%] object-contain ${className}`}
        onError={() => setFailed(true)}
      />
    )
  }

  return <Icon aria-hidden className={className} title={name} />
}
