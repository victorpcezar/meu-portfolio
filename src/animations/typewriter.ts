import type { MotionProps, Variants } from 'framer-motion'

type CursorProps = Pick<MotionProps, 'animate' | 'transition'>

// Efeito de digitação do título: cada letra aparece em sequência, sem mexer no layout.
// Uso: <motion.h1 variants={typewriterContainer}> com <motion.span variants={typewriterLetter}> por letra.
export const typewriterContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
}

export const typewriterLetter: Variants = {
  hidden: { display: 'none', opacity: 0 },
  visible: {
    display: 'inline',
    opacity: 1,
    transition: {
      duration: 0.01,
    },
  },
}

// Cursor piscando; para quem prefere menos movimento, fica parado
export const cursorBlink: CursorProps = {
  animate: { opacity: [0, 1, 0] },
  transition: { repeat: Infinity, duration: 0.8, ease: 'linear' },
}

export const cursorSteady: CursorProps = {
  animate: { opacity: 1 },
}
