import type { SVGProps } from 'react'

/**
 * Iconos de Material Symbols exportados por el equipo de diseño
 * (`public/icons/*.svg`), inlineados aquí con `fill="currentColor"` para
 * poder teñirlos: el carrito va blanco sobre azul y la flecha va en rojo,
 * cosa imposible con el `fill="#0D47A1"` que traen los archivos.
 *
 * Si reexportas alguno, copia el atributo `d` del nuevo SVG sobre el de aquí.
 */
type IconProps = SVGProps<SVGSVGElement>

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

/** public/icons/shopping_cart_24dp_0D47A1_FILL0_wght400_GRAD0_opsz24.svg */
export function ShoppingCartIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5.59,21.41Q5,20.83 5,20t0.59-1.41T7,18q0.83,0 1.41,0.59Q9,19.18 9,20T8.41,21.41Q7.83,22 7,22T5.59,21.41Zm10,0Q15,20.83 15,20t0.59-1.41T17,18t1.41,0.59Q19,19.18 19,20t-0.59,1.41T17,22t-1.41-0.59ZM6.15,6l2.4,5h7L18.3,6H6.15ZM5.2,4H19.95q0.57,0 0.88,0.51t0.02,1.04l-3.55,6.4q-0.27,0.5-0.74,0.78T15.55,13H8.1L7,15H19v2H7q-1.13,0-1.7-0.99q-0.58-0.99-0.05-1.96L6.6,11.6L3,4H1V2H4.25L5.2,4Zm3.35,7h7h-7Z" />
    </Icon>
  )
}

/** public/icons/person_24dp_0D47A1_FILL0_wght400_GRAD0_opsz24.svg */
export function PersonIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9.18,10.83Q8,9.65 8,8T9.18,5.18T12,4t2.83,1.18T16,8t-1.17,2.82T12,12T9.18,10.83ZM4,20V17.2q0-0.85 0.44-1.56q0.44-0.71 1.16-1.09q1.55-0.78 3.15-1.16T12,13t3.25,0.39t3.15,1.16q0.72,0.38 1.16,1.09T20,17.2V20H4Zm2-2H18V17.2q0-0.27-0.14-0.5q-0.14-0.22-0.36-0.35q-1.35-0.68-2.72-1.01T12,15T9.23,15.34T6.5,16.35Q6.28,16.48 6.14,16.7Q6,16.93 6,17.2V18Zm7.41-8.59Q14,8.82 14,8T13.41,6.59T12,6T10.59,6.59Q10,7.18 10,8t0.59,1.41T12,10t1.41-0.59ZM12,8Zm0,10Z" />
    </Icon>
  )
}

/** public/icons/mail_24dp_0D47A1_FILL0_wght400_GRAD0_opsz24.svg */
export function MailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4,20q-0.82,0-1.41-0.59T2,18V6Q2,5.18 2.59,4.59T4,4H20q0.83,0 1.41,0.59Q22,5.18 22,6V18q0,0.82-0.59,1.41T20,20H4Zm8-7L4,8V18H20V8l-8,5Zm0-2l8-5H4l8,5ZM4,8V6V8V18V8Z" />
    </Icon>
  )
}

/** public/icons/trending_down_24dp_0D47A1_FILL0_wght400_GRAD0_opsz24.svg */
export function TrendingDownIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M16,18V16h2.6l-5.2-5.15l-4,4L2,7.4L3.4,6l6,6l4-4L20,14.6V12h2v6H16Z" />
    </Icon>
  )
}
