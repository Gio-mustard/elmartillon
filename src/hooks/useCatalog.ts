import { useCallback, useMemo, useState } from 'react'
import { products } from '../data/products'
import type { CatalogFilters } from '../lib/search'
import { ALL_CATEGORIES, emptyFilters, searchProducts } from '../lib/search'
import type { ProductBadge } from '../types/product'

/** Productos por página del catálogo. */
export const PER_PAGE = 6

function toggleValue<T>(list: T[], value: T): T[] {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value]
}

/**
 * Estado del catálogo: texto del buscador, filtros, resultados y paginación.
 * Vive en `App` y lo comparten el header, la barra de filtros y la rejilla.
 */
export function useCatalog() {
  const [filters, setFilters] = useState<CatalogFilters>(emptyFilters)
  const [requestedPage, setRequestedPage] = useState(1)

  const results = useMemo(() => searchProducts(products, filters), [filters])

  const pages = Math.max(1, Math.ceil(results.length / PER_PAGE))
  // Si los filtros reducen los resultados, la página se ajusta sola.
  const currentPage = Math.min(requestedPage, pages)
  const visible = results.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  )

  const setFilter = useCallback(
    <K extends keyof CatalogFilters>(key: K, value: CatalogFilters[K]) => {
      setFilters((previous) => ({ ...previous, [key]: value }))
      setRequestedPage(1)
    },
    [],
  )

  const toggleBrand = useCallback((brand: string) => {
    setFilters((previous) => ({
      ...previous,
      brands: toggleValue(previous.brands, brand),
    }))
    setRequestedPage(1)
  }, [])

  const toggleBadge = useCallback((badge: ProductBadge) => {
    setFilters((previous) => ({
      ...previous,
      badges: toggleValue(previous.badges, badge),
    }))
    setRequestedPage(1)
  }, [])

  const reset = useCallback(() => {
    setFilters(emptyFilters)
    setRequestedPage(1)
  }, [])

  const hasActiveFilters =
    filters.query !== '' ||
    filters.category !== ALL_CATEGORIES ||
    filters.brands.length > 0 ||
    filters.badges.length > 0 ||
    filters.maxPrice !== null

  return {
    filters,
    results,
    visible,
    currentPage,
    pages,
    hasActiveFilters,
    goToPage: setRequestedPage,
    setFilter,
    toggleBrand,
    toggleBadge,
    reset,
  }
}

export type CatalogState = ReturnType<typeof useCatalog>
