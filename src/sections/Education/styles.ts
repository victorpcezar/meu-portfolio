import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  width: 100%;
`

export const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.shadow};
  transition: border-color 0.3s ease, background-color 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  .icon {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.primary};
    padding-top: 2px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h3 {
      font-size: 1.15rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.textPrimary};
      line-height: 1.4;
    }

    span.institution {
      font-family: ${({ theme }) => theme.fonts.code};
      font-size: 0.85rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const StatusTag = styled.span`
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
`

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: 0.88rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`
