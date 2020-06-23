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

export const ImageContainer = styled.div`
  height: 100%;
  max-width: 40%;
  ${materialUiMediaQueries.sm} {
    max-width: 70%;
  }
  ${materialUiMediaQueries.xs} {
    margin-top: 1.5rem;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  max-width: 55%;
  padding: 2rem 0 2rem 2rem;
  ${materialUiMediaQueries.sm} {
    max-width: 95%;
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-weight: normal;
  margin-bottom: 0;
  text-align: center;
`;

export const AnchorWrapper = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

export const StyledAnchor = styled.a`
  color: black;
  font-size: 1.5rem;
  text-decoration: none;
`;

export const AboutDetails = styled.p`
  font-size: 1.2rem;
  font-weight: normal;
  margin-top: 0;
  text-align: ${(({ leftAlign }) => leftAlign ? 'left' : 'center')};
`;

export const FeaturedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FeaturedImageContainer = styled.div`
  margin: ${(({ center }) => center ? '0.5rem 1rem' : '0.5rem 0')};
  max-height: 7rem;
  max-width: 7rem;
`;
