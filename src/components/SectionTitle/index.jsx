import styled from 'styled-components'

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};

  &::before {
    content: '// ';
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default SectionTitle
