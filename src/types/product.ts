/** Etiquetas que se pintan sobre la tarjeta de producto. */
export type ProductBadge = 'promocion' | 'mas-vendido' | 'pocas-unidades'

export interface Product {
  id: string
  /** Clave interna de ferretería. */
  sku: string
  name: string
  brand: string
  category: string
  /** Precio vigente. */
  price: number
  /** Precio anterior tachado; null cuando no hay descuento. */
  oldPrice: number | null
  currency: string
  /**
   * Ruta de la imagen (p. ej. "/products/martillo.jpg").
   * Si es null —o si la ruta falla al cargar— se dibuja un placeholder.
   */
  image: string | null
  badges: ProductBadge[]
  stock: number
}
