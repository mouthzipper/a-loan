/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import injectSaga from 'utils/injectSaga';
import HomePageSaga from 'containers/HomePage/saga';

import HomePage from 'containers/HomePage/Loadable';
import Admin from 'containers/Admin/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import OnBoarding from 'containers/OnBoarding/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Brand from 'components/Brand';

import GlobalStyle from '../../global-styles';

const style = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

function App({ classes }) {
  return (
    <div className={classes.layout}>
      <Brand />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/onboarding" component={OnBoarding} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object,
};

const homePageSaga = injectSaga({ key: 'homePage', saga: HomePageSaga });

export default compose(
  homePageSaga,
  withStyles(style),
)(App);
