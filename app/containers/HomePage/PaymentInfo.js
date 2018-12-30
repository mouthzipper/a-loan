import React from 'react';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import LabelValue from 'components/LabelValue';

function PaymentInfo() {
  return (
    <Grid container direction="row" justify="center" spacing={24}>
      <Grid item xs={12} sm={6}>
        <LabelValue label="WEEKLY REPAYMENT" value="$1000" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <LabelValue label="TOTAL PAYMENT" value="$1000" />
      </Grid>
    </Grid>
  );
}

export default PaymentInfo;
