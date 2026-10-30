import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../../data/profile'
import { FooterContainer, Content, Brand, SocialLinks } from './styles'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <Content>
        <Brand>
          <p>
            <span>&lt;</span> Desenvolvido por Victor <span>/&gt;</span>
          </p>
          <span className="copyright">
            © {currentYear} • Construído com React & Styled Components
          </span>
        </Brand>

        <SocialLinks>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="E-mail">
            <FaEnvelope />
          </a>
        </SocialLinks>
      </Content>
    </FooterContainer>
  )
}
