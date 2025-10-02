import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] = useState('Hi');
    const [passwordError, setPasswordError] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Here this condition applying it means
        // when typing password, error don't shows instantly 
        // rather error shows after clicking submitted button
        if(password.length < 6) {
            setPasswordError("Password must be 6 charecter at least");
        }
        else{
            setPasswordError('');
        }
    }

    const handlePasswordOnChange = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);

        // Here this condition applying it means
        // when typing password, error shows instantly 
        // before clicking submitted button
        // if(password.length < 6) {
        //     setPasswordError("Password must be 6 charecter at least");
        // }
        // else{
        //     setPasswordError('');
        // }

    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input id='1' type='text' placeholder='Name' name="name" required></input>
                <br></br>
                <input id='2' type='email' placeholder='Email' name="email" required></input>
                <br></br>
                <input id='3' type='password' placeholder='Password' name="password" defaultValue={password} onChange={handlePasswordOnChange} required></input>
                <br></br>
                <input type='submit' value= 'Submit'></input>
            </form>
            <p style={{color:'red'}}>
                <small>{passwordError}</small>
            </p>
        </div>
    );
};

export default ControlledField;