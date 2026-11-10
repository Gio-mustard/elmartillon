import { FaScrewdriverWrench } from 'react-icons/fa6'
import { site } from '../../data/site'

interface LogoProps {
  className?: string
  /** Tamaño del cuadro del icono. */
  compact?: boolean
}

export function Logo({ className = '', compact = false }: LogoProps) {
  return (
    <a
      href="#inicio"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label={`${site.name} ${site.tagline}`}
    >
      <span
        className={`grid place-items-center rounded-md bg-brand-600 text-white ${
          compact ? 'size-8 text-base' : 'size-10 text-xl'
        }`}
      >
        <FaScrewdriverWrench aria-hidden />
      </span>
      <span className="leading-none">
        <span
          className={`block font-extrabold tracking-tight text-brand-800 ${
            compact ? 'text-base' : 'text-lg'
          }`}
        >
          EL MARTILLON
        </span>
        <span className="mt-0.5 block text-[10px] font-semibold tracking-[0.3em] text-brand-500">
          {site.tagline}
        </span>
      </span>
    </a>
  )
}
