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

const style = () => ({
  value: {
    color: Colors.green,
    fontWeight: 600,
    borderBottom: `2px solid gray`,
  },
  label: {
    fontWeight: 500,
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
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.value}>
          {value}
        </Typography>
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
