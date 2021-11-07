import React, {useState} from 'react';
import './Form.scss';
import {Button, TextField} from "@mui/material";
import {useFocus} from "../../Utils/Utils";

 export const Form = (props) => {
     const [text, setText] = useState('');
     const [inputRef, setInputFocus] = useFocus();

     const handleChange = (e) =>{
         setText(e.target.value);
     }

     const handleSubmit = (e) => {
         e.preventDefault();
         props.handleSetMessage(text, "User")
         setText('')
         setInputFocus(inputRef)
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
                    variant="contained"
                    className='send-button'
                    margin="normal"
                    type="submit">
                SEND
            </Button>

        </form>
    )
}

export default Form;
