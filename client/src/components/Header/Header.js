import React from 'react';
import AppBar from 'material-ui/AppBar';
import Nav from "../Nav";
import Logo from "../Logo";


const AppBarExampleIcon = () => (
    <AppBar
        title={<Logo/>}
        iconElementLeft={<Nav/>}
    />
);

export default AppBarExampleIcon;
