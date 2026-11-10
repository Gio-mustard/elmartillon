import type { Product, ProductBadge } from '../types/product'
import rawProducts from './products.json'

const VALID_BADGES: ProductBadge[] = [
  'promocion',
  'mas-vendido',
  'pocas-unidades',
]

const isBadge = (value: string): value is ProductBadge =>
  (VALID_BADGES as string[]).includes(value)

/** Catálogo global de prueba, leído de `products.json`. */
export const products: Product[] = rawProducts.map((product) => ({
  ...product,
  badges: product.badges.filter(isBadge),
}))

export const getProductsByIds = (ids: string[]): Product[] =>
  ids
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => product !== undefined)

/** Totales mostrados bajo la rejilla del catálogo (maqueta estática). */
export const catalogMeta = {
  found: 72,
  currentPage: 1,
  pages: 12,
} as const
