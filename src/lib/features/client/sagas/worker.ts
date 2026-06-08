import { call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import {
  Client,
  fetchClientsSagaFailure,
  fetchClientsSagaRequest,
  fetchClientsSagaSuccess,
  updateQuery,
} from '../clientsSlice';
import { fetchClientsApi } from '../clientsApi';

function* fetchClientsWorker(
  action: ReturnType<typeof updateQuery>,
): Generator<unknown, void, AxiosResponse<Client[]>> {
  try {
    yield put(fetchClientsSagaRequest());
    const response = yield call(fetchClientsApi, action.payload);
    yield put(fetchClientsSagaSuccess(response.data)); // Replace [] with actual data
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : 'Failed to fetch clients';
    yield put(fetchClientsSagaFailure(message));
  }
}

export { fetchClientsWorker };
