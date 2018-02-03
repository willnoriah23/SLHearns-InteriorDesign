import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {grey500} from 'material-ui/styles/colors';
import "./Submitbutton.css";

const style = {
    backgroundColor: grey500,
    labelColor: grey500

};

const Submitbutton = (props) => (
    <div className="btn">
      
        <RaisedButton label={props.name} onClick={props.handlesubmit}  style={style}  />
       
    </div>
);

export default Submitbutton;