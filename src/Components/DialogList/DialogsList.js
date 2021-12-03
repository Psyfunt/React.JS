import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {
    addDialogWithFb,
    initDialogsTracking,
} from "../../Store/Dialogs/actions";
import { selectDialogs } from "../../Store/Dialogs/selectors";
import {DialogItem} from "../DialogItem/DialogItem";
import './DialogList.scss';
import {getDialogMsgsRefById, getDialogRefById} from "../../Services/firebase";

 export const DialogsList = () => {
     const dialogsList = useSelector(selectDialogs);
     const dispatch = useDispatch();
     const [value, setValue] = useState('')

     useEffect(() => {
         dispatch(initDialogsTracking());
     }, [dispatch]);

     const handleChange = (e) =>{
         setValue(e.target.value);
     }
     const handleSubmit = (e) => {
         e.preventDefault();
         const newId = uuidv4();
         // dispatch(addDialog({ name: value, id: newId }));
         // set(getDialogMsgsRefById(newId), {empty: true});
         // set(getDialogRefById(newId), {name: value, id: newId})
         // setValue("");
         dispatch(addDialogWithFb({ name: value, id: newId }));
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


