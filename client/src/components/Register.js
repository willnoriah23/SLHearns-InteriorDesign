import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Register extends React.Component {
  constructor () {
    super();
    this.state = {}
  }

  //Obtain user input
  getValue = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value.trim()
      }
    );
  }


  // Send data to backend to create user/check if user is already in db.
  sendData = (event) => {
    event.preventDefault();

    //TODO front-end form validation
    axios.post('/register', this.state)
      .then((res) => {

        if (res === 200) {
          // TODO redirect to login page.
          this.setState({status: res.data.status})
          this.props.history.push('/login');
        } else {
          this.setState({status: res.data.status})
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h1>Sign Up Page</h1>
        <p>{this.state.status}</p>
        <form>
          <input
          type="text"
          name="username"
          onChange={this.getValue} />
          <br />

          <input
          type="password"
          name="password"
          onChange={this.getValue} />
          <br />

          <Link to="/register"><button onClick={this.sendData}>Sign Up</button></Link>
        </form>
      </div>
    )
  }
}


export default Register;
