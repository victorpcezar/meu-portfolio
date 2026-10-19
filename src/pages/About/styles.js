import styled from 'styled-components';

export const AboutContainer = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
    font-size: 1.8rem;
    font-weight: 700;
    color: #111111;
    margin-bottom: 8px;

    &::before {
      content: '// ';
      color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
    font-size: 1rem;
    line-height: 1.7;
    color: #444444;

    span.highlight {
      color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
      font-weight: 600;
    }
  }
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;
  cursor: pointer;

  img {
    width: 280px;
    height: 340px;
    object-fit: cover;
    border-radius: 24px;
    
    /* Borda visível por padrão */
    border: 1px solid ${({ theme }) => theme.colors?.border || '#e0e0e0'};
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    
    /* Transições de cor e sombra no hover */
    transition: box-shadow 0.3s ease, border-color 0.3s ease;

    @media (max-width: 480px) {
      width: 220px;
      height: 270px;
    }
  }

  /* Aplica o destaque na imagem quando o mouse passa no ImageWrapper */
  &:hover img {
    border-color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
    box-shadow: 0 18px 40px rgba(123, 17, 19, 0.18);
  }
`;