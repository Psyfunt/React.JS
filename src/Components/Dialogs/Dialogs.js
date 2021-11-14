
import {useCallback, useEffect} from "react";
import Form from "../Form/Form";
import { v4 as uuidv4 } from 'uuid';
import {DialogsList} from "../DialogList/DialogsList";
import { useParams} from "react-router-dom";
import {AUTHORS} from "../../Utils/Utils";
import {MessagesList} from "../MessagesList/MessagesList";


export const Dialogs = ({dialogsList, messages, setMessages}) => {
    const { dialogId } = useParams();
    const handleSetMessage = useCallback(
        (newMessage) => {
        setMessages((prevMessages) => ({
             ...prevMessages,
             [dialogId]: [...prevMessages[dialogId], newMessage]}));
    },[dialogId, setMessages]);


    useEffect(() => {
        if (
            !messages[dialogId]?.length ||
            messages[dialogId]?.[messages[dialogId]?.length - 1].author === AUTHORS.human) {
            const timer = setTimeout(
                () =>
                    handleSetMessage({
                        author: AUTHORS.bot,
                        text:'i am bot',
                        id: uuidv4()
                        }
                    ),1500)
            return () => {
                clearTimeout(timer)
            }
        }

    }, [setMessages, messages, handleSetMessage, dialogId]);

    return (
                <div className="App">
                    <DialogsList dialogsList={dialogsList}  />
                    <div className="App-wrapper">
                        <h1>Messenger</h1>
                        <div className='message-wrapper'>
                            <MessagesList messages={messages[dialogId]} />
                        </div>
                        <Form handleSetMessage={handleSetMessage}/>
                    </div>
                </div>
    );
}


