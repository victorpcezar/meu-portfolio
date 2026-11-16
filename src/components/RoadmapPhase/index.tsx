'use client'

import type { IconType } from 'react-icons'
import { FaBookOpen, FaCheckCircle, FaDotCircle, FaRegCircle } from 'react-icons/fa'
import { hoverPop, scrollReveal } from '../../animations'
import SocialLinks from '../SocialLink'
import {
  getPhaseProgress,
  statusLabels,
  type RoadmapPhaseItem,
  type RoadmapStatus,
} from '../../data/roadmapData'
import {
  Card,
  IconBadge,
  Header,
  StatusTag,
  Progress,
  Track,
  Fill,
  Topics,
  Topic,
  Resources,
  VisuallyHidden,
} from './styles'

const topicIcons: Record<RoadmapStatus, IconType> = {
  concluido: FaCheckCircle,
  'em-andamento': FaDotCircle,
  planejado: FaRegCircle,
}

interface RoadmapPhaseProps {
  phase: RoadmapPhaseItem
}

export default function RoadmapPhase({ phase }: RoadmapPhaseProps) {
  const { icon: PhaseIcon, topics } = phase
  const { done, total, percent } = getPhaseProgress(topics)
  const titleId = `roadmap-${phase.id}`

  return (
    <Card $status={phase.status} aria-labelledby={titleId} {...scrollReveal}>
      <IconBadge $status={phase.status} {...hoverPop}>
        <PhaseIcon aria-hidden="true" />
      </IconBadge>

      <Header>
        <div className="title-row">
          <h3 id={titleId}>{phase.title}</h3>
          <StatusTag $status={phase.status}>{statusLabels[phase.status]}</StatusTag>
        </div>
        <p>{phase.description}</p>
      </Header>

      <Progress>
        <span className="meta">
          {done}/{total} tópicos concluídos
        </span>
        <Track
          role="progressbar"
          aria-label={`Progresso em ${phase.title}`}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={done}
        >
          <Fill $percent={percent} />
        </Track>
      </Progress>

      <Topics>
        {topics.map((topic) => {
          const TopicIcon = topicIcons[topic.status]
          return (
            <Topic key={topic.id} $status={topic.status}>
              <TopicIcon aria-hidden="true" />
              <span>
                {topic.title}
                <VisuallyHidden> ({statusLabels[topic.status]})</VisuallyHidden>
              </span>
            </Topic>
          )
        })}
      </Topics>

      {phase.resources && phase.resources.length > 0 && (
        <Resources>
          {phase.resources.map((resource) => (
            <SocialLinks
              key={resource.url}
              href={resource.url}
              icon={<FaBookOpen />}
              label={resource.label}
            />
          ))}
        </Resources>
      )}
    </Card>
  )
}
