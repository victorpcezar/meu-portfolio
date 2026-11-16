'use client'

import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { staggerItem } from '../../animations'
import { CardContainer, Info } from './styles'

interface CardProps {
  name: string
  category?: string
  icon?: IconType
}

export default function Card({ name, category, icon: Icon }: CardProps) {
  return (
    <CardContainer as={motion.div} variants={staggerItem}>
      {Icon && <Icon aria-hidden="true" />}
      <Info>
        <h4>{name}</h4>
        {category && <span>{category}</span>}
      </Info>
    </CardContainer>
  )
}
