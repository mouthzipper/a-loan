/**
 *
 * Admin
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
import { withStyles } from '@material-ui/core/styles';
import LoadingOverlay from 'components/LoadingOverlay';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import { makeSelectLoans, makeSelectProcessing } from './selectors';
import { getLoans, approve } from './actions';
import LoanItem from './LoanItem';

const style = () => ({
  title: {
    marginTop: 30,
  },
});
/* eslint-disable react/prefer-stateless-function */
export class Admin extends React.PureComponent {
  componentDidMount() {
    this.props.getLoans();
  }

  approveLoan = id => {
    this.props.approve(id);
  };

  render() {
    const { processing, loans, classes } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>Admin</title>
          <meta name="description" content="Description of Admin" />
        </Helmet>
        <Grid container spacing={24}>
          <LoadingOverlay show={processing} />
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.title}>
              Loan Applications
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
                    <LoanItem
                      value={value}
                      id={key}
                      approve={this.approveLoan}
                    />
                  </Grid>
                ))}
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
  approve: PropTypes.func,
  classes: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loans: makeSelectLoans(),
  processing: makeSelectProcessing(),
});

function mapDispatchToProps(dispatch) {
  return {
    getLoans: () => dispatch(getLoans()),
    approve: payload => dispatch(approve(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withStyles(style),
)(Admin);
