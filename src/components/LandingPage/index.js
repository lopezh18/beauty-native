import React from 'react';
import {
  ContentContainer,
  GradientContainer,
  LandingPageButton,
  MainContainer,
  NameContainer,
} from './styledComponents';

const LandingPage = () =>(
  <MainContainer>
    <GradientContainer />
    <ContentContainer>
      <NameContainer>
        Selina McManus
      </NameContainer>
      <LandingPageButton
        classes={{
          root: 'button',
          label: 'label',
        }}
        focusRipple
        href='/about'
      >
        Enter Site
      </LandingPageButton>
    </ContentContainer>
  </MainContainer>
);

export default LandingPage;