import React from "react";
import { Provider } from "react-redux";
import { Router } from "./Components/Routes";
import {store} from "./Store";


export const App = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};
