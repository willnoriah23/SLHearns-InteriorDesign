import Submitbutton from '../Button';
import React from 'react';
import TextField from 'material-ui/TextField';
import Dropzone from 'react-dropzone';
import './Imageupload.css'
import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';

const Imageupload = (props) => {
    return (
        <div>
            {/*<TextField*/}
                {/*hintText="Image"*/}
                {/*name={"image"}*/}
                {/*id={"image"}*/}
                {/*floatingLabelText="Image"*/}
                {/*errorText="Please upload an image."*/}
                {/*fullWidth={props.fullWidth}*/}
            {/*/>*/}
            <Badge badgeContent={<IconButton tooltip={"Upload"}><UploadIcon/></IconButton>}>
                <Dropzone className={"upload"} onDrop={props.handleupload}/>
            </Badge>

            {/*<Submitbutton handlesubmit={props.handlesubmit} name="Upload Image"/>*/}
        </div>
    )
};

export default Imageupload;







