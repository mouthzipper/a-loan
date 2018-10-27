import { createSelector } from 'reselect';

/**
 * Direct selector to the dashboard state domain
 */

const selectDashboardDomain = state => state.dashboard;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Dashboard
 */

const makeSelectDashboard = () =>
  createSelector(selectDashboardDomain, substate => substate);

export default makeSelectDashboard;
export { selectDashboardDomain };
