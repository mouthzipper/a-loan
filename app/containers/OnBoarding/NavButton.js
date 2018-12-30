import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Colors from 'utils/colors';

const style = () => ({
  button: {
    backgroundColor: Colors.green,
    color: '#fff',
  },
  backBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

function NavButton({ classes, handleBack, handleNext, activeStep, disable }) {
  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={6} className={classes.backBtn}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
      </Grid>

      <Grid item xs={6}>
        {activeStep === 0 ? (
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
          >
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            disabled={disable}
            className={classes.button}
            onClick={() => handleNext(activeStep)}
          >
            {activeStep === 2 ? 'Submit' : 'Next'}
          </Button>
        )}
      </Grid>
    </Grid>
  );
}

NavButton.propTypes = {
  handleBack: PropTypes.func,
  classes: PropTypes.object,
  handleNext: PropTypes.func,
  activeStep: PropTypes.number,
  disable: PropTypes.bool,
};

export default withStyles(style)(NavButton);
