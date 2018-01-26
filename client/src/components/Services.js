import React from 'react';
import ImgDiv from './ImgDiv/ImgDiv.js';
import ServImg from './ServImg.js';


class Services extends React.Component {

	render () {
		return (
			<div>
			<ImgDiv images={ServImg.Traditional.kitchen} />
			<ImgDiv images={ServImg.Traditional.bath} />
			<ImgDiv images={ServImg.Transitiional.kitchen} />
			<ImgDiv images={ServImg.Transitiional.bath} />
			<ImgDiv images={ServImg.Contemporary.kitchen} />
			<ImgDiv images={ServImg.Contemporary.bath} />
			</div>	
		)
	}
};

export default Services;