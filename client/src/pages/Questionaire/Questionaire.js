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
            name: "",
            email: "",
            phone: "",
            budget: {budget: "", value: ""},
            room: {room: "", value: ""},
            address: "",
            bathType: {bathType: "", value: ""},
            kitchenType: {kitchenType: "", value: ""},
            famSize: "",
            love: "",
            dlove: "",
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

    handlechange = (e, index, value) => this.setState({[e.target.name]: e.target.value});


    handleBudgetChange = (event, index, value) => {
        console.log("this is the budget target", event.target.outerText);
        this.setState({budget: {budget: event.target.outerText, value: value}});
    };


    handlesubmit = (files) => {
        const image = files[0];
        console.log("this is dique the image", image);
        // write code for submitting code
        // API.uploadimage(image).then(res => console.log(res))
        //     .catch(err => console.log(err));
        API.uploadimage(image).end((err, resp) => {
            if(err){
                alert(err);
                return
            }

            console.log("This is the response", resp);
        })
    };

    handleformsubmit = () => {
        const requestObj = {
            fullname: this.state.name,
            email: this.state.email,
            room: {
                address: this.state.address,
                room:{kitchen: {primary_cook: this.state.kitchenType.kitchenType}, bath: {master_bath: this.state.bathType.value===0 ? true : false}},
                phone_number: this.state.phone,
                family_size: this.state.famSize,
                budget: this.state.budget.budget,
                love: this.state.love,
                hate: this.state.dlove
            },
        };
        console.log("this is the request", requestObj);
        API.submitForm(requestObj).then(res =>
            console.log(res.data)
        ).catch(err =>
            console.log(err)
        );
    };


    render() {
        console.log("State: ", this.state);
        return (

            <MuiThemeProvider>

                <Nav />
                <Logo />
                <br />
                <br />
                <Paper zDepth={2} className="pap">
                    <section className='app'>
                        <TextField
                            hintText="Name"
                            name="name"
                            id={"name"}
                            floatingLabelText="Name"
                            errorText="Please enter your name."
                            fullWidth={true}
                            onChange={this.handlechange}
                        /><br/>
                        <TextField
                            hintText="Email"
                            name="email"
                            id="email"
                            floatingLabelText="Email"
                            errorText="Please enter your email address."
                            fullWidth={true}
                            onChange={this.handlechange}
                        /><br/>
                        <TextField
                            hintText="Address."
                            name="address"
                            id="address"
                            floatingLabelText="Please provide your address."
                            errorText="Please provide your address."
                            multiLine={true}
                            rows={1}
                            rowsMax={2}
                            fullWidth={true}
                            onChange={this.handlechange}

                        /><br/>
                        <TextField
                            hintText="Phone Number"
                            name="phone_number"
                            id="phonenum"
                            errorText="Please enter your phone number."
                            fullWidth={true}
                            onChange={this.handlechange}
                        /><br/>
                        <SelectField
                            floatingLabelText="Budget"
                            value={this.state.budget.value}
                            onChange={this.handleBudgetChange}
                            fullWidth={true}
                        >
                            <MenuItem value={1} primaryText="$5,000 - $10,000" />
                            <MenuItem value={2} primaryText="$10,001 - $15,000" />
                            <MenuItem value={3} primaryText="$15,001 - $20,000" />
                            <MenuItem value={4} primaryText="$20,001+" />
                        </SelectField>
                        <br />

                        <SelectField
                            floatingLabelText="Room:"
                            value={this.state.room.value}
                            onChange={this.handleRoomChange}
                            id="roomtype"
                            fullWidth={true}
                        >
                            <MenuItem value={1} primaryText="Bath" />
                            <MenuItem value={2} primaryText="Kitchen" />
                        </SelectField>
                        {/*<KitchenQ/>*/}
                        {this.state.room.value === 1 && <BathroomQ fullWidth={true} value={this.state.bathType.value} handlechange={this.handleBathTypeChange}/>}
                        {this.state.room.value === 2 && <KitchenQ fullWidth={true} value={this.state.kitchenType.value} handlechange={this.handleKitchenChange}/>}

                        {/*add if statemetn to render different questions*/}

                        <br />

                        <TextField
                            hintText="Family Size"
                            name="famsize"
                            id="famsize"
                            floatingLabelText="Family Size"
                            errorText="Please provide the size of your family."
                            fullWidth={true}
                            onChange={this.handleFamSizeChange}
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
                            onChange={this.handleLove3Change}

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
                            onChange={this.handleDLove3Change}
                        /><br/>
                        {this.state.logged_in === true ? <Imageupload handleupload={this.handlesubmit}/> : ""}
                        {/*{this.state.logged_in === false && <Imageupload fullWidth={true} handlesubmit={this.handlesubmit}/>}*/}

                        <SubmitButton handlesubmit={this.handleformsubmit} name={"Submit"}>
                        </SubmitButton>

                    </section>
                </Paper>
                <br/>
            </MuiThemeProvider>

        )
    }
}

export default Questionaire;