import React from 'react';

import './CharComponent.css'
	const mystyle = {
      border: "2px solid #fff",
    	padding: "12px",
    	// margin: "2px 2px",
    	display: "inline-block",
   		"border-radius": "25px",
      	// backgroundColor: "#696969",
    };
	const mystyle2 = {
		border: "2px solid #fff",
    	padding: "12px",
    	// margin: "2px 2px",
    	display: "inline-block",
   		"border-radius": "25px",
      	backgroundColor: "coral",
    };

const charComponent = (props) => {
  //api,orm,model,artisan,fluant,
    return (
        <div className="CharComponent" onClick={props.delete}>
            <span style={mystyle}>{props.char}</span>   
        </div>
    )
}

export default charComponent; 