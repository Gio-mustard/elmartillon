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

const unique = (values: string[]): string[] =>
  [...new Set(values)].sort((a, b) => a.localeCompare(b, 'es'))

/** Opciones de filtro derivadas del propio catálogo. */
export const productBrands = unique(products.map((product) => product.brand))
export const productCategories = unique(
  products.map((product) => product.category),
)

export const priceRange = {
  min: Math.floor(Math.min(...products.map((product) => product.price))),
  max: Math.ceil(Math.max(...products.map((product) => product.price))),
}
