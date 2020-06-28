/**
*
* AsyncRender
* @description: allows the async rendering of components based on data fetched from an API.
* Use Case: used by components that complete a data fetch in componentDidMount
* Parent Components/Containers : [
*  {
*    route: /preview,
*    name: <Preview>,
*  },
* ]
*/

import React from 'react';
import T from 'prop-types';
import { isEmpty } from 'lodash';

import Message from './Message';
import Loading from './Loading';

const AsyncRender = ({
  asyncData,
  error,
  component,
  loading,
  propsToPassDown,
}) => {
  if (loading) {
    return (<Loading />)
  }
  if (error) {
    return (
      <Message
        body="Oooops something went wrong"
      />
    );
  }
  if (!isEmpty(asyncData)) {
    const ComponentToRender = component;
    return (<ComponentToRender data={asyncData} {...propsToPassDown} />);
  }
  if (isEmpty(asyncData)) {
    return (
      <Message 
        body="Looks like there isn't any information on this page yet."
      />
    )
  }
  return (
    <Message
      body="Oooops something went wrong"
    />
  );
};

AsyncRender.propTypes = {
  asyncData: T.oneOfType([
    T.object,
    T.array,
  ]),
  component: T.oneOfType([T.func, T.object]).isRequired,
  error: T.bool.isRequired,
  loading: T.bool.isRequired,
};

AsyncRender.defaultProps = { propsToPassDown: {}};

export default AsyncRender;