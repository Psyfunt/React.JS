import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";
import {ADD_DIALOG, DELETE_DIALOG} from "../Dialogs/actions";

const initialMessages= {};

export const messagesReducer = (state = initialMessages, { payload, type }) => {
    switch (type) {
        case ADD_MESSAGE:
            return {
                ...state,
                [payload.dialogId]: [...state[payload.dialogId], payload.message],
            };
        case DELETE_MESSAGE: {
            const newMessages = { ...state };
            newMessages[payload.dialogId] = newMessages[payload.dialogId].filter(
                ({ id }) => id !== payload.idToDelete
            );

            return newMessages;
        };
        case ADD_DIALOG:
            return {
                ...state,
                [payload.id]: [],
            };
        case DELETE_DIALOG: {
            const newMessages = { ...state };
            delete newMessages[payload.dialogId];
            return newMessages;
        }
        default:
            return state;
    }
};