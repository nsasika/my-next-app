import { AxiosResponse } from 'axios';
import {
  fetchUsersSagaFailure,
  fetchUsersSagaSuccess,
  User,
  userLogEvent,
} from '../usersSlice';
import { call, put } from 'redux-saga/effects';
import { fetchUsersApi } from '../usersApi';

function* userLogEventWorker(action: ReturnType<typeof userLogEvent>) {
  console.log('AUDIT EVENT: ', action.payload);
}

function* fetchUsersWorker() {
  try {
    const res: AxiosResponse<User[]> = yield call(fetchUsersApi);

    const users = res.data.map((user) => ({
      id: user.id,
      name: user.name,
    }));

    yield put(fetchUsersSagaSuccess(users));
  } catch (error: any) {
    const message =
      error?.response?.data?.message ??
      error?.message ??
      'Failed to fetch users';

    yield put(fetchUsersSagaFailure(message));
  }
}

export { userLogEventWorker, fetchUsersWorker };
