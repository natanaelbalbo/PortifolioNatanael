import styled from 'styled-components';

/**
 * Título de seção com efeito gradiente
 */

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  color: ${({ theme }) => theme.colors.text};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
    margin: ${({ theme }) => theme.spacing.lg} auto 0;
    border-radius: ${({ theme }) => theme.borderRadius.full};

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: 60px;
      height: 3px;
    }
  }
`;
