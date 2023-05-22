import { Component } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	constructor() {
		super();

		this.state = {
			dateTime: this.getDateTime(),
		};
	}

	getDateTime() {
		return new Date().toLocaleString('en-US', {
			timeZone: 'America/Los_Angeles',
		});
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				dateTime: this.getDateTime(),
			});
		}, 1000);
	}

	handlePageSelect(page) {
		this.props.onPageSelect(page);
	}

	render() {
		const { selectingPage, page } = this.props;
		const { dateTime } = this.state;

		return (
			<div
				className={`navbar ${
					selectingPage && 'navbar-selecting-page'
				}`}>
				<span className='section'>cadenmarinozzi.me</span>
				{selectingPage ? (
					<span className='section'>{page.title}</span>
				) : (
					<span className='section'>{dateTime || ''}</span>
				)}
				{selectingPage ? (
					<span
						className='section'
						onClick={this.handlePageSelect.bind(this, false)}>
						<Link className='link' to='/'>
							Back
						</Link>
					</span>
				) : (
					<span className='section'>
						<Link
							className='link'
							to='/contact-me'
							onClick={this.handlePageSelect.bind(this, {
								title: 'Contact Me',
								url: '/contact-me',
							})}>
							Contact
						</Link>
					</span>
				)}
			</div>
		);
	}
}

export default Navbar;
