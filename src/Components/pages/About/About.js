import HandHHoldTerminalBlack from 'assets/images/handHoldTerminalBlack.png';
import { Component, createRef } from 'react';
import './About.scss';

class About extends Component {
	constructor() {
		super();

		this.handHoldRef = createRef();
		this.handHoldContainerRef = createRef();
	}

	handleScroll() {
		if (!this.handHoldRef.current || !this.handHoldContainerRef.current)
			return;

		const handHold = this.handHoldRef.current;
		const handHoldContainer = this.handHoldContainerRef.current;
		const handHoldContainerRect = handHoldContainer.getBoundingClientRect();
		const handHoldRect = handHold.getBoundingClientRect();

		if (window.innerWidth <= 500) {
			if (
				handHoldContainerRect.top <= window.innerHeight &&
				handHoldContainerRect.bottom > window.innerHeight
			) {
				handHold.style.transform = `translateY(${
					handHoldContainerRect.top - handHold.height
				}px)`;
			} else if (handHoldContainerRect.bottom <= window.innerHeight) {
				handHold.style.transform = `translate(${-(
					window.innerHeight - handHoldContainerRect.bottom
				)}px, ${window.innerHeight - handHoldContainerRect.bottom}px)`;
			}

			return;
		}

		if (handHoldContainerRect.bottom >= handHoldRect.height) {
			handHold.style.transform = `translateY(${handHoldContainerRect.top}px)`;
		} else if (handHoldContainerRect.bottom < handHoldRect.height) {
			// handHold.style.transform = `translateX(${handHoldContainerRect.top}px)`;
			handHold.style.transform = `translate(${
				handHoldContainerRect.top
			}px, ${-handHoldContainerRect.top}px)`;
		}

		if (handHoldContainerRect.top >= window.innerHeight) {
			handHold.style.transform = `translateY(0px)`;
		}
	}

	componentDidMount() {
		document.addEventListener('scroll', this.handleScroll.bind(this));
	}

	render() {
		return window.innerWidth <= 500 ? (
			<div className='about-mobile'>
				<span className='title2-mobile'>Who am I?</span>
				<div className='subtitles'>
					<span className='subtitle'>
						I'm a Bay Area based software engineer with a passion
						for programming, math, physics, and design. <br />
						<br />I can learn a new framework in a day and use it
						for the rest of my life.
					</span>
				</div>
				<div
					className='hand-hold-container-mobile'
					ref={this.handHoldContainerRef}>
					<img
						className='hand-hold'
						src={HandHHoldTerminalBlack}
						alt='Hand Hold'
						ref={this.handHoldRef}
					/>
				</div>
			</div>
		) : (
			<div className='about'>
				<span className='title'>Who am I?</span>
				<div className='subtitles'>
					<span className='subtitle'>
						I'm a Bay Area based software engineer with a passion
						for programming, math, physics, and design. <br />
						<br />I can learn a new framework in a day and use it
						for the rest of my life.
					</span>
				</div>
				<div
					className='hand-hold-container'
					ref={this.handHoldContainerRef}>
					<img
						className='hand-hold'
						src={HandHHoldTerminalBlack}
						alt='Hand Hold'
						ref={this.handHoldRef}
					/>
				</div>
			</div>
		);
	}
}

export default About;
