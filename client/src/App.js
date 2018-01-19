import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Member from './components/Member.js';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/member" component={Member} />
      </div>
    );
  }
}

export default App;
