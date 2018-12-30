import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import LabelValue from 'components/LabelValue';

function PaymentInfo({ data: { weeklyPayment, totalPayment } }) {
  return (
    <Grid container direction="row" justify="center" spacing={24}>
      <Grid item xs={12} sm={6}>
        <LabelValue label="WEEKLY REPAYMENT" value={`$ ${weeklyPayment}`} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <LabelValue label="TOTAL PAYMENT" value={`$ ${totalPayment}`} />
      </Grid>
    </Grid>
  );
}

PaymentInfo.propTypes = {
  data: PropTypes.object,
};

export default PaymentInfo;
