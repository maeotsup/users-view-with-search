import { render, screen } from '@testing-library/react'

import TableWithSearchMessages from '../../components/UsersTable/TableWithSearchMessages';
import { IUser } from '../../../../server/src/interfaces/user.interfaces';

test('TableWithSearchMessages component shows loader when users search is in progress', () => {
  const props = {
    noSearchResults: false,
    searching: true,
    searchResults: undefined,
  };

  render(
    <TableWithSearchMessages
      noSearchResults={props.noSearchResults}
      searching={props.searching}
      searchResults={props.searchResults}
    />
  );

  expect(screen.getByText(/Searching for users.../i)).toBeDefined();
});

test('TableWithSearchMessages shows no results message when users search has no results', async () => {
  const props = {
    noSearchResults: true,
    searching: false,
    searchResults: undefined,
  };

  render(
    <TableWithSearchMessages
      noSearchResults={props.noSearchResults}
      searching={props.searching}
      searchResults={props.searchResults}
    />
  );

  const getErrorMessage = await screen.findByTestId('no-search-results');
  expect(getErrorMessage).toBeDefined();
});

test('TableWithSearchMessages shows users table with results', () => {
  const props = {
    noSearchResults: false,
    searching: false,
    searchResults: [{
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      website: 'hildegard.org'
    }] as IUser[],
  };

  render(
    <TableWithSearchMessages
      noSearchResults={props.noSearchResults}
      searching={props.searching}
      searchResults={props.searchResults}
    />
  );

  expect(screen.getByRole('table')).toBeInTheDocument();
  expect(screen.getByText(/Leanne Graham/i)).toBeDefined();
  expect(screen.getByText(/Bret/i)).toBeDefined();
  expect(screen.getByText(/Sincere@april.biz/i)).toBeDefined();
  expect(screen.getByText(/hildegard.org/i)).toBeDefined();
});

export {};
