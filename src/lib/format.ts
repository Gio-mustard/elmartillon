/** "$67.57 usd" — mismo formato que el diseño. */
export function formatPrice(value: number, currency = 'usd'): string {
  return `$${value.toFixed(2)} ${currency}`
}
