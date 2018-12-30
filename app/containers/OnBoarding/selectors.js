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

const makeSelectBusinessInfo = () =>
  createSelector(selectOnBoardingDomain, substate => substate.businessInfo);
const makeSelectStep = () =>
  createSelector(selectOnBoardingDomain, substate => substate.step);
const makeSelectBankMetadata = () =>
  createSelector(selectOnBoardingDomain, substate => substate.bankMetadata);

const makeSelectProcessing = () =>
  createSelector(selectOnBoardingDomain, substate => substate.processing);
const makeSelectLoanCreated = () =>
  createSelector(selectOnBoardingDomain, substate => substate.loanCreated);

export {
  makeSelectBusinessInfo,
  makeSelectStep,
  makeSelectBankMetadata,
  makeSelectProcessing,
  makeSelectLoanCreated,
};
