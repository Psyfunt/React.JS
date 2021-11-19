import React from 'react'
import './Home.scss'
import {useSelector} from "react-redux";

export const Home = () =>{
    const name = useSelector((state) => state.name);
    return(
    <>
        <h3>HOME</h3>
        <p>Hello {name}</p>
    </>
)
}