import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class DrawerUndockedExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div className="navmenu">
              <RaisedButton
                  label="SL Hearns"
                  onClick={this.handleToggle}
              />
              <Drawer
                  docked={false}
                  width={200}
                  open={this.state.open}
                  onRequestChange={(open) => this.setState({open})}
              >
                <MenuItem onClick={this.handleClose}><a href="/">Home</a></MenuItem>
                <MenuItem onClick={this.handleClose}><a href="/services">Services</a></MenuItem>
                <MenuItem onClick={this.handleClose}><a href="/portfolio">Portfolio</a></MenuItem>
                <MenuItem onClick={this.handleClose}><a href="/questions">Questionnaire</a></MenuItem>
                <MenuItem onClick={this.handleClose}><a href="/">Contact</a></MenuItem>
              </Drawer>
            </div>
        );
    }
}

export default DrawerUndockedExample;