import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
//import ReactDOM from 'react-dom';
// import bootstrap from 'bootstrap';

class Home extends Component {
  state = {
    username: "hello"
    // showPersons:false;
  }

  usernameHandler = (event) => {
    this.setState({username: event.target.value});
  }
  togglepersonhandler =(event)=>{
    const t=this.state.showPersons;
    this.setState({showPersons:!t});
  }
  deletehandler=(i)=>{
    const per=this.state.showPersons;
    per.splice(i,1);
    this.setState({showPersons:per});
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
        <button className="btn" onClick={()=>this.togglepersonhandler()} >CLICK ME TO SHOW</button>
        {this.state.showPersons === true ?
          <div>

          <UserInput username={this.state.username} changed={this.usernameHandler} />
          <UserOutput username={this.state.username} />
          <UserOutput username={this.state.username} />
          </div> :null }
        </header>
      </div>
    );
  }
}
export default Home;
