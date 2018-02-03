import React from 'react';
import logo from "../../img/logo/logo_formatted.png";
import "./Logo.css";


const Logo = () => (
    <div className="logo" >
        <a href="/"><img src={logo} alt="logo"/></a>
    </div>
);

export default Logo;