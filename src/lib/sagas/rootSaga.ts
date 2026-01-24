import { all, fork } from "redux-saga/effects";
import { clientsSaga } from "../features/client/sagas";
import { usersSaga } from "../features/user/sagas";

export default function* rootSaga(){
    yield all([fork(usersSaga), fork(clientsSaga)]);
}