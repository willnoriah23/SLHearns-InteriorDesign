import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Member from './components/Member.js';
// import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Route path="/register" exact component={Register} />
        <Route path="/" exact component={Login} />
        <Route path="/users" component={Member} />
      </div>
    );
  }
}

export default App;
