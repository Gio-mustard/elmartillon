const XML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
}

const escapeXml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => XML_ESCAPES[char] ?? char)

/**
 * Tono estable a partir del texto, para que cada producto tenga su color.
 * El factor final separa semillas parecidas ("p-001" vs "p-002").
 */
function hashHue(seed: string): number {
  let hash = 0
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) % 100003
  }
  return (hash * 137) % 360
}

export interface PlaceholderOptions {
  width?: number
  height?: number
  /** Texto corto bajo el icono. Usa `null` para no dibujar texto. */
  label?: string | null
}

/**
 * Genera un placeholder SVG (data URI) con la silueta de un martillo.
 * Se usa cuando un producto no trae `image` o cuando la ruta falla al cargar.
 */
export function placeholderImage(
  seed: string,
  { width = 480, height = 400, label = seed }: PlaceholderOptions = {},
): string {
  const hue = hashHue(seed)
  const cx = width / 2
  const cy = height / 2 - (label ? 12 : 0)
  const size = Math.min(width, height) * 0.4
  const short = label ? escapeXml(label.slice(0, 32)) : ''
  const fontSize = Math.round(width * 0.036)

  const caption = short
    ? `<text x="50%" y="${height - 28}" text-anchor="middle" font-family="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" font-size="${fontSize}" font-weight="600" fill="hsl(${hue} 20% 46%)">${short}</text>`
    : ''

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="hsl(${hue} 40% 97%)"/>
      <stop offset="1" stop-color="hsl(${hue} 30% 88%)"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <g transform="rotate(-38 ${cx} ${cy})" fill="hsl(${hue} 26% 72%)">
    <rect x="${cx - size * 0.09}" y="${cy - size * 0.2}" width="${size * 0.18}" height="${size * 1.05}" rx="${size * 0.09}"/>
    <rect x="${cx - size * 0.58}" y="${cy - size * 0.68}" width="${size * 1.16}" height="${size * 0.46}" rx="${size * 0.12}"/>
  </g>
  ${caption}
</svg>`

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}
