import React from 'react';
import './Message.css';

function Message(props) {
    return (
        <div className="messageDiv">
        <p className="message">{props.message}</p>
        </div>
    );
}

export default Message;
