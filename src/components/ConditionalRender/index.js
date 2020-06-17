import React from 'react';
import T from 'prop-types';

function ConditionalRender({ 
  Component,
  FallbackComponent,
  propsToPassDown,
  shouldRender,
}) {
  if (shouldRender) {
    const isStyledComponent = typeof Component === 'object' && !!Component.isstyledComponent;

    if (typeof Component === 'function' || isStyledComponent) {
      return <Component {...propsToPassDown} />
    }
    return Component;
  }
  if (FallbackComponent) {
    const isStyledComponent = typeof Component === 'object' && !!Component.isstyledComponent;

    if (typeof Component === 'function' || isStyledComponent) {
      return <FallbackComponent {...propsToPassDown} />
    }
    return FallbackComponent;
  }
  return null;
};

ConditionalRender.propTypes = {
  Component: T.oneOfType([T.func, T.element, T.object]),
  propsToPassDown: T.object,
  shouldRender: T.bool.isRequired,
}

export default ConditionalRender;
