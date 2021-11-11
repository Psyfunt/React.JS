import React from "react";
import './MessagesList.scss'


export const MessagesList = ({messages}) => {

    return (
        messages.map((message) =>
            <div key={message.id}  className='message'>
                <h3 className='message-author'>{message.author}:</h3>
                <p className='message-text' >{message.text}</p>
            </div>)
    );
}

export default MessagesList;