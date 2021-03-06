import { createSelector } from 'reselect';

/**
 * Direct selector to the admin state domain
 */

const selectAdminDomain = state => state.admin;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Admin
 */

const makeSelectProcessing = () =>
  createSelector(selectAdminDomain, substate => substate.processing);

export { makeSelectProcessing };
