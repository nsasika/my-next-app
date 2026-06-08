import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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

type JsonPlaceholderUser = {
  id: number;
  name: string;
};

const initialState: UserState = {
  users: [],
  loading: false,
};

export const fetchUsers = createAsyncThunk<User[]>(
  'user/fetchUsers',
  async () => {
    try {
      const res = await axios.get<JsonPlaceholderUser[]>(
        'https://jsonplaceholder.typicode.com/users',
      );
      return res.data.map((user) => ({
        id: user.id,
        name: user.name,
      }));
    } catch (error: unknown) {
      const responseError = error as {
        response?: { data?: { message?: string } };
      };

      throw new Error(
        responseError.response?.data?.message || 'Failed to fetch users',
      );
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
    fetchUsersSagaSuccess: (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersSagaFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetUsers: (state) => {
      state.users = [];
      state.loading = false;
      state.error = undefined;
    },
    userLogEvent: (
      _state,
      action: PayloadAction<{ type: string; at: number }>,
    ) => {
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
