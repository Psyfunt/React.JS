import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from './Profile/reducer';
import {dialogsReducer} from "./Dialogs/reducer";
import {messagesReducer} from "./Messages/reducer";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import {articlesReducer} from "./Articles/reducer";
import {persistReducer} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const config = {
    key: 'GbMessanger',
    storage,
    blacklist: ["profile","articles"],
};
const persistedReducer = persistReducer(
    config,
    combineReducers(
        {
            dialogs: dialogsReducer,
            profile: profileReducer,
            messages: messagesReducer,
            articles: articlesReducer,
        }
    )
)

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store)


