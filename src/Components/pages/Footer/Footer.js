import { Component, createRef } from 'react';
import './Footer.scss';

class Footer extends Component {
	constructor() {
		super();

		this.footerRef = createRef();
	}

	handleScroll() {
		if (!this.footerRef.current) return;

		const footer = this.footerRef.current;
		const footerRect = footer.getBoundingClientRect();

		if (footerRect.top <= window.innerHeight) {
			// footer.style.transform = `translateY(${footerRect.top}px)`;
		}
	}

	componentDidMount() {
		document.addEventListener('scroll', this.handleScroll.bind(this));
	}

	render() {
		return window.innerWidth < 500 ? (
			<>
				<div className='footer-mobile'>
					<span>
						Website built with: Just kidding, I built it myself :
						{')'}
					</span>
					<span>© 2023 Caden Marinozzi</span>
				</div>
				<div className='definition-container-mobile'>
					<div className='definition'>
						<div className='definition-header'>
							<span className='definition-title'>
								es·o·ter·ic
							</span>{' '}
							/ˌesəˈterik/{' '}
						</div>{' '}
						<span className='definition-type'>adjective</span>{' '}
						<span className='definition-definition'>
							intended for or likely to be understood by only a
							small number of people with a specialized knowledge
							or interest.{' '}
						</span>
						<span className='definition-example'>
							"esoteric philosophical debates"
						</span>
					</div>
				</div>
			</>
		) : (
			<>
				<div className='footer' ref={this.footerRef}>
					<span>
						Website built with: Just kidding, I built it myself :
						{')'}
					</span>
					<span>© 2023 Caden Marinozzi</span>
				</div>
				<div className='definition-container'>
					<div className='definition'>
						<div className='definition-header'>
							<span className='definition-title'>
								es·o·ter·ic
							</span>{' '}
							/ˌesəˈterik/{' '}
						</div>{' '}
						<span className='definition-type'>adjective</span>{' '}
						<span className='definition-definition'>
							intended for or likely to be understood by only a
							small number of people with a specialized knowledge
							or interest.{' '}
						</span>
						<span className='definition-example'>
							"esoteric philosophical debates"
						</span>
					</div>
				</div>
			</>
		);
	}
}

export default Footer;
