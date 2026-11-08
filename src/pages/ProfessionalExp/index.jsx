import SectionTitle from '../../components/SectionTitle'
import { Container, Timeline, ItemCard, IconBadge, Header, DescriptionList } from './styles'
import { experiences } from '../../data/experiencesData'

export default function Experience() {
  return (
    <Container id="experiencia">
      <SectionTitle>Minha experiência</SectionTitle>

      <Timeline>
        {experiences.map((exp, index) => {
          const Icon = exp.icon
          return (
            <ItemCard
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <IconBadge whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Icon aria-hidden="true" />
              </IconBadge>

              <Header>
                <div className="role-row">
                  <h3>{exp.role}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <span className="company">{exp.company}</span>
              </Header>

              <DescriptionList>
                {exp.descriptions.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </DescriptionList>
            </ItemCard>
          )
        })}
      </Timeline>
    </Container>
  )
}
