import React,{Component} from 'react';
// import logo from './logo.svg';
//import './App.css';
import Person from './Person/Person';

class About extends Component{
state={
  persons:[
    {id:'abc', name:'max', age: 29},
    {id:'a', name:'mx', age: 2},
    {id:'ab' ,name:'ax', age: 296},
  ],
  otherstate:'some other value',
  showPersons:false
}
nameChangedHandler =(event, id) =>{
  const personIndex = this.state.persons.findIndex(p=>{
    return p.id===id;
  });

  const person={...this.state.persons[personIndex]};

  // const person = Object.assign({},this.state.persons[personIndex]);

  person.name= event.target.value;
  const persons=[...this.state.persons];
  persons[personIndex]=person;

  this.setState({persons:persons});


}
deletePersonHandler =(personIndex)=>{
  const persons= [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons});
}
togglePersonHandler=()=>{
  const doesShow=this.state.showPersons;
  this.setState({showPersons: !doesShow});
}
render(){
  const style={
  backgroundColor:"white",
  font:'inherit',
  border:'1px solid blue',
  padding : '8px',
  cursor: 'pointer'
    }
  let persons = null;

  if(this.state.showPersons){
    persons=(
      <div>
        {this.state.persons.map((person,index)=>{
          return <Person 
            click={()=>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event)=>this.nameChangedHandler(event, person.id)}/>
        })}
      </div>
    );
  }

  return(
    <div className="App">
      <h1>hi,i'm react app</h1>
      <p>this is really working</p>
      <button style={style} onClick={this.togglePersonHandler}>toggle Persons</button>
      {persons}
    </div>
  );

  }
}
export default About;