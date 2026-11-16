'use client'

import { motion } from 'framer-motion'
import { scrollRevealLeft } from '../../animations'
import SectionTitle from '../../components/SectionTitle'
import { AboutContainer, Content } from './styles'

export default function About() {
  return (
    <AboutContainer id="sobre">
      <Content as={motion.div} {...scrollRevealLeft}>
        <SectionTitle>Sobre mim:</SectionTitle>

        <p>
          Sou <span className="highlight">desenvolvedor ABAP júnior formado em análise e desenvolvimento de sistemas</span> com 1 ano de experiência em
          projetos SAP (AMS), onde desenvolvi relatórios ALV, atuei na correção de bugs em programas Z já existentes, análise de dump e debug.
        </p>

        <p>
          Hoje estou ampliando minha base para o <span className="highlight">desenvolvimento fullstack
          </span>: <span className="highlight">JavaScript & TypeScript & React & Nextjs</span>. no frontend e <span className="highlight">Node & Express </span> no backend. Também reforço os fundamentos de computação com o CS50 de Harvard.
        </p>

        <p>
          Busco uma vaga como <span className="highlight">Desenvolvedor fullstack</span>, unindo a
          disciplina com regras de negócio que aprendi no SAP à agilidade do desenvolvimento moderno.
        </p>
      </Content>
    </AboutContainer>
  )
}
