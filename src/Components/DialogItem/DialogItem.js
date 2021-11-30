import { ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import '../DialogList/DialogList.scss';
import {deleteDialog, removeDialogWithFb} from "../../Store/Dialogs/actions";
import {useDispatch} from "react-redux";

export const DialogItem = ({ dialog }) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(removeDialogWithFb(dialog));
    };

    return (
        <>
            <ListItem>
                <NavLink
                    style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                    to={`/dialogs/${dialog.id}`}
                >
                    {dialog.name}
                </NavLink>
            </ListItem>
            <button onClick={handleDeleteClick}>delete</button>
        </>
    );
};