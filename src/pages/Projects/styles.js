import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
`

export const ProjectCard = styled.article`
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

  h3 {
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

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
`

export const Status = styled.span`
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
`

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    font-family: ${({ theme }) => theme.fonts.code};
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textMuted};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;
    padding: 2px 8px;
  }
`

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin-top: auto;
`

export const MoreLink = styled.div`
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: 0.9rem;
`
