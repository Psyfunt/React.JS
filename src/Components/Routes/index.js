import { Route, Routes } from "react-router";
import {BrowserRouter, NavLink} from "react-router-dom";
import {Home} from "../Home/Home";
import {ConnectedProfile} from "../Profile/Profile";
import DialogsList from "../DialogList/DialogsList";
import React from "react";
import Dialogs from "../Dialogs/Dialogs";

export const Router = () => (
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
            <Route path='profile' element={<ConnectedProfile />}/>
            <Route path="dialogs" >
                <Route index element={<DialogsList/>} />
                <Route
                    path=":dialogId"
                    element={<Dialogs/>}
                />
            </Route>
            <Route path="*" element={<h3>404</h3>} />
        </Routes>
    </BrowserRouter>
);