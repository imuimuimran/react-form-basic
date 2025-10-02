import React from 'react';

const FormAction = () => {
    const handleFormAction = (formData) => {
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }
    return (
        <div>
            <form action={handleFormAction}>
                <input type='text' placeholder='Name' name="name"></input>
                <br></br>
                <input type='email' placeholder='Email' name="email"></input>
                <br></br>
                <input type='submit' value= 'Submit'></input>
            </form>
        </div>
    );
};

export default FormAction;