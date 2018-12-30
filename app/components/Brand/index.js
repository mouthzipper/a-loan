/**
 *
 * Brand
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Logo from './logo.png';

const style = () => ({
  root: {
    background: '#fff',
  },
  logo: {
    height: 200,
  },
});

function Brand({ classes }) {
  return (
    <Grid item xs={12} className={classes.root}>
      <img src={Logo} className={classes.logo} alt="Brand Logo" />
    </Grid>
  );
}

Brand.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(Brand);
