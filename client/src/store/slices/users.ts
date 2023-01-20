import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../index';
import { IUser } from '../../../../server/src/interfaces/user.interfaces';

export const fetchAllUsersAsync = createAsyncThunk(
  'users/fetchAllUsers',
  async () => {
    try {
      const response = await fetch('/api/users');
      return (await response.json()) as IUser[];
    } catch (error) {
      return undefined;
    }
  },
);

interface UsersState {
  getUsersError: boolean;
  loading: boolean;
  users?: IUser[];
  searchResults?: IUser[];
}

const initialState: UsersState = {
  getUsersError: false,
  loading: false,
  users: undefined,
  searchResults: undefined,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<IUser[]>) => {
      state.searchResults = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsersAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload as IUser[];
    });
    builder.addCase(fetchAllUsersAsync.pending, (state) => {
      state.getUsersError = false;
      state.loading = true;
    });
    builder.addCase(fetchAllUsersAsync.rejected, (state) => {
      state.getUsersError = true;
      state.loading = false;
    });
  },
});

export const { setSearchResults } = usersSlice.actions;

export const selectGetUsersError = (state: RootState) => state.users.getUsersError;
export const selectUsers = (state: RootState) => state.users.users;
export const selectUsersLoading = (state: RootState) => state.users.loading;

export default usersSlice.reducer;