import React from "react";

export const Message = ({ message, onMessageClick }) => {
    return (
        <h3 onClick={onMessageClick}>
            {message}
        </h3>
    );
};
