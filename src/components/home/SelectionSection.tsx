import type { ReactNode } from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { bestSellerIds, favoriteIds, featuredBrands } from '../../data/catalog'
import { getProductsByIds } from '../../data/products'
import type { Product } from '../../types/product'
import { BrandTile } from '../ui/BrandTile'
import { ProductImage } from '../ui/ProductImage'

interface PanelProps {
  title: string
  href: string
  children: ReactNode
}

function Panel({ title, href, children }: PanelProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-white p-4 shadow-card">
      <a
        href={href}
        className="flex items-center gap-1.5 text-[12px] font-bold tracking-wide text-ink uppercase transition hover:text-brand-600"
      >
        {title}
        <FaChevronRight aria-hidden className="text-[10px]" />
      </a>
      <div className="mt-3.5">{children}</div>
    </article>
  )
}

function ThumbGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {products.map((product) => (
        <a
          key={product.id}
          href="#catalogo"
          title={product.name}
          className="aspect-square overflow-hidden rounded-md border border-line/70"
        >
          <ProductImage
            src={product.image}
            alt={product.name}
            seed={product.id}
            label={product.brand}
            width={300}
            height={300}
            className="size-full object-cover transition duration-200 hover:scale-105"
          />
        </a>
      ))}
    </div>
  )
}

export function SelectionSection() {
  const bestSellers = getProductsByIds(bestSellerIds)
  const favorites = getProductsByIds(favoriteIds)

  return (
    <section id="marcas" className="pb-10">
      <div className="shell">
        <h2 className="section-title mb-4">Nuestra Selección</h2>

        <div className="grid gap-5 md:grid-cols-3">
          <Panel title="Más vendidos" href="#catalogo">
            <ThumbGrid products={bestSellers} />
          </Panel>

          <Panel title="Marcas destacadas" href="#catalogo">
            <div className="grid grid-cols-2 gap-3">
              {featuredBrands.map((brand) => (
                <BrandTile key={brand.id} brand={brand} />
              ))}
            </div>
          </Panel>

          <Panel title="Basados en tus favoritos" href="#catalogo">
            <ThumbGrid products={favorites} />
          </Panel>
        </div>
      </div>
    </section>
  )
}
