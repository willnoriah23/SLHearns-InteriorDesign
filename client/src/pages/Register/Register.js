import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Logo from "../../components/Logo";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RegisterButton from "../../components/Button";
import "./Register.css"; 

class Login extends React.Component {
  constructor () {
    super();
    this.state = {}
  }

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

    axios.post('/api/register', this.state)
      .then((data) => {
        console.log(data);
        this.props.history.push("/login")
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

        <h1>Registration</h1>
        <form className="regisForm">
          <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          onChange={this.getValue} />
          <br />
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
          <RegisterButton name={"Register"} handlesubmit={this.sendData} />
        </form>

      </MuiThemeProvider>  
      </div>
    )
  }
}


export default Login;
