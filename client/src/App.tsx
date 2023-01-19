import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { TUser } from '../../server/src/types/TUser';

function App() {
  const [users, setUsers] = useState<TUser[]>([]);
  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!!users.length && users.map(user => (<p key={user.id}>{user.name}</p>))}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
