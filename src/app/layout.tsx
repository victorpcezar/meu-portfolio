import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import type { ReactNode } from 'react'
import MotionProvider from '../animations/MotionProvider'
import { GlobalStyles } from '../styles/GlobalStyles'
import StyledComponentsRegistry from '../theme/StyledComponentsRegistry'
import { ThemeProvider } from '../theme/ThemeProvider'
import { themeInitScript } from '../theme/themeScript'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

const title = 'Victor Pires | Desenvolvedor ABAP & SAP Fiori'

export const metadata: Metadata = {
  metadataBase: new URL('https://meu-portfolio-ruddy-seven.vercel.app'),
  title,
  description:
    'Portfólio de Victor Emanuel Pires Cezar: desenvolvedor ABAP júnior em transição para desenvolvimento de software, com SAP Fiori, React e JavaScript.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    title,
    description: 'Desenvolvedor ABAP júnior com foco em SAP Fiori, React e JavaScript. Veja projetos, experiência e currículo.',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#7B1113',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    // suppressHydrationWarning: o script abaixo muda data-theme e color-scheme no <html> antes da hidratação
    <html lang="pt-BR" className={jetbrainsMono.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <MotionProvider>
              <GlobalStyles />
              {children}
            </MotionProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
