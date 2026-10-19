import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaGitAlt,
  FaDatabase, 
  FaCode 
} from 'react-icons/fa';
import { 
  SiExpress, 
  SiMongodb, 
  SiStyledcomponents 
} from 'react-icons/si';

import Card from '../../components/Card';
import { Container, Title, Grid } from './styles';

const stacksData = [
  { name: 'React', category: 'Frontend', icon: FaReact },
  { name: 'Node.js', category: 'Backend', icon: FaNodeJs },
  { name: 'Express', category: 'Backend', icon: SiExpress },
  { name: 'MongoDB', category: 'Database', icon: SiMongodb },
  { name: 'SQL & Databases', category: 'Database / Query', icon: FaDatabase },
  { name: 'ABAP', category: 'SAP / Backend', icon: FaCode },
  { name: 'Styled Components', category: 'Styling', icon: SiStyledcomponents },
  { name: 'JavaScript', category: 'Language', icon: FaJs },
  { name: 'Git', category: 'Version Control', icon: FaGitAlt },
];

// Configuração do container pai para orquestrar os cards
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Atraso de 0.08s entre a aparição de cada card
    },
  },
};

export default function StacksSetion() {
  return (
    <Container id="stacks">
      <Title>Principais stacks</Title>

      <Grid
        as={motion.div}
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {stacksData.map((stack) => (
          <Card
            key={stack.name}
            name={stack.name}
            category={stack.category}
            icon={stack.icon}
          />
        ))}
      </Grid>
    </Container>
  );
}