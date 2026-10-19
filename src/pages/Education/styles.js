import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.section`
  width: 100%;
  max-width: 1100px; /* Alinhado exatamente com as outras seções */
  margin: 0 auto;
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
  font-size: 1.8rem;
  font-weight: 700;
  color: #111111;

  &::before {
    content: '// ';
    color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  width: 100%;
`;

export const Card = styled(motion.div)`
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors?.border || '#eaeaea'};
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  .icon {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
    padding-top: 2px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h3 {
      font-size: 1.15rem;
      font-weight: 700;
      color: #111111;
      line-height: 1.4;
    }

    span.institution {
      font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
      font-size: 0.85rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
    }
  }
`;

export const StatusTag = styled.span`
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: rgba(123, 17, 19, 0.08);
  color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
  font-size: 0.88rem;
  line-height: 1.6;
  color: #444444;
`;