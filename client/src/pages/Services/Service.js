import React from 'react';
import ImgDiv from "../../components/ImgDiv";
import ServImg from '../../img/serviceimg';
import Nav from '../../components/Nav';
import Logo from "../../components/Logo";
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Blurb from "../../Blurb/Blurb.js"
import Paper from "material-ui/Paper";
import "./Services.css";


const style = {
    backgroundColor: "#E0E0E0"
}

class Services extends React.Component {


    render () {
        const newArray = ServImg.map((area) => {return(<div><ImgDiv images={area.kitchen} blurb={Blurb[ServImg.indexOf(area)]}/><br/><ImgDiv images={area.bath} /></div>)});

            // Object.keys(ServImg).forEach((key) => {
            // console.log(ServImg[key]);
            // const array1 = ServImg[key];
            // Object.keys(array1).forEach((key1) => {array1[key1].map((element) =>{  return(<ImgDiv images={element}/>)});
        // });
        console.log(newArray);

        return (
            <MuiThemeProvider>
            <Nav/>
            <Logo/>
                <br/>
                <div className="ptagsha">SL Hearns Interior Designs’ expertise includes creating luxurious kitchens and baths. Our designs merge aesthetics and functionality, incorporating innovative design principles that reflect the character and personality of your family while respecting the architectural integrity of your home.
                    Design styles are as varied as personalities, but most usually are branches from one of the following three: </div>

                <Divider />
                <Paper style={style} zDepth={3}>
                {newArray}
                </Paper>

                {/*ServImg.map((pictures) => return(<ImgDiv images={pictures.kitchen}/>; <ImgDiv images={pictures.bath}/>));*/}
                {/*<ImgDiv images={ServImg.Traditional.kitchen} />*/}
                {/*<ImgDiv images={ServImg.Traditional.bath} />*/}
                {/*<ImgDiv images={ServImg.Transitiional.kitchen} />*/}
                {/*<ImgDiv images={ServImg.Transitiional.bath} />*/}
                {/*<ImgDiv images={ServImg.Contemporary.kitchen} />*/}
                {/*<ImgDiv images={ServImg.Contemporary.bath} />*/}
            </MuiThemeProvider>
        )
    }
}

export default Services;