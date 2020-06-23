import React from 'react';

import {
  FooterWrapper,
  StyledAnchor,
} from './styledComponents';

const Footer = () => (
  <FooterWrapper>
    <StyledAnchor
      href='https://www.facebook.com/beautynativeselinam'
      rel='noreferrer noopener'
      target='_blank'
    >
    <i className="fab fa-facebook" />
    </StyledAnchor>
    <StyledAnchor
      href='https://www.instagram.com/_beautynative/'
      rel='noreferrer noopener'
      target='_blank'
    >
      <i className="fab fa-instagram"></i>
    </StyledAnchor>
  </FooterWrapper>
);

export default Footer;
