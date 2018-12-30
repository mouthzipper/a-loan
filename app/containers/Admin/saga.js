import { takeLatest, put, call } from 'redux-saga/effects';
import { get, patch } from 'utils/api';
import { processing, getLoansSuccess, approveSuccess } from './actions';
import { GET_LOANS, APPROVE } from './constants';

function* getLoanSaga() {
  const endpoint = `/loans.json`;
  try {
    yield put(processing(true));
    const { data } = yield call(get, endpoint);
    yield put(getLoansSuccess(data));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(processing(false));
  }
}

function* approveSaga({ payload }) {
  const endpoint = `/loans/${payload}/.json`;
  try {
    yield put(processing(true));
    const { data } = yield call(patch, endpoint, { status: 'Approved' });
    yield put(approveSuccess({ id: payload, data }));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(processing(false));
  }
}

// Individual exports for testing
export default function* adminSaga() {
  yield takeLatest(GET_LOANS, getLoanSaga);
  yield takeLatest(APPROVE, approveSaga);
}
