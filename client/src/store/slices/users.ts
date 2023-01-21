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
  loadingUsers: boolean;
  noSearchResults: boolean;
  searching: boolean;
  searchResults?: IUser[];
  users?: IUser[];
}

const initialState: UsersState = {
  getUsersError: false,
  loadingUsers: false,
  noSearchResults: false,
  searching: false,
  searchResults: undefined,
  users: undefined,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    searchUsers: (state, action: PayloadAction<string>) => {
      state.searching = true;
      const { payload } = action;
      const results = state.users?.filter(user => user.name.toLowerCase().includes(payload.toLowerCase()));
      if (!!results) state.noSearchResults = true;
      state.searchResults = results;
      state.searching = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsersAsync.fulfilled, (state, action) => {
      state.loadingUsers = false;
      state.users = action.payload as IUser[];
      state.searchResults = action.payload as IUser[];
    });
    builder.addCase(fetchAllUsersAsync.pending, (state) => {
      state.getUsersError = false;
      state.loadingUsers = true;
    });
    builder.addCase(fetchAllUsersAsync.rejected, (state) => {
      state.getUsersError = true;
      state.loadingUsers = false;
    });
  },
});

export const { searchUsers } = usersSlice.actions;

export default usersSlice.reducer;
