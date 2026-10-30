import { motion } from 'framer-motion'
import SectionTitle from '../../components/SectionTitle'
import { AboutContainer, Content } from './styles'

const contentVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function About() {
  return (
    <AboutContainer id="sobre">
      <Content
        as={motion.div}
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <SectionTitle>Sobre mim:</SectionTitle>

        <p>
          Sou <span className="highlight">Desenvolvedor ABAP Júnior</span> com 1 ano de experiência em
          projetos SAP (AMS), onde desenvolvi relatórios ALV, programas Z e Function Modules, além de
          fazer debug e análise de dumps.
        </p>

        <p>
          Hoje estou ampliando minha base para o <span className="highlight">desenvolvimento web e
          SAP Fiori</span>: React e JavaScript em projetos próprios, e CDS Views, OData e SAPUI5 em
          estudo. Também reforço os fundamentos de computação com o CS50 de Harvard.
        </p>

        <p>
          Busco uma vaga como <span className="highlight">Desenvolvedor de Software</span>, unindo a
          disciplina com regras de negócio que aprendi no SAP à agilidade do desenvolvimento web
          moderno.
        </p>
      </Content>
    </AboutContainer>
  )
}
