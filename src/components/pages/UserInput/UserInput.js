import React from 'react';

import './UserInput.css'

const userInput = ( props ) => {
    return (
        <div className="UserInput">
            <p>User Input</p>
            <input onChange={props.changed} value={props.username}></input>
        </div>
    )
};

export default userInput;