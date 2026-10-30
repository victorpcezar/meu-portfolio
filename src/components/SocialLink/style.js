import styled from 'styled-components'

export const SocialMediaLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s ease-in-out;

  span {
    font-size: 0.85rem;
    transition: transform 0.2s ease;
  }

  svg {
    font-size: 1.1rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};

    span {
      transform: translateX(4px);
    }
  }
`
