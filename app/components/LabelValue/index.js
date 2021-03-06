/**
 *
 * LabelValue
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Colors from 'utils/colors';
import NumberFormat from 'react-number-format';

const style = () => ({
  label: {
    fontWeight: 500,
  },
  valueWrapper: {
    '& span': {
      fontWeight: 600,
      borderBottom: `2px solid gray`,
      color: Colors.green,
      marginLeft: 5,
      fontSize: 40,
    },
  },
});
function LabelValue({ classes, label, value }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.label}>
          {label}
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.valueWrapper}>
        <NumberFormat
          value={value}
          displayType="text"
          thousandSeparator
          prefix="$"
          decimalScale={2}
          fixedDecimalScale
        />
      </Grid>
    </Grid>
  );
}

LabelValue.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.object,
  value: PropTypes.object,
};

export default withStyles(style)(LabelValue);
