import { takeLatest, put, call } from 'redux-saga/effects';
import { patch } from 'utils/api';
import { repaySuccess } from 'containers/Admin/actions';
import { processing } from './actions';
import { REPAY } from './constants';

function* repaySaga({ payload }) {
  const { id, amountPaid } = payload;
  const endpoint = `/loans/${id}/.json`;
  try {
    yield put(processing(true));
    const { data } = yield call(patch, endpoint, { amountPaid });
    yield put(repaySuccess({ id, data }));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(processing(false));
  }
}

// Individual exports for testing
export default function* adminSaga() {
  yield takeLatest(REPAY, repaySaga);
}
