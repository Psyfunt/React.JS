import React, {useEffect} from "react";
import './MessagesList.scss'


export const MessagesList = ({ messages }) => {
    useEffect(() => {
        console.log(messages);

        return () => console.log("messageList will unmount");
    }, [messages]);

    return (
        messages.map((message) =>
            <div key={message.id}  className='message'>
                <h3 className='message-author'>{message.author}:</h3>
                <p className='message-text' >{message.text}</p>
            </div>)
    );
}

export default MessagesList;