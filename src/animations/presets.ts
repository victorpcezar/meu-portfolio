import type { MotionProps } from 'framer-motion'
import { VIEWPORT } from './tokens'
import { fadeDown, fadeLeft, fadeUp, staggerContainer } from './variants'

// Só as props que os presets realmente usam. Tipar como MotionProps inteiro conflita com os atributos HTML
// (style, onDrag...) quando o preset é espalhado em um styled-component com `as={motion.div}`.
type RevealProps = Pick<MotionProps, 'variants' | 'initial' | 'whileInView' | 'viewport'>
type HoverProps = Pick<MotionProps, 'whileHover' | 'transition'>
type PresenceProps = Pick<MotionProps, 'variants' | 'initial' | 'animate' | 'exit'>

/*
 * Presets prontos para espalhar (`{...preset}`) em qualquer componente `motion`.
 *
 * Regra de uso:
 *  - Bloco ou item isolado, ou lista vertical (timeline) .... scrollReveal
 *  - Título ou bloco de texto ............................... scrollRevealLeft
 *  - Grade/lista de cards .................................. staggerReveal no container + variants={staggerItem} em cada item
 *  - Ícone interativo ...................................... hoverPop
 *  - Menu/painel que abre e fecha (dentro de AnimatePresence) .. dropdownReveal
 */

// Sobe e aparece quando entra na tela
export const scrollReveal: RevealProps = {
  variants: fadeUp,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: VIEWPORT,
}

// Entra pela esquerda quando entra na tela
export const scrollRevealLeft: RevealProps = {
  variants: fadeLeft,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: VIEWPORT,
}

// Container de grade/lista: dispara a animação dos filhos em sequência
export const staggerReveal: RevealProps = {
  variants: staggerContainer,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: VIEWPORT,
}

// Item filho de um `staggerReveal` (herda o estado do container, por isso só precisa das variantes)
export const staggerItem = fadeUp

// Ícone/badge que cresce e gira levemente ao passar o mouse
export const hoverPop: HoverProps = {
  whileHover: { scale: 1.2, rotate: 10 },
  transition: { type: 'spring', stiffness: 300 },
}

// Painel que desce ao abrir e some ao fechar. Use dentro de <AnimatePresence>.
export const dropdownReveal: PresenceProps = {
  variants: fadeDown,
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
}
