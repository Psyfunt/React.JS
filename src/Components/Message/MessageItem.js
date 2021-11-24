import React from "react";
import {useDispatch} from "react-redux";
import {deleteMessage} from "../../Store/Messages/actions";

export const MessageItem = ({ message, dialogId }) => {
    const dispatch = useDispatch()
    const handleDeleteButton = () =>{
        dispatch(deleteMessage(dialogId, message.id))
    }
    return (
        <div key={message.id}  className='message'>
            <h3 className='message-author'>{message.author}:</h3>
            <p className='message-text' >{message.text}</p>
            <button onClick={handleDeleteButton} >delete message</button>
        </div>
    );
};
