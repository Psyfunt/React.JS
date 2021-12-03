
import { onValue, set } from "firebase/database";
import {
    dialogsRef,
    getDialogMsgsRefById,
    getDialogRefById,
} from "../../Services/firebase";

export const ADD_DIALOG = "DIALOGS::ADD_DIALOG";
export const SET_DIALOGS = "DIALOGS::SET_DIALOGS";
export const DELETE_DIALOG = "DIALOGS::DELETE_DIALOG";

export const addDialog = (newDialog) => ({
    type: ADD_DIALOG,
    payload: newDialog,
});

export const deleteDialog = (id) => ({
    type: DELETE_DIALOG,
    payload: {
        dialogId: id,
    },
});

export const addDialogWithFb = (newDialog) => (dispatch) => {
    set(getDialogMsgsRefById(newDialog.id), { empty: true });
    set(getDialogRefById(newDialog.id), newDialog);
};

export const setDialogs = (dialogs) => ({
    type: SET_DIALOGS,
    payload: dialogs,
});

export const initDialogsTracking = () => (dispatch) => {
    onValue(dialogsRef, (dialogsSnap) => {
        console.log(dialogsSnap);
        const newDialogs = [];

        dialogsSnap.forEach((snapshot) => {
            newDialogs.push(snapshot.val());
        });

        dispatch(setDialogs(newDialogs));
    });
};