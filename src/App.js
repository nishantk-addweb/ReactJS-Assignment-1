import React  from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Task from './components/pages/task1';
import Navbar from './components/layout/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/task1" component={Task}/>
    </Switch>
      
    </div>
    </Router>
  );
};



export default App;
