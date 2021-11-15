import React, {useEffect, useState} from 'react';
import './DialogList.scss';
import {NavLink} from "react-router-dom";
import {TextField} from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

 export const DialogsList = ({dialogsList, handleSetDialogList, handleDeleteDialog}) => {
     const [value, setValue] = useState('')
     const handleChange = (e) =>{
         setValue(e.target.value);
     }
     const addDialog = () =>{handleSetDialogList(value)}

     const deleteDialog = (e) =>{
         handleDeleteDialog(e.target.parentElement.dataset.id)
     }

     return (
         <div>
             <h1>Dialogs List</h1>
             <ul>
                 {dialogsList.map((dialog) => (
                     <>
                     <li key={dialog.id} data-id={dialog.id}>
                         <NavLink style={({isActive}) =>({ color: isActive ? "red" : "blue"})}
                                  to={`/dialogs/${dialog.id}`}>{dialog.name}
                         </NavLink>
                         <button onClick={deleteDialog}>delete</button>
                     </li>

                     </>
                 ))}
             </ul>
             <TextField value={value} onChange={handleChange} />
             <button onClick={addDialog}>Add dialog</button>
         </div>
     )
 }

export default DialogsList


