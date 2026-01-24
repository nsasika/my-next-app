import { watchFetchUsersSaga, watchUsersLogEventSaga,  } from './watchers';
import { all, fork } from 'redux-saga/effects';

export function* usersSaga() {
  yield all([fork(watchFetchUsersSaga), fork(watchUsersLogEventSaga)]);
}