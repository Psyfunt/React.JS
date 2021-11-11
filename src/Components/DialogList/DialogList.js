import React, {useState} from 'react';
import './DialogList.scss';
import {NavLink} from "react-router-dom";
import {TextField} from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

const initialDialogList = [
    {
        name: 'chat1',
        id: uuidv4()
    },
    {
        name: 'chat2',
        id: uuidv4()
    },
    {
        name: 'chat3',
        id: uuidv4()
    }
]


 export const DialogList = () => {
     const [dialogList, setDialogList] = useState(initialDialogList);
     const [value, setValue] = useState('')

     const handleSetDialogList = (newDialog) =>{
         setDialogList((prevDialogList)=>([...prevDialogList, {name:value, id: uuidv4()} ]))
     }

     const handleChange = (e) =>{
         setValue(e.target.value);
     }

     return (
         <div>
             <h1>Dialogs List</h1>
             <ul>
                 {dialogList.map((dialog) => (
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
             <button onClick={handleSetDialogList}>Add chat</button>
         </div>
     )
 }



export default DialogList


