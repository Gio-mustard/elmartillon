import { FaMagnifyingGlass } from 'react-icons/fa6'
import { PersonIcon, ShoppingCartIcon } from '../icons'
import { productCategories } from '../../data/products'
import type { CatalogState } from '../../hooks/useCatalog'
import { ALL_CATEGORIES } from '../../lib/search'
import { Logo } from '../ui/Logo'

interface HeaderProps {
  catalog: CatalogState
}

export function Header({ catalog }: HeaderProps) {
  const { filters, setFilter } = catalog

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white shadow-[0_1px_8px_rgb(16_52_112_/_0.08)]">
      <div className="shell flex flex-wrap items-center justify-between gap-4 py-3">
        <Logo />

        <form
          className="order-3 flex w-full max-w-[620px] items-stretch rounded-md border border-line bg-white md:order-none"
          onSubmit={(event) => {
            event.preventDefault()
            document
              .getElementById('catalogo')
              ?.scrollIntoView({ behavior: 'smooth' })
          }}
          role="search"
        >
          <label className="sr-only" htmlFor="search-category">
            Categoría
          </label>
          <select
            id="search-category"
            value={filters.category}
            onChange={(event) => setFilter('category', event.target.value)}
            className="hidden w-[170px] shrink-0 rounded-l-md bg-white px-3 text-[13px] text-ink/80 outline-none sm:block"
          >
            <option value={ALL_CATEGORIES}>{ALL_CATEGORIES}</option>
            {productCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <span aria-hidden className="my-2 hidden w-px bg-line sm:block" />

          <label className="sr-only" htmlFor="search-term">
            Buscar productos
          </label>
          <input
            id="search-term"
            type="search"
            value={filters.query}
            onChange={(event) => setFilter('query', event.target.value)}
            placeholder="Buscar por nombre, SKU, marca o medida"
            className="min-w-0 flex-1 rounded-l-md px-3 py-2 text-[13px] text-ink outline-none placeholder:text-muted/80 sm:rounded-none"
          />

          <button
            type="submit"
            className="flex shrink-0 items-center gap-2 rounded-r-md bg-brand-600 px-4 text-[13px] font-semibold text-white transition hover:bg-brand-700"
          >
            <FaMagnifyingGlass aria-hidden />
            Buscar
          </button>
        </form>

        <div className="flex items-center gap-3 text-brand-600">
          <button
            type="button"
            aria-label="Ver carrito"
            className="grid size-9 place-items-center rounded-md text-xl transition hover:bg-brand-50"
          >
            <ShoppingCartIcon />
          </button>
          <button
            type="button"
            aria-label="Mi cuenta"
            className="grid size-9 place-items-center rounded-md text-xl transition hover:bg-brand-50"
          >
            <PersonIcon />
          </button>
        </div>
      </div>
    </header>
  )
}
