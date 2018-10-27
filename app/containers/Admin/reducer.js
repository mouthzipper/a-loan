/*
 *
 * Admin reducer
 *
 */
import { handleActions } from 'redux-actions';
// import update from 'immutability-helper';
import { defaultAction } from './actions';

const initialState = {};

export const adminReducer = handleActions(
  {
    [defaultAction](state) {
      return state;
    },
  },
  initialState,
);

export default adminReducer;
