import React from 'react';
import TextField from 'material-ui/TextField';


const KitchenQues = (props) => {
    return (
    <TextField
        hintText="Who is the main cook in your household?"
        name="cook"
        id="name"
        floatingLabelText="Head Chef"
        errorText="Please enter your name."
        fullWidth={props.fullWidth}
    >
    </TextField>
    );
};

export default KitchenQues;