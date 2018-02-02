import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import logo from "http://res.cloudinary.com/noriahjwill/image/upload/v1517454124/logo_formatted-1_arc0wq.png";
import "./Logo.css";


const Logo = () => (
    <div className="logo" >
        <img src={"http://res.cloudinary.com/noriahjwill/image/upload/v1517454124/logo_formatted-1_arc0wq.png"} alt="logo"/>
    </div>
);

export default Logo;