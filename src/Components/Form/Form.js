import React, {useState} from 'react';
import './Form.scss';
import { v4 as uuidv4 } from 'uuid';
import {TextField} from "@mui/material";
import {AUTHORS, useFocus} from "../../Utils/Utils";
import {useTheme} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

 export const Form = ({handleSetMessage}) => {
     const [text, setText] = useState('');
     const [inputRef, setInputFocus] = useFocus();
     const theme = useTheme();

     const handleChange = (e) =>{
         setText(e.target.value);
     }

     const handleSubmit = (e) => {
         e.preventDefault();
         handleSetMessage({
             text: text,
             author: AUTHORS.human,
             id: uuidv4(),
         })
         // props.handleAddMessage({
         //     text: text,
         //     author: AUTHORS.human,
         //     id: uuidv4(),})
         setText('')
         setInputFocus(inputRef);
         setText("")
     }

     return (
        <form className='message-form' onSubmit={handleSubmit}>
            <TextField id="outlined-basic"
                       autoFocus
                       className='message-input'
                       label="Введите текст сообщения"
                       variant="outlined"
                       margin="normal"
                       ref={inputRef}
                       value={text}
                       onChange={handleChange}
            />
            <Button
                    style={{
                        backgroundColor: theme.palette.primary.main,
                        borderColor: theme.palette.secondary.main,
                        fontSize: theme.typography.button,
                    }}
                    variant="contained"
                    color="secondary"
                    className='send-button'
                    margin="normal"
                    type="submit">
                SEND
            </Button>

        </form>
    )
}

export default Form;
