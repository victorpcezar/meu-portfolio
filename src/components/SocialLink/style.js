import styled from 'styled-components';

export const SocialMediaLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
  text-decoration: none;
  white-space: nowrap; /* Impede que o texto quebre em duas linhas */
  transition: all 0.2s ease-in-out;

  span {
    font-size: 0.85rem;
    transition: transform 0.2s ease;
  }

  svg {
    font-size: 1.1rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors?.textPrimary || '#ffffff'};
    
    span {
      transform: translateX(4px); /* A seta dá um leve salto para a direita no hover */
    }
  }
`;