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
  root: {
    marginTop: 20,
  },
  label: {
    fontStyle: 'italic',
    color: Colors.green,
  },
});
function FeeInfo({ classes }) {
  return (
    <Grid item xs={12} className={classes.root}>
      <Typography variant="subtitle" className={classes.label}>
        * Fee starts at $10/week
      </Typography>
    </Grid>
  );
}

FeeInfo.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(FeeInfo);
