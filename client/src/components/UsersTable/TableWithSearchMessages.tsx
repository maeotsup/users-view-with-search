import { Message, Table } from 'semantic-ui-react';

import { IUser } from '../../../../server/src/interfaces/user.interfaces';
import LoaderCentered from '../LoaderCentered';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

interface ITableComponentProps {
  searching: boolean;
  searchResults?: IUser[];
}

const TableWithSearchMessages = ({ searching, searchResults }: ITableComponentProps) => {
  if (searching && !searchResults?.length) return (
    <LoaderCentered>Searching users...</LoaderCentered>
  );

  if (!searching && !searchResults?.length) return (
    <Message
      header='No users found with entered name'
      className='flex-justify-content-center'
      warning
    />
  );

  return (
    <Table celled padded='very' size='large' striped>
      <TableHeader />
      <TableBody users={searchResults} />
    </Table>
  );
};

export default TableWithSearchMessages;
