import React, {useState} from 'react';
import './App.css';
import Server from './Server'
const uuidv1 = require('uuid/v1');

function App() {
  const [servers, setServers] = useState([{serverImage:'/image1.png', users:['Test1', 'Test2',... 'Test10'], serverName:'Server1', key:uuidv1()}, 
                                          {serverImage:'/image2.png', users:['Test11', 'Test12',... 'Test20'], serverName:'Server2', key:uuidv1()}])
  return (
    <div className="App">
      <div className='Server'>
        <Server serverItems={servers}/>  
      </div>
    </div>
  );
}

export default App;
