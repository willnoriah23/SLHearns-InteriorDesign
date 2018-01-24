import React from 'react';
import Images from '../../img/images.js';
import Nav from "../../components/Nav";
import Logo from "../../components/Logo";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./Portfolio.css";

class Portfolio extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentPhotoSrc: null,
            OneilIndex: 0,
            maxOneil: 5,
            EriksonIndex: 0,
            maxErikson: 8,
            CookIndex: 0,
            maxCook: 6,
            CookBIndex: 0,
            maxCookB: 8,
            DavisIndex: 0,
            maxDavis: 6,
            NaegleIndex: 0,
            maxNaegle: 6,
            WeberIndex: 0,
            maxWeber: 3,
            TupaczIndex: 0,
            maxTupacz: 4

        }
    }

    changePhoto (Index, Max) {
        var obj = {};
        if (this.state[Index] + 1 < Max){
            obj[Index] = this.state[Index] + 1;
        } else {
            obj[Index] = 0;
        }
        // let nextPhotoIndex = this.state.OneilIndex + 1;
        this.setState(obj);//{this.state[Index]: this.state[Index] + 1});
    }

    render(){
        return (
            <MuiThemeProvider>
            <Nav />
            <Logo />
                <div>

                    <img src={Images.Davis[this.state.DavisIndex]} onClick={() => this.changePhoto("DavisIndex", this.state.maxDavis)} alt="Davis Gallery" className="folioPictures"/>,

                    <img src={Images.Oneil[this.state.OneilIndex]} onClick={() => this.changePhoto("OneilIndex", this.state.maxOneil)} alt="Oneil Gallery" className="folioPictures"/>,

                    <img src={Images.Erikson[this.state.EriksonIndex]} onClick={() => this.changePhoto("EriksonIndex", this.state.maxErikson)} alt="Erikson Gallery" className="folioPictures"/>,

                    <img src={Images.Cook[this.state.CookIndex]} onClick={() => this.changePhoto("CookIndex", this.state.maxCook)} alt="Cook Gallery" className="folioPictures"/>,

                    <img src={Images.CookB[this.state.CookBIndex]} onClick={() => this.changePhoto("CookBIndex", this.state.maxCookB)} alt="Cook Bathroom Gallery" className="folioPictures"/>,

                    <img src={Images.Naegle[this.state.NaegleIndex]} onClick={() => this.changePhoto("NaegleIndex", this.state.maxNaegle)} alt="Naegle Gallery" className="folioPictures"/>,

                    <img src={Images.Weber[this.state.WeberIndex]} onClick={() => this.changePhoto("WeberIndex", this.state.maxWeber)} alt="Weber Gallery" className="folioPictures"/>,

                    <img src={Images.Tupacz[this.state.TupaczIndex]} onClick={() => this.changePhoto("TupaczIndex", this.state.maxTupacz)} alt="Tupacz Gallery" className="folioPictures"/>

                </div>
            </MuiThemeProvider>

        )
    }
}

export default Portfolio;