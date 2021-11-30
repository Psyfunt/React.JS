
import {useCallback} from "react";
import Form from "../Form/Form";
import {DialogsList} from "../DialogList/DialogsList";
import {Navigate, useParams} from "react-router-dom";
import {MessagesList} from "../MessagesList/MessagesList";
import { useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../Store/Messages/actions";
import {selectMessages} from "../../Store/Messages/selectors";
import {getDialogMsgsListRefById} from "../../Services/firebase";
import { push } from "firebase/database"
import connect from "react-redux/lib/connect/connect";


function Dialogs({msgs, sendMessage}) {
    const { dialogId } = useParams();
    // const messages = useSelector(selectMessages);
    // const dispatch = useDispatch();


    const handleSetMessage = useCallback(
        (newMessage) => {
        // dispatch(addMessageWithReply(dialogId, newMessage))
            push(getDialogMsgsListRefById(dialogId), newMessage);
    },[dialogId]);


    if (!msgs[dialogId]) {
        return <Navigate replace to="/dialogs" />;
    }

    return (
                <div className="App">
                    <DialogsList />
                    <div className="App-wrapper">
                        <h1>Messenger</h1>
                        <div className='message-wrapper'>
                            <MessagesList dialogId={dialogId}   msgs={msgs[dialogId]} />
                        </div>
                        <Form  handleSetMessage={handleSetMessage}/>
                    </div>
                </div>
    );
}


export default Dialogs;
//
// const mapStateToProps = (state) => ({
//     messages: state.messages,
// });
//
// const mapDispatchToProps = {
//     setMessage: addMessage,
// };
//
// export const ConnectedDialogs = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Dialogs);