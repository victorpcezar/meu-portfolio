import type { Variants } from 'framer-motion'
import { DURATION, DURATION_FAST, EASE, OFFSET, STAGGER } from './tokens'

const transition = { duration: DURATION, ease: EASE }

// Sobe e aparece: cards, itens de lista e blocos
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: OFFSET },
  visible: { opacity: 1, y: 0, transition },
}

// Entra pela esquerda: títulos e blocos de texto
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -OFFSET },
  visible: { opacity: 1, x: 0, transition },
}

// Desce e aparece: menus e painéis que abrem (rápido, para não parecer lento ao tocar)
// pointerEvents: enquanto some, o painel não captura toques nem cliques
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -OFFSET / 2, pointerEvents: 'none' },
  visible: { opacity: 1, y: 0, pointerEvents: 'auto', transition: { duration: DURATION_FAST, ease: EASE } },
}

// Container que anima os filhos em sequência (os filhos usam `fadeUp`)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: STAGGER } },
}
