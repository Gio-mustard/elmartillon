import { catalogMeta, products } from '../../data/products'
import { ProductCard } from '../ui/ProductCard'
import { FiltersSidebar } from './FiltersSidebar'
import { Pagination } from './Pagination'

/** Productos visibles en la primera página del catálogo. */
const PER_PAGE = 6

export function CatalogSection() {
  const page = products.slice(0, PER_PAGE)

  return (
    <section id="catalogo" className="pb-12">
      <div className="shell">
        <h2 className="section-title mb-5 text-center">Nuestro Catálogo</h2>

        <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
          <FiltersSidebar />

          <div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {page.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[13px] text-muted">
                {catalogMeta.found} productos encontrados
              </p>
              <Pagination
                currentPage={catalogMeta.currentPage}
                pages={catalogMeta.pages}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
