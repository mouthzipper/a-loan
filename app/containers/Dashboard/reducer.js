/*
 *
 * Admin reducer
 *
 */
import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { processing } from './actions';

const initialState = {
  processing: false,
  loans: {},
};

export const adminReducer = handleActions(
  {
    [processing](state, action) {
      return update(state, { processing: { $set: action.payload } });
    },
  },
  initialState,
);

export default adminReducer;
