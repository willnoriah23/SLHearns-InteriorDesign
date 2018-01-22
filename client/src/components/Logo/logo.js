import React from 'react';
import logo from "../../img/logo/logo_formatted.png";
import "./Logo.css";


const Logo = () => (
    <div>
        <img src={logo} className="logo" alt="logo"/>
    </div>
);

export default Logo;