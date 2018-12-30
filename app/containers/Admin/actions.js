/*
 *
 * Admin actions
 *
 */

import { createAction } from 'redux-actions';
import {
  PROCESSING,
  GET_LOANS,
  GET_LOANS_SUCCESS,
  APPROVE,
  APPROVE_SUCCESS,
} from './constants';

export const processing = createAction(PROCESSING);
export const getLoans = createAction(GET_LOANS);
export const getLoansSuccess = createAction(GET_LOANS_SUCCESS);
export const approve = createAction(APPROVE);
export const approveSuccess = createAction(APPROVE_SUCCESS);
