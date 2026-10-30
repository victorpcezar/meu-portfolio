import styled, { css } from 'styled-components'

export const NavBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: ${({ theme }) => theme.colors.navBg};
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: background-color 0.25s ease, border-color 0.25s ease;
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

export const LogoLink = styled.a`
  display: flex;
  align-items: center;

  img {
    height: 38px;
    width: auto;
    display: block;
    /* O logo é azul-escuro em fundo branco: no claro o branco some, no escuro as cores são invertidas */
    ${({ theme }) =>
      theme.mode === 'dark'
        ? css`
            filter: invert(1);
            mix-blend-mode: screen;
          `
        : css`
            mix-blend-mode: multiply;
          `}
  }
`

export const Links = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 22px;
  margin-left: auto;

  @media (max-width: 700px) {
    display: none;
  }

  a {
    font-family: ${({ theme }) => theme.fonts.code};
    font-size: 0.85rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
    transition: color 0.2s ease;

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
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`
