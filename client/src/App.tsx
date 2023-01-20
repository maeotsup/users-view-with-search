import { useEffect, useState } from 'react';
import './App.css';

import UsersTable from './components/UsersTable';
import { IUser } from '../../server/src/interfaces/user.interfaces';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setLoading(false);
      });
  }, []);
  return (
    <div id="App">
      <UsersTable loading={loading} users={users} />
    </div>
  );
}

export default App;
