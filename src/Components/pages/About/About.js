import HandHHoldTerminalBlack from 'assets/images/handHoldTerminalBlack.png';
import { Component } from 'react';
import './About.scss';

class About extends Component {
	handleScroll() {
		const handHold = document.querySelector('.hand-hold');
		const handHoldContainer = document.querySelector(
			'.hand-hold-container'
		);
		const handHoldContainerRect = handHoldContainer.getBoundingClientRect();
		const handHoldRect = handHold.getBoundingClientRect();

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
		return (
			<div className='about'>
				<span className='title'>Who am I?</span>
				<div className='subtitles'>
					<span className='subtitle'>
						I'm a Bay Area based software engineer with a passion
						for programming, math, physics, and design.
					</span>
					<span>
						I can learn a new framework in a day and use it for the
						rest of my life.
					</span>
				</div>
				<div className='hand-hold-container'>
					<div className='hand-hold-background' />
					<img
						className='hand-hold'
						src={HandHHoldTerminalBlack}
						alt='Hand Hold'
					/>
				</div>
			</div>
		);
	}
}

export default About;
