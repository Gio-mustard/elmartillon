import { site } from '../../data/site'

export function TopBar() {
  return (
    <div className="bg-topbar text-[11.5px] text-ink/75">
      <div className="shell flex flex-wrap items-center justify-between gap-x-5 gap-y-1 py-1.5">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <span>
            Teléfono de atención:{' '}
            <a href={`tel:${site.phone}`} className="font-semibold hover:underline">
              {site.phone}
            </a>
          </span>
          <span aria-hidden className="hidden text-ink/25 sm:inline">
            |
          </span>
          <span>Horario de atención: {site.hours}</span>
        </div>
        <span>Nos ubicamos en: {site.address}</span>
      </div>
    </div>
  )
}
