import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Section = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 90px 24px 40px;

  @media (max-width: 768px) {
    padding-top: 60px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 640px;

  h1 {
    font-size: 2.2rem;
    font-family: ${({ theme }) => theme.fonts.code};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.3;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.05rem;
    line-height: 1.6;
    font-family: ${({ theme }) => theme.fonts.code};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

export const Cursor = styled(motion.span)`
  display: inline-block;
  margin-left: 4px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 24px;
  margin-top: 8px;
`

export const Download = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.colors.primaryGlow};
  }
`
