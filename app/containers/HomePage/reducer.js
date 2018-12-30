/*
 *
 * HomePage reducer
 *
 */
import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { updatePaymentInfo, updateAmount, updateTerm } from './actions';

const initialState = {
  amount: null,
  term: 1,
  paymentInfo: {
    weeklyPayment: 0,
    totalPayment: 0,
  },
};

export const homePageReducer = handleActions(
  {
    [updatePaymentInfo](state, action) {
      return update(state, { paymentInfo: { $set: action.payload } });
    },
    [updateAmount](state, action) {
      return update(state, { amount: { $set: action.payload } });
    },
    [updateTerm](state, action) {
      return update(state, { term: { $set: action.payload } });
    },
  },
  initialState,
);

export default homePageReducer;
