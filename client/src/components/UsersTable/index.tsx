import { Table } from 'semantic-ui-react';

import { IUser } from '../../../../server/src/interfaces/user.interfaces';
import LoaderCentered from '../LoaderCentered';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

interface IUsersTableProps {
  loading: boolean;
  users?: IUser[];
}

const UsersTable = ({ loading, users }: IUsersTableProps) => {
  if (loading) return <LoaderCentered>Loading users...</LoaderCentered>
  return !users ? null : (
    <Table celled padded='very' size='large' striped>
      <TableHeader />
      <TableBody users={users} />
    </Table>
  );
};

export default UsersTable;