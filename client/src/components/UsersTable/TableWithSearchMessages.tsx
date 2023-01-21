import { Message, Table } from 'semantic-ui-react';

import { IUser } from '../../../../server/src/interfaces/user.interfaces';
import LoaderCentered from '../LoaderCentered';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

interface ITableComponentProps {
  noSearchResults: boolean;
  searching: boolean;
  searchResults?: IUser[];
}

const TableWithSearchMessages = ({ noSearchResults, searching, searchResults }: ITableComponentProps) => {
  if (searching) return (
    <LoaderCentered>Searching for users...</LoaderCentered>
  );

  if (noSearchResults) return (
    <Message
      data-testid='no-search-results'
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
