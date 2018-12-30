import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Colors from 'utils/colors';
import LoanAmount from './LoanAmount';
import LoanTerm from './LoanTerm';

const style = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: 30,
    height: 150,
    display: 'flex',
  },
  label: {
    fontStyle: 'italic',
    color: Colors.green,
  },
  button: {
    color: '#fff',
    background: Colors.green,
    borderRadius: 0,
    width: '100%',
  },
});
function LoanInfo({ classes, amount, term, handleChange }) {
  return (
    <Grid item xs={12}>
      <Paper className={classes.root} elevation={1} square>
        <Grid container direction="row" alignItems="center" spacing={24}>
          <LoanAmount amount={amount} handleChange={handleChange} />
          <LoanTerm term={term} handleChange={handleChange} />
          <Grid item xs={12} sm={2}>
            <Button
              flat
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Get a Loan
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

LoanInfo.propTypes = {
  classes: PropTypes.object,
  amount: PropTypes.number,
  term: PropTypes.number,
  handleChange: PropTypes.func,
};

export default withStyles(style)(LoanInfo);
