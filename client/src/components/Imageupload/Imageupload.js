import Submitbutton from '../Button';
import React from 'react';
import TextField from 'material-ui/TextField';


const Imageupload = (props) => {
    return (
        <div>
            <TextField
                hintText="Image"
                name={"image"}
                id={"image"}
                floatingLabelText="Image"
                errorText="Please upload an image."
                fullWidth={props.fullWidth}
            />
            <Submitbutton handlesubmit={props.handlesubmit} name="Upload Image"/>
        </div>
    )
};

export default Imageupload;







