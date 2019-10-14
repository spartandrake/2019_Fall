import React, {useState} from 'react';
import Message from './Message';
import './App.css';


const Channel = ({messages}) =>{
    const [channels, setChannels] = useState([{channelName:'Channel1'},{channelName:'Channel2'}]);
        return(
        <div className='ChannelWindow'>
            <div className ='ChannelPicker'>
                <ul>
                {channels.map( channel =>(
                    <li className='channelLabel'>
                        {channel.channelName}
                    </li>
                ))}
                </ul>
            </div>
            <div className='MessageWindow'>
                <Message messageItems={messages} channels={channels}/>
            </div>
        </div>
    )
}

export default Channel;