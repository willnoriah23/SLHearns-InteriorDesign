import React from 'react';
import ImgDiv from "../../components/ImgDiv";
import ServImg from '../../img/serviceimg';
import Nav from '../../components/Nav';
import Logo from "../../components/Logo";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./Service.css";

class Services extends React.Component {

    render () {
        return (
            <MuiThemeProvider>
            <Nav/>
            <Logo/>
                
                <ImgDiv images={ServImg.Traditional.kitchen} 
                blurb={"Classic European decor with deep, warm, rich tones.  Features of architectural details featuring symmetrical lines.  May have curves, but not ornate or ostentatious."}
                />
                <ImgDiv images={ServImg.Traditional.bath} />
                <ImgDiv images={ServImg.Transitiional.kitchen} />
                <ImgDiv images={ServImg.Transitiional.bath} />
                <ImgDiv images={ServImg.Contemporary.kitchen} />
                <ImgDiv images={ServImg.Contemporary.bath} />
            </MuiThemeProvider>
        )
    }
}

export default Services;