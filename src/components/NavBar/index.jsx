import { FaMoon, FaSun } from 'react-icons/fa'
import Logo from '../../assets/logo.jpg'
import { useThemeMode } from '../../theme/ThemeContext'
import { NavBar, Inner, LogoLink, Links, ThemeToggle } from './styles'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#stacks', label: 'Stacks' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#formacao', label: 'Formação' },
]

export default function Header() {
  const { mode, toggle } = useThemeMode()
  const isDark = mode === 'dark'

  return (
    <NavBar>
      <Inner aria-label="Navegação principal">
        <LogoLink href="#top" aria-label="Victor Pires, voltar ao início">
          <img src={Logo} alt="Victor Pires" />
        </LogoLink>

        <Links>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
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
