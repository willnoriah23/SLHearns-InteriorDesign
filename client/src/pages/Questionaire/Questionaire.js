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
import {grey500} from 'material-ui/styles/colors';

const styles = {
  floatingLabelFocusStyle: {
    color: grey500
  },
   underlineStyle: {
    borderColor: grey500
  },
};  

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
        if(document.location.pathname.substring(0,4) === "/auth") {
            this.setState({logged_in: true});
            console.log("this is the logged in value", this.state.logged_in);
        }else {
            this.setState({logged_in: false});
            console.log("this is the logged in value", this.state.logged_in);
        }


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
        API.submitForm(requestObj).then(res =>
            console.log(res.data)
        ).catch(err =>
            console.log(err)
        );
        document.location.href="/questions";
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
                <div className="quest"> Interested in a consulation? Please complete the questionnaire below with all the necessary information about your project. 
                <br />
                To upload accompanying photos, please register.</div>
        

                <Paper zDepth={2} className="pap">

                    <section className='app'>
                        <TextField
                            hintText="Name"
                            name={"name"}
                            id={"name"}
                            floatingLabelText="Name"
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            underlineStyle={styles.underlineStyle}
                            underlineFocusStyle={styles.underlineStyle}
                            // errorText="Please enter your name."
                            fullWidth={true}
                            onChange={this.handleNameChange}
                        /><br/>
                        <TextField
                            hintText="Email"
                            name="email"
                            id="email"
                            floatingLabelText="Email"
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            underlineStyle={styles.underlineStyle}
                            underlineFocusStyle={styles.underlineStyle}
                            // errorText="Please enter your email address."
                            fullWidth={true}
                            onChange={this.handleEmailChange}
                        /><br/>
                        <TextField
                            hintText="Address"
                            name="address"
                            id="address"
                            floatingLabelText="Address"
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            underlineStyle={styles.underlineStyle}
                            underlineFocusStyle={styles.underlineStyle}
                            // errorText="Please provide your address."
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
                            floatingLabelText="Phone Number"
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            underlineStyle={styles.underlineStyle}
                            underlineFocusStyle={styles.underlineStyle}
                            // errorText="Please enter your phone number."
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
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            underlineStyle={styles.underlineStyle}
                            underlineFocusStyle={styles.underlineStyle}
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
                            hintText="How many members live in your household?"
                            name="famsize"
                            id="famsize"
                            floatingLabelText="Family Size"
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            underlineStyle={styles.underlineStyle}
                            underlineFocusStyle={styles.underlineStyle}
                            // errorText="Please provide the size of your family."
                            fullWidth={true}
                            onChange={this.handleFamSizeChange}
                        /><br/>

                        <TextField
                            hintText="Please list three things you love about the current design of your space."
                            name="love3"
                            id="love3"
                            floatingLabelText="Things you love"
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            underlineStyle={styles.underlineStyle}
                            underlineFocusStyle={styles.underlineStyle}
                            // errorText="Please provide at least one thing you currently love."
                            multiLine={true}
                            rows={1}
                            rowsMax={4}
                            fullWidth={true}
                            onChange={this.handleLove3Change}

                        /><br/>
                        <TextField
                            hintText="Please list three things you do not love about the current design of your space."
                            name="dontlove3"
                            id="dontlove3"
                            floatingLabelText="Things you do not love"
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            underlineStyle={styles.underlineStyle}
                            underlineFocusStyle={styles.underlineStyle}
                            // errorText="Please provide at least one thing you currently do not love."
                            multiLine={true}
                            rows={1}
                            rowsMax={4}
                            fullWidth={true}
                            onChange={this.handleDLove3Change}
                        /><br/>
                        {this.state.logged_in === true ? <Imageupload handleupload={this.handlesubmit}/> : ""}
                        {/*{this.state.logged_in === false && <Imageupload fullWidth={true} handlesubmit={this.handlesubmit}/>}*/}
                        <br />
                        <br />  
                        <SubmitButton handlesubmit={this.handleformsubmit} name={"Submit Form"}/>
                        <SubmitButton handlesubmit={this.handlelogin}  name={"Login / Register"}/>

                    </section>
                </Paper>
                <br/>
            </MuiThemeProvider>

        )
    }
}

export default Questionaire;