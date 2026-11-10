import {
  FaEnvelope,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6'
import { footerColumns, site } from '../../data/site'
import { Logo } from '../ui/Logo'

const socials = [
  {
    id: 'whatsapp',
    label: site.phoneIntl,
    href: site.whatsappHref,
    icon: FaWhatsapp,
    className: 'text-[#25d366]',
  },
  {
    id: 'facebook',
    label: site.facebook,
    href: site.facebookHref,
    icon: FaFacebookF,
    className: 'text-[#1877f2]',
  },
  {
    id: 'email',
    label: site.email,
    href: `mailto:${site.email}`,
    icon: FaEnvelope,
    className: 'text-brand-600',
  },
  {
    id: 'tiktok',
    label: site.tiktok,
    href: site.tiktokHref,
    icon: FaTiktok,
    className: 'text-ink',
  },
]

export function Footer() {
  return (
    <footer className="mt-4 border-t border-brand-100 bg-footerbg">
      <div className="shell grid gap-8 py-9 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Logo compact />
          <p className="mt-3 max-w-sm text-[12.5px] leading-relaxed text-ink/75">
            {site.description}
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-[13px] font-bold text-ink">{column.title}</h3>
            <ul className="mt-2 space-y-1.5 text-[12.5px] text-ink/75">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-brand-600">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-brand-100">
        <div className="shell flex flex-wrap items-center gap-x-7 gap-y-2 py-3 text-[12.5px] font-medium">
          {socials.map(({ id, label, href, icon: Icon, className }) => (
            <a
              key={id}
              href={href}
              className={`flex items-center gap-2 transition hover:underline ${className}`}
            >
              <Icon aria-hidden className="text-base" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
