import React from 'react';
import './App.css';
import Channels from './Channels';
import Messages from './Messages';
import ChatInput from './ChatInput';
import Chatters from './Chatters';
import { Button, Container, Input, List, Radio } from 'semantic-ui-react';
import moment from 'moment';


class App extends React.Component
{
  
  


  render() {
  return (
    <div className="App">
      
    



<div class="ui vertically divided grid">
  <div class="three column row">
    <div class="column">
    <div id="ChannelsContainer"><Channels /></div>
    </div>
    <div class="column">
    <div id="MessagesContainer"><Messages/></div>
    </div>
   
    <div class="column">
    <div id="Chatters"><Chatters /></div>
    </div>
    </div>
    </div>
</div>
  );
}
}


export default App;
