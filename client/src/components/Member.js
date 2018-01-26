import React, { Component } from 'react';
import axios from 'axios';


class Member extends Component {
  handleUploadFile = (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    data.append('name', 'some value user types');
    data.append('description', 'some value user types');

    // '/upload' is your node.js route that triggers our middleware
    axios.post('/upload', data)
      .then((response) => {
        console.log(response); // do something with the response
      })
      .catch((error) => {
        console.log(error);
      });
  }
    render() {
      return(
        <div>
          <h1>Welcome Username</h1>
          <p>User info</p>
          <form>
            <input type="file" onChange={this.handleUploadFile} />
            <button onClick={this.sendData}>Upload</button>
          </form>
      </div>
      )
    }
}


export default Member;
