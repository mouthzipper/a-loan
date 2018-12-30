/**
 *
 * LoadingIndicator
 *
 */

import React from 'react';

import Wrapper from './Wrapper';

const LoadingIndicator = () => (
  <Wrapper>
    <div className="spinner">
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
    </div>
  </Wrapper>
);

export default LoadingIndicator;
