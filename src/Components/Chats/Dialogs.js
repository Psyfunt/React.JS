
import {useCallback, useEffect, useState} from "react";
import Form from "../Form/Form";
import { v4 as uuidv4 } from 'uuid';
import {DialogList} from "../DialogList/DialogList";
import {Navigate, useParams} from "react-router-dom";
import {AUTHORS} from "../../Utils/Utils";
import {MessagesList} from "../MessagesList/MessagesList";

const initialMessages = {
    chat1:[
        {
            text:'text1',
            author: AUTHORS.human,
            id: uuidv4(),
        }
    ],
    chat2:[
        {
            text:'another text',
            author: AUTHORS.human,
            id: uuidv4(),
        }
    ],
    chat3:[]
}


export const Dialogs = () => {
    const { dialogId } = useParams();
    const [messageList, setMessageList] = useState(initialMessages);



    const handleSetMessage = useCallback( (newMessage) => {
        setMessageList((prevMessages) => ({
             ...prevMessages,
             [dialogId]: [...prevMessages[dialogId], newMessage]}));
    },[dialogId]);


    useEffect(() => {
        if (
            !messageList[dialogId]?.length ||
            messageList[dialogId]?.[messageList[dialogId]?.length - 1].author === AUTHORS.human) {
            const timer = setTimeout(
                () =>
                    handleSetMessage({
                        author: AUTHORS.bot,
                        text:'i am bot',
                        id: uuidv4(),
                        }
                    ),1500)
            return () => {
                clearTimeout(timer)
            }
        }

    }, [messageList, handleSetMessage, dialogId]);

    if (!messageList[dialogId]) {
        return <Navigate replace to="/" />;
    }

    return (
                <div className="App">
                    <DialogList />
                    <div className="App-wrapper">
                        <h1>Messenger</h1>
                        <div className='message-wrapper'>
                            <MessagesList messages={messageList[dialogId]} />
                        </div>
                        <Form handleSetMessage={handleSetMessage}/>
                    </div>
                </div>
    );
}


