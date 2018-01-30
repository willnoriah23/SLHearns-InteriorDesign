import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const KitchenQues = (props) => {
    return (
        <SelectField
            floatingLabelText="Are you the main cook? "
            value={props.value}
            fullWidth={props.fullWidth}
            onChange={props.handlechange}
        >
            <br />
            <MenuItem value={1} primaryText="True" />
            <MenuItem value={2} primaryText="False" />
        </SelectField>
    )
};

export default KitchenQues;