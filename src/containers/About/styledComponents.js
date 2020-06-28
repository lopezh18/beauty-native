import styled from 'styled-components';
import { materialUiMediaQueries } from '../../breakpoints';

export const AboutContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-family: canterburyregular, serif;
  justify-content: center;
  width: 100%;
  ${materialUiMediaQueries.sm} {
    flex-direction: column;
  }
`;
