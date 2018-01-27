import React, { Component } from 'react';
import './Services.css';
import images from '../../img/BeforeAfter.js';
import Nav from "../../components/Nav/Navbar";
import Logo from "../../components/Logo";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';



import {Tabs, Tab} from 'material-ui/Tabs';


const Traditional = () => (
  <Card overlay={<CardTitle title="Traditional" />}>
    <CardMedia  >
      <img src={images.Traditional[1]} />

      <CardActions>
        <RaisedButton label="Kitchen: Before" 
          
        />
        <RaisedButton label="Kitchen: After" />
        <RaisedButton label="Bathroom: Before" />
        <RaisedButton label="Bathroom: After" />
      </CardActions>
      
      <CardText>
        Classic European decor with deep, warm, rich tones. Features of architectural details featuring symmetrical lines. May have curves, but not ornate or ostentatious.
      </CardText>
    </CardMedia>
  </Card>
);




const Contemporary = () => (
  <Card>
    <CardHeader />
      <CardMedia overlay={<CardTitle title="Contemporary" />} >
      <img src={images.Contemporary[1]} />
    </CardMedia>
    <CardActions>
      <RaisedButton label="Kitchen: Before" />
      <RaisedButton label="Kitchen: After" />
      <RaisedButton label="Bathroom: Before" />
      <RaisedButton label="Bathroom: After" />
    </CardActions>
    <CardText>
      Neutral Elements with accents of color.  Featuring basics of clean lines, with shape and form.  Contemporary design relies on materials to give a space visual interest.  Simplicity, subtle sophistication, and textures where less is more.
    </CardText>
  </Card>
);

const Transitional = () => (
  <Card>
    <CardHeader />
      <CardMedia overlay={<CardTitle title="Transitional" />} >
      <img src={images.Transitional[1]} />
    </CardMedia>
    <CardActions>
      <RaisedButton label="Kitchen: Before" onClick={this.Before} />
      <RaisedButton label="Kitchen: After" />
      <RaisedButton label="Bathroom: Before" />
      <RaisedButton label="Bathroom: After" />
    </CardActions>
    <CardText>
      The marriage of traditional and contemporary resulting in a clean, classic, timeless design.
    </CardText>
  </Card>
);


class Services extends Component {

  render() {
    return (

      <MuiThemeProvider>
        <Nav />
        <Logo />
        
        <section className='app'>
          <h1 className='center'>Style Defintions for Services</h1>
          <Traditional />
          <br />
          <Contemporary />
          <br />
          <Transitional />
        </section>
        
        </MuiThemeProvider>
    );
  }
}
export default Services;