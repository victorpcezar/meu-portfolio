import styled from 'styled-components'

export const AboutContainer = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 24px;
  display: flex;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const Content = styled.div`
  flex: 1;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    margin-bottom: 8px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.code};
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textSecondary};

    span.highlight {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
    }
  }
`
