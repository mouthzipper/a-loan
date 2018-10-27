import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.homePage;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(selectHomePageDomain, substate => substate);

export default makeSelectHomePage;
export { selectHomePageDomain };
