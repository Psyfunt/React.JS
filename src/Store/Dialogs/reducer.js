import { ADD_DIALOG, DELETE_DIALOG } from "./actions";

const initialDialogs = [];

export const dialogsReducer = (state = initialDialogs, action) => {
    switch (action.type) {
        case ADD_DIALOG:
            return [...state, action.payload];
        case DELETE_DIALOG:
            return state.filter(({ id }) => id !== action.payload.dialogId);
        default:
            return state;
    }
};