import React, { useEffect } from "react";
import './MessagesList.scss'
import {MessageItem} from "../Message/MessageItem";



export const MessagesList = ({messages , dialogId}) => {

    useEffect(() => {
        console.log(messages);

    }, [messages]);

    return (
        messages.map((message) =>
            <MessageItem dialogId={dialogId} message={message} />
        )
    );
}

export default MessagesList;