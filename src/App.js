import React, {Component} from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users';
import './App.css';

/* import {} from '@fortawesome/fontawesome-svg-core'
import {} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import {} from '@fortawesome/free-solid-svg-icons' */


class App extends Component{

  render(){
    

    return (
      <div className="App">
        <Navbar/>     
        <div className='container'>
          <Users/>
        </div>      
      </div>
    );
  }
}


export default App;

