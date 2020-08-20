import React, { Component }  from 'react';
import '../../App.css';

import ValidationComponent from '../contactpage/ValidationComponent/ValidationComponent';
import CharComponent from '../contactpage/CharComponent/CharComponent';
import ContactInput from '../contactpage/Userinputforcontact/contactinput';
//import ReactDOM from 'react-dom';
// import bootstrap from 'bootstrap';

class Contact extends Component {
  state = {
    text: "Hello"
  }

  textHandler = (event) => {
    this.setState({text: event.target.value});
  }

  deleteCharHandler = (index) => {
    const chars = [...this.state.text.split("")];
    chars.splice(index, 1);
    this.setState({text: chars.join("")});
  }

  render() {

    const mystyle = {
      border: "2px solid #fff",
      color: "white",
      backgroundColor: "#9ACD32",
      padding: "10px",
      fontFamily: "Arial"
    };
    return (
      <div className="App">
        <header className="App-header">
        <ContactInput text={this.state.text} changed={this.textHandler} />
          <p style={mystyle}>{this.state.text.length} chars</p>
          <ValidationComponent text={this.state.text} />
          <div>
            {this.state.text.split("").map((char, index) => {
              return <CharComponent char={char} delete={() => this.deleteCharHandler(index)} />
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default Contact;