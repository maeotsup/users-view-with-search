import { Container } from 'semantic-ui-react';

import UsersHeader from './UsersHeader';
import UsersTable from '../../UsersTable';

const UsersView = () => {
  return (
    <>
      <UsersHeader />
      <Container>
        <UsersTable />
      </Container>
    </>
  );
};

export default UsersView;
