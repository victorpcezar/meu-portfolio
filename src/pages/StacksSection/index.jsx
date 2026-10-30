import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaJs, FaGitAlt, FaDatabase, FaCode, FaHtml5 } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiSap, SiStyledcomponents, SiVuedotjs } from 'react-icons/si'

import Card from '../../components/Card'
import SectionTitle from '../../components/SectionTitle'
import { Container, Grid } from './styles'

// Tecnologias com experiência profissional ou projetos próprios vêm primeiro;
// o que ainda está em estudo fica marcado como tal.
const stacksData = [
  { name: 'ABAP', category: 'SAP · Back-end', icon: FaCode },
  { name: 'React', category: 'Front-end', icon: FaReact },
  { name: 'JavaScript', category: 'Linguagem', icon: FaJs },
  { name: 'Vue.js', category: 'Front-end', icon: SiVuedotjs },
  { name: 'HTML & CSS', category: 'Front-end', icon: FaHtml5 },
  { name: 'Styled Components', category: 'Estilização', icon: SiStyledcomponents },
  { name: 'Git', category: 'Controle de versão', icon: FaGitAlt },
  { name: 'SQL', category: 'Banco de dados', icon: FaDatabase },
  { name: 'SAP Fiori & OData', category: 'Em estudo', icon: SiSap },
  { name: 'Node.js', category: 'Back-end · em estudo', icon: FaNodeJs },
  { name: 'Express', category: 'Back-end · em estudo', icon: SiExpress },
  { name: 'MongoDB', category: 'Banco de dados · em estudo', icon: SiMongodb },
]

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

export default function StacksSection() {
  return (
    <Container id="stacks">
      <SectionTitle>Principais stacks</SectionTitle>

      <Grid
        as={motion.div}
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {stacksData.map((stack) => (
          <Card key={stack.name} name={stack.name} category={stack.category} icon={stack.icon} />
        ))}
      </Grid>
    </Container>
  )
}
