import { Fragment } from 'react'
import { navLinks } from '../../data/site'

export function NavBar() {
  return (
    <nav
      aria-label="Navegación principal"
      className="border-b border-line bg-white"
    >
      <div className="shell flex items-center gap-2.5 overflow-x-auto py-2 text-[12.5px] font-semibold tracking-wide whitespace-nowrap text-ink/80 [scrollbar-width:none] sm:gap-3 [&::-webkit-scrollbar]:hidden">
        {navLinks.map((link, index) => (
          <Fragment key={link.href}>
            <a
              href={link.href}
              className="rounded px-1 py-0.5 transition hover:text-brand-600"
            >
              {link.label}
            </a>
            {index < navLinks.length - 1 ? (
              <span aria-hidden className="text-line">
                |
              </span>
            ) : null}
          </Fragment>
        ))}
      </div>
    </nav>
  )
}
