import Message from "./Components/Message/Message";
import {useCallback, useEffect, useState} from "react";
import Form from "./Components/Form/Form";
import './App.scss';


export const App = () => {
  const [messageList, setMessageList] = useState([])

  const handleSetMessage = useCallback( (text, user) => {
        setMessageList(messageList.concat([{text: text, user: user}]));
    },[messageList])

  useEffect(() => {
      if ( messageList.length ===0 || messageList[messageList.length - 1].user === 'User') {
         let timer = setTimeout(handleSetMessage, 1500, "Привет! Я бот! Чем я могу вам помочь?", "Бот")
          return () => {
              clearTimeout(timer)
          }
      }
    }, [messageList, handleSetMessage]);

  return (
    <div className="App">
      <header className="App-wrapper">
          <h1>Messenger</h1>
          <div className='message-wrapper'>
              <Message messageList={messageList}/>
          </div>

        <Form handleSetMessage={handleSetMessage}/>
      </header>

    </div>
  );
}

export default App;
