import {ADD_DIALOG, DELETE_DIALOG, SET_DIALOGS} from "./actions";

const initialDialogs = [];

export const dialogsReducer = (state = initialDialogs, { type, payload }) => {
    switch (type) {
        case ADD_DIALOG:
            return [...state, payload];
        case DELETE_DIALOG:
            return state.filter(({ id }) => id !== payload.dialogId);
        case SET_DIALOGS:
            return payload;
        default:
            return state;
    }
};