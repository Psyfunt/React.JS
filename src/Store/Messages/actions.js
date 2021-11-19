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