import React, {useState, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About'
import axios from 'axios';
import './App.css';

/* import {} from '@fortawesome/fontawesome-svg-core'
import {} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import {} from '@fortawesome/free-solid-svg-icons' */


/* This is the driver file. Where all the components come together at the end as well as calling the api with axios */

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  

  //search Github users
  const searchUsers = async text =>{
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(res.data.items);
    setLoading(false);
  }

  //Get single Github user
  const getUser= async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUser(res.data);
    setLoading(false);
  }

  // Get Users Repos
  const getUserRepos= async username => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setRepos(res.data);
    setLoading(false);
  }

  //clear users from states
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);

  }  
  //set Alert
  const showAlert = (msg, type) => {
    setAlert({msg, type})
    setTimeout(() => setAlert(null), 5000)
  }
    

  return (
    <Router>
      <div className="App">
        <Navbar/>     
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search 
                  searchUsers={searchUsers} 
                  clearUsers={clearUsers} 
                  showClear={users.length > 0 ? true : false} /* this is passed from the search.js to be able to get the text for searchUsers method in here */
                  setAlert={showAlert}
                  />
                <Users loading ={loading} users={users}/> 
              </Fragment>
            )} />
            <Route exact path='/about' component={About}/>
            <Route exact path='/user/:login' render={props => (
              <User 
              {...props} 
              getUser={getUser} 
              getUserRepos={getUserRepos}
              user={user} 
              repos={repos}
              loading={loading} 
              />
            )} />
          </Switch>
        </div>      
      </div>
    </Router>
  );
}


export default App;

