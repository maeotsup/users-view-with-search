import { render, screen } from '@testing-library/react'

import TableWithSearchMessages from '../../components/UsersTable/TableWithSearchMessages';

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

export {};
