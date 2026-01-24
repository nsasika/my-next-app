import { takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchUsersSagaRequest, userLogEvent } from '../usersSlice';
import { fetchUsersWorker, userLogEventWorker } from './workers';

function* watchUsersLogEventSaga() {
  yield takeEvery(userLogEvent.type, userLogEventWorker);
}

function* watchFetchUsersSaga() {
  yield takeLatest(fetchUsersSagaRequest.type, fetchUsersWorker);
}

export { watchFetchUsersSaga, watchUsersLogEventSaga};
