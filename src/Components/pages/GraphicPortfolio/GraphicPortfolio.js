import { Component } from 'react';
import { Link } from 'react-router-dom';
import './GraphicPortfolio.scss';

const images = require.context('assets/images/graphicDesign');

class GraphicPortfolio extends Component {
	constructor() {
		super();

		this.state = {
			dateTime: new Date().toLocaleString(),
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				dateTime: new Date().toLocaleString('en-US', {
					timeZone: 'America/Los_Angeles',
				}),
			});
		}, 1000);
	}

	onLoad(event) {
		const img = event.target;
		const width = img.naturalWidth;
		const height = img.naturalHeight;

		if (width >= height) {
			img.classList.add('img-wide');
		}
	}

	render() {
		return window.innerWidth <= 500 ? (
			<>
				<div className='graphic-portfolio-header'>
					<Link className='back-button' to='/'>
						Back
					</Link>
					<span>{this.state.dateTime}</span>
				</div>
				<div className='images-mobile'>
					{images.keys().map((key) => {
						const img = images(key);

						return (
							<img
								src={img}
								onLoad={this.onLoad.bind(this)}
								alt={key}
							/>
						);
					})}
				</div>
			</>
		) : (
			<>
				<div className='graphic-portfolio-header'>
					<Link className='back-button' to='/'>
						Back
					</Link>
					<span>{this.state.dateTime}</span>
					<span className='label'>Caden Marinozzi</span>
				</div>
				<div className='images'>
					{images.keys().map((key) => {
						const img = images(key);

						return (
							<img
								src={img}
								onLoad={this.onLoad.bind(this)}
								alt={key}
							/>
						);
					})}
				</div>
			</>
		);
	}
}

export default GraphicPortfolio;
