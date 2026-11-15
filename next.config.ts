import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Gera classNames estáveis entre servidor e cliente e habilita o SSR do styled-components
  compiler: {
    styledComponents: true,
  },
}

export default nextConfig
