import { all, fork } from 'redux-saga/effects';
import { pagesProcess } from './pages';
import { todoProcess } from './todo';

/**
 * Root for saga
 */
export function* rootSaga() {
  yield all([fork(pagesProcess), fork(todoProcess)]);
}
