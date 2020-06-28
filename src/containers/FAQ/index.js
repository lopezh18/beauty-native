import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FAQ from '../../components/FAQ';
import { selectFaqData } from './selectors';

const Faq = ({ questions }) => (
  <FAQ questions={questions}/>
);

const mapStateToProps = createStructuredSelector({
  questions: selectFaqData,
})

export default connect(mapStateToProps)(Faq);