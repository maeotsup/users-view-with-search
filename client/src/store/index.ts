import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import usersReducer from './slices/users';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

const rootReducer = combineReducers({
  users: usersReducer
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
