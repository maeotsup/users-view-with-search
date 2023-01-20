import { useEffect } from 'react';
import { Message, Table } from 'semantic-ui-react';

import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { fetchAllUsersAsync } from '../../store/slices/users';
import LoaderCentered from '../LoaderCentered';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const UsersTable = () => {
  const dispatch = useAppDispatch();
  const { loading, users } = useAppSelector(store => store.users);
  
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
      <Table celled padded='very' size='large' striped>
        <TableHeader />
        <TableBody users={users} />
      </Table>
    );
};

export default UsersTable;
