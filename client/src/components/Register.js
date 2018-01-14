import React from 'react';
import axios from 'axios';
// import User from '../../../model/users.js';

class Register extends React.Component {
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

    axios.post('/register', this.state)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="username" onChange={this.getValue} /><br />
          <input type="password" name="password" onChange={this.getValue} /><br />
          <a href="/register"><button onClick={this.sendData}>Sign Up</button></a>
        </form>
      </div>
    )
  }
}


export default Register;
/*

  // Creates a single user.
  User.create({
    username: "tom@gmail.com",
    password: "testing"
  }, function(err, user) {
    if (err) {
      console.log("Something went wrong");
    } else {
      console.log(user);
    }
  })

*/
