'use client'

import { motion, type Variants } from 'framer-motion'
import type { IconType } from 'react-icons'
import { CardContainer, Info } from './styles'

// Animação de entrada individual de cada card
const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

interface CardProps {
  name: string
  category?: string
  icon?: IconType
}

export default function Card({ name, category, icon: Icon }: CardProps) {
  return (
    <CardContainer as={motion.div} variants={cardItemVariants}>
      {Icon && <Icon aria-hidden="true" />}
      <Info>
        <h4>{name}</h4>
        {category && <span>{category}</span>}
      </Info>
    </CardContainer>
  )
}
