import type { Variants } from 'framer-motion'
import { DURATION, EASE, OFFSET, STAGGER } from './tokens'

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

// Container que anima os filhos em sequência (os filhos usam `fadeUp`)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: STAGGER } },
}
