import { FaCode, FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import { 
  Container, 
  Title, 
  Timeline, 
  ItemCard, 
  IconBadge, 
  Header, 
  DescriptionList 
} from './styles';

const experiences = [
  {
    id: 1,
    role: 'Software Engineer / ABAP Developer',
    company: '@ Engine Brasil',
    period: '2023 - 2024',
    icon: FaLaptopCode,
    descriptions: [
      'Atuação no desenvolvimento e sustentação de soluções no ecossistema SAP.',
      'Atendendo demandas de manutenção corretiva e evolutiva em ambiente AMS.',
      'Criação e customização de relatórios clássicos e interativos utilizando ALV (ABAP List Viewer).',
      'Análise de requisitos de negócio e tradução em soluções de código limpo e escalável.'
    ]
  },
  {
    id: 2,
    role: 'Conferente de cargas',
    company: '@ LDB Tranposrtes',
    period: '18 DEZ - Atual',
    icon: FaBriefcase,
    descriptions: [
      'Conferência de entrada e saída: Valida quantidades, códigos, lotes e datas de validade dos produtos.',
      'Análise documental: Confere notas fiscais (NF), ordens de compra, manifestos e conhecimentos de transporte (CT-e).',
      'Inspeção de avarias: Identifica danos, embalagens rompidas ou mercadorias em desconformidade com os padrões.',
    ]
  }
];

export default function Experience() {
  return (
    <Container id="experiencia">
      <Title>Minha experiência</Title>

      <Timeline>
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <ItemCard
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.01 }}
            >
              <IconBadge
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Icon />
              </IconBadge>

              <Header>
                <div className="role-row">
                  <h3>{exp.role}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <span className="company">{exp.company}</span>
              </Header>

              <DescriptionList>
                {exp.descriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </DescriptionList>
            </ItemCard>
          );
        })}
      </Timeline>
    </Container>
  );
}