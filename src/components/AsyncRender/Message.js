import React from 'react';
import {
  MessageContainer,
  StyledMessage,
} from './styledComponents';

const Message = ({ body }) => (
  <MessageContainer>
    <StyledMessage>
      {body}
    </StyledMessage>
  </MessageContainer>
);

export default Message;