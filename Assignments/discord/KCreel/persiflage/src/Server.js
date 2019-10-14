import React, {useState} from 'react';
import Channel from './Channel';
import './App.css';

const uuidv1 = require('uuid/v1');
const Server = ({}) => {
    const [messages, setMessages] = useState([{postee:'', content:'', key:uuidv1(), channelName:'Channel1'}, {postee:'noone', content:'look at my test.', key:uuidv1(), channelName:'Channel1'}]);
    return( 
    <div className='Channel'>
        <div className='serverPicker'>

        </div>
        <Channel messages={messages}/>
    </div>
    )
}


export default Server;