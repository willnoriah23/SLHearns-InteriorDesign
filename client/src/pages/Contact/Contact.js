import React from 'react';
import GoogleMap from '../../components/Map';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Nav from "../../components/Nav";
import Logo from "../../components/Logo";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./Contact.css";


// const style = {
//     marginLeft: 20,
// };

const Contact = () => (
    <MuiThemeProvider>
    <Nav />
    <Logo />
    <Paper zDepth={2} className="pap">

        <div className="contactMe">
            <br/>
            <h2>About SL Hearns Interior Design</h2>

            <Divider />

            <p>Sheryl Hearns made the move to interior design from a career in
                technical writing and equipment design with Lucent Technologies in
                Atlanta - a gig that landed her on the telecommunications team for the ’96 Olympic Games.
                With a stint as a stay-at-home mother under her belt, Sheryl went back to school
                for a Bachelor’s in Interior Design, turning a passion into a profession.

                Turns out all that technical background still comes in handy.

                She loves the opportunity to meet wonderful people, and help them bring their home
                and lifestyle visions to fruition. Be forewarned: three years in Toastmasters,
                and she’ll talk you into some beautiful ideas. You won’t know what hit you.</p>

            <br />


            <h2>Get in Touch</h2>
            <Divider />
            <p>slhearns@gmail.com</p>

            <br />
            <p>Servicing Ann Arbor, MI</p>
            <Divider />
            <div style={{width: '100%', height: '300px'}}>
                <GoogleMap/>


            </div>

        </div>

    </Paper>
    <br/>
    </MuiThemeProvider>
);

export default Contact;
