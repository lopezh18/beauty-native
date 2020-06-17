import React from 'react';
import {
  ContentContainer,
  LandingPageButton,
  MainContainer,
  NameContainer,
  TestContainer,
} from './styledComponents';

const LandingPage = () =>(
  <MainContainer>
    <TestContainer />
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