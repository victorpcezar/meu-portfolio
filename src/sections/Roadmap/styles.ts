import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 56px 16px;
    gap: 32px;
  }
`

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 760px;

  p {
    font-family: ${({ theme }) => theme.fonts.code};
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textSecondary};

    strong {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
    }
  }
`

export const Legend = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;

  li {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: ${({ theme }) => theme.fonts.code};
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const Timeline = styled.ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
  padding-left: 44px;

  /* Linha condutora */
  &::before {
    content: '';
    position: absolute;
    left: 17px;
    top: 12px;
    bottom: 12px;
    width: 2px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.border} 100%
    );
  }

  @media (max-width: 768px) {
    padding-left: 36px;
    gap: 24px;

    &::before {
      left: 14px;
    }
  }
`
