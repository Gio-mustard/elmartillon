import type { IconType } from 'react-icons'
import {
  FaBolt,
  FaFaucetDrip,
  FaHelmetSafety,
  FaLock,
  FaScrewdriverWrench,
} from 'react-icons/fa6'

export interface Category {
  id: string
  name: string
  /**
   * Mosaico ya terminado (cuadro azul + glifo) en `public/categories/`.
   * Mientras el archivo no exista se dibuja `icon` como respaldo.
   */
  illustration: string | null
  icon: IconType
}

export const categories: Category[] = [
  {
    id: 'electricas',
    name: 'Herramientas Eléctricas',
    illustration: '/categories/herramientasElectricas.png',
    icon: FaBolt,
  },
  {
    id: 'tornilleria',
    name: 'Tornillería y Fijación',
    illustration: '/categories/tornilleriaYFijacion.png',
    icon: FaScrewdriverWrench,
  },
  {
    id: 'seguridad',
    name: 'Seguridad y Protección',
    illustration: '/categories/seguridadYProteccion.png',
    icon: FaHelmetSafety,
  },
  {
    id: 'plomeria',
    name: 'Plomería y gasfitería',
    illustration: '/categories/plomeriaYGasiteria.png',
    icon: FaFaucetDrip,
  },
  {
    id: 'cerrajeria',
    name: 'Cerrajería y herrajes',
    illustration: '/categories/cerrajeriaYHerrajes.png',
    icon: FaLock,
  },
]

export interface Brand {
  id: string
  name: string
  tagline?: string
  /**
   * Logo en `public/ferreterias/`. Ya viene como mosaico cuadrado con su
   * fondo de color, así que rellena la pastilla completa.
   * Si falta, se dibuja la pastilla de texto con los colores de abajo.
   */
  logo: string | null
  /** Colores de respaldo, tomados del diseño. */
  background: string
  foreground: string
}

export const featuredBrands: Brand[] = [
  {
    id: 'truper',
    name: 'TRUPER',
    logo: '/ferreterias/trupper.png.webp',
    background: '#f07722',
    foreground: '#ffffff',
  },
  {
    id: 'urrea',
    name: 'URREA',
    tagline: 'HERRAMIENTAS DE CALIDAD SUPERIOR',
    logo: '/ferreterias/urrea.jpeg',
    background: '#d4121a',
    foreground: '#ffffff',
  },
  {
    id: 'dewalt',
    name: 'DEWALT',
    logo: '/ferreterias/dewalt.jpeg',
    background: '#febd17',
    foreground: '#17181a',
  },
  {
    id: 'bosch',
    name: 'BOSCH',
    logo: '/ferreterias/bosh.png',
    background: '#0b2b5c',
    foreground: '#ffffff',
  },
]

export interface HeroSlide {
  id: string
  eyebrow: string
  titleLead: string
  titleHighlight: string
  titleTail: string
  ctaLabel: string
  ctaHref: string
  /** Ruta de la imagen del banner; null dibuja un placeholder. */
  image: string | null
  imageAlt: string
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'buen-fin',
    eyebrow: 'APROVECHA ESTE BUEN FIN',
    titleLead: 'Hasta un',
    titleHighlight: '30% OFF',
    titleTail: 'en productos TRUPER',
    ctaLabel: 'Ver promociones',
    ctaHref: '#catalogo',
    image: '/banners/buen-fin.png',
    imageAlt: 'Promoción de Buen Fin en herramientas Truper',
  },
]

/** Productos destacados en los paneles de "Nuestra Selección". */
export const bestSellerIds = ['p-009', 'p-012', 'p-008', 'p-005']
export const favoriteIds = ['p-011', 'p-010', 'p-003', 'p-002']
