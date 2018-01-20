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

	axios.post('/sendForm', this.state)
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
					name="name" 
					placeholder="name"
					onChange={this.getValue} />
					<br />

					<input type="text" 
					name="address" 
					placeholder="address"
					onChange={this.getValue} />
					<br />

					<input type="email" 
					name="email" 
					placeholder="email"
					onChange={this.getValue} />
					<br />

					<input type="text" 
					name="phone" 
					placeholder="phone"
					onChange={this.getValue} />
					<br />

					<select name="budget" onChange={this.getValue}>
					  <option value="5000">$5,000</option>
					  <option value="10000">$10,000</option>
					  <option value="15000">$15,000</option>
					  <option value="20000">$20,000</option>
					</select>

					<label>Room</label>
					<input type="radio" name="room" value="bath" onChange={this.getValue} />
					<select name="bath-opt" onChange={this.getValue}>
						<option value="15000">Master bath</option>
					  	<option value="20000">2nd bath</option>
					</select>
					<input type="radio" name="room" value="kitchen" onChange={this.getValue} />
					<input type="text" 
					name="cook" 
					placeholder="primary cook?"
					onChange={this.getValue} />
					<br />

					<label>3 things that you love about your kitchen/bath?</label>
					<textarea></textarea>
					<br />

					<label>3 things that you hate about your kitchen/bath?</label>
					<textarea></textarea>


					<Link to="/sendForm"><button onClick={this.sendData}>Sign Up</button></Link>
				</form>
			</div>
		)
	}
}

export default Emailer;