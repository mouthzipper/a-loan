/*
 *
 * Admin reducer
 *
 */
import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import _has from 'lodash/has';
import {
  processing,
  getLoansSuccess,
  approveSuccess,
  repaySuccess,
} from './actions';

const initialState = {
  processing: false,
  loans: {},
};

export const adminReducer = handleActions(
  {
    [processing](state, action) {
      return update(state, { processing: { $set: action.payload } });
    },
    [getLoansSuccess](state, action) {
      return update(state, { loans: { $set: action.payload } });
    },
    [approveSuccess](state, action) {
      return update(state, {
        loans: { [action.payload.id]: { $merge: action.payload.data } },
      });
    },
    [repaySuccess](state, action) {
      if (_has(state.loans[action.payload.id], 'amountPaid')) {
        return update(state, {
          loans: {
            [action.payload.id]: {
              amountPaid: { $set: parseFloat(action.payload.data.amountPaid) },
            },
          },
        });
      }
      return update(state, {
        loans: { [action.payload.id]: { $merge: action.payload.data } },
      });
    },
  },
  initialState,
);

export default adminReducer;
