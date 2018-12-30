/**
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { withStyles } from '@material-ui/core/styles';
import LoadingOverlay from 'components/LoadingOverlay';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import _has from 'lodash/has';
import { getLoans } from 'containers/Admin/actions';
import { Link } from 'react-router-dom';
import {
  makeSelectLoans,
  makeSelectProcessing as GetLoanProcessing,
} from 'containers/Admin/selectors';
import Colors from 'utils/colors';
import { makeSelectProcessing } from './selectors';
import { repay } from './actions';
import reducer from './reducer';
import saga from './saga';
import LoanItem from './LoanItem';

const style = () => ({
  title: {
    marginTop: 30,
  },
  linkWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: Colors.green,
    fontWeight: 600,
    border: `1px solid ${Colors.green}`,
    padding: 10,
  },
});
/* eslint-disable react/prefer-stateless-function */
export class Admin extends React.PureComponent {
  componentDidMount() {
    this.props.getLoans();
  }

  repayLoan = (value, id) => {
    const {
      paymentInfo: { weeklyPayment },
    } = value;
    const finalAmount = _has(value, 'amountPaid')
      ? parseFloat(value.amountPaid, 10) + parseFloat(weeklyPayment, 10)
      : weeklyPayment;
    const payload = {
      amountPaid: finalAmount,
      id,
    };
    this.props.repay(payload);
  };

  render() {
    const { processing, loans, classes, getLoansProcessing } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Description of Dashboard" />
        </Helmet>
        <Grid container spacing={24}>
          <LoadingOverlay show={processing || getLoansProcessing} />
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.title}>
              My Loan Applications
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="row" spacing={16}>
              {!_isEmpty(loans) &&
                _map(loans, (value, key) => (
                  <Grid item xs={6} sm={3} key={key}>
                    <LoanItem value={value} id={key} repay={this.repayLoan} />
                  </Grid>
                ))}
              <Grid item xs={6} sm={3} className={classes.linkWrapper}>
                <Link to="/" className={classes.link}>
                  + Apply New Loan
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Admin.propTypes = {
  processing: PropTypes.bool,
  loans: PropTypes.object,
  getLoans: PropTypes.func,
  repay: PropTypes.func,
  classes: PropTypes.object,
  getLoansProcessing: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  loans: makeSelectLoans(),
  processing: makeSelectProcessing(),
  getLoansProcessing: GetLoanProcessing(),
});

function mapDispatchToProps(dispatch) {
  return {
    getLoans: () => dispatch(getLoans()),
    repay: payload => dispatch(repay(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'dashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(style),
)(Admin);
