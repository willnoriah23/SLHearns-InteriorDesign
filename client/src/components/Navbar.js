import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
      console.log(this.state.open);
    return (
      <div>
        <RaisedButton
          label="SL Hearns"
          onClick={this.handleToggle}
        />
        <Drawer open={this.state.open}>

           <MenuItem><NavLink to = "/contact" onClick={this.handleToggle}> Contact</NavLink></MenuItem>

          <MenuItem><NavLink to = "/portfolio" onClick={this.handleToggle}> Portfolio</NavLink></MenuItem>


        </Drawer>
        <Route path="/contact" exact component={Contact} />
        <Route path="/portfolio" exact component={Portfolio} />
      </div>
    );
  }
}

