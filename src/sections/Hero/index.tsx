'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import SocialLinks from '../../components/SocialLink'
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../../data/profile'
import { useHydrated } from '../../hooks/useHydrated'
import { Section, Content, Cursor, Actions, Download } from './styles'

// Animação de digitação: cada letra aparece em sequência, sem mexer no layout
const sentenceVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
}

const letterVariants: Variants = {
  hidden: { display: 'none', opacity: 0 },
  visible: {
    display: 'inline',
    opacity: 1,
    transition: {
      duration: 0.01,
    },
  },
}

// 1. Adiciona a variante para o cursor piscar após a digitação
const cursorVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}



const titleText = 'Olá! Eu sou o Victor Pires :)'

export default function Hero() {
  // No servidor não dá para saber a preferência de movimento da pessoa; só aplicamos depois da hidratação
  const hydrated = useHydrated()
  const reduceMotion = useReducedMotion() && hydrated

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
            transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
          >
            |
          </Cursor>
        </motion.h1>

        <p>
          Desenvolvedor de Software com experiência em SAP ABAP
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
