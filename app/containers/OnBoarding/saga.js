import { takeLatest, put, call } from 'redux-saga/effects';
import { post } from 'utils/api';
import { processing, createLoanSuccess } from './actions';
import { CREATE_LOAN } from './constants';

function* createLoanSaga({ payload }) {
  const endpoint = `/loans.json`;
  try {
    yield put(processing(true));
    yield call(post, endpoint, payload);
    yield put(createLoanSuccess());
  } catch (error) {
    console.log(error);
  } finally {
    yield put(processing(false));
  }
}

// Individual exports for testing
export default function* onBoardingSaga() {
  yield takeLatest(CREATE_LOAN, createLoanSaga);
}
