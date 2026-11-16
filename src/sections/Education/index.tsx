'use client'

import { motion } from 'framer-motion'
import { staggerItem, staggerReveal } from '../../animations'
import { educationData } from '../../data/educationData'
import SectionTitle from '../../components/SectionTitle'
import { Container, Grid, Card, CardHeader, StatusTag, Description } from './styles'

export default function Education() {
  return (
    <Container id="formacao">
      <SectionTitle>Formação e cursos</SectionTitle>

      <Grid as={motion.div} {...staggerReveal}>
        {educationData.map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.id} variants={staggerItem}>
              <CardHeader>
                <div className="icon">
                  <Icon aria-hidden="true" />
                </div>
                <div className="info">
                  <h3>{item.title}</h3>
                  <span className="institution">@ {item.institution}</span>
                </div>
              </CardHeader>

              <StatusTag>{item.period}</StatusTag>

              <Description>{item.description}</Description>
            </Card>
          )
        })}
      </Grid>
    </Container>
  )
}
