import { Table } from 'semantic-ui-react';

const Header = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Username</Table.HeaderCell>
      <Table.HeaderCell>Email</Table.HeaderCell>
      <Table.HeaderCell>Website</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export default Header;
