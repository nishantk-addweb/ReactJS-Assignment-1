import React from 'react';

import './UserOutput.css'

const userOutput = ( props ) => {
    return (
        <div className="UserOutput">
            <p>User Output</p>
            <p>Username : {props.username}</p>
        </div>
    )
};

export default userOutput;