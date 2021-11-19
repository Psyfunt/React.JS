
import {useCallback, useEffect} from "react";
import Form from "../Form/Form";
import { v4 as uuidv4 } from 'uuid';
import {DialogsList} from "../DialogList/DialogsList";
import {Navigate, useParams} from "react-router-dom";
import {AUTHORS} from "../../Utils/Utils";
import {MessagesList} from "../MessagesList/MessagesList";
import {connect, useDispatch} from "react-redux";
import {addMessage} from "../../Store/Messages/actions";


export const Dialogs = ({setMessages, messages}) => {
    const { dialogId } = useParams();
    //const messages = useSelector(selectMessages);
    const dispatch = useDispatch();


    const handleSetMessage = useCallback(
        (newMessage) => {
        dispatch(addMessage(dialogId, newMessage))
    },[dialogId, dispatch]);


    useEffect(() => {
        if (
            !messages[dialogId]?.length ||
            messages[dialogId]?.[messages[dialogId]?.length - 1].author === AUTHORS.human) {
            const timer = setTimeout(
                () =>
                    handleSetMessage({
                        author: AUTHORS.bot,
                        text:'i am bot',
                        id: uuidv4()
                        }
                    ),1500)
            return () => {
                clearTimeout(timer)
            }
        }

    }, [ messages, dialogId , handleSetMessage]);

    if (!messages[dialogId]) {
        return <Navigate replace to="/dialogs" />;
    }

    return (
                <div className="App">
                    <DialogsList />
                    <div className="App-wrapper">
                        <h1>Messenger</h1>
                        <div className='message-wrapper'>
                            <MessagesList dialogId={dialogId}  messages={messages[dialogId]} />
                        </div>
                        <Form  handleSetMessage={handleSetMessage}/>
                    </div>
                </div>
    );
}


export default Dialogs;

const mapStateToProps = (state) => ({
    messages: state.messages,
});

const mapDispatchToProps = {
    setMessage: addMessage,
};

export const ConnectedDialogs = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dialogs);