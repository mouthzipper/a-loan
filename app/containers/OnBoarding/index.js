/**
 *
 * OnBoarding
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectOnBoarding from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class OnBoarding extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>OnBoarding</title>
          <meta name="description" content="Description of OnBoarding" />
        </Helmet>
      </div>
    );
  }
}

OnBoarding.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  onBoarding: makeSelectOnBoarding(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'onBoarding', reducer });
const withSaga = injectSaga({ key: 'onBoarding', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(OnBoarding);
