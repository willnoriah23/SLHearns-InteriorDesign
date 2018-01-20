import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Member from './components/Member.js';
import Emailer from './components/Emailer.js';
import Form from './components/Form.js';


class App extends Component {
  render() {
    return (
      <div>
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/member" component={Member} />
        <Route path="/emailer" exact component={Emailer} />
        <Route path="/form" exact component={Form} />
      </div>
    );
  }
}

export default App;
