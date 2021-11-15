import React, {useCallback, useEffect, useState} from 'react'
import {BrowserRouter, NavLink, Routes, Route, useParams} from "react-router-dom";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Home} from "./Components/Home/Home";
import DialogsList from "./Components/DialogList/DialogsList";
import './App.scss'
import {Profile} from "./Components/Profile/Profile";
import {Provider} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {store} from "./Store";
import {AUTHORS} from "./Utils/Utils";

const initialDialogList = [
    {
        name: 'chat1',
        id: "dialog1"
    },
    {
        name: 'chat2',
        id: "dialog2"
    },
    {
        name: 'chat3',
        id: "dialog3"
    }
]

const initialMessages = {
    dialog1:[
        {
            text:'text1',
            author: AUTHORS.human,
            id: uuidv4()

        }
    ],
    dialog2:[
        {
            text:'another text',
            author: AUTHORS.human,
            id: uuidv4()

        }
    ],
    dialog3:[]
}

export const App = () => {
    const { dialogId } = useParams();
    const [color, setColor] = useState("blue");

    const [dialogsList, setDialogList] = useState(initialDialogList);
    const [messages, setMessages] = useState(initialMessages);

    const handleToggleColor = useCallback(() => {
        setColor((prevColor) => (prevColor === "blue" ? "red" : "blue"));
    }, []);

    const handleSetDialogList = useCallback( (value) => {
        setDialogList((prevDialogsList)=>(
            [...prevDialogsList, {name:value, id: uuidv4()} ]
        ))

    }, [dialogId])

    // const handleSetMessage = useCallback(
    //     (newMessage) => {
    //         setMessages((prevMessages) => ({
    //             ...prevMessages,
    //             [dialogId]: [...prevMessages[dialogId], newMessage]}));
    //     },[dialogId, setMessages]);


    const handleDeleteDialog = useCallback((id)=>{
        setDialogList((prevDialogsList)=>(
            prevDialogsList.filter((item) => item.id !== id)
        ))
    },[])



    useEffect(()=>{
        console.log(messages)
        console.log(dialogsList)
    },[dialogsList,messages])

    return (
    <Provider store={store}>
    <BrowserRouter>
        <ul className='navigation'>
            <li>
                <NavLink className='navigationLink' to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className='navigationLink' to='/profile'>Profile</NavLink>
            </li>
            <li>
                <NavLink className='navigationLink' to='/dialogs'>Dialogs</NavLink>
            </li>
        </ul>

        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='profile' element={<Profile />}/>
            <Route path="dialogs" >
                <Route index element={
                    <DialogsList
                        dialogsList={dialogsList}
                        handleDeleteDialog={handleDeleteDialog}
                    />} />
                <Route
                    path=":dialogId"
                    element={
                        <Dialogs
                            dialogsList={dialogsList}
                            setDialogList={setDialogList}
                            messages={messages}
                            setMessages={setMessages}
                            handleSetDialogList={handleSetDialogList}
                            handleDeleteDialog={handleDeleteDialog}
                        />
                       }
                />
            </Route>
            <Route path="*" element={<h3>404</h3>} />
        </Routes>
    </BrowserRouter>
    </Provider>
);
};
