import React, {useState} from 'react';
import './App.css';

const uuidv1 = require('uuid/v1');
//[items, setItem] = useState(
function App() {
  const [currentUser, setCurrentUser] = useState({username: ''});
  const [currentServer, setCurrentServer] = useState({servername: ''});
  const userList;
  const serverList;
  return (
    <div className="App">
      <div className='Server'>
        
      </div>
    </div>
  );
}

export default App;
