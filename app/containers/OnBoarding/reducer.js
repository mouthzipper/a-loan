/*
 *
 * OnBoarding reducer
 *
 */
import { handleActions } from 'redux-actions';
// import update from 'immutability-helper';
import { defaultAction } from './actions';

const initialState = {};

export const onBoardingReducer = handleActions(
  {
    [defaultAction](state) {
      return state;
    },
  },
  initialState,
);

export default onBoardingReducer;
