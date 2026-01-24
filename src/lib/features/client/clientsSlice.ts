import { createSlice } from '@reduxjs/toolkit';

export type Client = { id: string; name: string };

export type ClientState = {
  query: string;
  results: Client[];
  loading: boolean;
  error?: string;
};

const initialState: ClientState = {
  query: '',
  results: [],
  loading: false,
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    fetchClientsSagaRequest: (state) => {
      state.loading = true;
      state.error = undefined;
    },
    fetchClientsSagaSuccess: (state, action) => {
      state.loading = false;
      state.results = action.payload;
    },
    fetchClientsSagaFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export default clientsSlice.reducer;
export const {
  fetchClientsSagaRequest,
  fetchClientsSagaFailure,
  fetchClientsSagaSuccess,
  updateQuery,
} = clientsSlice.actions;
