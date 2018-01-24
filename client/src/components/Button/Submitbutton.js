import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

const Submitbutton = (props) => (
    <div>
        {/*<RaisedButton label="Default" style={style} />*/}
        <RaisedButton label={props.name} onClick={props.handlesubmit} primary={true} style={style}  />
        {/*<RaisedButton label="Secondary" secondary={true} style={style} />*/}
        {/*<RaisedButton label="Disabled" disabled={true} style={style} />*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*<RaisedButton label="Full width" fullWidth={true} />*/}
    </div>
);

export default Submitbutton;