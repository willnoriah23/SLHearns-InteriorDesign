import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Questionnaire from './Questionnaire';
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
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem><NavLink to = "/questionnaire" onClick={this.handleToggle}> Questionnaire</NavLink> </MenuItem>

          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <Route path="/questionnaire" exact component={Questionnaire} />
      </div>
    );
  }
}