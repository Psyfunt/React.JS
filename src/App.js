import React from 'react'
import {BrowserRouter, NavLink, Routes, Route} from "react-router-dom";
import {Dialogs} from "./Components/Chats/Dialogs";
import {Home} from "./Components/Home/Home";
import DialogList from "./Components/DialogList/DialogList";
import './App.scss'
import {Profile} from "./Components/Profile/Profile";


export const App = () => (
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
            <Route path='/profile' element={<Profile />}/>
            <Route path="/dialogs" >
                <Route index element={<DialogList />} />
                <Route path=":dialogId" element={<Dialogs />}/>
            </Route>
            <Route path="*" element={<h3>404</h3>} />
        </Routes>
    </BrowserRouter>
)
