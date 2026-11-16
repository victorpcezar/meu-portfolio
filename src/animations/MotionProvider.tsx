'use client'

import { MotionConfig } from 'framer-motion'
import type { ReactNode } from 'react'

// Configuração global do Framer Motion. Com reducedMotion="user", quem pede "reduzir movimento" no sistema
// recebe só os fades (sem deslocamentos) em TODAS as animações do site, sem precisar tratar caso a caso.
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
