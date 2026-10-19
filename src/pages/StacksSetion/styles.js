import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
  font-size: 1.8rem;
  font-weight: 700;
  /* Força a cor escura para garantir visibilidade no fundo claro */
  color: #111111 !important; 
  display: block !important;
  visibility: visible !important;

  &::before {
    content: '// ';
    color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  width: 100%;
`;