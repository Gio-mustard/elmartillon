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
  /** Enlace que se abre en la app de Google Maps. */
  mapUrl: 'https://maps.app.goo.gl/tGUsoWajrYerzNuS6',
  /**
   * Mapa incrustado, con las coordenadas a las que resuelve `mapUrl`.
   * Es la URL /maps/embed directa y no necesita API key. Ojo: el atajo
   * `/maps?...&output=embed` responde un 301 con `X-Frame-Options:
   * SAMEORIGIN` y el navegador deja el iframe en blanco.
   */
  mapEmbedUrl:
    'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s32.6056369,-115.3581992!6i17!3m1!1ses!5m1!1ses',
} as const

/**
 * Recursos de marca servidos desde `public/`.
 * Si el archivo todavía no existe, el componente dibuja un icono de respaldo,
 * así que basta con exportar el SVG en esa ruta para que aparezca.
 */
export const brandAssets = {
  /**
   * Mosaico del logo ya terminado (cuadro azul + martillo blanco), tal como
   * se exportó. El nombre lleva espacios, por eso va codificado.
   */
  hammer: '/icons/EL%20MARTILLON%20VERSION%20FINAL.png' as string | null,
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
