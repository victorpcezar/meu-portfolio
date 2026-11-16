'use client'

import { hoverPop, scrollReveal } from '../../animations'
import SectionTitle from '../../components/SectionTitle'
import { Container, Timeline, ItemCard, IconBadge, Header, DescriptionList } from './styles'
import { experiences } from '../../data/experiencesData'

export default function Experience() {
  return (
    <Container id="experiencia">
      <SectionTitle>Minha experiência</SectionTitle>

      <Timeline>
        {experiences.map((exp) => {
          const Icon = exp.icon
          return (
            <ItemCard key={exp.id} {...scrollReveal}>
              <IconBadge {...hoverPop}>
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
