/*
 *
 * OnBoarding reducer
 *
 */
import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import {
  saveBusinessInfo,
  updateStep,
  saveBankMetadata,
  processing,
  createLoanSuccess,
  createLoan,
} from './actions';

const initialState = {
  businessInfo: {},
  bankMetadata: {},
  step: 0,
  loanCreated: false,
  processing: false,
};

export const onBoardingReducer = handleActions(
  {
    [saveBusinessInfo](state, action) {
      return update(state, { businessInfo: { $set: action.payload } });
    },
    [updateStep](state, action) {
      return update(state, { step: { $set: action.payload } });
    },
    [saveBankMetadata](state, action) {
      return update(state, { bankMetadata: { $set: action.payload } });
    },

    [processing](state, action) {
      return update(state, { processing: { $set: action.payload } });
    },

    [createLoan](state) {
      return update(state, { loanCreated: { $set: false } });
    },
    [createLoanSuccess](state) {
      return update(state, { loanCreated: { $set: true } });
    },
  },
  initialState,
);

export default onBoardingReducer;
