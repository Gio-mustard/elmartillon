import { formatPrice } from '../../lib/format'
import type { Product } from '../../types/product'
import { ShoppingCartIcon, TrendingDownIcon } from '../icons'
import { Badge } from './Badge'
import { ProductImage } from './ProductImage'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const onSale = product.badges.includes('promocion')
  const bestSeller = product.badges.includes('mas-vendido')
  const lowStock = product.badges.includes('pocas-unidades')

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="aspect-16/10 overflow-hidden bg-brand-50">
        <ProductImage
          src={product.image}
          alt={product.name}
          seed={product.id}
          label={product.brand}
          className="size-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <h3 className="text-[15px] leading-snug font-bold text-ink">
          {product.name}
        </h3>

        {lowStock ? (
          <p className="flex items-center gap-1 text-[11px] font-semibold text-danger-500">
            <TrendingDownIcon />
            Pocas unidades disponibles
          </p>
        ) : null}

        {onSale || bestSeller ? (
          <div className="flex flex-wrap gap-1.5">
            {onSale ? <Badge tone="promo">Promoción</Badge> : null}
            {bestSeller ? <Badge tone="best">Más vendido</Badge> : null}
          </div>
        ) : null}

        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <div>
            {product.oldPrice !== null ? (
              <p className="text-[11px] text-muted line-through">
                {formatPrice(product.oldPrice, product.currency)}
              </p>
            ) : null}
            <p className="text-[19px] leading-tight font-extrabold text-ink">
              {formatPrice(product.price, product.currency)}
            </p>
          </div>

          <button
            type="button"
            aria-label={`Agregar ${product.name} al carrito`}
            className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-600 text-white transition hover:bg-accent-500 hover:text-brand-800"
          >
            <ShoppingCartIcon />
          </button>
        </div>
      </div>
    </article>
  )
}
