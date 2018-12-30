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
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

const style = () => ({
  label: {
    fontSize: 30,
    color: Colors.grey2,
  },
  rangeWrapper: {
    marginTop: '39px !important',
  },
  weekLabel: {
    fontSize: 15,
    color: Colors.green,
    marginLeft: 15,
    fontWeight: 600,
  },
  labelWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
});
function LoanTerm({ classes, term, handleChange }) {
  const weekLabel = term > 1 ? `${term} weeks` : `${term} week`;
  return (
    <Grid item xs={12} sm={5}>
      <Grid container>
        <Grid item xs={12} className={classes.labelWrapper}>
          <Typography className={classes.label}>Loan Term</Typography>
          <Typography
            className={classes.weekLabel}
          >{`(${weekLabel})`}</Typography>
        </Grid>
        <Grid item xs={12} className={classes.rangeWrapper}>
          <Slider
            min={1}
            max={24}
            step={1}
            handleStyle={{
              borderColor: Colors.green,
              height: 28,
              width: 28,
              marginLeft: -14,
              marginTop: -9,
              backgroundColor: Colors.grey,
            }}
            trackStyle={{ backgroundColor: Colors.green, height: 10 }}
            railStyle={{ height: 10 }}
            defaultValue={term}
            onChange={handleChange('term')}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

LoanTerm.propTypes = {
  classes: PropTypes.object,
  term: PropTypes.number,
  handleChange: PropTypes.func,
};

export default withStyles(style)(LoanTerm);
