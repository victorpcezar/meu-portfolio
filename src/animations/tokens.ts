// Valores únicos de movimento do site. Para mudar a "sensação" de todas as animações, altere só aqui.

// Entrada de elementos (Framer Motion)
export const DURATION = 0.5 // segundos
export const DURATION_FAST = 0.2 // elementos de interface que abrem/fecham (menus)
export const EASE = 'easeOut' as const
export const OFFSET = 24 // distância (px) percorrida na entrada
export const STAGGER = 0.1 // intervalo entre itens de uma lista ou grade

// Quando um elemento "entra na tela": anima uma vez, um pouco antes de aparecer por completo
export const VIEWPORT = { once: true, margin: '-60px' } as const
