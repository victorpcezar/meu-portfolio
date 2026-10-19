import { motion } from 'framer-motion';
import { CardContainer, Info } from './styles';

// Animação de entrada individual de cada card
const cardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

export default function Card({ name, category, icon: Icon }) {
  return (
    <CardContainer
      as={motion.div}
      variants={cardItemVariants}
    >
      {Icon && <Icon />}
      <Info>
        <h4>{name}</h4> {/* Nome da tecnologia principal */}
        {category && <span>{category}</span>} {/* Categoria menorzinha abaixo */}
      </Info>
    </CardContainer>
  );
}