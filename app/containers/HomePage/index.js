/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import _isNan from 'lodash/isNaN';
import {
  makeSelecTerm,
  makeSelectAmount,
  makeSelectPaymentInfo,
} from './selectors';
import { updateAmount, updatePaymentInfo, updateTerm } from './actions';
import PaymentInfo from './PaymentInfo';
import FeeInfo from './FeeInfo';
import LoanInfo from './LoanInfo';

const style = () => ({
  root: {
    marginTop: 30,
  },
});
/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentWillReceiveProps(nextProps) {
    if (
      (this.props.amount !== nextProps.amount ||
        this.props.term !== nextProps.term) &&
      !_isNan(nextProps.amount)
    ) {
      const totalPaymenWithFee =
        parseFloat(nextProps.amount) > 0
          ? parseFloat(nextProps.amount) + parseInt(nextProps.term, 10) * 10
          : 0;
      const payload = {
        weeklyPayment: (totalPaymenWithFee / nextProps.term).toFixed(2),
        totalPayment: totalPaymenWithFee.toFixed(2),
      };
      this.props.updatePaymentInfo(payload);
    }
  }

  handleChange = name => event => {
    if (name === 'amount') {
      this.props.updateAmount(parseFloat(event.target.value, 10));
    }
    if (name === 'term') {
      this.props.updateTerm(event);
    }
  };

  render() {
    const { classes, amount, term, paymentInfo } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>HomePage</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
        <PaymentInfo data={paymentInfo} />
        <FeeInfo />
        <LoanInfo
          amount={amount}
          term={term}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object,
  amount: PropTypes.number,
  term: PropTypes.number,
  paymentInfo: PropTypes.object,
  updateAmount: PropTypes.func,
  updateTerm: PropTypes.func,
  updatePaymentInfo: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  amount: makeSelectAmount(),
  term: makeSelecTerm(),
  paymentInfo: makeSelectPaymentInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    updateAmount: payload => dispatch(updateAmount(payload)),
    updateTerm: payload => dispatch(updateTerm(payload)),
    updatePaymentInfo: payload => dispatch(updatePaymentInfo(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withStyles(style),
)(HomePage);
