import React from 'react';

import './UserInput.css'

const ContactInput = ( props ) => {
    return (
        <div className="UserInput">
            <p>User Input</p>
            <input onChange={props.changed} value={props.text}></input>
        </div>
    )
};

export default ContactInput;