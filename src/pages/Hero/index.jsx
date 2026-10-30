import { motion, useReducedMotion } from 'framer-motion'
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import SocialLinks from '../../components/SocialLink/index'
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../../data/profile'
import { Section, Content, Cursor, Actions, Download } from './styles'

// Animação de digitação: cada letra aparece em sequência, sem mexer no layout
const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, staggerChildren: 0.05 },
  },
}

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const titleText = 'Olá! Eu sou o Victor Pires :)'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="top">
      <Content>
        <motion.h1
          aria-label={titleText}
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
        >
          <span aria-hidden="true">
            {reduceMotion
              ? titleText
              : titleText.split('').map((char, index) => (
                  <motion.span key={`${char}-${index}`} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
          </span>

          <Cursor
            aria-hidden="true"
            animate={reduceMotion ? { opacity: 1 } : { opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            |
          </Cursor>
        </motion.h1>

        <p>
          Desenvolvedor de Software com experiência em ABAP e SAP, criando aplicações web com
          React e JavaScript.
        </p>

        <Actions>
          <Download href={RESUME_URL} download>
            <FaDownload aria-hidden="true" /> Baixar currículo
          </Download>
          <SocialLinks href={LINKEDIN_URL} icon={<FaLinkedin />} label="/linkedin" />
          <SocialLinks href={GITHUB_URL} icon={<FaGithub />} label="/github" />
          <SocialLinks href={`mailto:${EMAIL}`} icon={<FaEnvelope />} label="/e-mail" />
        </Actions>
      </Content>
    </Section>
  )
}
