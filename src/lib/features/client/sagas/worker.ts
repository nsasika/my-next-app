import { call, put } from "redux-saga/effects";
import { fetchClientsSagaFailure, fetchClientsSagaRequest, fetchClientsSagaSuccess, updateQuery } from "../clientsSlice";
import { fetchClientsApi } from "../clientsApi";

function* fetchClientsWorker(action: ReturnType<typeof updateQuery>): Generator<any, void, any> {
    try{
     yield put(fetchClientsSagaRequest());
     const response = yield call(fetchClientsApi, action.payload);
     yield put(fetchClientsSagaSuccess(response.data)); // Replace [] with actual data
    }catch(err: any){
     yield put(fetchClientsSagaFailure(err.message || 'Failed to fetch clients'));
    }
 }

 export { fetchClientsWorker };