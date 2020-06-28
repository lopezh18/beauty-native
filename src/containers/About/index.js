import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AboutContainer } from './styledComponents';
import Content from '../../components/About/Content';
import Image from '../../components/About/Image';
import { selectAboutData } from './selectors';

const About = ({ contentData }) => (
  <AboutContainer>
    <Image />
    <Content contentData={contentData}/>
  </AboutContainer>
);

const mapStateToProps = createStructuredSelector({
  contentData: selectAboutData,
});

export default connect(mapStateToProps)(About);
