'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaMoon, FaSun } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import { useThemeMode } from '../../theme/ThemeContext'
import { NavBar, Inner, LogoLink, Links, ThemeToggle } from './styles'

// O prefixo "/" faz as âncoras funcionarem também a partir de outras rotas (ex.: /estudos)
const links = [
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#stacks', label: 'Stacks' },
  { href: '/#projetos', label: 'Projetos' },
  { href: '/#experiencia', label: 'Experiência' },
  { href: '/#formacao', label: 'Formação' },
  { href: '/estudos', label: 'Estudos' },
]

export default function Header() {
  const { mode, toggle } = useThemeMode()
  const isDark = mode === 'dark'

  return (
    <NavBar>
      <Inner aria-label="Navegação principal">
        <LogoLink href="/#top" aria-label="Victor Pires, voltar ao início">
          <Image src={logo} alt="Victor Pires" />
        </LogoLink>

        <Links>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </Links>

        <ThemeToggle
          type="button"
          onClick={toggle}
          aria-label={isDark ? 'Mudar para o tema claro' : 'Mudar para o tema escuro'}
          title={isDark ? 'Tema claro' : 'Tema escuro'}
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
      </Inner>
    </NavBar>
  )
}
