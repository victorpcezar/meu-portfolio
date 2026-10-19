import { motion } from 'framer-motion';
import AboutFoto from '../../assets/aboutfoto.jpeg';
import { AboutContainer, Content, ImageWrapper } from './styles';

// Variantes de animação
const contentVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const imageVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 }
  }
};

export default function About() {
  return (
    <AboutContainer id="sobre">
      {/* Texto vindo da esquerda */}
      <Content
        as={motion.div}
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <h2>Sobre mim:</h2>

        <p>
          Iniciei minha trajetória no desenvolvimento de software atuando como <span className="highlight">Desenvolvedor ABAP</span> no ecossistema SAP, onde consolidei uma base sólida em lógica de programação e regras de negócio complexas.
        </p>

        <p>
          Hoje, estou direcionando e expandindo minha carreira para o ecossistema <span className="highlight">Full Stack JavaScript</span> (React, Node.js, Express e MongoDB), criando aplicações modernas, dinâmicas e de alto desempenho do zero ao deploy.
        </p>

        <p>
          Unindo a disciplina e a visão corporativa da minha bagagem em ABAP com a agilidade do desenvolvimento web moderno, busco sempre entregar <span className="highlight">soluções de software funcionais</span>, com código limpo e foco nas necessidades reais do produto.
        </p>
      </Content>

      {/* Imagem vindo da direita + Hover interativo via Motion */}
      <ImageWrapper
        as={motion.div}
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        whileHover={{ scale: 1.04, y: -4 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <img src={AboutFoto} alt="Victor Pires" />
      </ImageWrapper>
    </AboutContainer>
  );
}