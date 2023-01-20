import { Table } from 'semantic-ui-react';

import { IUser } from '../../../../server/src/interfaces/user.interfaces';
import TableRow from './TableRow';

interface ITableBodyProps {
  users?: IUser[];
}

const Body = ({ users }: ITableBodyProps) => (
  !users ? null : (
    <Table.Body>
      {users.map(user => <TableRow key={user.id} user={user} />)}
    </Table.Body>
  )
);

export default Body;
