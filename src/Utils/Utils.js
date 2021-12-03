import {useRef} from "react";


export const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

    return [ htmlElRef, setFocus ]
}

export const AUTHORS ={
    human:'human',
    bot:'bot'
}


export const apiUrl = "https://api.spaceflightnewsapi.net/v3/articles";

export const REQUEST_STATUS = {
    IDLE: 0,
    LOADING: 1,
    SUCCESS: 2,
    FAILURE: 3,
};

