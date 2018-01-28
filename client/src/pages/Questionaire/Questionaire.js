import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import KitchenQ from '../../components/Questions/KitchenQues';
import BathroomQ from '../../components/Questions/BathroomQ';
import SubmitButton from "../../components/Button/Submitbutton";
import Nav from "../../components/Nav/Navbar";
import "./Questionaire.css";
import Logo from "../../components/Logo";
import Imageupload from "../../components/Imageupload";
import Paper from 'material-ui/Paper';
import axios from "axios";


class Questionaire extends Component {

    state =
        {
            field1: "",
            field2: "",
            field3: "",
            logged_in: false
        };

    componentDidMount() {
      // if (coookie is logged in) {
      //     this.setState({obj:{logged_in: true}})
      //   }
      //   this.setState({logged_in: true});
        console.log("this is the logged in value", this.state.logged_in);
    };

    handleChange1 = (event, index, value) => this.setState({field1: value});

    handleChange2 = (event, index, value) => this.setState({field2: value});

    handleChange3 = (event, index, value) => this.setState({field3: value});
    handlesubmit = (event, index, value) => {
        // write code for submitting code
    };

    render() {
        return (

            <MuiThemeProvider>
                <Paper zDepth={3} className="pap">
                <Nav />
                <Logo />

                <section className='app'>
                <TextField
                    onChange={this.getValue} 
                    hintText="Name"
                    name="fullname"
                    id="name"
                    floatingLabelText="Name"
                    errorText="Please enter your name."
                    fullWidth={true}
                /><br/>
                <TextField
                    onChange={this.getValue} 
                    hintText="Email"
                    name="email"
                    id="email"
                    floatingLabelText="Email"
                    errorText="Please enter your email address."
                    fullWidth={true}
                /><br/>
                <TextField
                    onChange={this.getValue} 
                    hintText="Password"
                    name="password"
                    id="password"
                    floatingLabelText="Password"
                    errorText="Please enter a password."
                    fullWidth={true}
                /><br/>
                <TextField
                    onChange={this.getValue} 
                    hintText="Phone Number"
                    name="phone_number"
                    id="phonenum"
                    errorText="Please enter your phone number."
                    fullWidth={true}
                /><br/>
                <TextField
                    onChange={this.getValue} 
                    hintText="Address"
                    name="address"
                    id="addess"
                    errorText="Please enter your address"
                    fullWidth={true}
                /><br/>
                <SelectField
                    onChange={this.getValue} 
                    floatingLabelText="Budget"
                    name="budget"
                    fullWidth={true}
                >
                    <MenuItem value={1} primaryText="$5,000 - $10,000" />
                    <MenuItem value={2} primaryText="$10,001 - $15,000" />
                    <MenuItem value={3} primaryText="$15,001 - $20,000" />
                    <MenuItem value={4} primaryText="$20,000+" />
                </SelectField>
                <br />

                <TextField
                    onChange={this.getValue} 
                    hintText="Family Size"
                    name="family_size"
                    id="famsize"
                    floatingLabelText="Family Size"
                    errorText="Please provide the size of your family."
                    fullWidth={true}
                /><br/>

                <TextField
                    onChange={this.getValue} 
                    hintText="Please provide three(3) things you love about the current design."
                    name="love"
                    id="love3"
                    floatingLabelText="Three things you love."
                    errorText="Please provide at least one thing you currently love."
                    multiLine={true}
                    rows={1}
                    rowsMax={4}
                    fullWidth={true}

                /><br/>
                <TextField
                    onChange={this.getValue} 
                    hintText="Please provide three(3) things you do not love about the current design."
                    name="hate"
                    id="dontlove3"
                    floatingLabelText="Three things you do not love."
                    errorText="Please provide at least one thing you currently do not love."
                    multiLine={true}
                    rows={1}
                    rowsMax={4}
                    fullWidth={true}
                /><br/>
                    {this.state.logged_in === true ? <Imageupload fullWidth={true} handlesubmit={this.handlesubmit}/> : ""}
                {/*{this.state.logged_in === false && <Imageupload fullWidth={true} handlesubmit={this.handlesubmit}/>}*/}

                <SubmitButton handlesubmit={this.sendData} name={"Submit"}>
                </SubmitButton>

            </section>
            </Paper>
            </MuiThemeProvider>

        )
    }
}

export default Questionaire;


                // <SelectField
                //     onChange={this.getValue} 
                //     floatingLabelText="Room:"
                //     id="roomtype"
                //     fullWidth={true}
                // >
                //     <MenuItem value={1} primaryText="Bath" />
                //     <MenuItem value={2} primaryText="Kitchen" />
                // </SelectField>
                // {/*<KitchenQ/>*/}
                // {this.state.field2 === 1 && <BathroomQ 
                //     fullWidth={true} 
                //     value={this.state.field3} 
                //     handlechange={this.handleChange3} 
                //     onChange={this.getValue} />}
                // {this.state.field2 === 2 && <KitchenQ 
                //     fullWidth={true} 
                //     onChange={this.getValue} />}

                // {/*add if statemetn to render different questions*/}
                // <br />
