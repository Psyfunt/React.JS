import React, {useState} from 'react';
import './Form.scss';
import {TextField} from "@mui/material";
import {useFocus} from "../../Utils/Utils";
import {useTheme} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

 export const Form = (props) => {
     const [text, setText] = useState('');
     const [inputRef, setInputFocus] = useFocus();
     const theme = useTheme();

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
