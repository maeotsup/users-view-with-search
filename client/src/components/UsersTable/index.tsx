import { useEffect } from 'react';
import { Message } from 'semantic-ui-react';

import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { fetchAllUsersAsync, searchUsers } from '../../store/slices/users';
import LoaderCentered from '../LoaderCentered';
import Search from '../Search';
import Table from './Table';

const UsersTable = () => {
  const dispatch = useAppDispatch();
  const { loading, searching, searchResults, users } = useAppSelector(store => store.users);

  const handleSearchChange = (value: string) => { dispatch(searchUsers(value)) };
  
  useEffect(() => {
    const getUsersAsync = async () => await dispatch(fetchAllUsersAsync());
    getUsersAsync();
  }, [dispatch]);

  if (loading) return <LoaderCentered>Loading users...</LoaderCentered>;

  return !users
    ? (
      <Message
        header='Oops! No users found.'
        className='flex-justify-content-center'
        warning
      />
    ) : (
      <>
        <Search handleSearchFn={handleSearchChange} loading={searching} />
        <Table searching={searching} searchResults={searchResults} />
      </>
    );
};

export default UsersTable;
