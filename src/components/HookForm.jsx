import React from 'react';
import useInputField from '../hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Submit: ', name, email, password);

    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input id='1' type='text' placeholder='Name' defaultValue={name} onChange={nameOnChange} required></input>
                <br></br>
                <input id='2' type='email' placeholder='Email' defaultValue={email} onChange={emailOnChange} required></input>
                <br></br>
                <input id='3' type='password' placeholder='Password' defaultValue={password} onChange={passwordOnChange} required></input>
                <br></br>
                <input type='submit' value= 'Submit'></input>
            </form>
        </div>
    );
};

export default HookForm;