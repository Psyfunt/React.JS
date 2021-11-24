import React from "react";
import { Provider } from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import { Router } from "./Components/Routes";
import {persistor, store} from "./Store";
import {CircularProgress} from "@mui/material";


export const App = () => {
    return (
        <Provider store={store}>
            <PersistGate
                persistor={persistor}
                loading={<CircularProgress/>}>
                <Router />
            </PersistGate>
        </Provider>
    );
};
