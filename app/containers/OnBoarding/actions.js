/*
 *
 * OnBoarding actions
 *
 */

import { createAction } from 'redux-actions';
import {
  SAVE_BUSINESS_INFO,
  UPDATE_STEP,
  SAVE_BANK_METADATA,
  SAVE_DOCUMENTS,
  PROCESSING,
  CREATE_LOAN,
  CREATE_LOAN_SUCCESS,
} from './constants';

export const processing = createAction(PROCESSING);
export const saveBusinessInfo = createAction(SAVE_BUSINESS_INFO);
export const updateStep = createAction(UPDATE_STEP);
export const saveBankMetadata = createAction(SAVE_BANK_METADATA);
export const saveDocuments = createAction(SAVE_DOCUMENTS);
export const createLoan = createAction(CREATE_LOAN);
export const createLoanSuccess = createAction(CREATE_LOAN_SUCCESS);
