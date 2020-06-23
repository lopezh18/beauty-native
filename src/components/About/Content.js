import React from 'react';
import { v4 as uuid } from 'uuid';

import { contentDetails, featuredData } from './details';
import {
  AboutDetails,
  AnchorWrapper,
  ContentContainer,
  FeaturedContainer,
  FeaturedImageContainer,
  StyledAnchor,
  StyledImage,
  Title,
} from './styledComponents';

const Content = () => {
  return (
    <ContentContainer>
      <Title>Selina McManus</Title>
      <AnchorWrapper>
        <StyledAnchor 
          href='https://www.instagram.com/_beautynative/'
          rel='noreferrer noopener'
          target='_blank'
        >
          @_beautyNative
      </StyledAnchor>
      </AnchorWrapper>
      <AboutDetails>flannel | master | flexitarian | brunch </AboutDetails>
      {contentDetails.map(({ header, details }) => (
        <AboutDetails
          key={uuid()}
          leftAlign
        >
          {header}: {details}
        </AboutDetails>
      ))}
      <AboutDetails>Featured:</AboutDetails>
      <FeaturedContainer>
        {featuredData.map(({ alt, img }, idx) => (
          <FeaturedImageContainer
            key={uuid()}
            center={idx !== 0 && idx !== featuredData.length-1}
          >
            <StyledImage src={img} alt={alt}/>
          </FeaturedImageContainer>
        ))}
      </FeaturedContainer>
    </ContentContainer>
  );
};

export default Content;
