import type { CatalogState } from '../../hooks/useCatalog'
import { ProductCard } from '../ui/ProductCard'
import { FiltersSidebar } from './FiltersSidebar'
import { Pagination } from './Pagination'

interface CatalogSectionProps {
  catalog: CatalogState
}

export function CatalogSection({ catalog }: CatalogSectionProps) {
  const { filters, results, visible, currentPage, pages, goToPage, reset } =
    catalog
  const found = results.length

  return (
    <section id="catalogo" className="pb-12">
      <div className="shell">
        <h2 className="section-title mb-5 text-center">Nuestro Catálogo</h2>

        <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
          <FiltersSidebar catalog={catalog} />

          <div>
            {found === 0 ? (
              <div className="rounded-lg border border-dashed border-line bg-white p-12 text-center">
                <p className="text-[15px] font-semibold text-ink">
                  No encontramos productos
                  {filters.query ? ` para «${filters.query}»` : ''}
                </p>
                <p className="mt-1 text-[13px] text-muted">
                  Prueba con otra palabra o quita algunos filtros.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-4 rounded-md bg-brand-600 px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-brand-700"
                >
                  Limpiar búsqueda
                </button>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {visible.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[13px] text-muted">
                {found === 1
                  ? '1 producto encontrado'
                  : `${found} productos encontrados`}
              </p>
              {pages > 1 ? (
                <Pagination
                  currentPage={currentPage}
                  pages={pages}
                  onPageChange={goToPage}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
