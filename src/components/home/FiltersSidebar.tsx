import type { ReactNode } from 'react'
import {
  priceRange,
  productBrands,
  productCategories,
} from '../../data/products'
import type { CatalogState } from '../../hooks/useCatalog'
import { formatPrice } from '../../lib/format'
import { ALL_CATEGORIES } from '../../lib/search'
import type { ProductBadge } from '../../types/product'

const BADGE_LABELS: { value: ProductBadge; label: string }[] = [
  { value: 'promocion', label: 'En promoción' },
  { value: 'mas-vendido', label: 'Más vendidos' },
  { value: 'pocas-unidades', label: 'Últimas unidades' },
]

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-t border-line pt-4">
      <h4 className="mb-2 text-[12px] font-bold tracking-wide text-ink uppercase">
        {title}
      </h4>
      {children}
    </div>
  )
}

const optionClass =
  'flex cursor-pointer items-center gap-2 py-[3px] text-[12.5px] text-ink/80 transition hover:text-brand-600'

const inputClass = 'size-3.5 accent-brand-600'

interface FiltersSidebarProps {
  catalog: CatalogState
}

export function FiltersSidebar({ catalog }: FiltersSidebarProps) {
  const { filters, setFilter, toggleBrand, toggleBadge, reset, hasActiveFilters } =
    catalog

  return (
    <aside className="h-fit rounded-lg border border-line bg-white p-5 shadow-card">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-[13px] font-bold tracking-wide text-ink uppercase">
          Filtros
        </h3>
        {hasActiveFilters ? (
          <button
            type="button"
            onClick={reset}
            className="text-[12px] font-semibold text-brand-600 transition hover:underline"
          >
            Limpiar
          </button>
        ) : null}
      </div>

      <div className="mt-4 space-y-4">
        <Group title="Categoría">
          <label className={optionClass}>
            <input
              type="radio"
              name="categoria"
              className={inputClass}
              checked={filters.category === ALL_CATEGORIES}
              onChange={() => setFilter('category', ALL_CATEGORIES)}
            />
            Todas
          </label>
          {productCategories.map((category) => (
            <label key={category} className={optionClass}>
              <input
                type="radio"
                name="categoria"
                className={inputClass}
                checked={filters.category === category}
                onChange={() => setFilter('category', category)}
              />
              {category}
            </label>
          ))}
        </Group>

        <Group title="Marca">
          {productBrands.map((brand) => (
            <label key={brand} className={optionClass}>
              <input
                type="checkbox"
                className={inputClass}
                checked={filters.brands.includes(brand)}
                onChange={() => toggleBrand(brand)}
              />
              {brand}
            </label>
          ))}
        </Group>

        <Group title="Etiquetas">
          {BADGE_LABELS.map(({ value, label }) => (
            <label key={value} className={optionClass}>
              <input
                type="checkbox"
                className={inputClass}
                checked={filters.badges.includes(value)}
                onChange={() => toggleBadge(value)}
              />
              {label}
            </label>
          ))}
        </Group>

        <Group title="Precio máximo">
          <input
            type="range"
            min={priceRange.min}
            max={priceRange.max}
            step={1}
            value={filters.maxPrice ?? priceRange.max}
            onChange={(event) => {
              const value = Number(event.target.value)
              setFilter('maxPrice', value >= priceRange.max ? null : value)
            }}
            className="w-full accent-brand-600"
            aria-label="Precio máximo"
          />
          <p className="mt-1 text-[12.5px] text-muted">
            {filters.maxPrice === null
              ? 'Sin tope de precio'
              : `Hasta ${formatPrice(filters.maxPrice)}`}
          </p>
        </Group>
      </div>
    </aside>
  )
}
