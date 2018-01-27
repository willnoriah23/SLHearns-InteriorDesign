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
import API from "../../utils/API.js";


class Questionaire extends Component {

    state =
        {
            field1: "",
            field2: "",
            field3: "",
            logged_in: true,
            image: ""
        };

    componentDidMount() {
      // if (coookie is logged in) {
      //     this.setState({obj:{logged_in: true}})
      //   }
      //   this.setState({logged_in: true});
        console.log("this is the logged in value", this.state.logged_in);
    };

    handlechange = (event, index, value) => this.setState({image: event.target.value});

    handleChange1 = (event, index, value) => this.setState({field1: value});

    handleChange2 = (event, index, value) => this.setState({field2: value});

    handleChange3 = (event, index, value) => this.setState({field3: value});

    handlesubmit = (files) => {
        const image = files[0];
        console.log("this is dique the image", image);
        // write code for submitting code
        // API.uploadimage(image).then(res => console.log(res))
        //     .catch(err => console.log(err));
        API.uploadimage(image).end((err, resp) => {
            if(err){
                alert(err)
                return
            }

            console.log("This is the response", resp);
        })
    };


    render() {
        return (

            <MuiThemeProvider>
                <Paper zDepth={3} className="pap">
                <Nav />
                <Logo />

                <section className='app'>
                <TextField
                    hintText="Name"
                    name={"name"}
                    id={"name"}
                    floatingLabelText="Name"
                    errorText="Please enter your name."
                    fullWidth={true}
                /><br/>
                <TextField
                    hintText="Email"
                    name="email"
                    id="email"
                    floatingLabelText="Email"
                    errorText="Please enter your email address."
                    fullWidth={true}
                /><br/>
                <TextField
                    hintText="Phone Number"
                    name="phonenum"
                    id="phonenum"
                    errorText="Please enter your phone number."
                    fullWidth={true}
                /><br/>
                <SelectField
                    floatingLabelText="Budget"
                    value={this.state.field1}
                    onChange={this.handleChange1}
                    fullWidth={true}
                >
                    <MenuItem value={1} primaryText="$5,000 - $10,000" />
                    <MenuItem value={2} primaryText="$10,001 - $15,000" />
                    <MenuItem value={3} primaryText="$15,001 - $20,000" />
                    <MenuItem value={4} primaryText="$20,000+" />
                </SelectField>
                <br />

                <SelectField
                    floatingLabelText="Room:"
                    value={this.state.field2}
                    onChange={this.handleChange2}
                    id="roomtype"
                    fullWidth={true}
                >
                    <MenuItem value={1} primaryText="Bath" />
                    <MenuItem value={2} primaryText="Kitchen" />
                </SelectField>
                {/*<KitchenQ/>*/}
                {this.state.field2 === 1 && <BathroomQ fullWidth={true} value={this.state.field3} handlechange={this.handleChange3}/>}
                {this.state.field2 === 2 && <KitchenQ fullWidth={true}/>}

                {/*add if statemetn to render different questions*/}

                <br />

                <TextField
                    hintText="Family Size"
                    name="famsize"
                    id="famsize"
                    floatingLabelText="Family Size"
                    errorText="Please provide the size of your family."
                    fullWidth={true}
                /><br/>

                <TextField
                    hintText="Please provide three(3) things you love about the current design."
                    name="love3"
                    id="love3"
                    floatingLabelText="Three things you love."
                    errorText="Please provide at least one thing you currently love."
                    multiLine={true}
                    rows={1}
                    rowsMax={4}
                    fullWidth={true}

                /><br/>
                <TextField
                    hintText="Please provide three(3) things you do not love about the current design."
                    name="dontlove3"
                    id="dontlove3"
                    floatingLabelText="Three things you do not love."
                    errorText="Please provide at least one thing you currently do not love."
                    multiLine={true}
                    rows={1}
                    rowsMax={4}
                    fullWidth={true}
                /><br/>
                    {this.state.logged_in === true ? <Imageupload handleupload={this.handlesubmit}/> : ""}
                {/*{this.state.logged_in === false && <Imageupload fullWidth={true} handlesubmit={this.handlesubmit}/>}*/}

                <SubmitButton handlesubmit={this.handlesubmit} name={"Submit"}>
                </SubmitButton>

            </section>
            </Paper>
            </MuiThemeProvider>

        )
    }
}

export default Questionaire;

