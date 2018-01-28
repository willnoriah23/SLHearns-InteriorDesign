import React, {Component} from 'react';
import Placeholder1 from '../../img/Before_formatted.png';
import Placeholder2 from '../../img/After_formatted.png';
import "./ImgDiv.css";

class ImgDiv extends Component {

    constructor(props) {
        super(props);
        this.state = {
            before: {
                img: [Placeholder1],
                index: 0
            },
            after: {
                img: [Placeholder2],
                index: 0
            },
            images:[]
        };
        // this.images=this.images.bind(this);
        this.changebeforeimg = this.changebeforeimg.bind(this);
        this.changeafterimg = this.changeafterimg.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this);
        console.log(props.images);
        props["images"].map((image) => this.state.images.push(image));

    }

    componentDidMount() {
        this.setState(this.state);
        this.state.before.img.push(this.state.images[0]);
        this.state.after.img.push(this.state.images[1]);
        // console.log("State images ",this.state.images[0]);
        //
        //
        // console.log("this is the before image array", this.state.before.img);
        // console.log("this is the after image array", this.state.after.img);
        //
        // var joined_1 = this.state.before.img.slice();
        // joined_1.push(this.state.images[0]);
        // this.setState({before:{img: joined_1}});
        //
        // var joined_2 = this.state.after.img.slice();
        // joined_2.push(this.state.images[1]);
        // this.setState({after: {img: joined_2}});
        // this.setState({before:{img: this.state.before.img.push(Placeholder)}});
        // this.state.before.img = this.state.before.img.push(this.state.images[0]);
        // this.setState({after:{img: this.state.after.img.push(Placeholder)}});
        // this.state.after.img = this.state.after.img.push(this.state.images[1]);
        //
        // console.log("here is the before image array", this.state.before.img[0]);
        // console.log("here is the after image array", this.state.after.img[0]);
    }

    changebeforeimg () {
        this.setState({before:{index: ((this.state.before.index + 1) % 2), img: this.state.before.img}});
        console.log("this is the before button", this.state.before.index);
        console.log("image array after the button", this.state.before.img);
    };

    changeafterimg () {
        this.setState({after:{index: (this.state.after.index + 1) % 2, img: this.state.after.img}});
    };

    render () {
        if(this.state.before.img || this.state.after.img) {
            return (
                <div>
                    <img src={this.state.before.img[this.state.before.index]} onClick={this.changebeforeimg}
                         alt="Before" className="Services"/>
                    <img src={this.state.after.img[this.state.after.index]} onClick={this.changeafterimg} alt="After"
                         className="Services"/>
                </div>
            )
        } else {
            console.log(this.state);
        }
    }
}
export default ImgDiv;