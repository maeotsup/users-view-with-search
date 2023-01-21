import { Container, Header, Icon } from 'semantic-ui-react';

const UsersHeader = () => {
  return (
    <Container className='header-container'>
      <Header as='h1'>
        <Icon name='users' />
      <Header.Content>Users</Header.Content>
    </Header>
    </Container>
  );
};

export default UsersHeader;
