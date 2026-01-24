import { debounce } from "redux-saga/effects";
import { updateQuery } from "../clientsSlice";
import { fetchClientsWorker } from "./worker";

function* watchUpdateQuery(){
    yield debounce(500, updateQuery.type, fetchClientsWorker);
}

export { watchUpdateQuery };