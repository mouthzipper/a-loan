import { createSelector } from 'reselect';

/**
 * Direct selector to the onBoarding state domain
 */

const selectOnBoardingDomain = state => state.onBoarding;

/**
 * Other specific selectors
 */

/**
 * Default selector used by OnBoarding
 */

const makeSelectOnBoarding = () =>
  createSelector(selectOnBoardingDomain, substate => substate);

export default makeSelectOnBoarding;
export { selectOnBoardingDomain };
