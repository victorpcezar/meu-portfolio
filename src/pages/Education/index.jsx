import { FaCertificate, FaGraduationCap } from 'react-icons/fa'
import SectionTitle from '../../components/SectionTitle'
import { Container, Grid, Card, CardHeader, StatusTag, Description } from './styles'

const educationData = [
  {
    id: 1,
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'UNICIVE - Centro Universitário Cidade Verde',
    period: 'Graduação concluída em 2024',
    icon: FaGraduationCap,
    description:
      'Foco em engenharia de software, arquitetura de sistemas, modelagem de dados e fundamentos de Tecnologia da Informação.',
  },
  {
    id: 2,
    title: 'CS50 – Introduction to Computer Science',
    institution: 'Harvard University',
    period: 'Certificado em emissão',
    icon: FaCertificate,
    description:
      'Fundamentos de ciência da computação: algoritmos, estruturas de dados e programação.',
  },
]

export default function Education() {
  return (
    <Container id="formacao">
      <SectionTitle>Formação e cursos</SectionTitle>

      <Grid>
        {educationData.map((item, index) => {
          const Icon = item.icon
          return (
            <Card
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
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
