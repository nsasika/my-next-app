import { all, fork } from "redux-saga/effects";
import { watchFetchUsersSaga } from "./user/usersSagas";

export default function* rootSaga(){
    console.log('rootSaga started');
    yield all([fork(watchFetchUsersSaga)]);
}