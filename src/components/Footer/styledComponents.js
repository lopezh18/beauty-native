import styled from 'styled-components';
import { materialUiMediaQueries } from '../../breakpoints';

export const FooterWrapper = styled.footer`
  background-color: white;
  bottom: 0;
  display: block;
  padding-bottom: 0.75rem;
  position: fixed;
  right: 0;
  text-align: center;
  width: inherit;

  ${materialUiMediaQueries.md} {
    left: 10%;
  }
`;
  
  export const StyledAnchor = styled.a`
  color: black;
  text-decoration: none;
  :last-child {
  margin-left: 1rem; 
  }
`;