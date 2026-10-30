import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
  transition: transform 0.2s ease-in-out, border-color 0.2s ease-in-out, background-color 0.25s ease;

  svg {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px);
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-family: ${({ theme }) => theme.fonts.code};
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.code};
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-top: 2px;
  }
`
