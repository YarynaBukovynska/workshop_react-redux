import { put, call, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on SOME_ACTION action
export function* someSaga({ data }) {
  const markers = yield call(getData, data);
  yield put({ type: SET_MARKERS, data: markers });
}

export function* saga() {
  yield takeLatest(LOAD_DATA, someSaga);
}
