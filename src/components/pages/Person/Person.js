import React from 'react';
import './Person.css';

const person = ( props ) => {
	return(
	<div className = "Person">
		<div onClick={props.click}>I am {props.name} and I am {props.age} Year old</div>
		<p>{props.children}</p>
		<input type="text" onChange={props.changed} value={props.name}/>
	</div>
	)
};

export default person;