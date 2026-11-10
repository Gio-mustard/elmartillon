import { useState } from 'react'
import { FaHammer } from 'react-icons/fa6'
import { brandAssets, site } from '../../data/site'

interface LogoProps {
  className?: string
  /** Versión reducida, para el pie de página. */
  compact?: boolean
}

export function Logo({ className = '', compact = false }: LogoProps) {
  const [markFailed, setMarkFailed] = useState(false)
  const markSrc = brandAssets.hammer
  const showExportedMark = markSrc !== null && !markFailed

  return (
    <a
      href="#inicio"
      aria-label={`${site.name} ${site.tagline}`}
      className={`flex items-center gap-2.5 ${className}`}
    >
      <span
        className={`grid shrink-0 place-items-center rounded-lg bg-brand-600 text-white ${
          compact ? 'size-9' : 'size-11'
        }`}
      >
        {showExportedMark ? (
          <img
            src={markSrc}
            alt=""
            className="h-[58%] w-[58%] object-contain"
            onError={() => setMarkFailed(true)}
          />
        ) : (
          <FaHammer
            aria-hidden
            className={`-scale-x-100 ${compact ? 'text-lg' : 'text-xl'}`}
          />
        )}
      </span>

      <span className="leading-none">
        <span
          className={`block font-extrabold tracking-tight text-brand-600 ${
            compact ? 'text-lg' : 'text-[22px]'
          }`}
        >
          EL MARTILLON
        </span>
        <span
          className={`mt-1 block font-semibold tracking-[0.02em] text-muted ${
            compact ? 'text-[12px]' : 'text-[15px]'
          }`}
        >
          {site.tagline}
        </span>
      </span>
    </a>
  )
}
