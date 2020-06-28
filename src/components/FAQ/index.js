import React from 'react';
import { v4 as uuid } from 'uuid';

import { FaqContainer, Title } from './styledComponents';

const FAQ = ({ questions }) => (
  <FaqContainer>
    <Title>FAQ</Title>
    {questions.map(({ answer, question }) => (
        <div key={uuid()}>
          <p>
            Q: {question}
          </p>
          <p>
            A: {answer}
          </p>
        </div>
      ))}
  </FaqContainer>
);

export default FAQ;
