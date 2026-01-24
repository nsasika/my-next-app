import { fetchUsersSagaFailure, fetchUsersSagaRequest, fetchUsersSagaSuccess, User } from "@/lib/features/user/usersSlice";
import axios, { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

function fetchUsersApi() {
  return axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
}

function* fetchUsersWorker() {
  try {
    console.log("fetchUsersWorker started");
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
      "Failed to fetch users";

    yield put(fetchUsersSagaFailure(message));
  }
}

export function* watchFetchUsersSaga() {
  console.log("watchFetchUsersSaga started");
  yield takeLatest(fetchUsersSagaRequest.type, fetchUsersWorker);
}
