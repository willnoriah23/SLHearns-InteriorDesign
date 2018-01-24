import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const BathroomQ = (props) => (
    <SelectField
        floatingLabelText="Bedroom Type"
        value={props.value}
        fullWidth={props.fullWidth}
        onChange={props.handlechange}
    >
        <br />
        <MenuItem value={1} primaryText="Master" />
        <MenuItem value={2} primaryText="Bedroom" />
    </SelectField>

);

export default BathroomQ;