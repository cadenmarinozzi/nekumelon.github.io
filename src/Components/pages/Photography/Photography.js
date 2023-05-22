import { Component } from 'react';
import './Photography.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const images = require.context('assets/images/photography');
const lowresImgs = require.context('assets/images/photography/lowres');

class Photography extends Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		const imagesMap = images.keys().map((key) => {
			if (key.includes('lowres') || key.includes('.py')) return;

			console.log(key);
			const img = images(key);
			const lowres = lowresImgs(key);

			return (
				<LazyLoadImage
					key={key}
					src={img}
					placeholderSrc={lowres}
					alt={key}
				/>
			);
		});

		const imagesColumns = [];

		for (let column = 0; column < 4; column++) {
			const columnImages = [];

			for (let i = column * 4; i < column * 4 + 4; i++) {
				columnImages.push(imagesMap[i]);
			}

			imagesColumns.push(
				<div className='column' key={column}>
					{columnImages}
				</div>
			);
		}

		return (
			<div className='photography'>
				<span>
					Some of the photos I've taken recently (I am nowhere near a
					professional photographer):
				</span>
				<div className='images'>{imagesColumns}</div>
			</div>
		);
	}
}

export default Photography;
