import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
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

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
  padding-left: 36px; /* Aumenta um pouco o respiro à esquerda */

  /* Linha condutora */
  &::before {
    content: '';
    position: absolute;
    left: 19px;
    top: 12px;
    bottom: 12px;
    width: 2px;
    background: linear-gradient(
      180deg, 
      ${({ theme }) => theme.colors?.primary || '#7B1113'} 0%, 
      #e0e0e0 100%
    );
  }
`;

export const ItemCard = styled(motion.div)`
  position: relative;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors?.border || '#eaeaea'};
  border-radius: 16px;
  padding: 24px 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
  }
`;

export const IconBadge = styled(motion.div)`
  position: absolute;
  left: -40px; /* Posiciona perfeitamente centrado com a linha de 19px */
  top: 24px;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 2px solid ${({ theme }) => theme.colors?.primary || '#7B1113'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 2;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;

  .role-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;

    h3 {
      font-size: 1.15rem;
      font-weight: 700;
      color: #111111;
    }

    span.period {
      font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
      font-size: 0.8rem;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 20px;
      background-color: rgba(123, 17, 19, 0.08);
      color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
    }
  }

  span.company {
    font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
    font-size: 0.9rem;
    font-weight: 600;
    color: #666666;
  }
`;

export const DescriptionList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    font-family: ${({ theme }) => theme.fonts?.code || "'Fira Code', monospace"};
    font-size: 0.9rem;
    line-height: 1.6;
    color: #444444;
    position: relative;
    padding-left: 20px;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors?.primary || '#7B1113'};
      font-weight: bold;
    }
  }
`;