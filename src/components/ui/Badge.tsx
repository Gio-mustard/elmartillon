import type { ReactNode } from 'react'

export type BadgeTone = 'promo' | 'best'

const TONE_CLASSES: Record<BadgeTone, string> = {
  promo: 'bg-danger-500 text-white',
  best: 'bg-brand-800 text-white',
}

interface BadgeProps {
  tone: BadgeTone
  children: ReactNode
}

export function Badge({ tone, children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-[3px] px-1.5 py-[3px] text-[10px] font-bold uppercase tracking-wide ${TONE_CLASSES[tone]}`}
    >
      {children}
    </span>
  )
}
