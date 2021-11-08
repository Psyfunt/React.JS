import React from 'react';
import './DialogList.scss';

import { List, ListItem} from '@mui/material';

 const DialogList = ({dialogs}) => {
     return (
         <List className="dialogBox">
             {dialogs.map((dialog) => (
                 <ListItem className='dialogItem' key={dialog.id}>{dialog.name}</ListItem>
             ))}
         </List>
     )
 }





export default DialogList;
