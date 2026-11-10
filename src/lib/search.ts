import type { Product, ProductBadge } from '../types/product'

export const ALL_CATEGORIES = 'Todas las categorías'

export interface CatalogFilters {
  /** Texto libre del buscador del header. */
  query: string
  /** Nombre exacto de la categoría, o ALL_CATEGORIES. */
  category: string
  /** Marcas seleccionadas; vacío = todas. */
  brands: string[]
  /** Etiquetas seleccionadas; vacío = todas. */
  badges: ProductBadge[]
  /** Precio máximo; null = sin tope. */
  maxPrice: number | null
}

export const emptyFilters: CatalogFilters = {
  query: '',
  category: ALL_CATEGORIES,
  brands: [],
  badges: [],
  maxPrice: null,
}

/** Minúsculas y sin acentos, para que "percutor" encuentre "Percutór". */
export function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim()
}

/** Texto del producto donde se buscan las palabras escritas. */
function searchableText(product: Product): string {
  return normalize(
    [product.name, product.brand, product.sku, product.category].join(' '),
  )
}

/**
 * Coincidencia por palabras: todas las palabras escritas deben aparecer en
 * algún campo del producto, en cualquier orden.
 */
export function matchesQuery(product: Product, query: string): boolean {
  const terms = normalize(query).split(/\s+/).filter(Boolean)
  if (terms.length === 0) return true

  const text = searchableText(product)
  return terms.every((term) => text.includes(term))
}

/** Aplica el texto del buscador y todos los filtros de la barra lateral. */
export function searchProducts(
  products: Product[],
  filters: CatalogFilters,
): Product[] {
  return products.filter((product) => {
    if (!matchesQuery(product, filters.query)) return false

    if (
      filters.category !== ALL_CATEGORIES &&
      product.category !== filters.category
    ) {
      return false
    }

    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false
    }

    if (
      filters.badges.length > 0 &&
      !filters.badges.some((badge) => product.badges.includes(badge))
    ) {
      return false
    }

    if (filters.maxPrice !== null && product.price > filters.maxPrice) {
      return false
    }

    return true
  })
}
