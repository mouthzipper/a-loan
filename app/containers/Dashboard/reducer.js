/*
 *
 * Dashboard reducer
 *
 */
import { handleActions } from 'redux-actions';
// import update from 'immutability-helper';
import { defaultAction } from './actions';

const initialState = {};

export const dashboardReducer = handleActions(
  {
    [defaultAction](state) {
      return state;
    },
  },
  initialState,
);

export default dashboardReducer;
