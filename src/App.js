import Message from "./Components/Message/Message";
import {useCallback, useEffect, useState} from "react";
import Form from "./Components/Form/Form";
import { v4 as uuidv4 } from 'uuid';
import DialogList from "./Components/DialogList/DialogList";
import './App.scss';




export const App = () => {
  const [messageList, setMessageList] = useState([])
    const [dialogs, setDialogs] = useState([
        {id: uuidv4(), name: 'Dialog 1'},
        {id: uuidv4(), name: 'Dialog 2'},
        {id: uuidv4(), name: 'Dialog 3'},
        {id: uuidv4(), name: 'Dialog 4'}
    ])

  const handleSetMessage = useCallback( (text, user) => {
        setMessageList(messageList.concat([{id: uuidv4(), text: text, user: user}]));
    },[messageList])

  useEffect(() => {
      if ( !messageList.length || messageList[messageList.length - 1].user === 'User') {
         let timer = setTimeout(handleSetMessage, 1500, "Привет! Я бот! Чем я могу вам помочь?", "Бот")
          return () => {
              clearTimeout(timer)
          }
      }
    }, [messageList, handleSetMessage]);

  return (
    <div className="App">
        <DialogList dialogs={dialogs}/>
      <div className="App-wrapper">
          <h1>Messenger</h1>
          <div className='message-wrapper'>
              <Message messageList={messageList}/>
          </div>

        <Form handleSetMessage={handleSetMessage}/>
      </div>

    </div>
  );
}

export default App;
