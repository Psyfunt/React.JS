import React, { useState } from 'react';
import {TextField} from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import {DialogItem} from "../DialogItem/DialogItem";
import {addDialog} from "../../Store/Dialogs/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectDialogs} from "../../Store/Dialogs/selectors";
import './DialogList.scss';

 export const DialogsList = () => {
     const dialogsList = useSelector(selectDialogs);
     const dispatch = useDispatch();
     const [value, setValue] = useState('')

     const handleChange = (e) =>{
         setValue(e.target.value);
     }
     const handleSubmit = (e) => {
         e.preventDefault();
         const newId = uuidv4();
         dispatch(addDialog({ name: value, id: newId }));
         setValue("");
     };


     return (
         <div>
             <h1>Dialogs List</h1>
             <ul>
                 {dialogsList.map((dialog) => (
                     <li key={dialog.id}>
                         <DialogItem dialog={dialog} />
                     </li>
                 ))}
             </ul>
             <form onSubmit={handleSubmit}>
                <TextField value={value} onChange={handleChange} />
                <button type='submit'>Add dialog</button>
             </form>
         </div>
     )
 }

export default DialogsList


