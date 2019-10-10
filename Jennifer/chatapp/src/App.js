import React from 'react';
import logo from './logo.svg';
import './App.css';
import Channels from './Channels';
import Messages from './Messages';
import ChatInput from './ChatInput';
import Chatters from './Chatters';

function App() {
  return (
    <div className="App">
    <div id="ChannelsContainer"><Channels /></div>
    <div id="MessagesContainer"><Messages /></div>
    <div id="ChatInputContainer"><ChatInput /></div>
    <div id="Chatters"><Chatters /></div>
    </div>
  );
}

export default App;
