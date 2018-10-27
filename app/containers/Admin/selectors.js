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

const makeSelectAdmin = () =>
  createSelector(selectAdminDomain, substate => substate);

export default makeSelectAdmin;
export { selectAdminDomain };
