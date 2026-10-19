import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 24px 40px;
  
  display: flex;
  flex-direction: row; /* Coloca a foto e o texto lado a lado */
  align-items: center;
  justify-content: space-between;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column; /* Em ecrãs pequenos fica um debaixo do outro */
    text-align: center;
    padding-top: 60px;
  }
`;

export const Profile = styled.div`
  flex-shrink: 0;
  cursor: pointer;

  img {
    width: 280px;
    height: 340px;
    object-fit: cover; /* Garante que a foto preenche os cantos sem distorcer */
    border-radius: 24px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    border: 1px solid ${({ theme }) => theme.colors?.border || '#eaeaea'};
    /* Transições suaves para hover */
    transition: box-shadow 0.35s ease, border-color 0.35s ease;

    @media (max-width: 480px) {
      width: 220px;
      height: 270px;
    }
  }

  /* Efeito de brilho/sombra elegante ao passar o mouse */
  &:hover img {
    box-shadow: 0 18px 40px rgba(123, 17, 19, 0.15);
    border-color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;

  h1 {
    font-size: 2.2rem;
    font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
    color: ${({ theme }) => theme.colors?.textPrimary || '#111111'};
    line-height: 1.3;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.05rem;
    line-height: 1.6;
    font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
    color: ${({ theme }) => theme.colors?.textSecondary || '#444444'};
  }
`;