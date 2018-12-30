/*
 *
 * Admin actions
 *
 */

import { createAction } from 'redux-actions';
import { PROCESSING, REPAY } from './constants';

export const processing = createAction(PROCESSING);
export const repay = createAction(REPAY);
