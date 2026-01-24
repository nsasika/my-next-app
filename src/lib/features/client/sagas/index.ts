import { all, fork } from "redux-saga/effects";
import { watchUpdateQuery } from "./watcher";

function* clientsSaga(){
    yield all([fork(watchUpdateQuery)]);
}

export { clientsSaga };