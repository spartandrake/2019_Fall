import React, { Component } from 'react';


class ChatInput extends Component {

    render() {
      return (
       
        <form>
          <div class="ui input">
          <input type="text" placeholder="Message {Channel Name}" name="item" className="item" /></div>
          <button class="ui button">Add</button>
        </form>
        
      );
    }
    }
    
export default ChatInput;