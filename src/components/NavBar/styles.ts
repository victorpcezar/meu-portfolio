import Link from 'next/link'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { hoverTransition, themeTransition } from '../../animations'

export const NavBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: ${({ theme }) => theme.colors.navBg};
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: ${themeTransition('background-color', 'border-color')};
`

export const Inner = styled.nav`
  max-width: 1100px;
  margin: 0 auto;
  padding: 10px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;

  img {
    height: 38px;
    width: auto;
    display: block;
    /* O logo é azul-escuro em fundo branco: no claro o branco some, no escuro as cores são invertidas */
    mix-blend-mode: multiply;

    :root[data-theme='dark'] & {
      filter: invert(1);
      mix-blend-mode: screen;
    }
  }
`

export const Links = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 22px;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    font-family: ${({ theme }) => theme.fonts.code};
    font-size: 0.85rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
    transition: ${hoverTransition('color')};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const ThemeToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1rem;
  cursor: pointer;
  transition: ${hoverTransition('border-color', 'color')}, ${themeTransition('background-color')};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`

// Agrupa os botões da direita (tema e menu)
export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

// Botão hambúrguer: mesmo visual do botão de tema, só aparece no celular
export const MenuToggle = styled(ThemeToggle)`
  display: none;

  @media (max-width: 768px) {
    display: inline-flex;
  }
`

// Painel do menu no celular: abre logo abaixo da barra, na largura toda
export const MobileMenu = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 8px 24px 16px;
    background-color: ${({ theme }) => theme.colors.surface};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: 0 12px 24px ${({ theme }) => theme.colors.shadow};
  }
`

export const MobileLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  li:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  a {
    display: block;
    padding: 14px 4px;
    font-family: ${({ theme }) => theme.fonts.code};
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
    transition: ${hoverTransition('color')};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
