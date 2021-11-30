import React, { useEffect } from "react";
import './MessagesList.scss'
import {MessageItem} from "../Message/MessageItem";



export const MessagesList = ({msgs, messages , dialogId}) => {

    useEffect(() => {
        console.log(messages);

    }, [messages]);

    return (
        msgs.map((message) =>
            <MessageItem key={message.id} dialogId={dialogId} message={message} />
        )
    );
}

export default MessagesList;