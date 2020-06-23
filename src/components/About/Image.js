import React from 'react';
import {
  ImageContainer,
  StyledImage,
} from './styledComponents';

import test from '../../images/test.jpg';

const Image = () => (
  <ImageContainer>
    <StyledImage src={test} alt='selina'/>
  </ImageContainer>
)

export default Image;
