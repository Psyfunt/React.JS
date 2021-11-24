export const ADD_DIALOG = "DIALOGS::ADD_DIALOG";
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