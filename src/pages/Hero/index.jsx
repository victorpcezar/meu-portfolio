import { motion } from 'framer-motion';
import me from '../../assets/eu.jpeg';
import { Section, Profile, Content } from './styles';
import SocialLinks from '../../components/SocialLink/index';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// Configuração da animação do container do título
const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.05, // Velocidade com que cada letra aparece
    },
  },
};

// Configuração para cada letra individual
const letterVariants = {
  hidden: { opacity: 0, display: 'none' },
  visible: { opacity: 1, display: 'inline' },
};

export default function Hero() {
  const titleText = "Olá! Eu sou o Victor Pires :)";

  return (
    <Section>
      {/* Foto de Perfil com animação suave e elegante no hover */}
      <Profile
        as={motion.div}
        whileHover={{ scale: 1.04, y: -4 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <img src={me} alt="Victor Pires" />
      </Profile>

      <Content>
        {/* Título com animação de digitação */}
        <motion.h1
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'inline-block' }}
        >
          {titleText.split("").map((char, index) => (
            <motion.span key={`${char}-${index}`} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
          
          {/* Cursor a piscar no final do texto */}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            style={{ 
              display: 'inline-block', 
              marginLeft: '4px', 
              color: '#7B1113', 
              fontWeight: 'bold' 
            }}
          >
            |
          </motion.span>
        </motion.h1>

        <p>
          Desenvolvedor de Software focado em criar aplicações web modernas com
          React, Node.js e Styled Components.
        </p>
      </Content>

      <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
        <SocialLinks
          href="https://www.linkedin.com/in/victor-emanuel-pires/"
          icon={<FaLinkedin />}
          label="/linkedin"
        />

        <SocialLinks
          href="https://github.com/victorpcezar"
          icon={<FaGithub />}
          label="/github"
        />
      </div>
    </Section>
  );
}