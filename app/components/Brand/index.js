/**
 *
 * Brand
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Logo from './logo.png';

const style = () => ({
  root: {
    background: '#fff',
  },
  logo: {
    height: 150,
  },
});

function Brand({ classes }) {
  return (
    <Grid item xs={12} className={classes.root}>
      <Link to="/">
        <img src={Logo} className={classes.logo} alt="Brand Logo" />
      </Link>
    </Grid>
  );
}

Brand.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(Brand);
