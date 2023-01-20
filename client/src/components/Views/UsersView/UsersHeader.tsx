import { Container, Header, Icon } from 'semantic-ui-react';

const UsersHeader = () => {
  return (
    <Container className='padding-2prc'>
      <Header as='h1'>
        <Icon name='users' />
      <Header.Content>Users</Header.Content>
    </Header>
    </Container>
  );
};

export default UsersHeader;
