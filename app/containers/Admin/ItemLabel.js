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
const styles = () => ({
  value: {
    fontWeight: 600,
    color: Colors.green,
    marginLeft: 5,
  },
  lighter: {
    opacity: 0.7,
  },
});

function ItemLabel({ classes, label, value }) {
  return (
    <Grid container direction="row">
      <Grid item>
        <Typography variant="body1" gutterBottom className={classes.lighter}>
          {label}
          :&nbsp;
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" className={classes.value} gutterBottom>
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
}

ItemLabel.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  classes: PropTypes.object,
};

export default withStyles(styles)(ItemLabel);
