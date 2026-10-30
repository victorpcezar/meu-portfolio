import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 40px 24px;
  margin-top: 60px;
  transition: background-color 0.25s ease;
`

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    font-family: ${({ theme }) => theme.fonts.code};
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  span.copyright {
    font-family: ${({ theme }) => theme.fonts.code};
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  a {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color 0.2s ease, transform 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transform: translateY(-2px);
    }
  }
`
