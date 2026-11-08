import { motion } from 'framer-motion'
import { stacksData } from '../../data/stacksData'

import Card from '../../components/Card'
import SectionTitle from '../../components/SectionTitle'
import { Container, Grid } from './styles'

// Tecnologias com experiência profissional ou projetos próprios vêm primeiro;
// o que ainda está em estudo fica marcado como tal.


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
