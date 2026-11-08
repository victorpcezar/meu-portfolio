import { educationData } from '../../data/educationData'
import SectionTitle from '../../components/SectionTitle'
import { Container, Grid, Card, CardHeader, StatusTag, Description } from './styles'



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
