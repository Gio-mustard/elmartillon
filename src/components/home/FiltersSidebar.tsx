/**
 * Hueco reservado para la barra de filtros, tal como aparece en el diseño.
 * Cuando exista la lógica de filtrado, este componente se sustituye.
 */
export function FiltersSidebar() {
  return (
    <aside className="hidden h-fit rounded-lg border border-dashed border-brand-200 bg-white p-5 shadow-card lg:block">
      <p className="text-center text-[13px] font-semibold text-ink">
        Aquí va la barra de filtros
      </p>
      <p className="mt-2 text-center text-[12px] leading-relaxed text-muted">
        Precio, marca, categoría, medida y disponibilidad
      </p>

      <div className="mt-5 space-y-5" aria-hidden>
        {[0, 1, 2].map((group) => (
          <div key={group} className="space-y-2">
            <div className="h-2.5 w-24 rounded-full bg-brand-100" />
            <div className="h-2 w-full rounded-full bg-line" />
            <div className="h-2 w-5/6 rounded-full bg-line" />
            <div className="h-2 w-2/3 rounded-full bg-line" />
          </div>
        ))}
      </div>

      <p className="mt-6 text-center font-mono text-[12px] text-muted">
        {'{placeholder}'}
      </p>
    </aside>
  )
}
