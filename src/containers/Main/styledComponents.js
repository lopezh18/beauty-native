import styled from 'styled-components';
import { materialUiMediaQueries } from '../../breakpoints';

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  padding: ${({ removePadding }) => removePadding ? '0' : '3rem 2rem 0'};
  width: 100%;

  ${materialUiMediaQueries.xs} {
    padding: ${({ removePadding }) => removePadding ? '0' : '0 1rem'};
  }
`;
