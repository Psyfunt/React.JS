import './Message.scss';

export const Message = ({messageList}) => {
    return (
        messageList.map((message) =>
            <div key={message.id}  className='message'>
                <h3 className='message-author'>{message.user}:</h3>
                <p className='message-text' >{message.text}</p>
            </div>)
    );
}

export default Message;
