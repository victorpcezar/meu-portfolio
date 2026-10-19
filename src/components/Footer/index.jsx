import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FooterContainer, Content, Brand, SocialLinks } from './styles';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
          <a 
            href="https://github.com/victorpcezar" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/victor-emanuel-pires/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:victorpires1011@hotmail.com" 
            aria-label="E-mail"
          >
            <FaEnvelope />
          </a>
        </SocialLinks>
      </Content>
    </FooterContainer>
  );
}