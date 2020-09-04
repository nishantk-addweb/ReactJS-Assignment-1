    import React from 'react';
    import {NavLink} from 'react-router-dom';    

    const Navbar=()=>{
      return(
          <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
      <NavLink className="navbar-brand" to="/">First React Navbar</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/Contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " exact to="/About">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " exact to="/task1">Task</NavLink>
          </li>
        </ul>
       
      </div>
      </div>
    </nav>

    
        );
    };

export default Navbar;