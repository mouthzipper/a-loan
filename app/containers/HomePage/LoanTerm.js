/**
 *
 * LabelValue
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Colors from 'utils/colors';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

const { Range } = Slider;

const style = () => ({
  root: {
    marginTop: 20,
  },
  label: {
    fontStyle: 'italic',
    color: Colors.green,
  },
});
function LoanTerm({ classes }) {
  return (
    <Grid item xs={12} sm={5} className={classes.root}>
      <div>
        <p>Basic Range，`allowCross=false`</p>
        <Range allowCross={false} defaultValue={[0, 20]} />
      </div>
    </Grid>
  );
}

LoanTerm.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(LoanTerm);
