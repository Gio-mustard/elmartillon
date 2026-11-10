import { FaLocationDot } from 'react-icons/fa6'
import { site } from '../../data/site'

export function VisitSection() {
  return (
    <section id="contacto" className="pb-12">
      <div className="shell">
        <h2 className="section-title text-center">Visítanos</h2>
        <p className="mt-1 text-center text-[13px] font-semibold text-ink/70">
          {site.visitSubtitle}
        </p>

        <div className="mx-auto mt-5 max-w-[640px]">
          <iframe
            title={`Mapa de ubicación de ${site.name}`}
            src={site.mapEmbedUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[300px] w-full rounded-md border border-line shadow-card"
          />

          <p className="mt-3 text-center text-[13px] text-muted italic">
            {site.address}
          </p>

          <p className="mt-2 text-center">
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-600 transition hover:underline"
            >
              <FaLocationDot aria-hidden />
              Cómo llegar
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
