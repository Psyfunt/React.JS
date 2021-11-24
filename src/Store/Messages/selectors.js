export const selectMessages = (state) => state.messages;

export const createSelectMessagesForChat = (dialogId) => (state) =>
    state.messages[dialogId];