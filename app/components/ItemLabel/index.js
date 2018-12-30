/**
 *
 * ItemLabel
 *
 */

/**
 *
 * LabelValue
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Colors from 'utils/colors';
import NumberFormat from 'react-number-format';
const styles = () => ({
  value: {
    fontWeight: 600,
    color: Colors.green,
    marginLeft: 5,
  },
  lighter: {
    opacity: 0.7,
  },
  valueWrapper: {
    '& span': {
      fontWeight: 600,
      color: Colors.green,
      marginLeft: 5,
    },
  },
});

function ItemLabel({ classes, label, value, type }) {
  return (
    <Grid container direction="row">
      <Grid item>
        <Typography variant="body1" gutterBottom className={classes.lighter}>
          {label}
          :&nbsp;
        </Typography>
      </Grid>
      <Grid item className={classes.valueWrapper}>
        {type === 'amount' ? (
          <NumberFormat
            value={value}
            displayType="text"
            thousandSeparator
            prefix="$"
            decimalScale={2}
            fixedDecimalScale
          />
        ) : (
          <Typography variant="body1" className={classes.value} gutterBottom>
            {value}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}

ItemLabel.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  classes: PropTypes.object,
  type: PropTypes.string,
};

export default withStyles(styles)(ItemLabel);
