import { useState } from 'react'
import type { Category } from '../../data/catalog'

interface CategoryIconProps {
  category: Category
}

/**
 * Mosaico de la categoría. Los archivos de `public/categories/` ya traen el
 * cuadro azul y el glifo, así que se pintan tal cual; si alguno falta, se
 * dibuja el cuadro azul con el icono de react-icons de respaldo.
 */
export function CategoryIcon({ category }: CategoryIconProps) {
  const [failed, setFailed] = useState(false)
  const { illustration, icon: Icon, name } = category

  if (illustration !== null && !failed) {
    return (
      <img
        src={illustration}
        alt=""
        width={48}
        height={48}
        className="size-12 rounded-lg object-contain"
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <span className="grid size-12 place-items-center rounded-lg bg-brand-600 text-xl text-white">
      <Icon aria-hidden title={name} />
    </span>
  )
}
