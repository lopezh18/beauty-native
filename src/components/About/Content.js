import React from 'react';
import { contentDetails } from './details';
import {
  AboutDetails,
  ContentContainer,
  SubTitle,
  Title,
} from './styledComponents';

const Content = () => (
  <ContentContainer>
    <Title>Selina McManus</Title>
    <SubTitle>@_beautynative</SubTitle>
    <AboutDetails>flannel | master | flexitarian | brunch </AboutDetails>
    {contentDetails.map(({ header, details }) => (
      <AboutDetails> {header}: {details} </AboutDetails>
     ))}
     <AboutDetails>Featured:</AboutDetails>
  </ContentContainer>
)

export default Content;
