import styled from 'styled-components';
import test from '../../images/test.jpg';

export const AboutContainer = styled.div`
  align-items: center;
  display: flex;
  font-family: canterburyregular, serif;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  width: 100%;
`;

export const ImageContainer = styled.div`
  background: url(${test});
  background-size: cover;
  width: 40%;
  height: 100%;
`;

export const ContentContainer = styled.div`
`;

export const Title = styled.h1`
  font-weight: normal;
  margin-bottom: 0;
`;

export const SubTitle = styled.h3`
  font-weight: normal;
  margin: 0;
  padding-bottom: 2rem;
`;

export const AboutDetails = styled.p`
  font-size: 1.2rem;
  font-weight: normal;
  margin-top: 0;
`;