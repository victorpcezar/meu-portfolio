import styled, { type DefaultTheme } from 'styled-components'
import { motion } from 'framer-motion'
import { hoverTransition, progressTransition, pulseAnimation, themeTransition } from '../../animations'
import type { RoadmapStatus } from '../../data/roadmapData'

interface StatusProps {
  $status: RoadmapStatus
}

// Planejado fica em tom neutro; em andamento e concluído usam a cor de destaque
const accent = ({ theme, $status }: StatusProps & { theme: DefaultTheme }) =>
  $status === 'planejado' ? theme.colors.textMuted : theme.colors.primary

export const Card = styled(motion.li)<StatusProps>`
  position: relative;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid
    ${({ theme, $status }) => ($status === 'em-andamento' ? theme.colors.primary : theme.colors.border)};
  border-radius: 16px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 4px 20px
    ${({ theme, $status }) => ($status === 'em-andamento' ? theme.colors.primaryGlow : theme.colors.shadow)};
  transition: ${hoverTransition('border-color')}, ${themeTransition('background-color')};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    padding: 20px;
    gap: 16px;
  }
`

export const IconBadge = styled(motion.div)<StatusProps>`
  position: absolute;
  left: -44px;
  top: 22px;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 2px ${({ $status }) => ($status === 'planejado' ? 'dashed' : 'solid')} ${accent};
  color: ${accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
  z-index: 2;

  @media (max-width: 768px) {
    left: -36px;
    width: 30px;
    height: 30px;
    font-size: 0.85rem;
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.code};
    font-size: 1.15rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p {
    font-family: ${({ theme }) => theme.fonts.code};
    font-size: 0.88rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

export const StatusTag = styled.span<StatusProps>`
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  color: ${accent};
  background-color: ${({ theme, $status }) => ($status === 'planejado' ? 'transparent' : theme.colors.primarySoft)};
  border: 1px solid ${({ theme, $status }) => ($status === 'planejado' ? theme.colors.border : 'transparent')};
`

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .meta {
    font-family: ${({ theme }) => theme.fonts.code};
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

export const Track = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.border};
  overflow: hidden;
`

export const Fill = styled.div<{ $percent: number }>`
  width: ${({ $percent }) => $percent}%;
  height: 100%;
  border-radius: inherit;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: ${progressTransition('width')};
`

export const Topics = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Topic = styled.li<StatusProps>`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${({ theme, $status }) => ($status === 'planejado' ? theme.colors.textMuted : theme.colors.textSecondary)};
  ${({ $status }) => $status === 'concluido' && 'text-decoration: line-through; text-decoration-thickness: 1px;'}

  svg {
    flex-shrink: 0;
    margin-top: 4px;
    font-size: 0.85rem;
    color: ${accent};
    ${({ $status }) => $status === 'em-andamento' && pulseAnimation}
  }
`

export const Resources = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
`

// Texto só para leitores de tela (o ícone de status é decorativo)
export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`
