/**
 *
 * LabelValue
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
// import Colors from 'utils/colors';

const style = () => ({
  root: {
    marginTop: 20,
  },
  label: {
    fontSize: 30,
  },
});
function LoanAmount({ classes }) {
  return (
    <Grid item xs={12} sm={5}>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="adornment-amount" className={classes.label}>
          Loan Amount
        </InputLabel>
        <Input
          id="adornment-amount"
          value={123}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
    </Grid>
  );
}

LoanAmount.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(LoanAmount);
