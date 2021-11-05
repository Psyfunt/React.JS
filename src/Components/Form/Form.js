import React, {useState} from 'react';
import './Form.scss';

 export const Form = (props) => {
     const [name, setName] = useState('');
     const [text, setText] = useState('');

     const handleChange = (e) =>{
         setText(e.target.value);
         setName(e.currentTarget.dataset.author);
     }

     const handleSubmit = (e) => {
         e.preventDefault();
         props.handleSetMessage(text, name)
         setText('')
     }
     return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input className='message-input' placeholder='Введите текст сообщения' type="text" data-author='User' value={text} onChange={handleChange}/>
            <input className='send-button' type="submit"/>
        </form>
    )
}

export default Form;
