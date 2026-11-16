'use client'

import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa'
import { dropdownReveal } from '../../animations'
import logo from '../../assets/logo.png'
import { useThemeMode } from '../../theme/ThemeContext'
import {
  NavBar,
  Inner,
  LogoLink,
  Links,
  Actions,
  ThemeToggle,
  MenuToggle,
  MobileMenu,
  MobileLinks,
} from './styles'

// O prefixo "/" faz as âncoras funcionarem também a partir de outras rotas (ex.: /estudos)
const links = [
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#stacks', label: 'Stacks' },
  { href: '/#projetos', label: 'Projetos' },
  { href: '/#experiencia', label: 'Experiência' },
  { href: '/#formacao', label: 'Formação' },
  { href: '/estudos', label: 'Estudos' },
]

const MENU_ID = 'menu-mobile'

export default function Header() {
  const { mode, toggle } = useThemeMode()
  const isDark = mode === 'dark'

  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setMenuOpen(false)

  // Com o menu aberto: Esc fecha (devolvendo o foco ao botão) e clicar fora da barra também fecha
  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [menuOpen])

  // Ao ampliar a tela para o layout de desktop, o menu do celular é fechado
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 769px)')
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false)
    }

    desktop.addEventListener('change', handleChange)
    return () => desktop.removeEventListener('change', handleChange)
  }, [])

  return (
    <NavBar ref={headerRef}>
      <Inner aria-label="Navegação principal">
        <LogoLink href="/#top" aria-label="Victor Pires, voltar ao início" onClick={closeMenu}>
          <Image src={logo} alt="Victor Pires" />
        </LogoLink>

        <Links>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </Links>

        <Actions>
          <ThemeToggle
            type="button"
            onClick={toggle}
            aria-label={isDark ? 'Mudar para o tema claro' : 'Mudar para o tema escuro'}
            title={isDark ? 'Tema claro' : 'Tema escuro'}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </ThemeToggle>

          <MenuToggle
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </MenuToggle>
        </Actions>

        <AnimatePresence>
          {menuOpen && (
            <MobileMenu id={MENU_ID} {...dropdownReveal}>
              <MobileLinks>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={closeMenu}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </MobileLinks>
            </MobileMenu>
          )}
        </AnimatePresence>
      </Inner>
    </NavBar>
  )
}
