import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

interface PaginationProps {
  currentPage: number
  pages: number
}

const baseButton =
  'grid size-8 place-items-center rounded-md text-[13px] font-semibold transition'

/** Paginación de maqueta: muestra 1 2 3 … n sin cambiar de página. */
export function Pagination({ currentPage, pages }: PaginationProps) {
  const firstPages = [1, 2, 3].filter((page) => page <= pages)

  return (
    <nav
      aria-label="Paginación del catálogo"
      className="flex items-center gap-1 rounded-lg border border-line bg-white px-2 py-1.5 shadow-card"
    >
      <button
        type="button"
        aria-label="Página anterior"
        disabled={currentPage === 1}
        className={`${baseButton} text-muted disabled:opacity-40`}
      >
        <FaChevronLeft aria-hidden className="text-xs" />
      </button>

      {firstPages.map((page) => (
        <button
          key={page}
          type="button"
          aria-current={page === currentPage ? 'page' : undefined}
          className={`${baseButton} ${
            page === currentPage
              ? 'bg-brand-600 text-white'
              : 'text-ink hover:bg-brand-50'
          }`}
        >
          {page}
        </button>
      ))}

      {pages > 4 ? (
        <span className="px-1 text-[13px] text-muted">…</span>
      ) : null}

      {pages > 3 ? (
        <button type="button" className={`${baseButton} text-ink hover:bg-brand-50`}>
          {pages}
        </button>
      ) : null}

      <button
        type="button"
        aria-label="Página siguiente"
        className={`${baseButton} text-muted hover:bg-brand-50`}
      >
        <FaChevronRight aria-hidden className="text-xs" />
      </button>
    </nav>
  )
}
