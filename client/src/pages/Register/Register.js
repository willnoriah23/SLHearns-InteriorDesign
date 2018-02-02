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
  };

  sendData = (event) => {
    // Keep the page from refreshing
    event.preventDefault();

    axios.post('/register', this.state)
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
        <h1>Registration Page</h1>
        <form>
          <input
          type="text"
          name="fullname"
          onChange={this.getValue} />
          <br />

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

          <Link to="/register"><button onClick={this.sendData}>Login</button></Link>
        </form>
      </div>
    )
  }
}


export default Login;
