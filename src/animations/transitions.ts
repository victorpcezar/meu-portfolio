// Transições CSS padronizadas (hover, troca de tema e barras de progresso).
// Uso dentro de um styled-component: transition: ${hoverTransition('color', 'transform')};

const EASE = 'ease'

const DURATION = {
  hover: '0.2s', // reação ao passar o mouse: cor, movimento, borda, sombra
  theme: '0.25s', // troca entre tema claro e escuro: fundos e textos
  progress: '0.4s', // barras de progresso
} as const

const build = (duration: string, props: string[]) =>
  props.map((prop) => `${prop} ${duration} ${EASE}`).join(', ')

export const hoverTransition = (...props: string[]) => build(DURATION.hover, props)
export const themeTransition = (...props: string[]) => build(DURATION.theme, props)
export const progressTransition = (...props: string[]) => build(DURATION.progress, props)
