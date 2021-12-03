import {AUTHORS} from "../../Utils/Utils";
import { v4 as uuidv4 } from 'uuid';

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

export const addMessage = (dialogId, message) => ({
    type: ADD_MESSAGE,
    payload:{dialogId, message}
});

export const deleteMessage = ( dialogId, idToDelete) => ({
    type: DELETE_MESSAGE,
    payload: {
        dialogId,
        idToDelete,
    },
});

let timeout;

export const addMessageWithReply = (dialogId, message) =>(dispatch) => {
    dispatch(addMessage(dialogId, message));

    if (message.author !== AUTHORS.bot){
        if (timeout){
            clearTimeout(timeout)
        }
        timeout = setTimeout(()=>{
            const botMessage = {
                id: uuidv4(),
                text: 'I am bot))))',
                author: AUTHORS.bot
            }
            dispatch(addMessage(dialogId, botMessage))
        }, 1500)
    }
}