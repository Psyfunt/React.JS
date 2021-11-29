import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { onValue } from "firebase/database";
import { auth, messagesRef } from "../../Services/firebase";
import { signIn, signOut } from "../../Store/Profile/actions";
import { Articles } from "../Articles/Articles";
import  DialogList  from "../DialogList/DialogsList";
import  ConnectedDialogs  from "../Dialogs/Dialogs";
import { Home } from "../Home/Home";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { ConnectedProfile } from "../Profile/Profile";
import { PublicOutlet, PublicRoute } from "../PublicRoute/PublicRoute";
import { SignUp } from "../SingUp/SingUp";
import './Routes.scss'

export const Router = () => {
    const dispatch = useDispatch();
    const [msgs, setMsgs] = useState({});

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signIn());
            } else {
                dispatch(signOut());
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        onValue(messagesRef, (snapshot) => {
            const newMsgs = {};

            snapshot.forEach((dialogMsgsSnap) => {
                newMsgs[dialogMsgsSnap.key] = Object.values(
                    dialogMsgsSnap.val().messageList || {}
                );
            });

            setMsgs(newMsgs);
        });
    }, []);

    return (
        <BrowserRouter>
            <ul className="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dialogs">Dialogs</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<PublicOutlet />}>
                    <Route path="" element={<Home />} />
                </Route>
                <Route path="/signup" element={<PublicOutlet />}>
                    <Route path="" element={<SignUp />} />
                </Route>
                <Route
                    path="profile"
                    element={
                        <PrivateRoute>
                            <ConnectedProfile />
                        </PrivateRoute>
                    }
                />
                <Route path="articles" element={<Articles />} />
                <Route path="dialogs">
                    <Route
                        index
                        element={
                            <PrivateRoute>
                                <DialogList />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path=":dialogId"
                        element={
                            <PrivateRoute>
                                <ConnectedDialogs msgs={msgs} />
                            </PrivateRoute>
                        }
                    />
                </Route>
                <Route path="*" element={<h3>404</h3>} />
            </Routes>
        </BrowserRouter>
    );
};