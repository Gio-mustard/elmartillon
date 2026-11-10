/** Datos fijos del negocio: barra superior, navegación y pie de página. */
export const site = {
  name: 'El Martillón',
  tagline: 'INDUSTRIAL',
  phone: '686-602-4822',
  phoneIntl: '+52 686-602-4822',
  whatsappHref: 'https://wa.me/526866024822',
  hours: 'Lun-Sáb 7:00 - 19:00',
  address: 'Plaza Aria / local 340 | Mexicali BC',
  email: 'ferreteria@elmartillon.mx',
  facebook: 'ferretería el martillón',
  facebookHref: 'https://facebook.com/elmartillon',
  tiktok: 'elmartillon',
  tiktokHref: 'https://tiktok.com/@elmartillon',
  description:
    'En Ferretería El Martillón te atendemos como te mereces: llega, pregunta y llévate la herramienta correcta. Asesoría honesta, marcas de primera y surtido para obra, taller y casa.',
  visitSubtitle: 'Encontrarás a expertos que asesorarán tu compra',
} as const

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'INICIO', href: '#inicio' },
  { label: 'CATÁLOGO', href: '#catalogo' },
  { label: 'MARCAS', href: '#marcas' },
  { label: 'CONTACTO', href: '#contacto' },
]

/** Opciones del selector que acompaña al buscador del header. */
export const searchCategories: string[] = [
  'Todas las categorías',
  'Herramientas Eléctricas',
  'Herramientas Manuales',
  'Tornillería y Fijación',
  'Seguridad y Protección',
  'Plomería y gasfitería',
  'Cerrajería y herrajes',
]

export interface FooterColumn {
  title: string
  links: NavLink[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Enlaces de interés',
    links: [
      { label: 'Nosotros', href: '#contacto' },
      { label: 'Cotización', href: '#contacto' },
      { label: 'Ubicaciones', href: '#contacto' },
      { label: 'Trabaja con nosotros', href: '#contacto' },
    ],
  },
  {
    title: 'Avisos',
    links: [
      { label: 'Aviso de privacidad', href: '#contacto' },
      { label: 'Términos del servicio', href: '#contacto' },
      { label: 'Términos y condiciones', href: '#contacto' },
      { label: 'Preguntas frecuentes', href: '#contacto' },
    ],
  },
]
