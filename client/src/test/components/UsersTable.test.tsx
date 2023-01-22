import { screen } from '@testing-library/react'

import { setupStore } from '../../store';
import { renderWithProviders } from '../utilities/test-utilities';
import UsersTable from '../../components/UsersTable';

test('Users table component shows loader when users fetch is in progress', () => {
  const preloadedState = {
    users: {
      getUsersError: false,
      loadingUsers: true,
      noSearchResults: false,
      searching: false,
      searchResults: undefined,
    },
  };

  renderWithProviders(<UsersTable />, {
    preloadedState,
    store: setupStore(preloadedState),
  });

  expect(screen.getByText(/Loading users.../i)).toBeDefined();
});

test('Users table component get users async returns no users', async () => {
  const preloadedState = {
    users: {
      getUsersError: false,
      loadingUsers: false,
      noSearchResults: false,
      searching: false,
      searchResults: undefined,
    },
  };

  renderWithProviders(<UsersTable />, {
    preloadedState,
    store: setupStore(preloadedState),
  });

  const getErrorMessage = await screen.findByTestId('no-users');

  expect(getErrorMessage).toBeInTheDocument();
});

export {};
