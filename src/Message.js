import React from 'react';
import './Message.scss';

function Message({message}) {
    return (
        <div className="messageDiv">
        <p className="message">{message}</p>
        </div>
    );
}

export default Message;
