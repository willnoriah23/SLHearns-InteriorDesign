import React from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom';
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
    console.log("state", this.state);

    axios.post('/api/login', this.state)
      .then((data) => {
        this.props.history.push("/users")
      })
      .catch((err) => {
        console.log("Error", err.response);
      })
  };

  render() {
    return (
      <MuiThemeProvider>
        <h1>Login Page</h1>
        <form>
          <input
          type="email"
          name="email"
          onChange={this.getValue} />
          <br />

          <input
          type="password"
          name="password"
          onChange={this.getValue} />
          <br />

          <Link to="/login"><button onClick={this.sendData}>Login</button></Link>
          <RegisterButton name={"Register"} handlesubmit={this.handleRegister} />
        </form>
      </MuiThemeProvider>
    )
  }
}


export default Login;
