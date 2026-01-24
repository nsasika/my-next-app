import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export type User = {
  id: number;
  name: string;
};

type UserState = {
  users: User[];
  loading: boolean;
  error?: string;
};

const initialState: UserState = {
  users: [],
  loading: false,
};

export const fetchUsers = createAsyncThunk<User[]>(
  'user/fetchUsers',
  async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      return await res.data.map((user: any) => ({
        id: user.id,
        name: user.name,
      }));
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch users');
    }
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersSagaRequest: (state) => {
      state.loading = true;
      state.error = undefined;
    },
    fetchUsersSagaSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersSagaFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetUsers: (state) => {
      state.users = [];
      state.loading = false;
      state.error = undefined;
    },
    userLogEvent: (_state, action) => {
      // This reducer can be used to log user events
      console.log('User Event:', action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  resetUsers,
  fetchUsersSagaRequest,
  fetchUsersSagaSuccess,
  fetchUsersSagaFailure,
  userLogEvent,
} = usersSlice.actions;
export default usersSlice.reducer;
