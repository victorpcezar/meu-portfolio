import { css, keyframes } from 'styled-components'

// Pulsar suave, usado para indicar "em andamento"
export const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
`

export const pulseAnimation = css`
  animation: ${pulse} 1.6s ease-in-out infinite;
`
