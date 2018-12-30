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

const makeSelectAmount = () =>
  createSelector(selectHomePageDomain, substate => substate.amount);

const makeSelecTerm = () =>
  createSelector(selectHomePageDomain, substate => substate.term);
const makeSelectPaymentInfo = () =>
  createSelector(selectHomePageDomain, substate => substate.paymentInfo);

export { makeSelectAmount, makeSelecTerm, makeSelectPaymentInfo };
