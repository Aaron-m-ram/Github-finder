import React, {Component} from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users';
import Search from './components/users/Search'
import axios from 'axios';
import './App.css';

/* import {} from '@fortawesome/fontawesome-svg-core'
import {} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import {} from '@fortawesome/free-solid-svg-icons' */


/* This is the driver file. Where all the components come together at the end as well as calling the api with axios */

class App extends Component{
  state = {
    users: [],
    loading: false
  }

  async componentDidMount(){

    this.setState({loading: true});
    
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({users: res.data, loading: false});
    
  }

  render(){
    

    return (
      <div className="App">
        <Navbar/>     
        <div className='container'>
          <Search></Search>
          <Users loading ={this.state.loading} users={this.state.users}/>
        </div>      
      </div>
    );
  }
}


export default App;

