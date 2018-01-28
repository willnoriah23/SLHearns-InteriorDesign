import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class DrawerUndockedExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    style = {
      textDecoration: 'none',
      color: 'black',
      fontSize: 20,
    }


    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div id="navmenu">
              <RaisedButton
                  label="SL Hearns"
                  onClick={this.handleToggle}
              />
              <Drawer id="navmenu"
                  docked={false}
                  width={200}
                  open={this.state.open}
                  onRequestChange={(open) => this.setState({open})}
              >
                <MenuItem onClick={this.handleClose}><a style={this.style} href="/">Home</a></MenuItem>
                <MenuItem onClick={this.handleClose}><a style={this.style} href="/portfolio">Portfolio</a></MenuItem>
                <MenuItem onClick={this.handleClose}><a style={this.style} href="/questions">Questionnaire</a></MenuItem>
                <MenuItem onClick={this.handleClose}><a style={this.style} href="/services">Services</a></MenuItem>
                <MenuItem onClick={this.handleClose}><a style={this.style} href="/contact">Contact</a></MenuItem>
              </Drawer>
            </div>
        );
    }
}

export default DrawerUndockedExample;