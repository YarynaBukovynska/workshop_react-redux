import { put, call, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on SOME_ACTION action
export function* someSaga() {

}

export function* saga() {
  // yield takeLatest(SOME_ACTION, someSaga);
}
