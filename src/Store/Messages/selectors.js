export const selectMessages = (state) => state.messages;

export const createSelectMessagesForDialog = (dialogId) => (state) =>
    state.messages[dialogId];