import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors?.border || '#e0e0e0'};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease-in-out;

  svg {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
    flex-shrink: 0;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
    transform: translateY(-4px);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
    font-size: 0.95rem;
    font-weight: 600;
    /* Força cor bem escura para o título da tecnologia */
    color: #111111 !important; 
    margin: 0;
  }

  span {
    font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
    font-size: 0.75rem;
    color: #666666 !important;
    margin-top: 2px;
  }
`;