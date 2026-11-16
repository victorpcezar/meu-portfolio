'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { cursorBlink, cursorSteady, typewriterContainer, typewriterLetter } from '../../animations'
import SocialLinks from '../../components/SocialLink'
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../../data/profile'
import { useHydrated } from '../../hooks/useHydrated'
import { Section, Content, Cursor, Actions, Download } from './styles'

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
          variants={typewriterContainer}
          initial="hidden"
          animate="visible"
        >
          <span aria-hidden="true">
            {reduceMotion
              ? titleText
              : titleText.split('').map((char, index) => (
                  <motion.span key={`${char}-${index}`} variants={typewriterLetter}>
                    {char}
                  </motion.span>
                ))}
          </span>

          <Cursor aria-hidden="true" {...(reduceMotion ? cursorSteady : cursorBlink)}>
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
