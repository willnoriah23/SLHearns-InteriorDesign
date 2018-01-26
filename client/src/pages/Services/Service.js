import React from 'react';
import ImgDiv from "../../components/ImgDiv";
import ServImg from '../../img/serviceimg';
import Nav from '../../components/Nav';
import Logo from "../../components/Logo";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Services extends React.Component {

    render () {
        return (
            <MuiThemeProvider>
            <Nav/>
            <Logo/>
                <ImgDiv images={ServImg.Traditional.kitchen} />
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