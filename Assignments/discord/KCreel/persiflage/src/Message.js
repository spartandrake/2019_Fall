import React, {useState} from 'react';
import './App.css';



const Message = ({messageItems, channels}) => {
    return(
    <div>
        <div className='MWHeader'>
            @ {channels.channelName}
        </div>
        <div className='MWBody'>
            <ul>
            {messageItems.map(message =>(
                <li>
                    <div className='PosteeIcon'>
                        <img></img>
                    </div>
                    <div className='MessageHeader'>
                        {message.postee}
                    </div>
                    <div className='MessageBody'>
                        {message.content}
                    </div>
                </li>
            ))}
            </ul>
        </div>
        <div className='MWNewMessage'>
            <input type='text' onSubmit={()=>{
                
            }}>
            </input>
        </div>
    </div>
    )
}
export default Message;