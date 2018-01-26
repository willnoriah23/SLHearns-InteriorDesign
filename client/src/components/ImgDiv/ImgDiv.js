import React, {Component} from 'react';
import Placeholder from '../../img/download.png';

class ImgDiv extends Component {

  constructor(props) {
	super(props);
	this.state = {
		before: {
			img: [Placeholder],
			index: 0
		},
		after: {
			img: [Placeholder],
			index: 0
		},
		images:[]	   	
    }
    // this.images=this.images.bind(this);

    this.changebeforeimg = this.changebeforeimg.bind(this);
    this.changeafterimg = this.changeafterimg.bind(this);

    console.log(props.images);
    const image = props["images"].map((image) => (image));
    console.log("this is after the map ", image);
    this.setState({images: image});

  }

  	// images = props.images;	
	// const image = [];
	// image = props.images;

	// const index = 0;

	componentDidMount() {
		console.log(this.image);
		var joined_1 = this.state.before.img.slice();
		joined_1.push(this.state.images[0]);
		this.setState({before:{img: joined_1}});

		var joined_2 = this.state.after.img.slice();
			joined_2.push(this.state.images[1]);
		this.setState({after: {img: joined_2}});
		// this.setState({before:{img: this.state.before.img.push(Placeholder)}});
		// this.state.before.img = this.state.before.img.push(this.state.images[0]);
		// this.setState({after:{img: this.state.after.img.push(Placeholder)}});
		// this.state.after.img = this.state.after.img.push(this.state.images[1]);

		console.log("here is the before image array", this.state.before.img[0]);
		console.log("here is the after image array", this.state.after.img[0]);

	}

	changebeforeimg () {
		// console.log("this is the state before",this.state.before.img);
		this.setState({before:{index: (this.state.before.index + 1) % 2}});
	};

	changeafterimg () {
		this.setState({after:{index: (this.state.after.index + 1) % 2}});
	};

	render () {
	return (
		<div>
		 	<img src={this.state.before.img[this.state.before.index]} onClick={this.changebeforeimg} alt="Before" className="Services"/>
		 	<img src={this.state.after.img[this.state.after.index]} onClick={this.changeafterimg} alt="After" className="Services"/>
		 </div>
		)
	}
};


	export default ImgDiv;