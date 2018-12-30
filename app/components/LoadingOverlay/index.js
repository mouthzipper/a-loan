/**
 *
 * LoadingOverlay
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LoadingIndicator from 'components/LoadingIndicator';

const Loader = styled.div`
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  /* Transparent Overlay */
  &:before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

function LoadingOverlay({ show }) {
  if (!show) return null;
  return (
    <Loader>
      <LoadingIndicator />
    </Loader>
  );
}

LoadingOverlay.propTypes = {
  show: PropTypes.bool,
};

export default LoadingOverlay;
