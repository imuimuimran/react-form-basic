import React, { useRef } from 'react';

const UncontrolledField = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input id='1' type='text' placeholder='Name' name="name" required></input>
                <br></br>
                <input id='2' ref={emailRef} type='email' placeholder='Email' name="email" required></input>
                <br></br>
                <input id='3' ref={passwordRef} type='password' placeholder='Password' name="password" required></input>
                <br></br>
                <input type='submit' value= 'Submit'></input>
            </form>
        </div>
    );
};

export default UncontrolledField;