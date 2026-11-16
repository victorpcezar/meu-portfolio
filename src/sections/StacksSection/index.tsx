'use client'

import { motion } from 'framer-motion'
import { staggerReveal } from '../../animations'
import { stacksData } from '../../data/stacksData'

import Card from '../../components/Card'
import SectionTitle from '../../components/SectionTitle'
import { Container, Grid } from './styles'

// Tecnologias com experiência profissional ou projetos próprios vêm primeiro;
// o que ainda está em estudo fica marcado como tal.

export default function StacksSection() {
  return (
    <Container id="stacks">
      <SectionTitle>Principais stacks</SectionTitle>

      <Grid as={motion.div} {...staggerReveal}>
        {stacksData.map((stack) => (
          <Card key={stack.name} name={stack.name} category={stack.category} icon={stack.icon} />
        ))}
      </Grid>
    </Container>
  )
}
