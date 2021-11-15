import React from "react";
import { useSelector, useDispatch } from "react-redux";
import '../../Store/Profile/actions'
import {toggleCheckbox} from "../../Store/Profile/actions";


export const Profile = () => {
    // const state = store.getState();
    const checkboxValue = useSelector(state => state.checkbox);
    const name = useSelector(state => state.name);
    const dispatch = useDispatch();


    const handleChange = () => {
        console.log('------');
        dispatch(toggleCheckbox);
    }

    return (
        <>
            <h3>Profile</h3>
            <input type="checkbox" checked={checkboxValue} onChange={handleChange} />
            <span>{name}</span>
        </>
    );
};