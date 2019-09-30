import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

const clickHandler = () => {
  console.log('we hit here!!!');
};

const Example = () => {
  let better = "Happy"

  return (
    <div onClick={clickHandler}>
      Our {better} Test
    </div>
  )
};

const OurList = ({ items, isVisible, loading, removeUser, addUser }) => {

  if (loading) return <p>Loading......</p>

  if (!isVisible) return null;
  console.log(items);

  if (items && items.length === 0) {
    return <p>No users to show :(</p>
  }

  return (
    <ul>
      {
        items.map(user => (
          <li
            onClick={() => removeUser(user.firstName)}
            key={`${user.firstName}-${user.lastName}`}>
            {user.firstName} {user.lastName}
          </li>
        ))
      }
      <li onClick={addUser}>+ Add User</li>
    </ul>
  )
}

function App() {
  const [users, setUser] = useState([
    {
      firstName: 'Aaron',
      lastName: 'Freeland'
    },
    {
      firstName: 'Lane',
      lastName: 'Katris'
    }
  ]);

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000)

  const addUser = () => {
    setUser([...users, { firstName: 'Colton', lastName: 'Freeland' }])
  }

  const removeUser = (firstName) => {
    setUser(users.filter(user => user.firstName !== firstName));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Example />
        <OurList items={users} addUser={addUser} removeUser={removeUser} isVisible={true} loading={loading} />
      </header>

    </div>
  );
}

export default App;
