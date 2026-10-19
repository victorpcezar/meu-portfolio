import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors?.border || '#eaeaea'};
  background-color: #ffffff;
  padding: 40px 24px;
  margin-top: 60px;
`;

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
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
    font-size: 0.9rem;
    font-weight: 600;
    color: #111111;

    span {
      color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
    }
  }

  span.copyright {
    font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
    font-size: 0.75rem;
    color: #888888;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  a {
    font-size: 1.25rem;
    color: #555555;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
      transform: translateY(-2px);
    }
  }
`;