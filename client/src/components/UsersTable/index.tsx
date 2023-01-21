import { useEffect } from 'react';
import { Message } from 'semantic-ui-react';
import { debounce } from 'ts-debounce';

import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { fetchAllUsersAsync, searchUsers, setSearching } from '../../store/slices/users';
import LoaderCentered from '../LoaderCentered';
import Search from '../Search';
import TableWithSearchMessages from './TableWithSearchMessages';

const UsersTable = () => {
  const dispatch = useAppDispatch();
  const {
    getUsersError,
    loadingUsers,
    noSearchResults,
    searching,
    searchResults
  } = useAppSelector(store => store.users);

  const handleSearchChange = (value: string) => { void dispatch(searchUsers(value)) };
  
  useEffect(() => {
    const getUsersAsync = async () => await dispatch(fetchAllUsersAsync());
    getUsersAsync();
  }, [dispatch]);

  if (loadingUsers) return <LoaderCentered>Loading users...</LoaderCentered>;

  if (getUsersError) return (
    <Message
      data-testid='get-users-error'
      error
      header='Oops! Something went wrong on our end. Please try again later.'
    />
  );

  if (!searchResults) return (
    <Message
      data-testid='no-users'
      header='No users found.'
      warning
    />
  );

  return (
    <>
      <Search
        handleSearchFn={debounce(handleSearchChange, 400)}
        placeholder='Search by name...'
        setLoadingFn={setSearching}
      />
      <TableWithSearchMessages noSearchResults={noSearchResults} searching={searching} searchResults={searchResults} />
    </>
  );
};

export default UsersTable;
