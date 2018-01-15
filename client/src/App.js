import React, { Component } from 'react';
import Register from './components/Register.js';
import Login from './components/Login.js';

class App extends Component {
  render() {
    return (
      <div>
        <Register />
        <br /><br />
        <Login />
      </div>
    );
  }
}

export default App;
