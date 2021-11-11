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


