import React, {useEffect, useState} from 'react';
import './DialogList.scss';
import {NavLink} from "react-router-dom";
import {TextField} from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

 export const DialogsList = ({dialogsList, handleSetDialogList}) => {
     const [value, setValue] = useState('')
     const handleChange = (e) =>{
         setValue(e.target.value);
     }
     const AddDialog = ({value}) => {
         handleSetDialogList(value)
     }
     return (
         <div>
             <h1>Dialogs List</h1>
             <ul>
                 {dialogsList.map((dialog) => (
                     <>
                     <li key={dialog.id}>
                         <NavLink style={({isActive}) =>({ color: isActive ? "red" : "blue"})}
                                  to={`/dialogs/${dialog.id}`}>{dialog.name}
                         </NavLink>
                     </li>
                     <button onClick={() => {}}>delete</button>
                     </>
                 ))}
             </ul>
             <TextField value={value} onChange={handleChange} />
             <button onClick={(value)=>{AddDialog(value)}}>Add dialog</button>
         </div>
     )
 }

export default DialogsList


