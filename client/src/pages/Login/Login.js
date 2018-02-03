import React from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom';
import Logo from "../../components/Logo";
import "./Login.css";

import RegisterButton from "../../components/Button";


class Login extends React.Component {
  constructor () {
    super();
    this.state = {}
  }

  handleRegister = () => {
    document.location.href="/register";
};

  getValue = (event) => {
    // Updates the input state
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    );
  };

  sendData = (event) => {
    // Keep the page from refreshing
    event.preventDefault();
    axios.post('/api/login', this.state)
      .then((data) => {
        localStorage.loggedin = true;
        this.props.history.push("questionnaire")
      })
      .catch((err) => {
        console.log("Error", err.response);
      })
  };

  render() {
    return (

      <div>

      <MuiThemeProvider>
        <Logo />

     
        <h1>Login</h1>
        <form className="logForm">
          <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={this.getValue} />
          <br />
          <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.getValue} />
          <br />
          <br />
          <RegisterButton name={"login"} handlesubmit={this.sendData} />
          <br />
          <RegisterButton name={"Register"} handlesubmit={this.handleRegister} />
        </form>

      </MuiThemeProvider>

     </div>    
    )
  }
}


export default Login;