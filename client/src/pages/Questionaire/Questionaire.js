import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import KitchenQ from '../../components/Questions/KitchenQues';
import BathroomQ from '../../components/Questions/BathroomQ';
import SubmitButton from "../../components/Button/Submitbutton";
import "./Questionaire.css";
import Imageupload from "../../components/Imageupload";
import Paper from 'material-ui/Paper';
import API from "../../utils/API.js";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Logo from "../../components/Logo";



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
            kitchenType: {kitchenType: false, value: ""},
            famSize: "",
            love: "",
            dlove: "",
            logged_in: "",
            image: ""
        };


    componentDidMount() {
        // if (coookie is logged in) {
        //     this.setState({obj:{logged_in: true}})
        //   }
        //   this.setState({logged_in: true});
        if(localStorage.loggedin) {
            this.setState({logged_in: true});
            console.log("this is the logged in value", this.state.logged_in);
        }else {
            this.setState({logged_in: false});
            console.log("this is the logged in value", this.state.logged_in);
        }


    };

    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    handleNameChange = (e, index, value) => {
        this.setState({
            name: e.target.value
        });

    };

    handleEmailChange = (e, index, value) => {this.setState({email: e.target.value});};

    handlePhoneChange = (event, index, value) => {this.setState({phone: event.target.value});};

    handlechange = (event, index, value) => this.setState({image: event.target.value});

    handleBudgetChange = (event, index, value) => {
        console.log("this is the budget target", event.target.outerText);
        console.log("this is the document", document.location);
        this.setState({budget: {budget: event.target.outerText, value: value}});
    };

    handleRoomChange = (event, index, value) => this.setState({room: {room: event.target.outerText, value: value}});

    handleBathTypeChange = (event, index, value) => this.setState({bathType: {bathType: event.target.outerText, value: value}});

    handleKitchenChange = (event, index, value) => {this.setState({kitchenType: {kitchenType: event.target.outerText, value: value}});};

    handleFamSizeChange = (event, index, value) => {this.setState({famSize: event.target.value});};

    handleLove3Change = (event, index, value) => {this.setState({love: event.target.value});};

    handleDLove3Change = (event, index, value) => {this.setState({dlove: event.target.value});};

    handleAddressChange = (e, index, value) => {this.setState({address: e.target.value})};

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
                phone_number: this.state.phone,
                budget: this.state.budget.budget,
                family_size: this.state.famSize,
                room:{kitchen: {primary_cook: this.state.kitchenType.kitchenType}, bath: {master_bath: this.state.bathType.value===0 ? true : false}},
                love: this.state.love,
                hate: this.state.dlove
            },
        };
        console.log("this is the request", requestObj);
        API.submitForm(requestObj).then(res => {
            console.log(res.data);
            API.userformupd({email: localStorage.email, id: res.data._id})
                .then(res => console.log(res.data))
                .catch(err => console.log(err))}
        ).catch(err =>
            console.log(err)
        );
        // document.location.href="/";
    };

    handlelogin = () => {
        document.location.href="/login";
    };

    render() {
        return (

            <MuiThemeProvider>
                <Nav />
                <Logo />
                <br />
                <Paper>
                    <section>
                        Please complete the questionnaire below with all the necessary information about your project.\n To upload accompanying photos, please register.


                    </section>
                </Paper>
                <br />

                <Paper zDepth={2} className="pap">

                    <section className='app'>
                        <TextField
                            hintText="Name"
                            name={"name"}
                            id={"name"}
                            floatingLabelText="Name"
                            errorText="Please enter your name."
                            fullWidth={true}
                            onChange={this.handleNameChange}
                        /><br/>
                        <TextField
                            hintText="Email"
                            name="email"
                            id="email"
                            floatingLabelText="Email"
                            errorText="Please enter your email address."
                            fullWidth={true}
                            onChange={this.handleEmailChange}
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
                            onChange={this.handleAddressChange}

                        /><br/>
                        <TextField
                            hintText="Phone Number"
                            name="phonenum"
                            id="phonenum"
                            errorText="Please enter your phone number."
                            fullWidth={true}
                            onChange={this.handlePhoneChange}
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

                        <SubmitButton handlesubmit={this.handleformsubmit} name={"Submit Form"}/>
                        <SubmitButton handlesubmit={this.handlelogin}  name={"Login/Register"}/>

                    </section>
                </Paper>
                <br/>
            </MuiThemeProvider>

        )
    }
}

export default Questionaire;