import { categories } from '../../data/catalog'

export function CategoriesSection() {
  return (
    <section id="categorias" className="pb-10">
      <div className="shell">
        <h2 className="section-title mb-4">Categorías</h2>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map(({ id, name, icon: Icon }) => (
            <li key={id}>
              <a
                href="#catalogo"
                className="flex h-full flex-col items-center gap-3 rounded-lg border border-line bg-white px-3 py-5 text-center shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover"
              >
                <span className="grid size-11 place-items-center rounded-lg bg-brand-600 text-xl text-white">
                  <Icon aria-hidden />
                </span>
                <span className="text-[13px] leading-snug font-semibold text-ink">
                  {name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
