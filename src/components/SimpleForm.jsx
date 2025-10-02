import React from 'react';

const SimpleForm = () => {
    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmitForm}>  
                <input type='text' placeholder='Your Name' name= 'name'></input>
                <br></br>
                <input type='email' placeholder='Your Email' name="email"></input>
                <br></br>
                <input type='submit' value= 'Submit'></input>
            </form>
        </div>
    );
};

export default SimpleForm;