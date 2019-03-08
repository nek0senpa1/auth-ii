import React, { Component,  } from 'react';


import './App.css';
import Register from './Register';
import { BrowserRouter as Router, Route, Nav, NavLink, withRouter } from 'react-router-dom';
import Login from './Login';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Nav System</h1>
            <nav>
              <NavLink to='/register'> Register </NavLink>
              <NavLink to='/login'> Login </NavLink>
              <NavLink to='/users'> UserList</NavLink>
              <div onClick={this.logout}>Logout</div>
            </nav>
            <div>
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/users' component={Users} />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter (App);
