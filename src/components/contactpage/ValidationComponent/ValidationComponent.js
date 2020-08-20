import React from 'react';
const mystyle = {
      border: "2px solid #fff",
      color: "white",
      backgroundColor: "#2F4F4F",
      padding: "10px",
      fontFamily: "Arial"
    };

    const mystyle2 = {
      border: "2px solid #fff",
      color: "white",
      backgroundColor: "#228B22",
      padding: "10px",
      fontFamily: "Arial"
    };
    const mystyle3 = {
      border: "2px solid #fff",
      color: "white",
      backgroundColor: "#A52A2A",
      padding: "10px",
      fontFamily: "Arial"
    };

const validationComponent = (props) => {
    if(props.text.length<5 && props.text.length>=1){
    	return <p style={mystyle2}>Text too short</p>
    }else if(props.text.length>=5 && props.text.length<10){
    	return <p style={mystyle}>Text long enough</p>
    }else if(props.text.length>=10){
    	return <p style={mystyle3}>Text too Long</p>
    }else if(props.text.length==0){
      return <p style={mystyle3}>Text length is Zero</p>
    }
}

export default validationComponent;
