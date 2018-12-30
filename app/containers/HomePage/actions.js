/*
 *
 * HomePage actions
 *
 */

import { createAction } from 'redux-actions';
import {
  DEFAULT_ACTION,
  UPDATE_PAYMENT_INFO,
  UPDATE_AMOUNT,
  UPDATE_TERM,
} from './constants';

export const defaultAction = createAction(DEFAULT_ACTION);
export const updatePaymentInfo = createAction(UPDATE_PAYMENT_INFO);
export const updateAmount = createAction(UPDATE_AMOUNT);
export const updateTerm = createAction(UPDATE_TERM);
