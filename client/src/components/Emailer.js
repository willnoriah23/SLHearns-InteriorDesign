import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Emailer extends React.Component {
	constructor () {
		super()
		this.state={}
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

	axios.post('/sendEmail', this.state)
      .then((res) => {

      })
      .catch((err) => {
        console.log(err);
      })
	}

	render() {
		return(
			<div>
				{this.state.status}
				<form>
					<input type="text" 
					name="emailbody" 
					onChange={this.getValue} />
					<br />

					<Link to="/sendEmail"><button onClick={this.sendData}>Sign Up</button></Link>
				</form>
			</div>
		)
	}
}

export default Emailer;