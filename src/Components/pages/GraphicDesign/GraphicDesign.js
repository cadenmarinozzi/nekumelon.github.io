import { Component } from 'react';
import './GraphicDesign.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const images = require.context('assets/images/graphic-designs');
const lowresImgs = require.context('assets/images/graphic-designs/lowres');

class GraphicDesigns extends Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		const imagesMap = images.keys().map((key) => {
			if (key.includes('lowres') || key.includes('.py')) return;

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

		for (let column = 0; column < 2; column++) {
			const columnImages = [];

			for (let i = 0; i < imagesMap.length; i++) {
				if (i % 2 === column && imagesMap[i])
					if (imagesMap[i]) columnImages.push(imagesMap[i]);
			}

			imagesColumns.push(
				<div className='column' key={column}>
					{columnImages}
				</div>
			);
		}

		return (
			<div className='graphic-designs'>
				<span>
					Some of the designs I've made (Mostly on commision):
				</span>
				<div className='images'>{imagesColumns}</div>
			</div>
		);
	}
}

export default GraphicDesigns;
