import { Table } from 'semantic-ui-react';

import { IUser } from '../../../../server/src/interfaces/user.interfaces';

interface ITableRowProps {
  user?: IUser;
}

const Row = ({ user }: ITableRowProps) => (
  !user ? null : (
    <Table.Row key={user.id}>
      <Table.Cell>{user.name}</Table.Cell>
      <Table.Cell>{user.username}</Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>{user.website}</Table.Cell>
    </Table.Row>
  )
);

export default Row;
