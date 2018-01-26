import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
  }

  sendData = (event) => {
    // Keep the page from refreshing
    event.preventDefault();

    axios.post('/login', this.state)
      .then((data) => {
        this.props.history.push("/users")
      })
      .catch((err) => {
        console.log("Error", err.response);
      })
  }

  render() {
    return (
      <div>
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
        </form>
      </div>
    )
  }
}


export default Login;
