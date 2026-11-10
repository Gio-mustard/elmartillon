import { FaLocationDot, FaMinus, FaPlus } from 'react-icons/fa6'
import { site } from '../../data/site'

/** Trama de calles para simular el mapa mientras no se integra uno real. */
const mapStyle = {
  backgroundColor: '#eceee9',
  backgroundImage: [
    'repeating-linear-gradient(0deg, transparent 0 48px, #ffffff 48px 56px)',
    'repeating-linear-gradient(90deg, transparent 0 66px, #ffffff 66px 74px)',
  ].join(', '),
}

export function VisitSection() {
  return (
    <section id="contacto" className="pb-12">
      <div className="shell">
        <h2 className="section-title text-center">Visítanos</h2>
        <p className="mt-1 text-center text-[13px] font-semibold text-ink/70">
          {site.visitSubtitle}
        </p>

        <div className="mx-auto mt-5 max-w-[640px]">
          <div
            role="img"
            aria-label={`Mapa de ubicación: ${site.address}`}
            style={mapStyle}
            className="relative h-[220px] overflow-hidden rounded-md border border-line shadow-card"
          >
            {/* Avenida diagonal */}
            <div className="absolute top-1/2 -left-10 h-3 w-[130%] -rotate-6 bg-white" />

            {/* Controles decorativos de zoom */}
            <div className="absolute top-3 left-3 flex flex-col overflow-hidden rounded border border-line bg-white text-[10px] text-ink/60">
              <span className="grid size-5 place-items-center border-b border-line">
                <FaPlus aria-hidden />
              </span>
              <span className="grid size-5 place-items-center">
                <FaMinus aria-hidden />
              </span>
            </div>

            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-3xl text-danger-500 drop-shadow-sm">
              <FaLocationDot aria-hidden />
            </span>
          </div>

          <p className="mt-3 text-center text-[13px] text-muted italic">
            {site.address}
          </p>
        </div>
      </div>
    </section>
  )
}
