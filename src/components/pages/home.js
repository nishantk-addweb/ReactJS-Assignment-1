import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
//import ReactDOM from 'react-dom';
// import bootstrap from 'bootstrap';
import './my.css';
class Home extends Component {
  
  render() {

    return (
  <div class="App-header2">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Exam will ended in <span id="time"></span> minutes!
                </div>
                

                <div class="card-body">
               
               

                <h3>Q.Which method returns the average value of a given key ?</h3> 
      
                <div className="mystyle1">
                <label className="mystyle">
                 <input type='radio' name='option' className="inputstyle" /> 
                 average()</label>
                </div>

                <div className="mystyle1">
                <label className="mystyle">
                 <input type='radio' name='option'  className="inputstyle" /> 
                 avg()</label>
                </div>

                <div className="mystyle1">
                <label className="mystyle">
                 <input type='radio' name='option'  className="inputstyle" /> 
                median()</label>
                </div>

                <div className="mystyle1">
                <label className="mystyle">
                 <input type='radio' name='option'  className="inputstyle" />             
                avg_val()</label>
                </div>

                <div>
                
                <button type="submit" class="btn btn-primary" >Submit answer</button>
                <button type="submit" class="btn btn-primary" >
                    Show Result 
                    </button>
                </div>

                <div class="card-body">
               
               

                <h3>Q.The vendor directory contains</h3> 
      
                <div className="mystyle1">
                <label className="mystyle">
                 <input type='radio' name='option' className="inputstyle" /> 
                 
Laravel Framework code</label>
                </div>

                <div className="mystyle1">
                <label className="mystyle">
                 <input type='radio' name='option'  className="inputstyle" /> 
                 Assets</label>
                </div>

                <div className="mystyle1">
                <label className="mystyle">
                 <input type='radio' name='option'  className="inputstyle" /> 
                 Third-party code</label>
                </div>

                <div className="mystyle1">
                <label className="mystyle">
                 <input type='radio' name='option'  className="inputstyle" /> 
                 Configuration files</label>
                </div>

                <div>
                
                <button type="submit" class="btn btn-primary" >Submit answer</button>
                <button type="submit" class="btn btn-primary" >
                    Show Result 
                    </button>
                </div>
                </div>

                <div class="card-body">
               
               

                <h3>Q.Where is the routing file located in Laravel ?</h3> 
      
                <div className="mystyle1">
                <label className="mystyle">
                 <input type='radio' name='option' className="inputstyle" /> 
                 app/Http/</label>
                </div>

                <div className="mystyle1">
                <label className="mystyle">
                 <input type='radio' name='option'  className="inputstyle" /> 
                 routes/</label>
                </div>

                <div className="mystyle1">
                <label className="mystyle">
                 <input type='radio' name='option'  className="inputstyle" /> 
                 urls/</label>
                </div>

                <div className="mystyle1">
                <label className="mystyle">
                 <input type='radio' name='option'  className="inputstyle" /> 
                 vendors/</label>
                </div>

                <div>
                
                <button type="submit" class="btn btn-primary" >Submit answer</button>
                <button type="submit" class="btn btn-primary" >
                    Show Result 
                    </button>
                </div>
                </div>

                </div>
                </div>
            </div>
        </div>
    </div>

    );
  }
}
export default Home;
