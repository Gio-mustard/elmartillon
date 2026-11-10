import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { heroSlides } from '../../data/catalog'
import { placeholderImage } from '../../lib/placeholder'

/**
 * Banner principal. La maqueta es estática: se muestra siempre la primera
 * diapositiva y las flechas quedan listas para conectar el carrusel.
 */
export function HeroCarousel() {
  const slide = heroSlides[0]

  return (
    <section id="inicio" className="pt-7 pb-9">
      <div className="shell flex items-center gap-2 sm:gap-4">
        <button
          type="button"
          aria-label="Promoción anterior"
          className="hidden shrink-0 p-2 text-3xl text-brand-200 transition hover:text-brand-500 sm:block"
        >
          <FaChevronLeft aria-hidden />
        </button>

        <div className="flex-1 overflow-hidden rounded-xl bg-brand-600 shadow-card">
          <div className="grid items-center gap-6 p-7 sm:p-9 md:grid-cols-[1.1fr_1fr] md:gap-10">
            <div>
              <span className="inline-flex rounded-sm bg-accent-500/90 px-2.5 py-1 text-[11px] font-bold tracking-[0.12em] text-brand-900 uppercase">
                {slide.eyebrow}
              </span>

              <h1 className="mt-5 text-4xl leading-[1.1] font-extrabold text-white sm:text-5xl">
                {slide.titleLead}{' '}
                <span className="text-accent-500">{slide.titleHighlight}</span>
                <span className="mt-1 block">{slide.titleTail}</span>
              </h1>

              <a
                href={slide.ctaHref}
                className="mt-7 inline-flex items-center gap-3 rounded-md border border-white/80 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-700"
              >
                {slide.ctaLabel}
                <FaArrowRight aria-hidden />
              </a>
            </div>

            <img
              src={slide.image ?? placeholderImage(slide.id, { width: 560, height: 360, label: 'Buen Fin' })}
              alt={slide.imageAlt}
              className="w-full rounded-lg object-cover shadow-card"
            />
          </div>
        </div>

        <button
          type="button"
          aria-label="Promoción siguiente"
          className="hidden shrink-0 p-2 text-3xl text-brand-200 transition hover:text-brand-500 sm:block"
        >
          <FaChevronRight aria-hidden />
        </button>
      </div>
    </section>
  )
}
