/**
 *
 * LabelValue
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Colors from 'utils/colors';

const style = () => ({
  root: {
    marginTop: 20,
  },
  label: {
    fontSize: 30,
    color: Colors.grey2,
  },
  input: {
    color: Colors.green,
    fontSize: 30,
    '&  > div > p': {
      color: Colors.green,
      fontSize: 30,
    },
  },
});
function LoanAmount({ classes, handleChange, amount }) {
  return (
    <Grid item xs={12} sm={5}>
      <FormControl fullWidth className={classes.margin}>
        <Typography className={classes.label}>Loan Amount</Typography>
        <Input
          id="adornment-amount"
          value={amount}
          type="number"
          placeholder="0"
          className={classes.input}
          onChange={handleChange('amount')}
          startAdornment={
            <InputAdornment classes={{ input: classes.input }} position="start">
              $
            </InputAdornment>
          }
        />
      </FormControl>
    </Grid>
  );
}

LoanAmount.propTypes = {
  classes: PropTypes.object,
  amount: PropTypes.number,
  handleChange: PropTypes.func,
};

export default withStyles(style)(LoanAmount);
