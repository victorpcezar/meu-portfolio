'use client'

import { FaCheckCircle, FaDotCircle, FaRegCircle } from 'react-icons/fa'
import RoadmapPhase from '../../components/RoadmapPhase'
import SectionTitle from '../../components/SectionTitle'
import { getPhaseProgress, roadmap, statusLabels } from '../../data/roadmapData'
import { Container, Intro, Legend, Timeline } from './styles'

export default function Roadmap() {
  const currentPhase = roadmap.find((phase) => phase.status === 'em-andamento')
  const currentProgress = currentPhase ? getPhaseProgress(currentPhase.topics) : null

  return (
    <Container id="roadmap" aria-labelledby="roadmap-title">
      <Intro>
        <SectionTitle id="roadmap-title">Roadmap de estudos</SectionTitle>

        <p>
          O que estou estudando agora e o que vem a seguir. Começo pela base em{' '}
          <strong>TypeScript</strong>, passo por <strong>Node.js</strong> e <strong>Express</strong> e
          fecho com <strong>arquitetura de software</strong>. A lista cresce conforme novos assuntos entram.
        </p>

        {currentPhase && currentProgress && (
          <p>
            Foco atual: <strong>{currentPhase.title}</strong> ({currentProgress.done}/{currentProgress.total} tópicos
            concluídos).
          </p>
        )}

        <Legend aria-label="Legenda de status">
          <li>
            <FaCheckCircle aria-hidden="true" /> {statusLabels.concluido}
          </li>
          <li>
            <FaDotCircle aria-hidden="true" /> {statusLabels['em-andamento']}
          </li>
          <li>
            <FaRegCircle aria-hidden="true" /> {statusLabels.planejado}
          </li>
        </Legend>
      </Intro>

      <Timeline aria-label="Etapas do roadmap">
        {roadmap.map((phase) => (
          <RoadmapPhase key={phase.id} phase={phase} />
        ))}
      </Timeline>
    </Container>
  )
}
