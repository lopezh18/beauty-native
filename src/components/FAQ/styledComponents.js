import styled from 'styled-components';
import { materialUiMediaQueries } from '../../breakpoints';

export const FaqContainer = styled.div`
  font-family: canterburyregular, serif;
`;

export const Title = styled.h1`
  font-weight: normal;
  margin-top: 0;
  ${materialUiMediaQueries.xs} {
    display: none;
  }
`;
